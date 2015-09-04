# meteor-zoom-demo
meteor demo app that use zoom conferencing API

You need change email and password to your own(Sure, you need to sign up at https://zoom.us and download the zoom app ) in `client/zoom/zoom.js`:
```javascript
Zoom.login({email:"your-email@gmail.com",password:"yourpassword"},function(result){
    $('#btn_login').val("login success");
});
```
Refer to zoom's [API doc](https://support.zoom.us/hc/en-us/articles/204199039-JavaScript-Meeting-API)

If you use zoom's official API js file in meteor app, you need to change the js code to let meteor find the `Zoom` definition:

Change the local definition ~~var Zoom~~ to global definition: `window.Zoom`
