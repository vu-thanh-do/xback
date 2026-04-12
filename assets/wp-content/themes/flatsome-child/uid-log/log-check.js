// jQuery(document).ready(function ($) {
//   // Lắng nghe event khi form kiểm tra thành công
//   $(document).on('trading-check-success', function(e, logData) {
    
//     const data = {
//       action: "save_check_log",
//       username: logData.username || 'Guest',
//       email: logData.email || '',
//       telegram: logData.telegram || '',
//       platform: logData.platform,
//       uid: logData.uid,
//       vol: logData.vol,
//       commission: logData.commission,
//     };

//     // Nếu có tracking trên URL => lưu vào bảng camp
//     const tracking = new URLSearchParams(window.location.search).get("tracking");
//     if (tracking) {
//       data.action = "save_check_camp";
//       data.camp = tracking;
//     }

//     // Gửi AJAX lưu log
//     $.post(logCheckAjax.ajax_url, data, function (res) {
//       if (res.success) {
//         console.log('✅ ' + res.data.message);
//       } else {
//         console.error('❌ Lỗi lưu log:', res.data.message);
//       }
//     }).fail(function() {
//       console.error('❌ Không thể kết nối để lưu log');
//     });
//   });
// });