/* Shared left-hand navigation for the Nextdoor hub — one source of truth for the
 * three surfaces (Business Page, Feed Calendar, Engagement Calendar).
 *
 * Usage, right after <body>:
 *   <script src="hub-nav.js" data-page="business"></script>   (business | feed | engagement)
 *
 * Injects a fixed 208px sidebar and the matching body padding. Under 900px it
 * collapses into a horizontal bar above the content. In review mode the widget's
 * 46px banner sits on top, so the sidebar starts below it. The nav itself carries
 * data-review-skip so the comment widget never anchors comments to it. */
(function () {
  var me = document.currentScript;
  var page = (me && me.getAttribute('data-page')) || 'business';

  var ITEMS = [
    { id: 'business',   href: 'index.html',      icon: '🏠', label: 'Business Page',       sub: 'Profile, posts, checklist' },
    { id: 'feed',       href: 'calendar.html',   icon: '📅', label: 'Feed Calendar',       sub: 'Published + scheduled posts' },
    { id: 'engagement', href: 'engagement.html', icon: '💬', label: 'Engagement Calendar', sub: 'Daily candidates + queue' },
    { id: 'ads',        href: 'ads.html',        icon: '📣', label: 'Ads',                 sub: 'Campaign, creatives, metrics' }
  ];

  var CSS =
    '.ndnav{position:fixed;top:0;left:0;bottom:0;width:208px;z-index:40;background:#12141d;color:#fff;' +
      'display:flex;flex-direction:column;padding:18px 12px;gap:4px;' +
      'font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;overflow:auto}' +
    '.ndnav .brand{display:flex;align-items:center;gap:9px;padding:0 8px 14px;margin-bottom:6px;border-bottom:1px solid #2a2f37}' +
    '.ndnav .brand img{width:26px;height:26px;object-fit:contain;background:#fff;border-radius:6px;padding:2px}' +
    '.ndnav .brand span{font:700 12.5px/1.2 Georgia,"Times New Roman",serif}' +
    '.ndnav .brand small{display:block;font:400 10px/1.3 inherit;color:#8a918d;letter-spacing:.04em;text-transform:uppercase;margin-top:2px}' +
    '.ndnav a{display:block;padding:9px 10px;border-radius:9px;text-decoration:none;color:#c8cdd6;transition:background .15s,color .15s}' +
    '.ndnav a:hover{background:#1e222c;color:#fff}' +
    '.ndnav a.on{background:#0a7d3a;color:#fff}' +
    '.ndnav a .t{font:600 13px/1.25 inherit;display:flex;gap:7px;align-items:center}' +
    '.ndnav a .s{font:400 10.5px/1.35 inherit;color:#8a918d;margin-top:3px;padding-left:23px;display:block}' +
    '.ndnav a.on .s{color:#cdebd8}' +
    '.ndnav .foot{margin-top:auto;padding:12px 10px 0;border-top:1px solid #2a2f37;font:400 10.5px/1.5 inherit;color:#6f7782}' +
    '.ndnav .foot a{display:inline;padding:0;color:#8a918d;text-decoration:underline}' +
    '.ndnav .foot a:hover{background:none;color:#fff}' +
    'body{padding-left:208px}' +
    'html[data-review-mode="on"] .ndnav{top:46px}' +
    '@media(max-width:900px){' +
      '.ndnav{position:static;width:auto;flex-direction:row;align-items:center;gap:6px;padding:10px 12px;' +
        'border-bottom:1px solid #2a2f37;overflow-x:auto}' +
      '.ndnav .brand{border:none;padding:0 10px 0 0;margin:0;flex:0 0 auto}' +
      '.ndnav .brand small,.ndnav a .s,.ndnav .foot{display:none}' +
      '.ndnav a{white-space:nowrap;padding:8px 11px}' +
      'body{padding-left:0}}' +
    '@media print{.ndnav{display:none}body{padding-left:0}}';

  function build() {
    if (document.querySelector('.ndnav')) return;
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

    var nav = document.createElement('nav');
    nav.className = 'ndnav';
    nav.setAttribute('data-review-skip', '');
    nav.setAttribute('aria-label', 'Nextdoor hub sections');
    nav.innerHTML =
      '<div class="brand"><img src="assets/credo-mark.png" alt=""><span>Crēdo Legal<small>Nextdoor hub</small></span></div>' +
      ITEMS.map(function (i) {
        return '<a href="' + i.href + '"' + (i.id === page ? ' class="on" aria-current="page"' : '') + '>' +
          '<span class="t">' + i.icon + ' ' + i.label + '</span><span class="s">' + i.sub + '</span></a>';
      }).join('') +
      '<div class="foot">Review hub · draft<br><a href="https://nextdoor.com/page/credo-legal-services-professional-corporation-new-york-ny/" target="_blank" rel="noopener">Live Nextdoor page ↗</a></div>';
    document.body.insertBefore(nav, document.body.firstChild);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
