chrome.browserAction.onClicked.addListener(e => {
  chrome.cookies.getAll({ 'url': e.url }, cookies => {
    cookies.map(c => chrome.cookies.remove({ 'url': e.url, 'name': c.name }))
  })
});
