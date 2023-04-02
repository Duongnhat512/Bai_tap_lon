function getValue(id){
    return document.getElementById(id).value.trim();
}

function KiemTra(){
     
    // 1 username
    
    let regUserName = /^[a-zA-Z0-9]+$/

    var username = getValue('username');
    if (!regUserName.test(username)){
        alert('Lỗi! Tên tài khoản không được chứa ký tự đặc biệt.');
        return false;
    }

    if(username.length < 8){
        alert('Lỗi! Tên tài khoản phải từ 8 ký tự trở lên.');
        return false;
    }
     
    // 2. password

    let regPassword = /^[A-Z][a-zA-Z0-9]*$/

    var password = getValue('password');
    if (!regPassword.test(password)){
        alert('Lỗi! Mật khẩu phải bắt đầu bằng chữ in hoa và không chứa ký tự.');
        return false;
    }
    if(password.trim().length < 5){
        alert('Lỗi! Mật khẩu phải từ 5 ký tự trở lên.');
        return false;
    }
    return true;
}

$(document).ready(function(){
	
	$('#loginform').submit(function(e) {
		KiemTra();
		e.preventDefault();
	});
	
});



