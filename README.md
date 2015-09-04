# meteor-zoom-demo
meteor demo app that use zoom conferencing API

You need change email and password to your own(Sure, you need to sign up at https://zoom.us and download the zoom app ) in `client/zoom/zoom.js`:
```javascript
Zoom.login({email:"your-email@gmail.com",password:"yourpassword"},function(result){
    $('#btn_login').val("login success");
});
```
