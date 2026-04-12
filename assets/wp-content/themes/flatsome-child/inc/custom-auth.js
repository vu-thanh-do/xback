jQuery(document).ready(function ($) {
	$('.toggle-password').on('click', function() {
        const wrapper = $(this).closest('.password-wrapper');
        const input = wrapper.find('input');
        const eyeIcon = $(this).find('.eye-icon');
        const eyeSlashIcon = $(this).find('.eye-slash-icon');
        
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            eyeIcon.hide();
            eyeSlashIcon.show();
        } else {
            input.attr('type', 'password');
            eyeIcon.show();
            eyeSlashIcon.hide();
        }
    });
  
  // ===== REGISTER =====
  $('#custom-register-form').on('submit', function (e) {
    e.preventDefault();
    
    const form = $(this);
    const submitBtn = form.find('button[type="submit"]');
    
    // Disable button để tránh double submit
    submitBtn.prop('disabled', true).text('Đang xử lý...');
    
    const data = {
      action: 'custom_register_user',
      username: form.find('[name="username"]').val().trim(),
      email: form.find('[name="email"]').val().trim(),
      telegram: form.find('[name="telegram"]').val().trim(),
      password: form.find('[name="password"]').val()
    };
    
    // Clear previous errors
    form.find('.error').text('');
    form.find('.form-message').text('');
    
    $.post(customAuth.ajax_url, data, function (response) {
      // Re-enable button
      submitBtn.prop('disabled', false).text('Tạo tài khoản');
      
      if (response.success) {
        // Hiển thị thông báo thành công
        form.find('.form-message')
          .css('color', '#FCD535')
          .html('✅ ' + response.data.message);
        
        // Reset form
        form[0].reset();
        
        // Chuyển hướng sau 2 giây
        setTimeout(function() {
          window.location.href = '/sign-in/';
        }, 2000);
        
      } else {
        // Hiển thị lỗi từng field
        const errors = response.data;
        
        if (errors.username) {
          form.find('.username-error').text(errors.username);
        }
        
        if (errors.email) {
          form.find('.email-error').text(errors.email);
        }
        
        if (errors.telegram) {
          form.find('.telegram-error').text(errors.telegram);
        }
        
        if (errors.password) {
          form.find('.password-error').text(errors.password);
        }
        
        if (errors.general) {
          form.find('.form-message')
            .css('color', 'red')
            .html('❌ ' + errors.general);
        }
      }
    }).fail(function() {
      submitBtn.prop('disabled', false).text('Tạo tài khoản');
      form.find('.form-message')
        .css('color', 'red')
        .text('❌ Có lỗi xảy ra. Vui lòng thử lại.');
    });
  });

  // ===== LOGIN =====
  $('#custom-login-form').on('submit', function (e) {
    e.preventDefault();
    
    const form = $(this);
    const submitBtn = form.find('button[type="submit"]');
    
    // Disable button
    submitBtn.prop('disabled', true).text('Đang đăng nhập...');
    
    const data = {
      action: 'custom_login_user',
      username: form.find('[name="username"]').val().trim(),
      password: form.find('[name="password"]').val(),
      remember: form.find('[name="remember"]').is(':checked') ? 1 : 0
    };
    
    // Clear previous errors
    form.find('.error').text('');
    form.find('.form-message').text('');
    
    $.post(customAuth.ajax_url, data, function (response) {
      if (response.success) {
        // Hiển thị thông báo thành công
        form.find('.form-message')
          .css('color', '#FCD535')
          .html('✅ Đăng nhập thành công! Đang chuyển hướng...');
        
        // Chuyển hướng
        setTimeout(function() {
          window.location.href = response.data.redirect;
        }, 1000);
        
      } else {
        // Re-enable button
        submitBtn.prop('disabled', false).text('Đăng nhập');
        
        // Hiển thị lỗi
        const errors = response.data;
        
        if (errors.username) {
          form.find('.username-error').text(errors.username);
        }
        
        if (errors.password) {
          form.find('.password-error').text(errors.password);
        }
        
        if (errors.general) {
          form.find('.form-message')
            .css('color', 'red')
            .html('❌ ' + errors.general);
        }
      }
    }).fail(function() {
      submitBtn.prop('disabled', false).text('Đăng nhập');
      form.find('.form-message')
        .css('color', 'red')
        .text('❌ Có lỗi xảy ra. Vui lòng thử lại.');
    });
  });
  
});