jQuery(document).ready(function ($) {
  let currentType = 'all';
  let currentOrder = 'desc';
  let allItems = [];
  
  function isMobile() {
    return window.innerWidth <= 768;
  }
  
  function showCopyPopup(code) {
    const $popup = $('#copy-popup');
    $('.copy-popup-code').text(code);
    $popup.addClass('show');
    setTimeout(function() {
      $popup.removeClass('show');
    }, 2000);
  }
  
  function getAllItems() {
    const items = [];
    $('#portfolio-grid .portfolio-grid .portfolio-item').each(function() {
      const $item = $(this);
      items.push({
        element: $item.clone(),
        type: $item.data('type') || 'san-crypto',
        rebate: parseInt($item.data('rebate')) || 0,
        name: $item.find('h4').text().toLowerCase()
      });
    });
    return items;
  }
  
  function filterAndDisplayItems() {
    let filtered = allItems.filter(item => {
      if (currentType === 'all') return true;
      return item.type === currentType;
    });
    
    filtered.sort((a, b) => {
      return currentOrder === 'desc' ? b.rebate - a.rebate : a.rebate - b.rebate;
    });
    
    const isMobileView = isMobile();
    const $desktopContainer = $('#portfolio-grid .portfolio-grid');
    const $mobileContainer = $('#portfolio-grid-mobile');
    
    $desktopContainer.empty();
    $mobileContainer.empty();
    
    if (filtered.length === 0) {
      const msg = '<p style="text-align:center;color:#fff;">Khong co du lieu.</p>';
      $desktopContainer.html(msg);
      $mobileContainer.html(msg);
      return;
    }
    
    filtered.forEach(item => {
      if (isMobileView) {
        $mobileContainer.append(item.element.clone());
      } else {
        $desktopContainer.append(item.element.clone());
      }
    });
  }
  
  // Init
  allItems = getAllItems();
  console.log('Loaded', allItems.length, 'portfolio items');
  filterAndDisplayItems();
  
  // Filter buttons
  $(document).on('click', '.portfolio-filter button[data-type]', function () {
    $('.portfolio-filter button').removeClass('active');
    $(this).addClass('active');
    currentType = $(this).data('type');
    filterAndDisplayItems();
  });
  
  // Dropdown toggle
  $(document).on('click', '.dropdown-toggle', function (e) {
    e.stopPropagation();
    const $dropdown = $(this).closest('.custom-dropdown');
    $('.custom-dropdown').not($dropdown).removeClass('active');
    $dropdown.toggleClass('active');
  });
  
  // Dropdown select
  $(document).on('click', '.dropdown-item', function (e) {
    e.stopPropagation();
    const $this = $(this);
    const value = $this.data('value');
    const text = $this.text();
    const $dropdown = $this.closest('.custom-dropdown');
    const $toggle = $dropdown.find('.dropdown-toggle');
    const $arrow = $toggle.find('.dropdown-arrow');
    
    $toggle.html(text + ' ').append($arrow);
    $dropdown.removeClass('active');
    
    if ($toggle.is('#sort-fee-toggle')) {
      currentOrder = value;
    } else {
      currentType = value;
      $('.portfolio-filter button[data-type]').removeClass('active');
    }
    
    filterAndDisplayItems();
  });
  
  $(document).on('click', function () {
    $('.custom-dropdown').removeClass('active');
  });
  
  // Copy
  $(document).on('click', '.copy-text', function () {
    const text = $(this).data('copy');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        showCopyPopup(text);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      showCopyPopup(text);
      document.body.removeChild(textArea);
    }
  });
  
  // Resize
  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      const wasMobile = $('#portfolio-grid .portfolio-grid').css('display') === 'none';
      const nowMobile = isMobile();
      if (wasMobile !== nowMobile) {
        filterAndDisplayItems();
      }
    }, 250);
  });
});

