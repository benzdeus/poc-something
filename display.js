(() => {
  const frame = document.createElement('iframe');
  frame.setAttribute('sandbox', 'allow-scripts allow-modals');
  frame.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;border:0;z-index:2147483647;background:white';
  document.body.append(frame);

  fetch('https://raw.githubusercontent.com/benzdeus/poc-something/3d592c96f3488fe6c4d007fae4f4dd81b67897f8/index.html', {
    credentials: 'omit',
    referrerPolicy: 'no-referrer'
  }).then(response => {
    if (!response.ok) throw new Error('Load error');
    return response.text();
  }).then(html => {
    frame.srcdoc = html;
  }).catch(() => {
    frame.remove();
  });
})();
