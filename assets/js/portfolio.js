jQuery(document).ready(function ($) {
  // ==== PORTFOLIO DATA (từ HTML đã có sẵn) ====
  // Lấy tất cả portfolio items từ DOM
  function getPortfolioItems() {
    const items = [];
    $('.portfolio-item').each(function() {
      const $item = $(this);
      items.push({
        element: $item.clone()[0],
        type: $item.data('type') || 'cex',
        category: $item.data('category') || 'crypto',
        rebate: parseInt($item.data('rebate')) || 0,
        html: $item.prop('outerHTML')
      });
    });
    return items;
  }
  
  const allItems = getPortfolioItems();
  let currentType = 'all';
  let currentOrder = 'desc';
  
  // Kiểm tra mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }
  
  // ==== RENDER ITEMS ====
  function renderItems(items) {
    const targetContainer = isMobile() ? '#portfolio-grid-mobile' : '#portfolio-grid';
    const $container = $(targetContainer);
    
    if (items.length === 0) {
      $container.html('<p style="text-align:center;color:#fff;">Không có sàn nào phù hợp.</p>');
      return;
    }
    
    let html = '';
    if (isMobile()) {
      // Mobile: thêm slider wrapper
      html += '<div class="portfolio-slider flickity-enabled" data-flickity-options="{&quot;cellAlign&quot;:&quot;center&quot;,&quot;imagesLoaded&quot;:true,&quot;lazyLoad&quot;:1,&quot;freeScroll&quot;:false,&quot;wrapAround&quot;:true,&quot;autoPlay&quot;:2500,&quot;pauseAutoPlayOnHover&quot;:false,&quot;prevNextButtons&quot;:false,&quot;contain&quot;:true,&quot;adaptiveHeight&quot;:true,&quot;dragThreshold&quot;:10,&quot;percentPosition&quot;:true,&quot;pageDots&quot;:false,&quot;rightToLeft&quot;:false,&quot;draggable&quot;:true}'">';
      items.forEach(function(item) {
        html += '<div class="portfolio-item-wrapper">' + item.html + '</div>';
      });
      html += '</div>';
    } else {
      // Desktop: grid
      items.forEach(function(item) {
        html += item.html;
      });
    }
    
    $container.html(html);
  }
  
  // ==== FILTER VÀ SORT ====
  function filterAndSortItems() {
    let items = [...allItems];
    
    // Filter
    if (currentType !== 'all') {
      if (currentType === 'forex') {
        items = items.filter(function(item) {
          return item.category === 'forex';
        });
      } else if (currentType === 'cex') {
        items = items.filter(function(item) {
          return item.type === 'cex';
        });
      } else if (currentType === 'dex') {
        items = items.filter(function(item) {
          return item.type === 'dex';
        });
      } else {
        // Lọc theo data-type cụ thể
        items = items.filter(function(item) {
          return item.type === currentType || $(item.element).hasClass(currentType);
        });
      }
    }
    
    // Sort theo rebate
    items.sort(function(a, b) {
      if (currentOrder === 'desc') {
        return b.rebate - a.rebate;
      } else {
        return a.rebate - b.rebate;
      }
    });
    
    renderItems(items);
  }
  
  // ==== HIỂN THỊ POPUP COPY ====
  function showCopyPopup(code) {
    const $popup = $('#copy-popup');
    if ($popup.length === 0) {
      // Tạo popup nếu chưa có
      $('body').append('<div id="copy-popup" class="copy-popup"><span class="copy-popup-code"></span><span> đã được sao chép!</span></div>');
    }
    $('.copy-popup-code').text(code);
    $('#copy-popup').addClass('show');
    
    setTimeout(function() {
      $('#copy-popup').removeClass('show');
    }, 2000);
  }
  
  // ==== INIT ====
  // Render lần đầu
  filterAndSortItems();
  
  // ==== FILTER BUTTONS ====
  $(document).on('click', '.portfolio-filter button[data-type]', function () {
    $('.portfolio-filter button').removeClass('active');
    $(this).addClass('active');
    currentType = $(this).data('type');
    filterAndSortItems();
  });
  
  // ==== DROPDOWN TOGGLE ====
  $(document).on('click', '.dropdown-toggle', function (e) {
    e.stopPropagation();
    const $dropdown = $(this).closest('.custom-dropdown');
    $('.custom-dropdown').not($dropdown).removeClass('active');
    $dropdown.toggleClass('active');
  });
  
  // ==== DROPDOWN ITEM SELECT ====
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
    
    filterAndSortItems();
  });
  
  // ==== CLOSE DROPDOWN ON CLICK OUTSIDE ====
  $(document).on('click', function () {
    $('.custom-dropdown').removeClass('active');
  });
  
  // ==== COPY MÃ GIỚI THIỆU ====
  $(document).on('click', '.copy-text', function () {
    const text = $(this).data('copy');
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        showCopyPopup(text);
      }).catch(function() {
        fallbackCopyText(text);
      });
    } else {
      fallbackCopyText(text);
    }
  });
  
  function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showCopyPopup(text);
    } catch (err) {
      alert('Không thể sao chép. Vui lòng copy thủ công: ' + text);
    }
    document.body.removeChild(textArea);
  }
  
  // ==== RELOAD ON RESIZE ====
  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      filterAndSortItems();
    }, 250);
  });
});
