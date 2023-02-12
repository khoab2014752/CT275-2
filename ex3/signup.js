$.validator.setDefaults({
    submitHandler: function () {alert ("Submitted!");}
});
$(document).ready(function(){
    $("#signupForm").validate({
        rules:{
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo:"#password"
            },
            agree: "required"
        },
        messages: {
            firstname: "Bạn chưa nhập họ",
            lastname: "Bạn chưa nhập tên",
            username: {
                required: "Bạn chưa nhập tên đăng nhập",
                minlength: "Tên đăng nhập cần ít nhất hai ký tự"
            },
            email: {
                required: "Bạn chưa nhập email",
                email: "Email không hợp lệ"
            },
            password: {
                required: "Bạn chưa nhập mật khẩu",
                minlength: "Mật khẩu cần ít nhất 5 ký tự"
            },
            confirm_password: {
                required: "Xin xác nhận lại mật khẩu",
                minlength: "Mật khẩu cần ít nhất 5 ký tự",
                equalTo:"Mật khẩu không khớp, vui lòng nhập lại"
            },
            agree: "Bạn phải đồng ý với quy định của chúng tôi"
        },
        errorElement: "div",
        errorPlacement: function (error, element){
            error.addClass("invalid-feedback");
            if(element.prop("type") === "checkbox"){
                error.insertAfter(element.siblings("labels"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass){
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        highlight2: function(element, errorClass, validClass){
            $(element).addClass("is-valid").removeClass("is-invalid");
        }









    });
});