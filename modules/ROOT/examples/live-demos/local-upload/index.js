tinymce.init({
  selector: 'textarea#local-upload',
  plugins: 'image code',
  toolbar: 'undo redo | image code',

  /* without images_upload_url set, Upload tab won't show up*/
  images_upload_url: 'postAcceptor.php',

  /* we override default upload handler to simulate successful upload*/
  images_upload_handler: (blobInfo) => new Promise((resolve) => {
    setTimeout(() => {
      /* no matter what you upload, we will turn it into OpenTiny logo :) */
      resolve('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
    }, 2000);
  }),
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
