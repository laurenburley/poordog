var page = require('webpage')
  .create();
page.open('index.html', function () {
  page.render('poordog.pdf', {
    format: 'pdf',
    quality: '100'
  });
  phantom.exit();
})
