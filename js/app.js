window.FINMAT_IMG={"img/gal/krov-izrada.webp": [1200, 1600], "img/gal/t/krov-izrada.webp": [720, 960], "img/gal/krov-novi.webp": [1200, 1600], "img/gal/t/krov-novi.webp": [720, 960], "img/gal/krov-crep.webp": [1200, 1600], "img/gal/t/krov-crep.webp": [720, 960], "img/gal/kupatilo-pre.webp": [1200, 1600], "img/gal/t/kupatilo-pre.webp": [720, 960], "img/gal/trpezarija.webp": [1200, 1600], "img/gal/t/trpezarija.webp": [720, 960], "img/gal/stan-pre-2.webp": [1600, 1200], "img/gal/t/stan-pre-2.webp": [960, 720], "img/gal/nise-posle.webp": [1200, 1600], "img/gal/t/nise-posle.webp": [720, 960], "img/gal/trpezarija-erker.webp": [1179, 1571], "img/gal/t/trpezarija-erker.webp": [720, 960], "img/gal/stan-posle.webp": [1600, 1200], "img/gal/t/stan-posle.webp": [960, 720], "img/gal/stan-pre.webp": [1600, 1200], "img/gal/t/stan-pre.webp": [960, 720], "img/gal/dnevna-nise.webp": [1600, 1200], "img/gal/t/dnevna-nise.webp": [960, 720], "img/gal/kupatilo-posle.webp": [1200, 1600], "img/gal/t/kupatilo-posle.webp": [720, 960], "img/gal/dnevna-kamin.webp": [1600, 1200], "img/gal/t/dnevna-kamin.webp": [960, 720], "img/gal/adaptacija.webp": [1600, 1200], "img/gal/t/adaptacija.webp": [960, 720], "img/gal/nise-pre.webp": [1200, 1600], "img/gal/t/nise-pre.webp": [720, 960], "img/gal/kuhinja.webp": [1600, 1200], "img/gal/t/kuhinja.webp": [960, 720], "img/gal/krov-pre.webp": [1200, 1600], "img/gal/t/krov-pre.webp": [720, 960], "img/gal/kupatilo2-pre.webp": [1200, 1600], "img/gal/t/kupatilo2-pre.webp": [720, 960], "img/gal/kupatilo2-posle.webp": [1200, 1600], "img/gal/t/kupatilo2-posle.webp": [720, 960], "img/gal/kupatilo2-pre-2.webp": [1200, 1600], "img/gal/t/kupatilo2-pre-2.webp": [720, 960], "img/gal/kupatilo2-posle-2.webp": [1200, 1600], "img/gal/t/kupatilo2-posle-2.webp": [720, 960], "img/gal/kupatilo2-posle-3.webp": [1200, 1600], "img/gal/t/kupatilo2-posle-3.webp": [720, 960], "img/gal/kupatilo2-posle-4.webp": [1200, 1600], "img/gal/t/kupatilo2-posle-4.webp": [720, 960], "img/gal/kupatilo2-tokom.webp": [1200, 1600], "img/gal/t/kupatilo2-tokom.webp": [720, 960]};
/* FINMAT – mali runtime za šablone (sc-for, sc-if, {{vrednosti}}) i stanje stranice */
(function () {
  'use strict';
  var WEB3FORMS_KEY = '04607969-7df4-4740-921e-188f47894829'; // web3forms.com, upiti stižu na finmat.rs@gmail.com
  window.FINMAT_WEB3FORMS_KEY = WEB3FORMS_KEY;
  var BP_TABLET = 600, BP_DESKTOP = 1200;
  var STATE = {};
  var IMG = window.FINMAT_IMG || {};
  var app = document.getElementById('app');
  var cssEl = document.getElementById('layout-css');
  var cur = null, comps = [], tpls = [], pending = false, posted = false;

  function DCLogic() {}
  Object.defineProperty(DCLogic.prototype, 'state', { get: function () { return STATE; }, set: function () {} });
  DCLogic.prototype.setState = function (p) { if (p) { for (var k in p) STATE[k] = p[k]; } schedule(); };

  function resolve(path, scope) {
    path = path.trim();
    if (path === 'true') return true; if (path === 'false') return false;
    var parts = path.split('.'), v = scope;
    for (var i = 0; i < parts.length; i++) { if (v == null) return undefined; v = v[parts[i]]; }
    return v;
  }
  var HOLE = /\{\{([^}]+)\}\}/g, ONE = /^\{\{([^}]+)\}\}$/;
  function interp(str, scope) {
    return str.replace(HOLE, function (_, p) { var v = resolve(p, scope); return v == null ? '' : String(v); });
  }
  var EVT = { onclick: 'click', onkeydown: 'keydown', onpointerdown: 'pointerdown', onpointermove: 'pointermove', onpointerup: 'pointerup', onpointercancel: 'pointercancel' };

  function build(src, scope, out) {
    var kids = src.childNodes;
    for (var i = 0; i < kids.length; i++) {
      var n = kids[i];
      if (n.nodeType === 3) { out.appendChild(document.createTextNode(n.data.indexOf('{{') < 0 ? n.data : interp(n.data, scope))); continue; }
      if (n.nodeType !== 1) continue;
      var tag = n.localName;
      if (tag === 'sc-for') {
        var list = resolve(n.getAttribute('list').replace(/^\{\{|\}\}$/g, ''), scope) || [];
        var as = n.getAttribute('as');
        for (var j = 0; j < list.length; j++) { var sc = Object.create(scope); sc[as] = list[j]; build(n, sc, out); }
        continue;
      }
      if (tag === 'sc-if') {
        if (resolve(n.getAttribute('value').replace(/^\{\{|\}\}$/g, ''), scope)) build(n, scope, out);
        continue;
      }
      var el = n.namespaceURI === 'http://www.w3.org/2000/svg' ? document.createElementNS(n.namespaceURI, n.tagName) : document.createElement(tag);
      var h = null, val;
      for (var a = 0; a < n.attributes.length; a++) {
        var at = n.attributes[a], name = at.name, v = at.value;
        if (name.indexOf('hint-') === 0) continue;
        var lname = name.toLowerCase();
        if (lname === 'onchange' || EVT[lname]) {
          var m = ONE.exec(v); var fn = m ? resolve(m[1], scope) : null;
          if (typeof fn === 'function') {
            h = h || {};
            var ev = lname === 'onchange' ? ((tag === 'select') ? 'change' : 'input') : EVT[lname];
            h[ev] = fn;
          }
          continue;
        }
        if (v.indexOf('{{') >= 0) { var m1 = ONE.exec(v); v = m1 ? resolve(m1[1], scope) : interp(v, scope); }
        if (lname === 'value' && (tag === 'input' || tag === 'textarea' || tag === 'select')) { val = v == null ? '' : String(v); continue; }
        if (v === false || v == null) continue;
        if (tag === 'img' && lname === 'src' && /(^| )(gimg|gti|job-i|ba-i)( |$)/.test(n.getAttribute('class') || '')) v = String(v).replace('img/gal/', 'img/gal/t/');
        el.setAttribute(name, v === true ? '' : String(v));
        if (tag === 'img' && lname === 'src' && IMG[v] && !n.hasAttribute('width')) { el.setAttribute('width', IMG[v][0]); el.setAttribute('height', IMG[v][1]); }
      }
      el.__h = h;
      if (tag === 'template') { out.appendChild(el); continue; }
      build(n.content || n, scope, el);
      if (val !== undefined) { el.__val = val; if (tag !== 'select') el.value = val; }
      out.appendChild(el);
      if (tag === 'select' && val !== undefined) el.value = val;
    }
  }

  function sameNode(a, b) { return a.nodeType === b.nodeType && (a.nodeType !== 1 || a.tagName === b.tagName); }
  function patch(oldP, newP) {
    var nk = Array.prototype.slice.call(newP.childNodes);
    for (var i = 0; i < nk.length; i++) {
      var n = nk[i], o = oldP.childNodes[i];
      if (!o) { oldP.appendChild(n); continue; }
      if (!sameNode(o, n)) { oldP.replaceChild(n, o); continue; }
      if (n.nodeType === 3) { if (o.data !== n.data) o.data = n.data; continue; }
      var oa = o.attributes, na = n.attributes;
      for (var r = oa.length - 1; r >= 0; r--) { if (!n.hasAttribute(oa[r].name)) o.removeAttribute(oa[r].name); }
      for (var s = 0; s < na.length; s++) { if (o.getAttribute(na[s].name) !== na[s].value) o.setAttribute(na[s].name, na[s].value); }
      o.__h = n.__h;
      if (n.__val !== undefined && o.value !== n.__val) o.value = n.__val;
      patch(o, n);
    }
    for (var x = oldP.childNodes.length - 1; x >= nk.length; x--) { var c = oldP.childNodes[x]; if (!(c.nodeType === 1 && c.classList && c.classList.contains('fm-rip'))) oldP.removeChild(c); }
  }

  function dispatch(type) {
    return function (e) {
      var t = e.target;
      while (t && t !== document) {
        if (t.__h && t.__h[type]) { e.__ct = t; t.__h[type](e); return; }
        t = t.parentNode;
      }
    };
  }
  ['click', 'input', 'change', 'keydown', 'pointerdown', 'pointermove', 'pointerup', 'pointercancel'].forEach(function (t) { document.addEventListener(t, dispatch(t)); });

  function render() {
    pending = false;
    for (var i = 0; i < comps.length; i++) {
      var vals; try { vals = comps[i].renderVals(); } catch (err) { console.error(err); continue; }
      var frag = document.createDocumentFragment();
      build(tpls[i].content, vals, frag);
      var host = app.children[i];
      if (!host.firstChild) host.appendChild(frag); else patch(host, frag);
    }
    var lock = (STATE.lb !== undefined && STATE.lb >= 0) || !!STATE.menu;
    document.documentElement.style.overflow = lock ? 'hidden' : '';
    app.classList.toggle('lb-open', STATE.lb !== undefined && STATE.lb >= 0);
  }
  function schedule() { if (!pending) { pending = true; (window.requestAnimationFrame || setTimeout)(render); } }

  function pick() { var w = window.innerWidth || document.documentElement.clientWidth; return w >= BP_DESKTOP ? 'desktop' : (w >= BP_TABLET ? 'tablet' : 'mobile'); }
  function mount(name) {
    cur = name;
    var L = window.FINMAT_LAYOUTS[name];
    var keep = app.getAttribute('data-pre') === name && app.children.length === L.parts.length;
    app.removeAttribute('data-pre');
    if (!keep) cssEl.textContent = L.css;
    app.className = 'app app-' + name;
    if (!keep) app.innerHTML = '';
    comps = []; tpls = [];
    for (var i = 0; i < L.parts.length; i++) {
      var t = document.createElement('template'); t.innerHTML = L.parts[i].html; tpls.push(t);
      var Cls = new Function('DCLogic', L.parts[i].js + '\n;return Component;')(DCLogic);
      comps.push(new Cls());
      if (!keep) { var host = document.createElement('div'); host.className = 'dc-root'; app.appendChild(host); }
    }
    render();
    document.documentElement.classList.remove('fm-pre');
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') DCLogic.prototype.setState({ lb: -1, menu: false, svcOpen: false, fab: false, call: false, bcall: false, bwa: false });
  });
  var rt;
  // raspored (telefon/tablet/desktop) se skida tek kad zatreba
  function ensure(name, cb) {
    var LS = window.FINMAT_LAYOUTS || {};
    if (LS[name]) { cb(); return; }
    var J = window.FINMAT_JS || {}; if (!J[name]) return;
    var e = document.createElement('script'); e.src = J[name]; e.onload = cb; document.head.appendChild(e);
  }
  function go() { var n = pick(); if (n === cur) return; ensure(n, function () { if (pick() === n && n !== cur) mount(n); }); }
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(go, 150); });
  go();
  if (location.hash) { var target = document.getElementById(location.hash.slice(1)); if (target) setTimeout(function () { target.scrollIntoView(); }, 50); }
})();
