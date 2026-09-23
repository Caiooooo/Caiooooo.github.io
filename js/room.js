(() => {
  const panel = document.getElementById('panel');
  const content = document.getElementById('panel-content');
  const overlay = document.getElementById('overlay');
  const closeButton = document.getElementById('panel-close');
  const projects = [
    ['Zilean', 'Rust 编写的 Tick 级回测引擎，用于订单簿重建与策略模拟。', 'https://github.com/Caiooooo/zilean'],
    ['Polymarket L2 Collector', '实时采集订单簿，服务于预测市场的数据研究。', 'https://github.com/Caiooooo/polymarket-l2-collector'],
    ['线稿自动上色', '基于深度学习的图像处理合作项目。', 'https://github.com/Caiooooo/Coloring-for-line-drawings']
  ];
  const screens = {
    about: ['Behind the desk', '关于 Buttonwood', '<p>我关注量化交易、区块链和软件工程。喜欢把复杂的问题拆成清晰、可靠的系统，也喜欢收集路上的小发现。</p><a href="buttonwood.html">阅读完整介绍 ↗</a>'],
    notes: ['On the wall', '灵感笔记', '<p>设计、技术与生活里值得记住的片段，先从一张纸开始。</p><a href="designIdea.html">浏览设计灵感 ↗</a>'],
    projects: ['On the desk', '精选项目', '<p>正在打磨或已经完成的工具与实验。</p>' + projects.map(([name, desc, href]) => `<article><h3>${name}</h3><p>${desc}</p><a href="${href}" target="_blank" rel="noopener noreferrer">查看项目 ↗</a></article>`).join('') + '<a href="projects.html">浏览全部项目 ↗</a>'],
    'egg-book': ['A little secret', '一小瓶好奇心', '<p>配方：一点灵感、两份耐心，再加一次大胆的尝试。</p><a href="createIdea.html">翻翻实验笔记 ↗</a>'],
    'egg-cup': ['A little secret', '杯底的提醒', '<p>写代码写累了，就去泡一杯新的咖啡，看看窗外。</p>'],
    'egg-shell': ['A little secret', '工作室的小住客', '<p>你发现了负责监督休息的小猫。它的工作原则：代码可以明天写，今天的午觉不能少。</p>']
  };
  const sidebar = document.getElementById('studio-sidebar');
  const navToggle = document.getElementById('nav-toggle');
  const navScrim = document.getElementById('nav-scrim');
  const workspace = document.querySelector('.workspace');
  const mobile = matchMedia('(max-width: 700px)');
  function setNavigation(isOpen) {
    document.body.classList.toggle('sidebar-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? '关闭导航' : '打开导航');
    navScrim.hidden = !isOpen;
    sidebar.inert = mobile.matches && !isOpen;
    if (isOpen) sidebar.querySelector('a').focus();
  }
  navToggle.addEventListener('click', () => setNavigation(!document.body.classList.contains('sidebar-open')));
  navScrim.addEventListener('click', () => { setNavigation(false); navToggle.focus(); });
  mobile.addEventListener('change', () => setNavigation(false));
  setNavigation(false);
  let lastTrigger;
  let closeTimer;
  let openFrame;
  function open(key, trigger) {
    const screen = screens[key];
    if (!screen) return;
    clearTimeout(closeTimer);
    cancelAnimationFrame(openFrame);
    lastTrigger = trigger;
    content.innerHTML = `<span class="panel-kicker">${screen[0]}</span><h2 id="panel-title">${screen[1]}</h2>${screen[2]}`;
    panel.hidden = false;
    workspace.inert = true;
    sidebar.inert = true;
    document.body.style.overflow = 'hidden';
    openFrame = requestAnimationFrame(() => { panel.classList.add('open'); overlay.classList.add('open'); });
    closeButton.focus();
  }
  function close() {
    cancelAnimationFrame(openFrame);
    panel.classList.remove('open');
    overlay.classList.remove('open');
    closeTimer = setTimeout(() => { panel.hidden = true; }, 360);
    workspace.inert = false;
    sidebar.inert = mobile.matches && !document.body.classList.contains('sidebar-open');
    document.body.style.overflow = '';
    lastTrigger?.focus();
  }
  document.querySelectorAll('[data-panel]').forEach(button => {
    button.addEventListener('click', () => open(button.dataset.panel, button));
    if (button.tagName.toLowerCase() === 'g') button.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(button.dataset.panel, button); }
    });
  });
  closeButton.addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (!panel.hidden) close();
      else if (document.body.classList.contains('sidebar-open')) { setNavigation(false); navToggle.focus(); }
    }
    if (event.key === 'Tab' && !panel.hidden) {
      const focusables = panel.querySelectorAll('button, a[href]');
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  const userName = new URLSearchParams(location.search).get('userName');
  if (userName) document.querySelectorAll('a[href$=".html"]').forEach(link => {
    const url = new URL(link.getAttribute('href'), location.href);
    url.searchParams.set('userName', userName);
    link.setAttribute('href', url.toString());
  });
  const welcome = document.getElementById('welcome');
  setTimeout(() => welcome.classList.add('show'), 220);
  setTimeout(() => welcome.classList.remove('show'), 2250);
})();
