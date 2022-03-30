tinymce.init({
  selector: 'textarea#tableofcontents',
  height: 600,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'tableofcontents', 'wordcount'
  ],
  toolbar: 'tableofcontents | undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});