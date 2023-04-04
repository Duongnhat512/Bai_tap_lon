
//Kiểm tra dữ liệu nhập vào khi đăng ký tài khoản
$(document).ready(function(){
    $('#signupform').submit(function (e) { 
        function getValue(id){
            return document.getElementById(id).value.trim();
        }
        
        function KiemTra(){
             
            // 1 username
            
            let regUserName = /^[a-zA-Z0-9]+$/;
        
            var username = getValue('username');
            if (!regUserName.test(username)){
                alert('Tên tài khoản không được chứa ký tự đặc biệt.');
                return false;
            }
        
            if(username.length < 8){
                alert('Tên tài khoản phải từ 8 ký tự trở lên.');
                return false;
            }
             
            // 2. password
        
            let regPassword = /^[A-Z][a-zA-Z0-9]*$/;
        
            var password = getValue('password');
            if (!regPassword.test(password)){
                alert('Mật khẩu phải bắt đầu bằng chữ in hoa và không chứa ký tự.');
                return false;
            }
            if(password.trim().length < 5){
                alert('Mật khẩu phải từ 5 ký tự trở lên.');
                return false;
            }
        
            // 3. phone
        
            let regPhone = /^0[1-9][0-9]{8}$/;
            var phone = getValue('phone');
        
            if(!regPhone.test(phone)){
                alert('Số điện thoại không tồn tại.');
                return false;
            }


        
            return true;
        }
        if(KiemTra()){
            alert('Đăng ký thành công.');
        }
        else return false;
    });
	
    $
});




