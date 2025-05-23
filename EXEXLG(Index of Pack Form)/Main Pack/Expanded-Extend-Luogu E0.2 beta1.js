// ==UserScript==
// @name           Expanded-Extend-Luogu
// @namespace      http://tampermonkey.net/
// @description    Make luogu more powerful.
// @description:zh 使洛谷拥有更多功能
// @icon           https://raw.fastgit.org/extend-luogu/extend-luogu/main/favicon.ico
// @icon64         https://exlg.cc/img/logo.png
// @homepage       https://exlg.cc
// @version        6.7.8_E0.2

// @exclude        https://*.luogu.com.cn/record/*

// @match          https://*.luogu.com.cn/*
// @match          https://*.luogu.org/*
// @match          https://www.bilibili.com/robots.txt?*
// @match          https://service-ig5px5gh-1305163805.sh.apigw.tencentcs.com/release/APIGWHtmlDemo-1615602121
// @match          https://service-nd5kxeo3-1305163805.sh.apigw.tencentcs.com/release/exlg-nextgen
// @match          https://extend-luogu.github.io/exlg-setting-new/*
// @match          https://dash.exlg.cc/*
// @include        http://localhost:1634/*
//
// @connect        tencentcs.com
// @connect        xn--fx-ex2c330n.ml
// @connect        bens.rotriw.com
// @connect        codeforces.com
// @connect        codeforces.ml
// @connect        codeforc.es
// @connect        kenkoooo.com
// @connect        api.github.com
// @connect        piterator.com
// @connect        exlgcs.jin-dan.site
// @connect        localhost
//
// @require        https://cdn.luogu.com.cn/js/jquery-2.1.1.min.js
//
// @resource       colorpicker https://extend-luogu.github.io/exlg-color-picker/dist/xncolorpicker.min.js
// @resource       colorpicker_old https://www.jq22.com/demo/xncolorpicker-main202101270059/dist/xncolorpicker.min.js
// @resource       pickr_resource https://unpkg.com/@simonwep/pickr@1.8.2/dist/pickr.min.js
// @resource       pickr_resource_css https://unpkg.com/@simonwep/pickr@1.8.2/dist/themes/nano.min.css
//
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// @grant          GM_listValues
// @grant          GM_setClipboard
// @grant          GM_xmlhttpRequest
// @grant          GM_getResourceText
// @grant          unsafeWindow

// @author         Team Exlg(compile), yingjingxu(expand)
// ==/UserScript==

(() => {
  var Yr = Object.create;
  var ut = Object.defineProperty;
  var Kr = Object.getOwnPropertyDescriptor;
  var en = Object.getOwnPropertyNames;
  var tn = Object.getPrototypeOf,
    rn = Object.prototype.hasOwnProperty;
  var le = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  var nn = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of en(t))
        !rn.call(e, o) &&
          o !== r &&
          ut(e, o, {
            get: () => t[o],
            enumerable: !(n = Kr(t, o)) || n.enumerable,
          });
    return e;
  };
  var on = (e, t, r) => (
    (r = e != null ? Yr(tn(e)) : {}),
    nn(
      t || !e || !e.__esModule
        ? ut(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var Ye = le((be) => {
    function ft() {
      var e = {};
      return (
        (e["align-content"] = !1),
        (e["align-items"] = !1),
        (e["align-self"] = !1),
        (e["alignment-adjust"] = !1),
        (e["alignment-baseline"] = !1),
        (e.all = !1),
        (e["anchor-point"] = !1),
        (e.animation = !1),
        (e["animation-delay"] = !1),
        (e["animation-direction"] = !1),
        (e["animation-duration"] = !1),
        (e["animation-fill-mode"] = !1),
        (e["animation-iteration-count"] = !1),
        (e["animation-name"] = !1),
        (e["animation-play-state"] = !1),
        (e["animation-timing-function"] = !1),
        (e.azimuth = !1),
        (e["backface-visibility"] = !1),
        (e.background = !0),
        (e["background-attachment"] = !0),
        (e["background-clip"] = !0),
        (e["background-color"] = !0),
        (e["background-image"] = !0),
        (e["background-origin"] = !0),
        (e["background-position"] = !0),
        (e["background-repeat"] = !0),
        (e["background-size"] = !0),
        (e["baseline-shift"] = !1),
        (e.binding = !1),
        (e.bleed = !1),
        (e["bookmark-label"] = !1),
        (e["bookmark-level"] = !1),
        (e["bookmark-state"] = !1),
        (e.border = !0),
        (e["border-bottom"] = !0),
        (e["border-bottom-color"] = !0),
        (e["border-bottom-left-radius"] = !0),
        (e["border-bottom-right-radius"] = !0),
        (e["border-bottom-style"] = !0),
        (e["border-bottom-width"] = !0),
        (e["border-collapse"] = !0),
        (e["border-color"] = !0),
        (e["border-image"] = !0),
        (e["border-image-outset"] = !0),
        (e["border-image-repeat"] = !0),
        (e["border-image-slice"] = !0),
        (e["border-image-source"] = !0),
        (e["border-image-width"] = !0),
        (e["border-left"] = !0),
        (e["border-left-color"] = !0),
        (e["border-left-style"] = !0),
        (e["border-left-width"] = !0),
        (e["border-radius"] = !0),
        (e["border-right"] = !0),
        (e["border-right-color"] = !0),
        (e["border-right-style"] = !0),
        (e["border-right-width"] = !0),
        (e["border-spacing"] = !0),
        (e["border-style"] = !0),
        (e["border-top"] = !0),
        (e["border-top-color"] = !0),
        (e["border-top-left-radius"] = !0),
        (e["border-top-right-radius"] = !0),
        (e["border-top-style"] = !0),
        (e["border-top-width"] = !0),
        (e["border-width"] = !0),
        (e.bottom = !1),
        (e["box-decoration-break"] = !0),
        (e["box-shadow"] = !0),
        (e["box-sizing"] = !0),
        (e["box-snap"] = !0),
        (e["box-suppress"] = !0),
        (e["break-after"] = !0),
        (e["break-before"] = !0),
        (e["break-inside"] = !0),
        (e["caption-side"] = !1),
        (e.chains = !1),
        (e.clear = !0),
        (e.clip = !1),
        (e["clip-path"] = !1),
        (e["clip-rule"] = !1),
        (e.color = !0),
        (e["color-interpolation-filters"] = !0),
        (e["column-count"] = !1),
        (e["column-fill"] = !1),
        (e["column-gap"] = !1),
        (e["column-rule"] = !1),
        (e["column-rule-color"] = !1),
        (e["column-rule-style"] = !1),
        (e["column-rule-width"] = !1),
        (e["column-span"] = !1),
        (e["column-width"] = !1),
        (e.columns = !1),
        (e.contain = !1),
        (e.content = !1),
        (e["counter-increment"] = !1),
        (e["counter-reset"] = !1),
        (e["counter-set"] = !1),
        (e.crop = !1),
        (e.cue = !1),
        (e["cue-after"] = !1),
        (e["cue-before"] = !1),
        (e.cursor = !1),
        (e.direction = !1),
        (e.display = !0),
        (e["display-inside"] = !0),
        (e["display-list"] = !0),
        (e["display-outside"] = !0),
        (e["dominant-baseline"] = !1),
        (e.elevation = !1),
        (e["empty-cells"] = !1),
        (e.filter = !1),
        (e.flex = !1),
        (e["flex-basis"] = !1),
        (e["flex-direction"] = !1),
        (e["flex-flow"] = !1),
        (e["flex-grow"] = !1),
        (e["flex-shrink"] = !1),
        (e["flex-wrap"] = !1),
        (e.float = !1),
        (e["float-offset"] = !1),
        (e["flood-color"] = !1),
        (e["flood-opacity"] = !1),
        (e["flow-from"] = !1),
        (e["flow-into"] = !1),
        (e.font = !0),
        (e["font-family"] = !0),
        (e["font-feature-settings"] = !0),
        (e["font-kerning"] = !0),
        (e["font-language-override"] = !0),
        (e["font-size"] = !0),
        (e["font-size-adjust"] = !0),
        (e["font-stretch"] = !0),
        (e["font-style"] = !0),
        (e["font-synthesis"] = !0),
        (e["font-variant"] = !0),
        (e["font-variant-alternates"] = !0),
        (e["font-variant-caps"] = !0),
        (e["font-variant-east-asian"] = !0),
        (e["font-variant-ligatures"] = !0),
        (e["font-variant-numeric"] = !0),
        (e["font-variant-position"] = !0),
        (e["font-weight"] = !0),
        (e.grid = !1),
        (e["grid-area"] = !1),
        (e["grid-auto-columns"] = !1),
        (e["grid-auto-flow"] = !1),
        (e["grid-auto-rows"] = !1),
        (e["grid-column"] = !1),
        (e["grid-column-end"] = !1),
        (e["grid-column-start"] = !1),
        (e["grid-row"] = !1),
        (e["grid-row-end"] = !1),
        (e["grid-row-start"] = !1),
        (e["grid-template"] = !1),
        (e["grid-template-areas"] = !1),
        (e["grid-template-columns"] = !1),
        (e["grid-template-rows"] = !1),
        (e["hanging-punctuation"] = !1),
        (e.height = !0),
        (e.hyphens = !1),
        (e.icon = !1),
        (e["image-orientation"] = !1),
        (e["image-resolution"] = !1),
        (e["ime-mode"] = !1),
        (e["initial-letters"] = !1),
        (e["inline-box-align"] = !1),
        (e["justify-content"] = !1),
        (e["justify-items"] = !1),
        (e["justify-self"] = !1),
        (e.left = !1),
        (e["letter-spacing"] = !0),
        (e["lighting-color"] = !0),
        (e["line-box-contain"] = !1),
        (e["line-break"] = !1),
        (e["line-grid"] = !1),
        (e["line-height"] = !1),
        (e["line-snap"] = !1),
        (e["line-stacking"] = !1),
        (e["line-stacking-ruby"] = !1),
        (e["line-stacking-shift"] = !1),
        (e["line-stacking-strategy"] = !1),
        (e["list-style"] = !0),
        (e["list-style-image"] = !0),
        (e["list-style-position"] = !0),
        (e["list-style-type"] = !0),
        (e.margin = !0),
        (e["margin-bottom"] = !0),
        (e["margin-left"] = !0),
        (e["margin-right"] = !0),
        (e["margin-top"] = !0),
        (e["marker-offset"] = !1),
        (e["marker-side"] = !1),
        (e.marks = !1),
        (e.mask = !1),
        (e["mask-box"] = !1),
        (e["mask-box-outset"] = !1),
        (e["mask-box-repeat"] = !1),
        (e["mask-box-slice"] = !1),
        (e["mask-box-source"] = !1),
        (e["mask-box-width"] = !1),
        (e["mask-clip"] = !1),
        (e["mask-image"] = !1),
        (e["mask-origin"] = !1),
        (e["mask-position"] = !1),
        (e["mask-repeat"] = !1),
        (e["mask-size"] = !1),
        (e["mask-source-type"] = !1),
        (e["mask-type"] = !1),
        (e["max-height"] = !0),
        (e["max-lines"] = !1),
        (e["max-width"] = !0),
        (e["min-height"] = !0),
        (e["min-width"] = !0),
        (e["move-to"] = !1),
        (e["nav-down"] = !1),
        (e["nav-index"] = !1),
        (e["nav-left"] = !1),
        (e["nav-right"] = !1),
        (e["nav-up"] = !1),
        (e["object-fit"] = !1),
        (e["object-position"] = !1),
        (e.opacity = !1),
        (e.order = !1),
        (e.orphans = !1),
        (e.outline = !1),
        (e["outline-color"] = !1),
        (e["outline-offset"] = !1),
        (e["outline-style"] = !1),
        (e["outline-width"] = !1),
        (e.overflow = !1),
        (e["overflow-wrap"] = !1),
        (e["overflow-x"] = !1),
        (e["overflow-y"] = !1),
        (e.padding = !0),
        (e["padding-bottom"] = !0),
        (e["padding-left"] = !0),
        (e["padding-right"] = !0),
        (e["padding-top"] = !0),
        (e.page = !1),
        (e["page-break-after"] = !1),
        (e["page-break-before"] = !1),
        (e["page-break-inside"] = !1),
        (e["page-policy"] = !1),
        (e.pause = !1),
        (e["pause-after"] = !1),
        (e["pause-before"] = !1),
        (e.perspective = !1),
        (e["perspective-origin"] = !1),
        (e.pitch = !1),
        (e["pitch-range"] = !1),
        (e["play-during"] = !1),
        (e.position = !1),
        (e["presentation-level"] = !1),
        (e.quotes = !1),
        (e["region-fragment"] = !1),
        (e.resize = !1),
        (e.rest = !1),
        (e["rest-after"] = !1),
        (e["rest-before"] = !1),
        (e.richness = !1),
        (e.right = !1),
        (e.rotation = !1),
        (e["rotation-point"] = !1),
        (e["ruby-align"] = !1),
        (e["ruby-merge"] = !1),
        (e["ruby-position"] = !1),
        (e["shape-image-threshold"] = !1),
        (e["shape-outside"] = !1),
        (e["shape-margin"] = !1),
        (e.size = !1),
        (e.speak = !1),
        (e["speak-as"] = !1),
        (e["speak-header"] = !1),
        (e["speak-numeral"] = !1),
        (e["speak-punctuation"] = !1),
        (e["speech-rate"] = !1),
        (e.stress = !1),
        (e["string-set"] = !1),
        (e["tab-size"] = !1),
        (e["table-layout"] = !1),
        (e["text-align"] = !0),
        (e["text-align-last"] = !0),
        (e["text-combine-upright"] = !0),
        (e["text-decoration"] = !0),
        (e["text-decoration-color"] = !0),
        (e["text-decoration-line"] = !0),
        (e["text-decoration-skip"] = !0),
        (e["text-decoration-style"] = !0),
        (e["text-emphasis"] = !0),
        (e["text-emphasis-color"] = !0),
        (e["text-emphasis-position"] = !0),
        (e["text-emphasis-style"] = !0),
        (e["text-height"] = !0),
        (e["text-indent"] = !0),
        (e["text-justify"] = !0),
        (e["text-orientation"] = !0),
        (e["text-overflow"] = !0),
        (e["text-shadow"] = !0),
        (e["text-space-collapse"] = !0),
        (e["text-transform"] = !0),
        (e["text-underline-position"] = !0),
        (e["text-wrap"] = !0),
        (e.top = !1),
        (e.transform = !1),
        (e["transform-origin"] = !1),
        (e["transform-style"] = !1),
        (e.transition = !1),
        (e["transition-delay"] = !1),
        (e["transition-duration"] = !1),
        (e["transition-property"] = !1),
        (e["transition-timing-function"] = !1),
        (e["unicode-bidi"] = !1),
        (e["vertical-align"] = !1),
        (e.visibility = !1),
        (e["voice-balance"] = !1),
        (e["voice-duration"] = !1),
        (e["voice-family"] = !1),
        (e["voice-pitch"] = !1),
        (e["voice-range"] = !1),
        (e["voice-rate"] = !1),
        (e["voice-stress"] = !1),
        (e["voice-volume"] = !1),
        (e.volume = !1),
        (e["white-space"] = !1),
        (e.widows = !1),
        (e.width = !0),
        (e["will-change"] = !1),
        (e["word-break"] = !0),
        (e["word-spacing"] = !0),
        (e["word-wrap"] = !0),
        (e["wrap-flow"] = !1),
        (e["wrap-through"] = !1),
        (e["writing-mode"] = !1),
        (e["z-index"] = !1),
        e
      );
    }
    function sn(e, t, r) {}
    function an(e, t, r) {}
    var ln = /javascript\s*\:/gim;
    function cn(e, t) {
      return ln.test(t) ? "" : t;
    }
    be.whiteList = ft();
    be.getDefaultWhiteList = ft;
    be.onAttr = sn;
    be.onIgnoreAttr = an;
    be.safeAttrValue = cn;
  });
  var Ke = le((li, mt) => {
    mt.exports = {
      indexOf: function (e, t) {
        var r, n;
        if (Array.prototype.indexOf) return e.indexOf(t);
        for (r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      },
      forEach: function (e, t, r) {
        var n, o;
        if (Array.prototype.forEach) return e.forEach(t, r);
        for (n = 0, o = e.length; n < o; n++) t.call(r, e[n], n, e);
      },
      trim: function (e) {
        return String.prototype.trim
          ? e.trim()
          : e.replace(/(^\s*)|(\s*$)/g, "");
      },
      trimRight: function (e) {
        return String.prototype.trimRight
          ? e.trimRight()
          : e.replace(/(\s*$)/g, "");
      },
    };
  });
  var bt = le((ci, ht) => {
    var ke = Ke();
    function dn(e, t) {
      (e = ke.trimRight(e)), e[e.length - 1] !== ";" && (e += ";");
      var r = e.length,
        n = !1,
        o = 0,
        i = 0,
        s = "";
      function l() {
        if (!n) {
          var c = ke.trim(e.slice(o, i)),
            a = c.indexOf(":");
          if (a !== -1) {
            var p = ke.trim(c.slice(0, a)),
              f = ke.trim(c.slice(a + 1));
            if (p) {
              var x = t(o, s.length, p, f, c);
              x && (s += x + "; ");
            }
          }
        }
        o = i + 1;
      }
      for (; i < r; i++) {
        var d = e[i];
        if (d === "/" && e[i + 1] === "*") {
          var u = e.indexOf("*/", i + 2);
          if (u === -1) break;
          (i = u + 1), (o = i + 1), (n = !1);
        } else
          d === "("
            ? (n = !0)
            : d === ")"
            ? (n = !1)
            : d === ";"
            ? n || l()
            : d ===
                `
` && l();
      }
      return ke.trim(s);
    }
    ht.exports = dn;
  });
  var vt = le((gi, yt) => {
    var Me = Ye(),
      gn = bt(),
      di = Ke();
    function xt(e) {
      return e == null;
    }
    function pn(e) {
      var t = {};
      for (var r in e) t[r] = e[r];
      return t;
    }
    function wt(e) {
      (e = pn(e || {})),
        (e.whiteList = e.whiteList || Me.whiteList),
        (e.onAttr = e.onAttr || Me.onAttr),
        (e.onIgnoreAttr = e.onIgnoreAttr || Me.onIgnoreAttr),
        (e.safeAttrValue = e.safeAttrValue || Me.safeAttrValue),
        (this.options = e);
    }
    wt.prototype.process = function (e) {
      if (((e = e || ""), (e = e.toString()), !e)) return "";
      var t = this,
        r = t.options,
        n = r.whiteList,
        o = r.onAttr,
        i = r.onIgnoreAttr,
        s = r.safeAttrValue,
        l = gn(e, function (d, u, c, a, p) {
          var f = n[c],
            x = !1;
          if (
            (f === !0
              ? (x = f)
              : typeof f == "function"
              ? (x = f(a))
              : f instanceof RegExp && (x = f.test(a)),
            x !== !0 && (x = !1),
            (a = s(c, a)),
            !!a)
          ) {
            var h = { position: u, sourcePosition: d, source: p, isWhite: x };
            if (x) {
              var m = o(c, a, h);
              return xt(m) ? c + ":" + a : m;
            } else {
              var m = i(c, a, h);
              if (!xt(m)) return m;
            }
          }
        });
      return l;
    };
    yt.exports = wt;
  });
  var Ee = le((Ae, tt) => {
    var kt = Ye(),
      _t = vt();
    function un(e, t) {
      var r = new _t(t);
      return r.process(e);
    }
    Ae = tt.exports = un;
    Ae.FilterCSS = _t;
    for (et in kt) Ae[et] = kt[et];
    var et;
    typeof window < "u" && (window.filterCSS = tt.exports);
  });
  var Ne = le((pi, $t) => {
    $t.exports = {
      indexOf: function (e, t) {
        var r, n;
        if (Array.prototype.indexOf) return e.indexOf(t);
        for (r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      },
      forEach: function (e, t, r) {
        var n, o;
        if (Array.prototype.forEach) return e.forEach(t, r);
        for (n = 0, o = e.length; n < o; n++) t.call(r, e[n], n, e);
      },
      trim: function (e) {
        return String.prototype.trim
          ? e.trim()
          : e.replace(/(^\s*)|(\s*$)/g, "");
      },
      spaceIndex: function (e) {
        var t = /\s|\n|\t/,
          r = t.exec(e);
        return r ? r.index : -1;
      },
    };
  });
  var rt = le((P) => {
    var fn = Ee().FilterCSS,
      mn = Ee().getDefaultWhiteList,
      Ie = Ne();
    function Ct() {
      return {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "preload",
          "src",
        ],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "playsinline",
          "poster",
          "preload",
          "src",
          "height",
          "width",
        ],
      };
    }
    var St = new fn();
    function hn(e, t, r) {}
    function bn(e, t, r) {}
    function xn(e, t, r) {}
    function wn(e, t, r) {}
    function Mt(e) {
      return e.replace(vn, "&lt;").replace(kn, "&gt;");
    }
    function yn(e, t, r, n) {
      if (((r = jt(r)), t === "href" || t === "src")) {
        if (((r = Ie.trim(r)), r === "#")) return "#";
        if (
          !(
            r.substr(0, 7) === "http://" ||
            r.substr(0, 8) === "https://" ||
            r.substr(0, 7) === "mailto:" ||
            r.substr(0, 4) === "tel:" ||
            r.substr(0, 11) === "data:image/" ||
            r.substr(0, 6) === "ftp://" ||
            r.substr(0, 2) === "./" ||
            r.substr(0, 3) === "../" ||
            r[0] === "#" ||
            r[0] === "/"
          )
        )
          return "";
      } else if (t === "background") {
        if (((ze.lastIndex = 0), ze.test(r))) return "";
      } else if (t === "style") {
        if (
          ((Lt.lastIndex = 0),
          Lt.test(r) ||
            ((Tt.lastIndex = 0),
            Tt.test(r) && ((ze.lastIndex = 0), ze.test(r))))
        )
          return "";
        n !== !1 && ((n = n || St), (r = n.process(r)));
      }
      return (r = Ot(r)), r;
    }
    var vn = /</g,
      kn = />/g,
      _n = /"/g,
      $n = /&quot;/g,
      Ln = /&#([a-zA-Z0-9]*);?/gim,
      Tn = /&colon;?/gim,
      Cn = /&newline;?/gim,
      ze =
        /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
      Lt = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
      Tt = /u\s*r\s*l\s*\(.*/gi;
    function At(e) {
      return e.replace(_n, "&quot;");
    }
    function Et(e) {
      return e.replace($n, '"');
    }
    function Nt(e) {
      return e.replace(Ln, function (r, n) {
        return n[0] === "x" || n[0] === "X"
          ? String.fromCharCode(parseInt(n.substr(1), 16))
          : String.fromCharCode(parseInt(n, 10));
      });
    }
    function zt(e) {
      return e.replace(Tn, ":").replace(Cn, " ");
    }
    function It(e) {
      for (var t = "", r = 0, n = e.length; r < n; r++)
        t += e.charCodeAt(r) < 32 ? " " : e.charAt(r);
      return Ie.trim(t);
    }
    function jt(e) {
      return (e = Et(e)), (e = Nt(e)), (e = zt(e)), (e = It(e)), e;
    }
    function Ot(e) {
      return (e = At(e)), (e = Mt(e)), e;
    }
    function Sn() {
      return "";
    }
    function Mn(e, t) {
      typeof t != "function" && (t = function () {});
      var r = !Array.isArray(e);
      function n(s) {
        return r ? !0 : Ie.indexOf(e, s) !== -1;
      }
      var o = [],
        i = !1;
      return {
        onIgnoreTag: function (s, l, d) {
          if (n(s))
            if (d.isClosing) {
              var u = "[/removed]",
                c = d.position + u.length;
              return o.push([i !== !1 ? i : d.position, c]), (i = !1), u;
            } else return i || (i = d.position), "[removed]";
          else return t(s, l, d);
        },
        remove: function (s) {
          var l = "",
            d = 0;
          return (
            Ie.forEach(o, function (u) {
              (l += s.slice(d, u[0])), (d = u[1]);
            }),
            (l += s.slice(d)),
            l
          );
        },
      };
    }
    function An(e) {
      for (var t = "", r = 0; r < e.length; ) {
        var n = e.indexOf("<!--", r);
        if (n === -1) {
          t += e.slice(r);
          break;
        }
        t += e.slice(r, n);
        var o = e.indexOf("-->", n);
        if (o === -1) break;
        r = o + 3;
      }
      return t;
    }
    function En(e) {
      var t = e.split("");
      return (
        (t = t.filter(function (r) {
          var n = r.charCodeAt(0);
          return n === 127 ? !1 : n <= 31 ? n === 10 || n === 13 : !0;
        })),
        t.join("")
      );
    }
    P.whiteList = Ct();
    P.getDefaultWhiteList = Ct;
    P.onTag = hn;
    P.onIgnoreTag = bn;
    P.onTagAttr = xn;
    P.onIgnoreTagAttr = wn;
    P.safeAttrValue = yn;
    P.escapeHtml = Mt;
    P.escapeQuote = At;
    P.unescapeQuote = Et;
    P.escapeHtmlEntities = Nt;
    P.escapeDangerHtml5Entities = zt;
    P.clearNonPrintableCharacter = It;
    P.friendlyAttrValue = jt;
    P.escapeAttrValue = Ot;
    P.onIgnoreTagStripAll = Sn;
    P.StripTagBody = Mn;
    P.stripCommentTag = An;
    P.stripBlankChar = En;
    P.cssFilter = St;
    P.getDefaultCSSWhiteList = mn;
  });
  var ot = le((nt) => {
    var ge = Ne();
    function Nn(e) {
      var t = ge.spaceIndex(e),
        r;
      return (
        t === -1 ? (r = e.slice(1, -1)) : (r = e.slice(1, t + 1)),
        (r = ge.trim(r).toLowerCase()),
        r.slice(0, 1) === "/" && (r = r.slice(1)),
        r.slice(-1) === "/" && (r = r.slice(0, -1)),
        r
      );
    }
    function zn(e) {
      return e.slice(0, 2) === "</";
    }
    function In(e, t, r) {
      "use strict";
      var n = "",
        o = 0,
        i = !1,
        s = !1,
        l = 0,
        d = e.length,
        u = "",
        c = "";
      e: for (l = 0; l < d; l++) {
        var a = e.charAt(l);
        if (i === !1) {
          if (a === "<") {
            i = l;
            continue;
          }
        } else if (s === !1) {
          if (a === "<") {
            (n += r(e.slice(o, l))), (i = l), (o = l);
            continue;
          }
          if (a === ">") {
            (n += r(e.slice(o, i))),
              (c = e.slice(i, l + 1)),
              (u = Nn(c)),
              (n += t(i, n.length, u, c, zn(c))),
              (o = l + 1),
              (i = !1);
            continue;
          }
          if (a === '"' || a === "'")
            for (
              var p = 1, f = e.charAt(l - p);
              f.trim() === "" || f === "=";

            ) {
              if (f === "=") {
                s = a;
                continue e;
              }
              f = e.charAt(l - ++p);
            }
        } else if (a === s) {
          s = !1;
          continue;
        }
      }
      return o < e.length && (n += r(e.substr(o))), n;
    }
    var jn = /[^a-zA-Z0-9\\_:.-]/gim;
    function On(e, t) {
      "use strict";
      var r = 0,
        n = 0,
        o = [],
        i = !1,
        s = e.length;
      function l(p, f) {
        if (
          ((p = ge.trim(p)),
          (p = p.replace(jn, "").toLowerCase()),
          !(p.length < 1))
        ) {
          var x = t(p, f || "");
          x && o.push(x);
        }
      }
      for (var d = 0; d < s; d++) {
        var u = e.charAt(d),
          c,
          a;
        if (i === !1 && u === "=") {
          (i = e.slice(r, d)),
            (r = d + 1),
            (n = e.charAt(r) === '"' || e.charAt(r) === "'" ? r : Rn(e, d + 1));
          continue;
        }
        if (i !== !1 && d === n) {
          if (((a = e.indexOf(u, d + 1)), a === -1)) break;
          (c = ge.trim(e.slice(n + 1, a))),
            l(i, c),
            (i = !1),
            (d = a),
            (r = d + 1);
          continue;
        }
        if (/\s|\n|\t/.test(u))
          if (((e = e.replace(/\s|\n|\t/g, " ")), i === !1))
            if (((a = Dn(e, d)), a === -1)) {
              (c = ge.trim(e.slice(r, d))), l(c), (i = !1), (r = d + 1);
              continue;
            } else {
              d = a - 1;
              continue;
            }
          else if (((a = Pn(e, d - 1)), a === -1)) {
            (c = ge.trim(e.slice(r, d))),
              (c = Dt(c)),
              l(i, c),
              (i = !1),
              (r = d + 1);
            continue;
          } else continue;
      }
      return (
        r < e.length &&
          (i === !1 ? l(e.slice(r)) : l(i, Dt(ge.trim(e.slice(r))))),
        ge.trim(o.join(" "))
      );
    }
    function Dn(e, t) {
      for (; t < e.length; t++) {
        var r = e[t];
        if (r !== " ") return r === "=" ? t : -1;
      }
    }
    function Rn(e, t) {
      for (; t < e.length; t++) {
        var r = e[t];
        if (r !== " ") return r === "'" || r === '"' ? t : -1;
      }
    }
    function Pn(e, t) {
      for (; t > 0; t--) {
        var r = e[t];
        if (r !== " ") return r === "=" ? t : -1;
      }
    }
    function qn(e) {
      return (
        (e[0] === '"' && e[e.length - 1] === '"') ||
        (e[0] === "'" && e[e.length - 1] === "'")
      );
    }
    function Dt(e) {
      return qn(e) ? e.substr(1, e.length - 2) : e;
    }
    nt.parseTag = In;
    nt.parseAttr = On;
  });
  var Bt = le((mi, qt) => {
    var Bn = Ee().FilterCSS,
      te = rt(),
      Rt = ot(),
      Un = Rt.parseTag,
      Zn = Rt.parseAttr,
      Oe = Ne();
    function je(e) {
      return e == null;
    }
    function Gn(e) {
      var t = Oe.spaceIndex(e);
      if (t === -1) return { html: "", closing: e[e.length - 2] === "/" };
      e = Oe.trim(e.slice(t + 1, -1));
      var r = e[e.length - 1] === "/";
      return r && (e = Oe.trim(e.slice(0, -1))), { html: e, closing: r };
    }
    function Vn(e) {
      var t = {};
      for (var r in e) t[r] = e[r];
      return t;
    }
    function Fn(e) {
      var t = {};
      for (var r in e)
        Array.isArray(e[r])
          ? (t[r.toLowerCase()] = e[r].map(function (n) {
              return n.toLowerCase();
            }))
          : (t[r.toLowerCase()] = e[r]);
      return t;
    }
    function Pt(e) {
      (e = Vn(e || {})),
        e.stripIgnoreTag &&
          (e.onIgnoreTag &&
            console.error(
              'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
            ),
          (e.onIgnoreTag = te.onIgnoreTagStripAll)),
        e.whiteList || e.allowList
          ? (e.whiteList = Fn(e.whiteList || e.allowList))
          : (e.whiteList = te.whiteList),
        (e.onTag = e.onTag || te.onTag),
        (e.onTagAttr = e.onTagAttr || te.onTagAttr),
        (e.onIgnoreTag = e.onIgnoreTag || te.onIgnoreTag),
        (e.onIgnoreTagAttr = e.onIgnoreTagAttr || te.onIgnoreTagAttr),
        (e.safeAttrValue = e.safeAttrValue || te.safeAttrValue),
        (e.escapeHtml = e.escapeHtml || te.escapeHtml),
        (this.options = e),
        e.css === !1
          ? (this.cssFilter = !1)
          : ((e.css = e.css || {}), (this.cssFilter = new Bn(e.css)));
    }
    Pt.prototype.process = function (e) {
      if (((e = e || ""), (e = e.toString()), !e)) return "";
      var t = this,
        r = t.options,
        n = r.whiteList,
        o = r.onTag,
        i = r.onIgnoreTag,
        s = r.onTagAttr,
        l = r.onIgnoreTagAttr,
        d = r.safeAttrValue,
        u = r.escapeHtml,
        c = t.cssFilter;
      r.stripBlankChar && (e = te.stripBlankChar(e)),
        r.allowCommentTag || (e = te.stripCommentTag(e));
      var a = !1;
      r.stripIgnoreTagBody &&
        ((a = te.StripTagBody(r.stripIgnoreTagBody, i)), (i = a.onIgnoreTag));
      var p = Un(
        e,
        function (f, x, h, m, b) {
          var w = {
              sourcePosition: f,
              position: x,
              isClosing: b,
              isWhite: Object.prototype.hasOwnProperty.call(n, h),
            },
            k = o(h, m, w);
          if (!je(k)) return k;
          if (w.isWhite) {
            if (w.isClosing) return "</" + h + ">";
            var L = Gn(m),
              S = n[h],
              R = Zn(L.html, function (j, O) {
                var H = Oe.indexOf(S, j) !== -1,
                  ee = s(h, j, O, H);
                return je(ee)
                  ? H
                    ? ((O = d(h, j, O, c)), O ? j + '="' + O + '"' : j)
                    : ((ee = l(h, j, O, H)), je(ee) ? void 0 : ee)
                  : ee;
              });
            return (
              (m = "<" + h),
              R && (m += " " + R),
              L.closing && (m += " /"),
              (m += ">"),
              m
            );
          } else return (k = i(h, m, w)), je(k) ? u(m) : k;
        },
        u
      );
      return a && (p = a.remove(p)), p;
    };
    qt.exports = Pt;
  });
  var Ft = le((xe, De) => {
    var Ut = rt(),
      Zt = ot(),
      Gt = Bt();
    function Vt(e, t) {
      var r = new Gt(t);
      return r.process(e);
    }
    xe = De.exports = Vt;
    xe.filterXSS = Vt;
    xe.FilterXSS = Gt;
    (function () {
      for (var e in Ut) xe[e] = Ut[e];
      for (var t in Zt) xe[t] = Zt[t];
    })();
    typeof window < "u" && (window.filterXSS = De.exports);
    function Hn() {
      return (
        typeof self < "u" &&
        typeof DedicatedWorkerGlobalScope < "u" &&
        self instanceof DedicatedWorkerGlobalScope
      );
    }
    Hn() && (self.filterXSS = De.exports);
  });
  var Qt = on(Ft(), 1),
    re = unsafeWindow,
    A = re;
  function Re(e) {
    return new Proxy(e, {
      get(t, r) {
        return r === "then"
          ? (n) => (t.then(n), Re(t))
          : Re(t.then((n) => n[r]));
      },
    });
  }
  var M = (e, ...t) => re.console.log(`%c[exlg] ${e}`, "color: #0e90d2;", ...t),
    Q = (e, ...t) => re.console.warn(`%c[exlg] ${e}`, "color: #0e90d2;", ...t),
    U = (e, ...t) => {
      throw (
        (re.console.error(`%c[exlg] ${e}`, "color: #0e90d2;", ...t),
        Error(t.join(" ")))
      );
    },
    E,
    C;
  location.host === "www.luogu.com.cn" &&
    !/blog/g.test(location.href) &&
    (/(\?|&)_contentOnly($|=)/g.test(location.search) &&
      U("Content-Only pages."),
    re._feInjection.code !== 200 &&
      U("Luogu failed to load. Exlg stops loading."),
    (E = re._feInjection.currentData),
    (C = re._feInjection.currentUser));
  var Ht = (e) =>
      [
        e.ctrlKey ? "Ctrl" : "",
        e.shiftKey ? "Shift" : "",
        e.altKey ? "Alt" : "",
        e.key.toInitialCase(),
      ].join(""),
    g = jQuery.extend({ double: (e, t, r) => [e(t), e(r)] });
  jQuery.fn.extend({
    whenKey(e, t) {
      typeof e == "object"
        ? this.on("keydown", (r) => {
            let n = e[Ht(r)];
            n && n(r);
          })
        : this.on("keydown", (r) => {
            Ht(r) === e && t(r);
          });
    },
  });
  var me = new Qt.filterXSS.FilterXSS({
    onTagAttr: (e, t, r) => {
      if (t === "style") return `${t}="${r}"`;
    },
  });
  Date.prototype.format = function (e, t) {
    t = t ? "UTC" : "";
    let r = {
      "y+": this[`get${t}FullYear`](),
      "m+": this[`get${t}Month`]() + 1,
      "d+": this[`get${t}Date`](),
      "H+": this[`get${t}Hours`](),
      "M+": this[`get${t}Minutes`](),
      "S+": this[`get${t}Seconds`](),
      "s+": this[`get${t}Milliseconds`](),
    };
    for (let n in r)
      RegExp(`(${n})`).test(e) &&
        (e = e.replace(
          RegExp.$1,
          `000${r[n]}`.substr(r[n].toString().length + 3 - RegExp.$1.length)
        ));
    return e;
  };
  String.prototype.toInitialCase = function () {
    return this[0].toUpperCase() + this.slice(1);
  };
  var Jt = (e) => new Promise((t) => setTimeout(t, e)),
    pe = (e, t) => {
      if (!e) return "<<";
      let r = (c, a) => (c === a ? "==" : c < a ? "<<" : ">>"),
        n = ["pre", "alpha", "beta"],
        [[o, i], [s, l]] = [e, t].map((c) => c.split("-")),
        [d, u] =
          o === s
            ? [i, l].map((c) => [
                c ? n.findIndex((a) => c.startsWith(a)) : 1 / 0,
                c?.match(/[0-9]+$/g)?.[0] ?? 1 / 0,
              ])
            : [o, s].map((c) => c.split("."));
      for (let [c, a] of d.entries())
        if (a !== u[c]) return r(+a || 0, +u[c] || 0);
      return "==";
    },
    Pe = (e, t) => {
      let r = new URLSearchParams();
      for (let o in e) r.set(o, e[o]);
      let n = g(`
        <iframe id="exlg-${e.type}" src=" https://www.bilibili.com/robots.txt?${r}" style="${t}" exlg="exlg"></iframe>
    `);
      return M("Building springboard: %o", n[0]), n;
    },
    ne = ({ url: e, onload: t, onerror: r = (n) => U(n) }) =>
      GM_xmlhttpRequest({ url: e, method: "GET", onload: t, onerror: r }),
    st = (e, t = {}) => {
      let r = new Promise((n, o) => {
        GM_xmlhttpRequest({
          url: e,
          method: "GET",
          headers: t,
          onload: (i) => {
            try {
              i.data = JSON.parse(i.responseText);
            } catch {}
            n(i);
          },
          onerror: o,
        });
      });
      return Re(r);
    },
    K = (e, t, r = {}, n = "application/json") => {
      let o = new Promise((i, s) => {
        GM_xmlhttpRequest({
          url: e,
          method: "POST",
          data: typeof t != "string" ? JSON.stringify(t) : t,
          headers: {
            "Content-Type": typeof t == "string" ? n : "application/json",
            ...r,
          },
          onload: (l) => {
            try {
              l.data = JSON.parse(l.responseText);
            } catch {}
            i(l);
          },
          onerror: s,
        });
      });
      return Re(o);
    },
    W = (e = 1e3) => Math.floor(Date.now() / e),
    X = (e) =>
      new Promise((t, r) => {
        g.get(`${e + (e.includes("?") ? "&" : "?")}_contentOnly=1`, (n) => {
          n.code !== 200 && r(new Error(`Requesting failure code: ${t.code}.`)),
            t(n);
        });
      }),
    Wt = (e, t = "exlg 提醒您") =>
      re.show_alert
        ? re.show_alert(t, e)
        : re.alert(`${t}
${e}`),
    it = null,
    we = (e, t) =>
      g.ajax({
        url: e,
        data: t,
        headers: {
          "x-csrf-token":
            it === null
              ? (it = g("meta[name=csrf-token]").attr("content"))
              : it,
          "content-type": "application/json",
        },
        method: "post",
      }),
    ye = (e) =>
      [
        /^AT[1-9][0-9]{0,}$/i,
        /^CF[1-9][0-9]{0,}[A-Z][0-9]?$/i,
        /^SP[1-9][0-9]{0,}$/i,
        /^P[1-9][0-9]{3,}$/i,
        /^UVA[1-9][0-9]{2,}$/i,
        /^U[1-9][0-9]{0,}$/i,
        /^T[1-9][0-9]{0,}$/i,
        /^B[2-9][0-9]{3,}$/i,
      ].some((t) => t.test(e)),
    at = (e, t) => e.map((r) => ({ dft: r, ...t })),
    _e = (e) => (t) => {
      let r = t.target.querySelectorAll(e);
      return { result: Boolean(r?.length), args: r };
    },
    Xt = (e, t, r) => {
      let n = new Date().valueOf(),
        o = new BroadcastChannel(`${e}-ctrl`),
        i = new BroadcastChannel(`${e}-data`),
        s = !1,
        l,
        d,
        u = () => {
          (l = 0),
            o.postMessage(`Alive ${n}`),
            setTimeout(() => {
              l < n &&
                ((s = !0),
                o.postMessage("Victory"),
                g(re).on("unload", () => {
                  o.postMessage("Election");
                }),
                t(i));
            }, 1e3);
        };
      (o.onmessage = (c) => {
        let a = c.data;
        a === "Ping" && s
          ? o.postMessage("Pong")
          : a === "Pong"
          ? clearTimeout(d)
          : a === "Election"
          ? u()
          : a.split(" ")[0] === "Alive"
          ? (console.log(Number(a.split(" ")[1])),
            (l = Math.max(l, Number(a.split(" ")[1]))))
          : a === "Victory" && (s = !1);
      }),
        (i.onmessage = (c) => {
          r(c.data);
        }),
        o.postMessage("Ping"),
        (d = setTimeout(() => {
          o.postMessage("Election"), u();
        }, 1e3));
    };
  var de = {
    _: new Map(),
    reg: (e, t, r, n, o) => {
      de._.set(e, { description: t, alias: r, icon: n, unclosable: o });
    },
    alias: (e) => {
      let t = de._.get(e);
      return t ? t.alias : "";
    },
    register: () => {
      M("Registering categories"),
        de.reg("core", "核心", "@", "bug_report", !0),
        de.reg("module", "模块", "", "tunes", !1),
        de.reg("admin", "管理模块", "!", "build", !1),
        de.reg("chore", "定时任务", "^", "alarm", !0),
        de.reg("component", "组件", "#", "widgets", !0);
    },
  };
  de.register();
  var Y = de;
  var J = {};
  var lt = class {
      constructor() {
        this.fq = [];
      }
      push(...t) {
        this.fq = this.fq.concat(t);
      }
      apply() {
        this.fq.forEach((t) => t());
      }
    },
    Qn = Object.fromEntries(["onload", "preload"].map((e) => [e, new lt()])),
    ce = Qn;
  var $e = {
    _: new Map(),
    sto: null,
    reg: (e, t, r, n, o, i) => {
      let s = Y.alias("component") + e;
      return (
        (t = t.replaceAll(" ", "_")),
        (J[s] = {
          ty: "object",
          lvs: { on: { ty: "boolean", dft: !0 }, ...r },
        }),
        $e._.set(e, { info: t, pre: n, styl: i }),
        (...l) => o(...(r ? [{ msto: $e.sto[s] }] : []).concat(l))
      );
    },
  };
  ce.onload.push(() => {
    for (let [e, t] of $e._.entries())
      t.styl && GM_addStyle(t.styl),
        M(`Preparing component: ${e}`),
        t.pre && t.pre({ msto: $e.sto[Y.alias("component") + e] });
  });
  var oe = $e;
  var qe =
    '<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 136.14 30.56"><g transform="translate(1.755, 0)" fill="#00a0d8"><g><path d="M5.02-33.80L34.56-33.80L34.07-28.62L16.96-28.62L15.93-21.92L31.97-21.92L31.48-16.74L14.85-16.74L13.82-8.42L31.97-8.42L31.48-3.24L2.43-3.24L6.59-31.75L5.02-33.80Z" transform="translate(-4.14, 33.9)"></path><path d="M7.34-32.29L5.78-33.80L16.63-33.80L21.33-25.00L27.54-32.78L26.51-33.80L38.93-33.80L25.49-18.79L34.78-3.24L24.41-3.24L19.76-12.58L11.99-3.24L1.62-3.24L15.12-18.79L7.34-32.29Z" transform="translate(27.23, 33.9)"></path><path d="M4.00-33.80L16.42-33.80L12.80-8.42L32.99-8.42L32.51-3.24L5.56-3.24Q4.00-3.24 3.21-4.27Q2.43-5.29 2.43-6.86L2.43-6.86L5.56-31.75L4.00-33.80Z" transform="translate(63.8, 33.9)"></path><path d="M38.83-33.80L37.80-25.00L27.43-25.00L27.92-28.62L15.50-28.62L12.91-8.42L25.33-8.42L25.87-14.63L22.73-19.82L36.72-19.82L34.67-3.24L5.62-3.24Q4.86-3.24 4.21-3.51Q3.56-3.78 3.10-4.27Q2.65-4.75 2.48-5.43Q2.32-6.10 2.54-6.86L2.54-6.86L6.16-33.80L38.83-33.80Z" transform="translate(95.6, 33.9)"></path></g></g></svg>';
  var I = null,
    z = {
      _: new Map(),
      fake_sto: I,
      data: {},
      path_alias: [
        ["", ".*\\.luogu\\.(com\\.cn|org)"],
        ["dash", "dash.exlg.cc"],
        ["cdn", "cdn.luogu.com.cn"],
        ["bili", "www.bilibili.com"],
        ["tcs1", "service-ig5px5gh-1305163805.sh.apigw.tencentcs.com"],
        ["tcs2", "service-nd5kxeo3-1305163805.sh.apigw.tencentcs.com"],
        ["tcs3", "service-otgstbe5-1305163805.sh.apigw.tencentcs.com"],
        ["debug", "localhost:1634"],
        ["ghpage", "extend-luogu.github.io"],
      ].map(([e, t]) => [new RegExp(`^@${e}/`), t]),
      pth_modify: (e) => (
        Array.isArray(e) || (e = [e]),
        e.map(
          (t) => (
            z.path_alias.some(([r, n]) =>
              t.match(r) ? ((t = t.replace(r, `${n}/`)), !0) : !1
            ),
            t.endsWith("$") || (t += "$"),
            t
          )
        )
      ),
      path_dash_board: [
        "@dash/((index|bundle)(.html)?)?",
        "@ghpage/exlg-setting-new/((index|bundle)(.html)?)?",
        "@debug/((index|bundle).html)?",
      ],
      reg: (e, t, r, n, o, i, s) => {
        r = z.pth_modify(r);
        let l = Y.alias(s) + e;
        (z.data[l] = { ty: "object", lvs: n || {} }),
          "on" in z.data[l].lvs ||
            (z.data[l].lvs.on = { ty: "boolean", dft: !0 }),
          (J[l] = z.data[l]),
          (t = t.replaceAll(" ", "_")),
          z._.set(e, { info: t, path: r, func: o, styl: i, cate: s });
      },
      _regv2_invoker: (e, t) => {
        let r = (o, i) => {
          if (typeof i == "object" && o in i) return i[o];
        };
        e = z.pth_modify(e);
        let n = (o, i, s, l) => {
          i = i ? z.pth_modify(i) : [];
          let d = r(o, t.private);
          r("on", d) !== !1 &&
            i.concat(e).some((c) => RegExp(c).test(location.href)) &&
            ce[s].push((...c) => l({ msto: d, gsto: t.public }, ...c));
        };
        return {
          onload: ({ name: o, path: i }, s, l) => n(o, i, "onload", l),
          preload: ({ name: o, path: i }, s, l) => n(o, i, "preload", l),
          chore: ({ name: o, period: i }, s, l) => {
            if (typeof i == "string") {
              let d = +i.slice(0, -1),
                u = {
                  s: 1e3,
                  m: 1e3 * 60,
                  h: 1e3 * 60 * 60,
                  D: 1e3 * 60 * 60 * 24,
                }[i.slice(-1)];
              !isNaN(d) && u ? (i = d * u) : U(`Parsing period failed: "${i}"`);
            }
            n(o, "@/.*", "preload", async (d) => {
              let u = d.msto.last_chore,
                c = W(1);
              !u || c - u > i
                ? (await l(d))
                  ? Q(`Chore failed: "${o}"`)
                  : (d.msto.last_chore = W(1))
                : M(`Pending chore: "${o}"`);
            });
          },
          hook: ({ name: o, path: i }, s, l, d) =>
            n(o, i, "preload", (u) => {
              document
                .querySelector("body")
                .addEventListener("DOMNodeInserted", (c) => {
                  if (!c.target.tagName) return !1;
                  let a = d(c);
                  return a.result && l({ ...u, ...a });
                });
            }),
        };
      },
      reg_v2: ({ name: e, info: t, path: r, cate: n }, o, i, s) => {
        t = t.replaceAll(" ", "_");
        let l = {},
          d = [],
          u = (x, ...h) =>
            (l = Object.fromEntries(
              Object.entries(l).concat(
                Object.entries(x).map(([m, b]) => {
                  let w = b.migration === !0 ? m : b.migration;
                  return d.push([w, h.concat(m)]), [w, { ...b, priv: !0 }];
                })
              )
            )),
          c = Y.alias(n) + e,
          a = Object.entries(o ?? {}).filter(([x]) => x !== "on");
        u(a, "public"),
          (J[c] = {
            ty: "object",
            lvs: {
              ...(a && {
                public: { ty: "object", lvs: Object.fromEntries(a) },
              }),
              private: { ty: "object", lvs: {} },
              on: { ty: "boolean", dft: o?.on?.dft ?? !0 },
            },
          });
        let p = [];
        i(
          ((x) => {
            let h = (m, b) => {
              b &&
                ((x.private.lvs[m] = { ty: "object", lvs: b }),
                u(b, "private", m));
            };
            return new Proxy(
              {
                onload: (m, b) => h(m.name, b),
                preload: (m, b) => h(m.name, b),
                chore: (m, b) =>
                  h(m.name, {
                    ...b,
                    last_chore: { ty: "number", dft: -1, priv: !0 },
                  }),
                hook: (m, b) => h(m.name, b),
              },
              {
                get:
                  (m, b) =>
                  (...w) => {
                    p.push([b, ...w]), m[b](...w);
                  },
              }
            );
          })(J[c].lvs)
        ),
          (J[c].lvs = { ...J[c].lvs, ...l }),
          z._.set(e, {
            info: t,
            path: z.pth_modify(r),
            data: o,
            func: i,
            subfuncs: p,
            migrlist: d,
            styl: s,
            cate: n,
          });
      },
      reg_main: (e, t, r, n, o, i) =>
        z.reg(e, t, r, n, (s) => (o(s), !1), i, "core"),
      reg_user_tab: (e, t, r, n, o, i, s, l) =>
        z.reg(
          e,
          t,
          "@/user/.*",
          o,
          (d) => {
            let u = g(".items"),
              c = () => {
                (location.hash || "#main") === `#${r}` &&
                  (M(`Working user tab#${r} mod: "${e}"`),
                  i({ ...d, vars: n }));
              };
            u.on("click", c), c();
          },
          s,
          l
        ),
      reg_chore: (e, t, r, n, o, i, s) => {
        if (typeof r == "string") {
          let l = +r.slice(0, -1),
            d = {
              s: 1e3,
              m: 1e3 * 60,
              h: 1e3 * 60 * 60,
              D: 1e3 * 60 * 60 * 24,
            }[r.slice(-1)];
          !isNaN(l) && d ? (r = l * d) : U(`Parsing period failed: "${r}"`);
        }
        (o = { ...o, last_chore: { ty: "number", dft: -1, priv: !0 } }),
          z.reg(
            e,
            t,
            n,
            o,
            async (l) => {
              let d = I[`^${e}`].last_chore,
                u = W(1),
                c = !0;
              l.named || !d || u - d > r
                ? (c && (GM_addStyle(s), (c = !1)),
                  (await i(l))
                    ? Q(`Chore failed: "${e}"`)
                    : (I[`^${e}`].last_chore = W(1)))
                : M(`Pending chore: "${e}"`);
            },
            null,
            "chore"
          );
      },
      reg_board: (e, t, r, n, o, i) =>
        z.reg(
          e,
          t,
          "@/",
          r,
          (s) => {
            let l = g("#exlg-board");
            l.length ||
              ((l = g(`
                    <div class="lg-article" id="exlg-board" exlg="exlg"><h2>${qe} &nbsp;&nbsp;${GM_info.script.version}</h2></div>
                `).prependTo(".lg-right.am-u-md-4")),
              (l[0].firstChild.style["font-size"] = "1em")),
              n({ ...s, $board: g("<div></div>").appendTo(l) });
          },
          o,
          i
        ),
      reg_hook_new: (e, t, r, n, o, i, s, l, d) =>
        z.reg(
          e,
          t,
          r,
          n,
          (u) => {
            o({ ...u, result: !1, args: s() }),
              g("body").bind("DOMNodeInserted", (c) => {
                if (!c.target.tagName) return !1;
                let a = i(c);
                return a.result && o({ ...u, ...a });
              });
          },
          l,
          d
        ),
      reg_lfe: (e, t, r, n, o, i, s) => {
        z.reg(e, t, r, n, o, i, s), z._.set(e, { lfe: !0, ...z._.get(e) });
      },
      find: (e) => z._.get(e),
      has: (e) => z._.has(e),
      disable: (e) => {
        let t = z.find(e);
        (t.on = !1), z._.set(e, t);
      },
      enable: (e) => {
        let t = z.find(e);
        (t.on = !0), z._.set(e, t);
      },
      execute_v2: () => {
        for (let [e, t] of z._.entries()) {
          let r = Y.alias(t.cate) + e;
          if (I[r].on && (t.styl && GM_addStyle(t.styl), t.subfuncs)) {
            if (Array.isArray(t.migrlist)) {
              for (let [o, i] of t.migrlist)
                if (I[r][o] !== J[r].lvs[o].dft) {
                  let s = I[r],
                    l = i.slice(0, -1);
                  for (let d of l) s = s[d];
                  (s[i.at(-1)] = I[r][o]), (I[r][o] = J[r].lvs[o].dft);
                }
            }
            let n = z._regv2_invoker(t.path, I[r]);
            for (let o of t.subfuncs)
              M(`Executing "${o[1].name}" of "${e}"`), n[o[0]](...o.slice(1));
          }
        }
      },
      preload: () => {
        I === null && (I = z.fake_sto);
        let e = location.href;
        for (let [r, n] of z._.entries())
          I[Y.alias(n.cate) + r].on &&
            n.path.some((o) => new RegExp(o, "g").test(e)) &&
            ((n.willrun = !0), z._.set(r, n));
        let t = console.info.bind({});
        A.console.info = (...r) => {
          let n = t(...r);
          if ((M(`info hooked: ${r.join(" ")}`), r[0] === "[@lfe/loader]"))
            for (let [o, i] of z._.entries())
              I[Y.alias(i.cate) + o].on &&
                i.path.some((s) => new RegExp(s, "g").test(e)) &&
                "lfe" in i &&
                (z.execute(o), M(`loading lfe module: ${o}`));
          return n;
        };
      },
      execute: (e) => {
        let t = (r, n) => {
          r || U(`Executing named mod but not found: "${e}"`),
            M(`Executing ${n ? "named " : ""}mod: "${r.name}"`);
          try {
            return r.func({ msto: I[Y.alias(r.cate) + r.name], named: n });
          } catch (o) {
            Q(o);
          }
        };
        if (e) {
          let r = z.find(e);
          return t({ name: e, ...r }, !0);
        }
        for (let [r, n] of z._.entries())
          if (
            ((n.on = I[Y.alias(n.cate) + r].on),
            n.willrun && !n.subfuncs && t({ name: r, ...n }) === !1)
          )
            break;
      },
    };
  ce.onload.push(z.execute);
  var v = z;
  v.reg_v2(
    {
      name: "auto-o2",
      info: "自动开启 O2",
      path: "@/problem/[A-Z0-9]+(#.*)?",
      cate: "module",
    },
    {
      on: { ty: "boolean", dft: !1 },
      mode: {
        ty: "enum",
        dft: "lastSubmitted",
        vals: ["lastSubmitted", "lastChecked", "always"],
        info: ["Mode", "模式"],
      },
      last_enabled: { ty: "boolean", dft: !1, priv: !0 },
    },
    (e) => {
      e.hook(
        { name: "submit-detector", info: "提交检测" },
        null,
        ({ gsto: t, args: r }) => {
          t.mode === "lastSubmitted" &&
            g(r).on("click", () => {
              t.last_enabled = g("input[id^=check]").is(":checked");
            });
        },
        _e("button[data-v-01cd4e24]")
      ),
        e.hook(
          { name: "o2-checker", info: "钩取开启 o2" },
          null,
          ({ gsto: t, args: r }) => {
            t.mode === "lastChecked" && g(r).off("click"),
              (t.mode === "always" ||
                (t.mode === "lastChecked" && t.last_enabled)) &&
                g(r).trigger("click"),
              t.mode === "lastChecked" &&
                g(r).on("click", (n) => {
                  t.last_enabled = n.currentTarget.checked;
                });
          },
          _e("input[id^=check]")
        );
    }
  );
  function or() {
    return {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
  }
  var ve = or();
  function Wn(e) {
    ve = e;
  }
  var Xn = /[&<>"']/,
    Yn = /[&<>"']/g,
    Kn = /[<>"']|&(?!#?\w+;)/,
    eo = /[<>"']|&(?!#?\w+;)/g,
    to = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    Yt = (e) => to[e];
  function B(e, t) {
    if (t) {
      if (Xn.test(e)) return e.replace(Yn, Yt);
    } else if (Kn.test(e)) return e.replace(eo, Yt);
    return e;
  }
  var ro = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function ir(e) {
    return e.replace(
      ro,
      (t, r) => (
        (r = r.toLowerCase()),
        r === "colon"
          ? ":"
          : r.charAt(0) === "#"
          ? r.charAt(1) === "x"
            ? String.fromCharCode(parseInt(r.substring(2), 16))
            : String.fromCharCode(+r.substring(1))
          : ""
      )
    );
  }
  var no = /(^|[^\[])\^/g;
  function D(e, t) {
    (e = typeof e == "string" ? e : e.source), (t = t || "");
    let r = {
      replace: (n, o) => (
        (o = o.source || o), (o = o.replace(no, "$1")), (e = e.replace(n, o)), r
      ),
      getRegex: () => new RegExp(e, t),
    };
    return r;
  }
  var oo = /[^\w:]/g,
    io = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function Kt(e, t, r) {
    if (e) {
      let n;
      try {
        n = decodeURIComponent(ir(r)).replace(oo, "").toLowerCase();
      } catch {
        return null;
      }
      if (
        n.indexOf("javascript:") === 0 ||
        n.indexOf("vbscript:") === 0 ||
        n.indexOf("data:") === 0
      )
        return null;
    }
    t && !io.test(r) && (r = co(t, r));
    try {
      r = encodeURI(r).replace(/%25/g, "%");
    } catch {
      return null;
    }
    return r;
  }
  var Be = {},
    so = /^[^:]+:\/*[^/]*$/,
    ao = /^([^:]+:)[\s\S]*$/,
    lo = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function co(e, t) {
    Be[" " + e] ||
      (so.test(e) ? (Be[" " + e] = e + "/") : (Be[" " + e] = Ue(e, "/", !0))),
      (e = Be[" " + e]);
    let r = e.indexOf(":") === -1;
    return t.substring(0, 2) === "//"
      ? r
        ? t
        : e.replace(ao, "$1") + t
      : t.charAt(0) === "/"
      ? r
        ? t
        : e.replace(lo, "$1") + t
      : e + t;
  }
  var Ze = { exec: function () {} };
  function ae(e) {
    let t = 1,
      r,
      n;
    for (; t < arguments.length; t++) {
      r = arguments[t];
      for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }
  function er(e, t) {
    let r = e.replace(/\|/g, (i, s, l) => {
        let d = !1,
          u = s;
        for (; --u >= 0 && l[u] === "\\"; ) d = !d;
        return d ? "|" : " |";
      }),
      n = r.split(/ \|/),
      o = 0;
    if (
      (n[0].trim() || n.shift(),
      n.length > 0 && !n[n.length - 1].trim() && n.pop(),
      n.length > t)
    )
      n.splice(t);
    else for (; n.length < t; ) n.push("");
    for (; o < n.length; o++) n[o] = n[o].trim().replace(/\\\|/g, "|");
    return n;
  }
  function Ue(e, t, r) {
    let n = e.length;
    if (n === 0) return "";
    let o = 0;
    for (; o < n; ) {
      let i = e.charAt(n - o - 1);
      if (i === t && !r) o++;
      else if (i !== t && r) o++;
      else break;
    }
    return e.slice(0, n - o);
  }
  function go(e, t) {
    if (e.indexOf(t[1]) === -1) return -1;
    let r = e.length,
      n = 0,
      o = 0;
    for (; o < r; o++)
      if (e[o] === "\\") o++;
      else if (e[o] === t[0]) n++;
      else if (e[o] === t[1] && (n--, n < 0)) return o;
    return -1;
  }
  function sr(e) {
    e &&
      e.sanitize &&
      !e.silent &&
      console.warn(
        "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
      );
  }
  function tr(e, t) {
    if (t < 1) return "";
    let r = "";
    for (; t > 1; ) t & 1 && (r += e), (t >>= 1), (e += e);
    return r + e;
  }
  function rr(e, t, r, n) {
    let o = t.href,
      i = t.title ? B(t.title) : null,
      s = e[1].replace(/\\([\[\]])/g, "$1");
    if (e[0].charAt(0) !== "!") {
      n.state.inLink = !0;
      let l = {
        type: "link",
        raw: r,
        href: o,
        title: i,
        text: s,
        tokens: n.inlineTokens(s, []),
      };
      return (n.state.inLink = !1), l;
    }
    return { type: "image", raw: r, href: o, title: i, text: B(s) };
  }
  function po(e, t) {
    let r = e.match(/^(\s+)(?:```)/);
    if (r === null) return t;
    let n = r[1];
    return t
      .split(
        `
`
      )
      .map((o) => {
        let i = o.match(/^\s+/);
        if (i === null) return o;
        let [s] = i;
        return s.length >= n.length ? o.slice(n.length) : o;
      }).join(`
`);
  }
  var Le = class {
      constructor(t) {
        this.options = t || ve;
      }
      space(t) {
        let r = this.rules.block.newline.exec(t);
        if (r && r[0].length > 0) return { type: "space", raw: r[0] };
      }
      code(t) {
        let r = this.rules.block.code.exec(t);
        if (r) {
          let n = r[0].replace(/^ {1,4}/gm, "");
          return {
            type: "code",
            raw: r[0],
            codeBlockStyle: "indented",
            text: this.options.pedantic
              ? n
              : Ue(
                  n,
                  `
`
                ),
          };
        }
      }
      fences(t) {
        let r = this.rules.block.fences.exec(t);
        if (r) {
          let n = r[0],
            o = po(n, r[3] || "");
          return {
            type: "code",
            raw: n,
            lang: r[2] ? r[2].trim() : r[2],
            text: o,
          };
        }
      }
      heading(t) {
        let r = this.rules.block.heading.exec(t);
        if (r) {
          let n = r[2].trim();
          if (/#$/.test(n)) {
            let i = Ue(n, "#");
            (this.options.pedantic || !i || / $/.test(i)) && (n = i.trim());
          }
          let o = {
            type: "heading",
            raw: r[0],
            depth: r[1].length,
            text: n,
            tokens: [],
          };
          return this.lexer.inline(o.text, o.tokens), o;
        }
      }
      hr(t) {
        let r = this.rules.block.hr.exec(t);
        if (r) return { type: "hr", raw: r[0] };
      }
      blockquote(t) {
        let r = this.rules.block.blockquote.exec(t);
        if (r) {
          let n = r[0].replace(/^ *>[ \t]?/gm, "");
          return {
            type: "blockquote",
            raw: r[0],
            tokens: this.lexer.blockTokens(n, []),
            text: n,
          };
        }
      }
      list(t) {
        let r = this.rules.block.list.exec(t);
        if (r) {
          let n,
            o,
            i,
            s,
            l,
            d,
            u,
            c,
            a,
            p,
            f,
            x,
            h = r[1].trim(),
            m = h.length > 1,
            b = {
              type: "list",
              raw: "",
              ordered: m,
              start: m ? +h.slice(0, -1) : "",
              loose: !1,
              items: [],
            };
          (h = m ? `\\d{1,9}\\${h.slice(-1)}` : `\\${h}`),
            this.options.pedantic && (h = m ? h : "[*+-]");
          let w = new RegExp(`^( {0,3}${h})((?:[	 ][^\\n]*)?(?:\\n|$))`);
          for (
            ;
            t && ((x = !1), !(!(r = w.exec(t)) || this.rules.block.hr.test(t)));

          ) {
            if (
              ((n = r[0]),
              (t = t.substring(n.length)),
              (c = r[2].split(
                `
`,
                1
              )[0]),
              (a = t.split(
                `
`,
                1
              )[0]),
              this.options.pedantic
                ? ((s = 2), (f = c.trimLeft()))
                : ((s = r[2].search(/[^ ]/)),
                  (s = s > 4 ? 1 : s),
                  (f = c.slice(s)),
                  (s += r[1].length)),
              (d = !1),
              !c &&
                /^ *$/.test(a) &&
                ((n +=
                  a +
                  `
`),
                (t = t.substring(a.length + 1)),
                (x = !0)),
              !x)
            ) {
              let L = new RegExp(
                  `^ {0,${Math.min(
                    3,
                    s - 1
                  )}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`
                ),
                S = new RegExp(
                  `^ {0,${Math.min(
                    3,
                    s - 1
                  )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
                ),
                R = new RegExp(`^( {0,${Math.min(3, s - 1)}})(\`\`\`|~~~)`);
              for (
                ;
                t &&
                ((p = t.split(
                  `
`,
                  1
                )[0]),
                (c = p),
                this.options.pedantic &&
                  (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                !(
                  R.test(c) ||
                  this.rules.block.heading.test(c) ||
                  L.test(c) ||
                  S.test(t)
                ));

              ) {
                if (c.search(/[^ ]/) >= s || !c.trim())
                  f +=
                    `
` + c.slice(s);
                else if (!d)
                  f +=
                    `
` + c;
                else break;
                !d && !c.trim() && (d = !0),
                  (n +=
                    p +
                    `
`),
                  (t = t.substring(p.length + 1));
              }
            }
            b.loose || (u ? (b.loose = !0) : /\n *\n *$/.test(n) && (u = !0)),
              this.options.gfm &&
                ((o = /^\[[ xX]\] /.exec(f)),
                o &&
                  ((i = o[0] !== "[ ] "), (f = f.replace(/^\[[ xX]\] +/, "")))),
              b.items.push({
                type: "list_item",
                raw: n,
                task: !!o,
                checked: i,
                loose: !1,
                text: f,
              }),
              (b.raw += n);
          }
          (b.items[b.items.length - 1].raw = n.trimRight()),
            (b.items[b.items.length - 1].text = f.trimRight()),
            (b.raw = b.raw.trimRight());
          let k = b.items.length;
          for (l = 0; l < k; l++) {
            (this.lexer.state.top = !1),
              (b.items[l].tokens = this.lexer.blockTokens(b.items[l].text, []));
            let L = b.items[l].tokens.filter((R) => R.type === "space"),
              S = L.every((R) => {
                let j = R.raw.split(""),
                  O = 0;
                for (let H of j)
                  if (
                    (H ===
                      `
` && (O += 1),
                    O > 1)
                  )
                    return !0;
                return !1;
              });
            !b.loose &&
              L.length &&
              S &&
              ((b.loose = !0), (b.items[l].loose = !0));
          }
          return b;
        }
      }
      html(t) {
        let r = this.rules.block.html.exec(t);
        if (r) {
          let n = {
            type: "html",
            raw: r[0],
            pre:
              !this.options.sanitizer &&
              (r[1] === "pre" || r[1] === "script" || r[1] === "style"),
            text: r[0],
          };
          return (
            this.options.sanitize &&
              ((n.type = "paragraph"),
              (n.text = this.options.sanitizer
                ? this.options.sanitizer(r[0])
                : B(r[0])),
              (n.tokens = []),
              this.lexer.inline(n.text, n.tokens)),
            n
          );
        }
      }
      def(t) {
        let r = this.rules.block.def.exec(t);
        if (r) {
          r[3] && (r[3] = r[3].substring(1, r[3].length - 1));
          let n = r[1].toLowerCase().replace(/\s+/g, " ");
          return { type: "def", tag: n, raw: r[0], href: r[2], title: r[3] };
        }
      }
      table(t) {
        let r = this.rules.block.table.exec(t);
        if (r) {
          let n = {
            type: "table",
            header: er(r[1]).map((o) => ({ text: o })),
            align: r[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            rows:
              r[3] && r[3].trim()
                ? r[3].replace(/\n[ \t]*$/, "").split(`
`)
                : [],
          };
          if (n.header.length === n.align.length) {
            n.raw = r[0];
            let o = n.align.length,
              i,
              s,
              l,
              d;
            for (i = 0; i < o; i++)
              /^ *-+: *$/.test(n.align[i])
                ? (n.align[i] = "right")
                : /^ *:-+: *$/.test(n.align[i])
                ? (n.align[i] = "center")
                : /^ *:-+ *$/.test(n.align[i])
                ? (n.align[i] = "left")
                : (n.align[i] = null);
            for (o = n.rows.length, i = 0; i < o; i++)
              n.rows[i] = er(n.rows[i], n.header.length).map((u) => ({
                text: u,
              }));
            for (o = n.header.length, s = 0; s < o; s++)
              (n.header[s].tokens = []),
                this.lexer.inline(n.header[s].text, n.header[s].tokens);
            for (o = n.rows.length, s = 0; s < o; s++)
              for (d = n.rows[s], l = 0; l < d.length; l++)
                (d[l].tokens = []), this.lexer.inline(d[l].text, d[l].tokens);
            return n;
          }
        }
      }
      lheading(t) {
        let r = this.rules.block.lheading.exec(t);
        if (r) {
          let n = {
            type: "heading",
            raw: r[0],
            depth: r[2].charAt(0) === "=" ? 1 : 2,
            text: r[1],
            tokens: [],
          };
          return this.lexer.inline(n.text, n.tokens), n;
        }
      }
      paragraph(t) {
        let r = this.rules.block.paragraph.exec(t);
        if (r) {
          let n = {
            type: "paragraph",
            raw: r[0],
            text:
              r[1].charAt(r[1].length - 1) ===
              `
`
                ? r[1].slice(0, -1)
                : r[1],
            tokens: [],
          };
          return this.lexer.inline(n.text, n.tokens), n;
        }
      }
      text(t) {
        let r = this.rules.block.text.exec(t);
        if (r) {
          let n = { type: "text", raw: r[0], text: r[0], tokens: [] };
          return this.lexer.inline(n.text, n.tokens), n;
        }
      }
      escape(t) {
        let r = this.rules.inline.escape.exec(t);
        if (r) return { type: "escape", raw: r[0], text: B(r[1]) };
      }
      tag(t) {
        let r = this.rules.inline.tag.exec(t);
        if (r)
          return (
            !this.lexer.state.inLink && /^<a /i.test(r[0])
              ? (this.lexer.state.inLink = !0)
              : this.lexer.state.inLink &&
                /^<\/a>/i.test(r[0]) &&
                (this.lexer.state.inLink = !1),
            !this.lexer.state.inRawBlock &&
            /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
              ? (this.lexer.state.inRawBlock = !0)
              : this.lexer.state.inRawBlock &&
                /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) &&
                (this.lexer.state.inRawBlock = !1),
            {
              type: this.options.sanitize ? "text" : "html",
              raw: r[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(r[0])
                  : B(r[0])
                : r[0],
            }
          );
      }
      link(t) {
        let r = this.rules.inline.link.exec(t);
        if (r) {
          let n = r[2].trim();
          if (!this.options.pedantic && /^</.test(n)) {
            if (!/>$/.test(n)) return;
            let s = Ue(n.slice(0, -1), "\\");
            if ((n.length - s.length) % 2 === 0) return;
          } else {
            let s = go(r[2], "()");
            if (s > -1) {
              let d = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + s;
              (r[2] = r[2].substring(0, s)),
                (r[0] = r[0].substring(0, d).trim()),
                (r[3] = "");
            }
          }
          let o = r[2],
            i = "";
          if (this.options.pedantic) {
            let s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);
            s && ((o = s[1]), (i = s[3]));
          } else i = r[3] ? r[3].slice(1, -1) : "";
          return (
            (o = o.trim()),
            /^</.test(o) &&
              (this.options.pedantic && !/>$/.test(n)
                ? (o = o.slice(1))
                : (o = o.slice(1, -1))),
            rr(
              r,
              {
                href: o && o.replace(this.rules.inline._escapes, "$1"),
                title: i && i.replace(this.rules.inline._escapes, "$1"),
              },
              r[0],
              this.lexer
            )
          );
        }
      }
      reflink(t, r) {
        let n;
        if (
          (n = this.rules.inline.reflink.exec(t)) ||
          (n = this.rules.inline.nolink.exec(t))
        ) {
          let o = (n[2] || n[1]).replace(/\s+/g, " ");
          if (((o = r[o.toLowerCase()]), !o || !o.href)) {
            let i = n[0].charAt(0);
            return { type: "text", raw: i, text: i };
          }
          return rr(n, o, n[0], this.lexer);
        }
      }
      emStrong(t, r, n = "") {
        let o = this.rules.inline.emStrong.lDelim.exec(t);
        if (!o || (o[3] && n.match(/[\p{L}\p{N}]/u))) return;
        let i = o[1] || o[2] || "";
        if (!i || (i && (n === "" || this.rules.inline.punctuation.exec(n)))) {
          let s = o[0].length - 1,
            l,
            d,
            u = s,
            c = 0,
            a =
              o[0][0] === "*"
                ? this.rules.inline.emStrong.rDelimAst
                : this.rules.inline.emStrong.rDelimUnd;
          for (
            a.lastIndex = 0, r = r.slice(-1 * t.length + s);
            (o = a.exec(r)) != null;

          ) {
            if (((l = o[1] || o[2] || o[3] || o[4] || o[5] || o[6]), !l))
              continue;
            if (((d = l.length), o[3] || o[4])) {
              u += d;
              continue;
            } else if ((o[5] || o[6]) && s % 3 && !((s + d) % 3)) {
              c += d;
              continue;
            }
            if (((u -= d), u > 0)) continue;
            if (((d = Math.min(d, d + u + c)), Math.min(s, d) % 2)) {
              let f = t.slice(1, s + o.index + d);
              return {
                type: "em",
                raw: t.slice(0, s + o.index + d + 1),
                text: f,
                tokens: this.lexer.inlineTokens(f, []),
              };
            }
            let p = t.slice(2, s + o.index + d - 1);
            return {
              type: "strong",
              raw: t.slice(0, s + o.index + d + 1),
              text: p,
              tokens: this.lexer.inlineTokens(p, []),
            };
          }
        }
      }
      codespan(t) {
        let r = this.rules.inline.code.exec(t);
        if (r) {
          let n = r[2].replace(/\n/g, " "),
            o = /[^ ]/.test(n),
            i = /^ /.test(n) && / $/.test(n);
          return (
            o && i && (n = n.substring(1, n.length - 1)),
            (n = B(n, !0)),
            { type: "codespan", raw: r[0], text: n }
          );
        }
      }
      br(t) {
        let r = this.rules.inline.br.exec(t);
        if (r) return { type: "br", raw: r[0] };
      }
      del(t) {
        let r = this.rules.inline.del.exec(t);
        if (r)
          return {
            type: "del",
            raw: r[0],
            text: r[2],
            tokens: this.lexer.inlineTokens(r[2], []),
          };
      }
      autolink(t, r) {
        let n = this.rules.inline.autolink.exec(t);
        if (n) {
          let o, i;
          return (
            n[2] === "@"
              ? ((o = B(this.options.mangle ? r(n[1]) : n[1])),
                (i = "mailto:" + o))
              : ((o = B(n[1])), (i = o)),
            {
              type: "link",
              raw: n[0],
              text: o,
              href: i,
              tokens: [{ type: "text", raw: o, text: o }],
            }
          );
        }
      }
      url(t, r) {
        let n;
        if ((n = this.rules.inline.url.exec(t))) {
          let o, i;
          if (n[2] === "@")
            (o = B(this.options.mangle ? r(n[0]) : n[0])), (i = "mailto:" + o);
          else {
            let s;
            do (s = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
            while (s !== n[0]);
            (o = B(n[0])), n[1] === "www." ? (i = "http://" + o) : (i = o);
          }
          return {
            type: "link",
            raw: n[0],
            text: o,
            href: i,
            tokens: [{ type: "text", raw: o, text: o }],
          };
        }
      }
      inlineText(t, r) {
        let n = this.rules.inline.text.exec(t);
        if (n) {
          let o;
          return (
            this.lexer.state.inRawBlock
              ? (o = this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(n[0])
                    : B(n[0])
                  : n[0])
              : (o = B(this.options.smartypants ? r(n[0]) : n[0])),
            { type: "text", raw: n[0], text: o }
          );
        }
      }
    },
    $ = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: Ze,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
    };
  $._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  $._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  $.def = D($.def)
    .replace("label", $._label)
    .replace("title", $._title)
    .getRegex();
  $.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  $.listItemStart = D(/^( *)(bull) */)
    .replace("bull", $.bullet)
    .getRegex();
  $.list = D($.list)
    .replace(/bull/g, $.bullet)
    .replace(
      "hr",
      "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
    )
    .replace("def", "\\n+(?=" + $.def.source + ")")
    .getRegex();
  $._tag =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  $._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  $.html = D($.html, "i")
    .replace("comment", $._comment)
    .replace("tag", $._tag)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex();
  $.paragraph = D($._paragraph)
    .replace("hr", $.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("|lheading", "")
    .replace("|table", "")
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", $._tag)
    .getRegex();
  $.blockquote = D($.blockquote).replace("paragraph", $.paragraph).getRegex();
  $.normal = ae({}, $);
  $.gfm = ae({}, $.normal, {
    table:
      "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
  });
  $.gfm.table = D($.gfm.table)
    .replace("hr", $.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", $._tag)
    .getRegex();
  $.gfm.paragraph = D($._paragraph)
    .replace("hr", $.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("|lheading", "")
    .replace("table", $.gfm.table)
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", $._tag)
    .getRegex();
  $.pedantic = ae({}, $.normal, {
    html: D(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
    )
      .replace("comment", $._comment)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Ze,
    paragraph: D($.normal._paragraph)
      .replace("hr", $.hr)
      .replace(
        "heading",
        ` *#{1,6} *[^
]`
      )
      .replace("lheading", $.lheading)
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .getRegex(),
  });
  var _ = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: Ze,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst:
        /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd:
        /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: Ze,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
  };
  _._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
  _.punctuation = D(_.punctuation)
    .replace(/punctuation/g, _._punctuation)
    .getRegex();
  _.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  _.escapedEmSt = /\\\*|\\_/g;
  _._comment = D($._comment).replace("(?:-->|$)", "-->").getRegex();
  _.emStrong.lDelim = D(_.emStrong.lDelim)
    .replace(/punct/g, _._punctuation)
    .getRegex();
  _.emStrong.rDelimAst = D(_.emStrong.rDelimAst, "g")
    .replace(/punct/g, _._punctuation)
    .getRegex();
  _.emStrong.rDelimUnd = D(_.emStrong.rDelimUnd, "g")
    .replace(/punct/g, _._punctuation)
    .getRegex();
  _._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  _._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  _._email =
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  _.autolink = D(_.autolink)
    .replace("scheme", _._scheme)
    .replace("email", _._email)
    .getRegex();
  _._attribute =
    /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  _.tag = D(_.tag)
    .replace("comment", _._comment)
    .replace("attribute", _._attribute)
    .getRegex();
  _._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  _._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  _._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  _.link = D(_.link)
    .replace("label", _._label)
    .replace("href", _._href)
    .replace("title", _._title)
    .getRegex();
  _.reflink = D(_.reflink)
    .replace("label", _._label)
    .replace("ref", $._label)
    .getRegex();
  _.nolink = D(_.nolink).replace("ref", $._label).getRegex();
  _.reflinkSearch = D(_.reflinkSearch, "g")
    .replace("reflink", _.reflink)
    .replace("nolink", _.nolink)
    .getRegex();
  _.normal = ae({}, _);
  _.pedantic = ae({}, _.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g,
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g,
    },
    link: D(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", _._label)
      .getRegex(),
    reflink: D(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", _._label)
      .getRegex(),
  });
  _.gfm = ae({}, _.normal, {
    escape: D(_.escape).replace("])", "~|])").getRegex(),
    _extended_email:
      /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal:
      /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
  });
  _.gfm.url = D(_.gfm.url, "i")
    .replace("email", _.gfm._extended_email)
    .getRegex();
  _.breaks = ae({}, _.gfm, {
    br: D(_.br).replace("{2,}", "*").getRegex(),
    text: D(_.gfm.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  });
  function uo(e) {
    return e
      .replace(/---/g, "—")
      .replace(/--/g, "–")
      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
      .replace(/'/g, "’")
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
      .replace(/"/g, "”")
      .replace(/\.{3}/g, "…");
  }
  function nr(e) {
    let t = "",
      r,
      n,
      o = e.length;
    for (r = 0; r < o; r++)
      (n = e.charCodeAt(r)),
        Math.random() > 0.5 && (n = "x" + n.toString(16)),
        (t += "&#" + n + ";");
    return t;
  }
  var ie = class {
      constructor(t) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = t || ve),
          (this.options.tokenizer = this.options.tokenizer || new Le()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
        let r = { block: $.normal, inline: _.normal };
        this.options.pedantic
          ? ((r.block = $.pedantic), (r.inline = _.pedantic))
          : this.options.gfm &&
            ((r.block = $.gfm),
            this.options.breaks ? (r.inline = _.breaks) : (r.inline = _.gfm)),
          (this.tokenizer.rules = r);
      }
      static get rules() {
        return { block: $, inline: _ };
      }
      static lex(t, r) {
        return new ie(r).lex(t);
      }
      static lexInline(t, r) {
        return new ie(r).inlineTokens(t);
      }
      lex(t) {
        (t = t.replace(
          /\r\n|\r/g,
          `
`
        )),
          this.blockTokens(t, this.tokens);
        let r;
        for (; (r = this.inlineQueue.shift()); )
          this.inlineTokens(r.src, r.tokens);
        return this.tokens;
      }
      blockTokens(t, r = []) {
        this.options.pedantic
          ? (t = t.replace(/\t/g, "    ").replace(/^ +$/gm, ""))
          : (t = t.replace(
              /^( *)(\t+)/gm,
              (l, d, u) => d + "    ".repeat(u.length)
            ));
        let n, o, i, s;
        for (; t; )
          if (
            !(
              this.options.extensions &&
              this.options.extensions.block &&
              this.options.extensions.block.some((l) =>
                (n = l.call({ lexer: this }, t, r))
                  ? ((t = t.substring(n.raw.length)), r.push(n), !0)
                  : !1
              )
            )
          ) {
            if ((n = this.tokenizer.space(t))) {
              (t = t.substring(n.raw.length)),
                n.raw.length === 1 && r.length > 0
                  ? (r[r.length - 1].raw += `
`)
                  : r.push(n);
              continue;
            }
            if ((n = this.tokenizer.code(t))) {
              (t = t.substring(n.raw.length)),
                (o = r[r.length - 1]),
                o && (o.type === "paragraph" || o.type === "text")
                  ? ((o.raw +=
                      `
` + n.raw),
                    (o.text +=
                      `
` + n.text),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      o.text))
                  : r.push(n);
              continue;
            }
            if ((n = this.tokenizer.fences(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.heading(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.hr(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.blockquote(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.list(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.html(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.def(t))) {
              (t = t.substring(n.raw.length)),
                (o = r[r.length - 1]),
                o && (o.type === "paragraph" || o.type === "text")
                  ? ((o.raw +=
                      `
` + n.raw),
                    (o.text +=
                      `
` + n.raw),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      o.text))
                  : this.tokens.links[n.tag] ||
                    (this.tokens.links[n.tag] = {
                      href: n.href,
                      title: n.title,
                    });
              continue;
            }
            if ((n = this.tokenizer.table(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.lheading(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if (
              ((i = t),
              this.options.extensions && this.options.extensions.startBlock)
            ) {
              let l = 1 / 0,
                d = t.slice(1),
                u;
              this.options.extensions.startBlock.forEach(function (c) {
                (u = c.call({ lexer: this }, d)),
                  typeof u == "number" && u >= 0 && (l = Math.min(l, u));
              }),
                l < 1 / 0 && l >= 0 && (i = t.substring(0, l + 1));
            }
            if (this.state.top && (n = this.tokenizer.paragraph(i))) {
              (o = r[r.length - 1]),
                s && o.type === "paragraph"
                  ? ((o.raw +=
                      `
` + n.raw),
                    (o.text +=
                      `
` + n.text),
                    this.inlineQueue.pop(),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      o.text))
                  : r.push(n),
                (s = i.length !== t.length),
                (t = t.substring(n.raw.length));
              continue;
            }
            if ((n = this.tokenizer.text(t))) {
              (t = t.substring(n.raw.length)),
                (o = r[r.length - 1]),
                o && o.type === "text"
                  ? ((o.raw +=
                      `
` + n.raw),
                    (o.text +=
                      `
` + n.text),
                    this.inlineQueue.pop(),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      o.text))
                  : r.push(n);
              continue;
            }
            if (t) {
              let l = "Infinite loop on byte: " + t.charCodeAt(0);
              if (this.options.silent) {
                console.error(l);
                break;
              } else throw new Error(l);
            }
          }
        return (this.state.top = !0), r;
      }
      inline(t, r) {
        this.inlineQueue.push({ src: t, tokens: r });
      }
      inlineTokens(t, r = []) {
        let n,
          o,
          i,
          s = t,
          l,
          d,
          u;
        if (this.tokens.links) {
          let c = Object.keys(this.tokens.links);
          if (c.length > 0)
            for (
              ;
              (l = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null;

            )
              c.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) &&
                (s =
                  s.slice(0, l.index) +
                  "[" +
                  tr("a", l[0].length - 2) +
                  "]" +
                  s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; (l = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
          s =
            s.slice(0, l.index) +
            "[" +
            tr("a", l[0].length - 2) +
            "]" +
            s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; (l = this.tokenizer.rules.inline.escapedEmSt.exec(s)) != null; )
          s =
            s.slice(0, l.index) +
            "++" +
            s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        for (; t; )
          if (
            (d || (u = ""),
            (d = !1),
            !(
              this.options.extensions &&
              this.options.extensions.inline &&
              this.options.extensions.inline.some((c) =>
                (n = c.call({ lexer: this }, t, r))
                  ? ((t = t.substring(n.raw.length)), r.push(n), !0)
                  : !1
              )
            ))
          ) {
            if ((n = this.tokenizer.escape(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.tag(t))) {
              (t = t.substring(n.raw.length)),
                (o = r[r.length - 1]),
                o && n.type === "text" && o.type === "text"
                  ? ((o.raw += n.raw), (o.text += n.text))
                  : r.push(n);
              continue;
            }
            if ((n = this.tokenizer.link(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.reflink(t, this.tokens.links))) {
              (t = t.substring(n.raw.length)),
                (o = r[r.length - 1]),
                o && n.type === "text" && o.type === "text"
                  ? ((o.raw += n.raw), (o.text += n.text))
                  : r.push(n);
              continue;
            }
            if ((n = this.tokenizer.emStrong(t, s, u))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.codespan(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.br(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.del(t))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if ((n = this.tokenizer.autolink(t, nr))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if (!this.state.inLink && (n = this.tokenizer.url(t, nr))) {
              (t = t.substring(n.raw.length)), r.push(n);
              continue;
            }
            if (
              ((i = t),
              this.options.extensions && this.options.extensions.startInline)
            ) {
              let c = 1 / 0,
                a = t.slice(1),
                p;
              this.options.extensions.startInline.forEach(function (f) {
                (p = f.call({ lexer: this }, a)),
                  typeof p == "number" && p >= 0 && (c = Math.min(c, p));
              }),
                c < 1 / 0 && c >= 0 && (i = t.substring(0, c + 1));
            }
            if ((n = this.tokenizer.inlineText(i, uo))) {
              (t = t.substring(n.raw.length)),
                n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)),
                (d = !0),
                (o = r[r.length - 1]),
                o && o.type === "text"
                  ? ((o.raw += n.raw), (o.text += n.text))
                  : r.push(n);
              continue;
            }
            if (t) {
              let c = "Infinite loop on byte: " + t.charCodeAt(0);
              if (this.options.silent) {
                console.error(c);
                break;
              } else throw new Error(c);
            }
          }
        return r;
      }
    },
    Te = class {
      constructor(t) {
        this.options = t || ve;
      }
      code(t, r, n) {
        let o = (r || "").match(/\S*/)[0];
        if (this.options.highlight) {
          let i = this.options.highlight(t, o);
          i != null && i !== t && ((n = !0), (t = i));
        }
        return (
          (t =
            t.replace(/\n$/, "") +
            `
`),
          o
            ? '<pre><code class="' +
              this.options.langPrefix +
              B(o, !0) +
              '">' +
              (n ? t : B(t, !0)) +
              `</code></pre>
`
            : "<pre><code>" +
              (n ? t : B(t, !0)) +
              `</code></pre>
`
        );
      }
      blockquote(t) {
        return `<blockquote>
${t}</blockquote>
`;
      }
      html(t) {
        return t;
      }
      heading(t, r, n, o) {
        if (this.options.headerIds) {
          let i = this.options.headerPrefix + o.slug(n);
          return `<h${r} id="${i}">${t}</h${r}>
`;
        }
        return `<h${r}>${t}</h${r}>
`;
      }
      hr() {
        return this.options.xhtml
          ? `<hr/>
`
          : `<hr>
`;
      }
      list(t, r, n) {
        let o = r ? "ol" : "ul",
          i = r && n !== 1 ? ' start="' + n + '"' : "";
        return (
          "<" +
          o +
          i +
          `>
` +
          t +
          "</" +
          o +
          `>
`
        );
      }
      listitem(t) {
        return `<li>${t}</li>
`;
      }
      checkbox(t) {
        return (
          "<input " +
          (t ? 'checked="" ' : "") +
          'disabled="" type="checkbox"' +
          (this.options.xhtml ? " /" : "") +
          "> "
        );
      }
      paragraph(t) {
        return `<p>${t}</p>
`;
      }
      table(t, r) {
        return (
          r && (r = `<tbody>${r}</tbody>`),
          `<table>
<thead>
` +
            t +
            `</thead>
` +
            r +
            `</table>
`
        );
      }
      tablerow(t) {
        return `<tr>
${t}</tr>
`;
      }
      tablecell(t, r) {
        let n = r.header ? "th" : "td";
        return (
          (r.align ? `<${n} align="${r.align}">` : `<${n}>`) +
          t +
          `</${n}>
`
        );
      }
      strong(t) {
        return `<strong>${t}</strong>`;
      }
      em(t) {
        return `<em>${t}</em>`;
      }
      codespan(t) {
        return `<code>${t}</code>`;
      }
      br() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }
      del(t) {
        return `<del>${t}</del>`;
      }
      link(t, r, n) {
        if (
          ((t = Kt(this.options.sanitize, this.options.baseUrl, t)), t === null)
        )
          return n;
        let o = '<a href="' + B(t) + '"';
        return r && (o += ' title="' + r + '"'), (o += ">" + n + "</a>"), o;
      }
      image(t, r, n) {
        if (
          ((t = Kt(this.options.sanitize, this.options.baseUrl, t)), t === null)
        )
          return n;
        let o = `<img src="${t}" alt="${n}"`;
        return (
          r && (o += ` title="${r}"`), (o += this.options.xhtml ? "/>" : ">"), o
        );
      }
      text(t) {
        return t;
      }
    },
    Ge = class {
      strong(t) {
        return t;
      }
      em(t) {
        return t;
      }
      codespan(t) {
        return t;
      }
      del(t) {
        return t;
      }
      html(t) {
        return t;
      }
      text(t) {
        return t;
      }
      link(t, r, n) {
        return "" + n;
      }
      image(t, r, n) {
        return "" + n;
      }
      br() {
        return "";
      }
    },
    Ve = class {
      constructor() {
        this.seen = {};
      }
      serialize(t) {
        return t
          .toLowerCase()
          .trim()
          .replace(/<[!\/a-z].*?>/gi, "")
          .replace(
            /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
            ""
          )
          .replace(/\s/g, "-");
      }
      getNextSafeSlug(t, r) {
        let n = t,
          o = 0;
        if (this.seen.hasOwnProperty(n)) {
          o = this.seen[t];
          do o++, (n = t + "-" + o);
          while (this.seen.hasOwnProperty(n));
        }
        return r || ((this.seen[t] = o), (this.seen[n] = 0)), n;
      }
      slug(t, r = {}) {
        let n = this.serialize(t);
        return this.getNextSafeSlug(n, r.dryrun);
      }
    },
    se = class {
      constructor(t) {
        (this.options = t || ve),
          (this.options.renderer = this.options.renderer || new Te()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new Ge()),
          (this.slugger = new Ve());
      }
      static parse(t, r) {
        return new se(r).parse(t);
      }
      static parseInline(t, r) {
        return new se(r).parseInline(t);
      }
      parse(t, r = !0) {
        let n = "",
          o,
          i,
          s,
          l,
          d,
          u,
          c,
          a,
          p,
          f,
          x,
          h,
          m,
          b,
          w,
          k,
          L,
          S,
          R,
          j = t.length;
        for (o = 0; o < j; o++) {
          if (
            ((f = t[o]),
            this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[f.type] &&
              ((R = this.options.extensions.renderers[f.type].call(
                { parser: this },
                f
              )),
              R !== !1 ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(f.type)))
          ) {
            n += R || "";
            continue;
          }
          switch (f.type) {
            case "space":
              continue;
            case "hr": {
              n += this.renderer.hr();
              continue;
            }
            case "heading": {
              n += this.renderer.heading(
                this.parseInline(f.tokens),
                f.depth,
                ir(this.parseInline(f.tokens, this.textRenderer)),
                this.slugger
              );
              continue;
            }
            case "code": {
              n += this.renderer.code(f.text, f.lang, f.escaped);
              continue;
            }
            case "table": {
              for (a = "", c = "", l = f.header.length, i = 0; i < l; i++)
                c += this.renderer.tablecell(
                  this.parseInline(f.header[i].tokens),
                  { header: !0, align: f.align[i] }
                );
              for (
                a += this.renderer.tablerow(c),
                  p = "",
                  l = f.rows.length,
                  i = 0;
                i < l;
                i++
              ) {
                for (u = f.rows[i], c = "", d = u.length, s = 0; s < d; s++)
                  c += this.renderer.tablecell(this.parseInline(u[s].tokens), {
                    header: !1,
                    align: f.align[s],
                  });
                p += this.renderer.tablerow(c);
              }
              n += this.renderer.table(a, p);
              continue;
            }
            case "blockquote": {
              (p = this.parse(f.tokens)), (n += this.renderer.blockquote(p));
              continue;
            }
            case "list": {
              for (
                x = f.ordered,
                  h = f.start,
                  m = f.loose,
                  l = f.items.length,
                  p = "",
                  i = 0;
                i < l;
                i++
              )
                (w = f.items[i]),
                  (k = w.checked),
                  (L = w.task),
                  (b = ""),
                  w.task &&
                    ((S = this.renderer.checkbox(k)),
                    m
                      ? w.tokens.length > 0 && w.tokens[0].type === "paragraph"
                        ? ((w.tokens[0].text = S + " " + w.tokens[0].text),
                          w.tokens[0].tokens &&
                            w.tokens[0].tokens.length > 0 &&
                            w.tokens[0].tokens[0].type === "text" &&
                            (w.tokens[0].tokens[0].text =
                              S + " " + w.tokens[0].tokens[0].text))
                        : w.tokens.unshift({ type: "text", text: S })
                      : (b += S)),
                  (b += this.parse(w.tokens, m)),
                  (p += this.renderer.listitem(b, L, k));
              n += this.renderer.list(p, x, h);
              continue;
            }
            case "html": {
              n += this.renderer.html(f.text);
              continue;
            }
            case "paragraph": {
              n += this.renderer.paragraph(this.parseInline(f.tokens));
              continue;
            }
            case "text": {
              for (
                p = f.tokens ? this.parseInline(f.tokens) : f.text;
                o + 1 < j && t[o + 1].type === "text";

              )
                (f = t[++o]),
                  (p +=
                    `
` + (f.tokens ? this.parseInline(f.tokens) : f.text));
              n += r ? this.renderer.paragraph(p) : p;
              continue;
            }
            default: {
              let O = 'Token with "' + f.type + '" type was not found.';
              if (this.options.silent) {
                console.error(O);
                return;
              } else throw new Error(O);
            }
          }
        }
        return n;
      }
      parseInline(t, r) {
        r = r || this.renderer;
        let n = "",
          o,
          i,
          s,
          l = t.length;
        for (o = 0; o < l; o++) {
          if (
            ((i = t[o]),
            this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[i.type] &&
              ((s = this.options.extensions.renderers[i.type].call(
                { parser: this },
                i
              )),
              s !== !1 ||
                ![
                  "escape",
                  "html",
                  "link",
                  "image",
                  "strong",
                  "em",
                  "codespan",
                  "br",
                  "del",
                  "text",
                ].includes(i.type)))
          ) {
            n += s || "";
            continue;
          }
          switch (i.type) {
            case "escape": {
              n += r.text(i.text);
              break;
            }
            case "html": {
              n += r.html(i.text);
              break;
            }
            case "link": {
              n += r.link(i.href, i.title, this.parseInline(i.tokens, r));
              break;
            }
            case "image": {
              n += r.image(i.href, i.title, i.text);
              break;
            }
            case "strong": {
              n += r.strong(this.parseInline(i.tokens, r));
              break;
            }
            case "em": {
              n += r.em(this.parseInline(i.tokens, r));
              break;
            }
            case "codespan": {
              n += r.codespan(i.text);
              break;
            }
            case "br": {
              n += r.br();
              break;
            }
            case "del": {
              n += r.del(this.parseInline(i.tokens, r));
              break;
            }
            case "text": {
              n += r.text(i.text);
              break;
            }
            default: {
              let d = 'Token with "' + i.type + '" type was not found.';
              if (this.options.silent) {
                console.error(d);
                return;
              } else throw new Error(d);
            }
          }
        }
        return n;
      }
    };
  function T(e, t, r) {
    if (typeof e > "u" || e === null)
      throw new Error("marked(): input parameter is undefined or null");
    if (typeof e != "string")
      throw new Error(
        "marked(): input parameter is of type " +
          Object.prototype.toString.call(e) +
          ", string expected"
      );
    if (
      (typeof t == "function" && ((r = t), (t = null)),
      (t = ae({}, T.defaults, t || {})),
      sr(t),
      r)
    ) {
      let n = t.highlight,
        o;
      try {
        o = ie.lex(e, t);
      } catch (l) {
        return r(l);
      }
      let i = function (l) {
        let d;
        if (!l)
          try {
            t.walkTokens && T.walkTokens(o, t.walkTokens), (d = se.parse(o, t));
          } catch (u) {
            l = u;
          }
        return (t.highlight = n), l ? r(l) : r(null, d);
      };
      if (!n || n.length < 3 || (delete t.highlight, !o.length)) return i();
      let s = 0;
      T.walkTokens(o, function (l) {
        l.type === "code" &&
          (s++,
          setTimeout(() => {
            n(l.text, l.lang, function (d, u) {
              if (d) return i(d);
              u != null && u !== l.text && ((l.text = u), (l.escaped = !0)),
                s--,
                s === 0 && i();
            });
          }, 0));
      }),
        s === 0 && i();
      return;
    }
    try {
      let n = ie.lex(e, t);
      return t.walkTokens && T.walkTokens(n, t.walkTokens), se.parse(n, t);
    } catch (n) {
      if (
        ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
        t.silent)
      )
        return (
          "<p>An error occurred:</p><pre>" + B(n.message + "", !0) + "</pre>"
        );
      throw n;
    }
  }
  T.options = T.setOptions = function (e) {
    return ae(T.defaults, e), Wn(T.defaults), T;
  };
  T.getDefaults = or;
  T.defaults = ve;
  T.use = function (...e) {
    let t = ae({}, ...e),
      r = T.defaults.extensions || { renderers: {}, childTokens: {} },
      n;
    e.forEach((o) => {
      if (
        (o.extensions &&
          ((n = !0),
          o.extensions.forEach((i) => {
            if (!i.name) throw new Error("extension name required");
            if (i.renderer) {
              let s = r.renderers ? r.renderers[i.name] : null;
              s
                ? (r.renderers[i.name] = function (...l) {
                    let d = i.renderer.apply(this, l);
                    return d === !1 && (d = s.apply(this, l)), d;
                  })
                : (r.renderers[i.name] = i.renderer);
            }
            if (i.tokenizer) {
              if (!i.level || (i.level !== "block" && i.level !== "inline"))
                throw new Error("extension level must be 'block' or 'inline'");
              r[i.level]
                ? r[i.level].unshift(i.tokenizer)
                : (r[i.level] = [i.tokenizer]),
                i.start &&
                  (i.level === "block"
                    ? r.startBlock
                      ? r.startBlock.push(i.start)
                      : (r.startBlock = [i.start])
                    : i.level === "inline" &&
                      (r.startInline
                        ? r.startInline.push(i.start)
                        : (r.startInline = [i.start])));
            }
            i.childTokens && (r.childTokens[i.name] = i.childTokens);
          })),
        o.renderer)
      ) {
        let i = T.defaults.renderer || new Te();
        for (let s in o.renderer) {
          let l = i[s];
          i[s] = (...d) => {
            let u = o.renderer[s].apply(i, d);
            return u === !1 && (u = l.apply(i, d)), u;
          };
        }
        t.renderer = i;
      }
      if (o.tokenizer) {
        let i = T.defaults.tokenizer || new Le();
        for (let s in o.tokenizer) {
          let l = i[s];
          i[s] = (...d) => {
            let u = o.tokenizer[s].apply(i, d);
            return u === !1 && (u = l.apply(i, d)), u;
          };
        }
        t.tokenizer = i;
      }
      if (o.walkTokens) {
        let i = T.defaults.walkTokens;
        t.walkTokens = function (s) {
          o.walkTokens.call(this, s), i && i.call(this, s);
        };
      }
      n && (t.extensions = r), T.setOptions(t);
    });
  };
  T.walkTokens = function (e, t) {
    for (let r of e)
      switch ((t.call(T, r), r.type)) {
        case "table": {
          for (let n of r.header) T.walkTokens(n.tokens, t);
          for (let n of r.rows) for (let o of n) T.walkTokens(o.tokens, t);
          break;
        }
        case "list": {
          T.walkTokens(r.items, t);
          break;
        }
        default:
          T.defaults.extensions &&
          T.defaults.extensions.childTokens &&
          T.defaults.extensions.childTokens[r.type]
            ? T.defaults.extensions.childTokens[r.type].forEach(function (n) {
                T.walkTokens(r[n], t);
              })
            : r.tokens && T.walkTokens(r.tokens, t);
      }
  };
  T.parseInline = function (e, t) {
    if (typeof e > "u" || e === null)
      throw new Error(
        "marked.parseInline(): input parameter is undefined or null"
      );
    if (typeof e != "string")
      throw new Error(
        "marked.parseInline(): input parameter is of type " +
          Object.prototype.toString.call(e) +
          ", string expected"
      );
    (t = ae({}, T.defaults, t || {})), sr(t);
    try {
      let r = ie.lexInline(e, t);
      return (
        t.walkTokens && T.walkTokens(r, t.walkTokens), se.parseInline(r, t)
      );
    } catch (r) {
      if (
        ((r.message += `
Please report this to https://github.com/markedjs/marked.`),
        t.silent)
      )
        return (
          "<p>An error occurred:</p><pre>" + B(r.message + "", !0) + "</pre>"
        );
      throw r;
    }
  };
  T.Parser = se;
  T.parser = se.parse;
  T.Renderer = Te;
  T.TextRenderer = Ge;
  T.Lexer = ie;
  T.lexer = ie.lex;
  T.Tokenizer = Le;
  T.Slugger = Ve;
  T.parse = T;
  var ji = T.options,
    Oi = T.setOptions,
    Di = T.use,
    Ri = T.walkTokens,
    Pi = T.parseInline;
  var qi = se.parse,
    Bi = ie.lex;
  var ar =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="%" style="margin-bottom: -3px;" exlg="exlg"><path d="M16 8C16 6.84375 15.25 5.84375 14.1875 5.4375C14.6562 4.4375 14.4688 3.1875 13.6562 2.34375C12.8125 1.53125 11.5625 1.34375 10.5625 1.8125C10.1562 0.75 9.15625 0 8 0C6.8125 0 5.8125 0.75 5.40625 1.8125C4.40625 1.34375 3.15625 1.53125 2.34375 2.34375C1.5 3.1875 1.3125 4.4375 1.78125 5.4375C0.71875 5.84375 0 6.84375 0 8C0 9.1875 0.71875 10.1875 1.78125 10.5938C1.3125 11.5938 1.5 12.8438 2.34375 13.6562C3.15625 14.5 4.40625 14.6875 5.40625 14.2188C5.8125 15.2812 6.8125 16 8 16C9.15625 16 10.1562 15.2812 10.5625 14.2188C11.5938 14.6875 12.8125 14.5 13.6562 13.6562C14.4688 12.8438 14.6562 11.5938 14.1875 10.5938C15.25 10.1875 16 9.1875 16 8ZM11.4688 6.625L7.375 10.6875C7.21875 10.8438 7 10.8125 6.875 10.6875L4.5 8.3125C4.375 8.1875 4.375 7.96875 4.5 7.8125L5.3125 7C5.46875 6.875 5.6875 6.875 5.8125 7.03125L7.125 8.34375L10.1562 5.34375C10.3125 5.1875 10.5312 5.1875 10.6562 5.34375L11.4688 6.15625C11.5938 6.28125 11.5938 6.5 11.4688 6.625Z"></path></svg>';
  v.reg(
    "benben",
    "全网犇犇",
    "@/",
    {
      source: {
        ty: "enum",
        dft: "o2",
        vals: ["o2", "shy"],
        info: ["Source", "切换全网犇犇获取方式"],
      },
      reply_with_md: {
        ty: "boolean",
        dft: !1,
        info: ["Reply with markdown", "回复时附上原 markdown"],
      },
    },
    ({ msto: e }) => {
      let t = {
          Gray: "gray",
          Blue: "bluelight",
          Green: "green",
          Orange: "orange lg-bold",
          Red: "red lg-bold",
          Purple: "purple lg-bold",
          Cheater: "brown lg-bold",
        },
        r =
          '&nbsp;<a class="sb_amazeui" target="_blank" href="/discuss/show/142324">$</a>',
        n = (s) =>
          s <= 3
            ? ""
            : r.replace(
                "$",
                ar.replace(
                  "%",
                  s <= 5 ? "#5eb95e" : s <= 7 ? "#3498db" : "#f1c40f"
                )
              ),
        o = A.loadFeed;
      A.loadFeed = function () {
        A.feedMode === "all-exlg"
          ? (ne({
              url:
                e.source === "o2"
                  ? "https://service-ig5px5gh-1305163805.sh.apigw.tencentcs.com/release/APIGWHtmlDemo-1615602121"
                  : `https://bens.rotriw.com/api/list/proxy?page=${A.feedPage}`,
              onload: (s) => {
                JSON.parse(s.response).forEach((d) => {
                  let u = T(me.process(d.content));
                  g(`
                <li class="am-comment am-comment-primary feed-li" exlg="exlg">
                    <div class="lg-left">
                        <a href="/user/${d.user.uid}" class="center">
                            <img src="https://cdn.luogu.com.cn/upload/usericon/${
                              d.user.uid
                            }.png" class="am-comment-avatar">
                        </a>
                    </div>
                    <div class="am-comment-main">
                        <header class="am-comment-hd">
                            <div class="am-comment-meta">
                                <span class="feed-username">
                                    <a class="lg-fg-${
                                      t[d.user.color]
                                    }" href="/user/${
                    d.user.uid
                  }" target="_blank">${d.user.name}</a>${n(d.user.ccfLevel)}${
                    d.user.badge
                      ? `&nbsp;<span class="am-badge am-radius lg-bg-${
                          t[d.user.color]
                        }">${d.user.badge}</span>`
                      : ""
                  }
                                </span>
                                ${new Date(d.time * 1e3).format(
                                  "yyyy-mm-dd HH:MM"
                                )}
                                <a name="feed-reply">回复</a>
                            </div>
                        </header>
                        <div class="am-comment-bd">
                            <span class="feed-comment">
                                ${u}
                            </span>
                        </div>
                    </div>
                </li>
            `)
                    .appendTo(g("ul#feed"))
                    .find("a[name=feed-reply]")
                    .on("click", () => {
                      scrollToId("feed-content"),
                        setTimeout(
                          () =>
                            g("textarea")
                              .trigger("focus")
                              .val(
                                ` || @${d.user.name} : ${
                                  e.reply_with_md ? d.content : g(u).text()
                                }`
                              )
                              .trigger("input"),
                          50
                        );
                    });
                });
              },
            }),
            e.source === "shy" &&
              (A.feedPage++,
              g("#feed-more").children("a").text("点击查看更多...")))
          : o();
      };
      let i = g(".feed-selector");
      g("")
        .appendTo(i.parent())
        .on("click", (s) => {
          let l = g(s.currentTarget);
          i.removeClass("am-active"),
            l.addClass("am-active"),
            e.source === "o2" && g("#feed-more").hide(),
            (A.feedPage = 1),
            (A.feedMode = "all-exlg"),
            g("li.am-comment").remove(),
            A.loadFeed();
        });
    },
    null,
    "module"
  );
  v.reg(
    "benben-quickpost",
    "CtrlEnter 发送犇犇",
    "@/",
    null,
    () =>
      g("textarea").whenKey("CtrlEnter", () =>
        g("#feed-submit").trigger("click")
      ),
    null,
    "module"
  );
  v.reg_v2(
    {
      name: "blog",
      info: "博客 ex",
      path: ["@/blogAdmin/article/edit/.*", "@/blogAdmin/article/new"],
      cate: "module",
    },
    null,
    (e) => {
      e.onload(
        { name: "format", info: "按照洛谷题解标准格式化" },
        {
          on: {
            ty: "boolean",
            dft: !0,
            info: ["Enable format", "显示格式化按钮"],
            migration: "format",
          },
          cloud: {
            ty: "boolean",
            dft: !0,
            info: ["Enable cloud format", "启用云格式化"],
            migration: !0,
          },
        },
        ({ msto: t }) => {
          let r = g(".mp-editor-menu");
          r.append(
            '<li data-v-6d5597b1="" class="mp-divider"><span data-v-6d5597b1="">|</span></li>'
          ),
            r.append(
              g('<li data-v-6d5597b1=""></li>').append(
                g(
                  '<a data-v-6d5597b1="" title="自动排版" unslectable="on" class="exlg-format-btn"></a>'
                ).append(
                  '<i data-v-6d5597b1="" unslectable="on" class="fa fa-check"></i>'
                )
              )
            ),
            g(".exlg-format-btn").on("click", async () => {
              let n = A.articleEditor.content;
              t.cloud
                ? (n = await K("https://exlgcs.jin-dan.site/autocorrect", {
                    content: n,
                  }).data.data)
                : ((n = n.replaceAll(/([\u4e00-\u9fa5])([a-z])/giu, "$1 $2")),
                  (n = n.replaceAll(/([a-z])([\u4e00-\u9fa5])/giu, "$1 $2")),
                  (n = n.replaceAll(/([\u4e00-\u9fa5])(\$)/giu, "$1 $2")),
                  (n = n.replaceAll(/(\$)([\u4e00-\u9fa5])/giu, "$1 $2"))),
                (A.articleEditor.content = n);
            });
        }
      ),
        e.onload(
          { name: "hotkeys", info: "编辑快捷键" },
          {
            on: {
              ty: "boolean",
              dft: !0,
              info: ["Enable hotkeys", "快捷键"],
              migration: "hotkeys",
            },
          },
          () => {
            g(A).whenKey({
              CtrlB: () => g("a[title='粗体']")[0].click(),
              CtrlI: () => g("a[title='斜体']")[0].click(),
              CtrlShiftX: () => g("a[title='删除线']")[0].click(),
            });
          }
        );
    }
  );
  var lr =
    ".bb-rnkitm:nth-child(1)::marker{color:var(--lg-red);font-weight:900}.bb-rnkitm:nth-child(2)::marker{color:var(--lg-orange);font-weight:900}.bb-rnkitm:nth-child(3)::marker{color:var(--lg-yellow);font-weight:900}.bb-rnkitm>span{display:flex;flex-wrap:wrap}.bb-rnkitm>span>span{margin-left:auto}.bb-rnklst-span{font-size:1em;font-weight:400}.btn-disable{pointer-events:none;color:#97979a}";
  var cr =
    '<h3>查找用户</h3><div class="am-input-group am-input-group-primary am-input-group-sm">	<input type="text" class="am-form-field" placeholder="例：kkksc03，可跳转站长主页" name="username" id="search-user-input"></div><p>	<button class="am-btn am-btn-danger am-btn-sm" id="search-user">跳转</button></p>';
  var dr =
    "input[exlg-badge-register],select[exlg-badge-register]{outline:none;display:inline-block;width:auto;padding:.5em;line-height:1.2;color:#555;vertical-align:middle;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:0;-webkit-appearance:none;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}input[exlg-badge-register][disabled]{cursor:not-allowed;background-color:#eee}input[exlg-badge-register]:focus{border:1px solid #3bb4f2}body{margin:0}.exlg-dialog-footer{bottom:0;position:absolute;right:0;padding:10px 6px}.exlg-dialog-container.container-show:hover>.exlg-dialog-btn{background:rgba(255,255,255,.8)}.exlg-dialog-btn{margin:0 4px;float:right;color:#666;min-width:75px;cursor:pointer;background:rgba(255,255,255,.2);padding:7px 10px;border:1px solid #ddd;border-radius:3px}.exlg-dialog-container.container-hide{opacity:0}.exlg-dialog-container.container-show:hover{background:rgba(250,250,250,.8);box-shadow:0 2px 8px #0006;opacity:1}.exlg-dialog-container{filter:blur(0);position:relative;opacity:.75;background:rgba(204,204,204,.2);width:500px;min-height:300px;border-radius:5px;margin:0 auto;box-shadow:0 2px 8px #00000040;font-size:16px;line-height:1.5;backdrop-filter:blur(20px)}.exlg-dialog-wrapper{position:fixed;left:0;top:0;background:rgba(0,0,0,0);width:100%;height:100%;align-items:center;display:table-cell;z-index:150}.exlg-dialog-header{height:auto;border-bottom:1px solid #eee;padding:11px 20px}.exlg-dialog-body{text-align:center;margin-bottom:50px;padding:20px 30px 10px;line-height:2}#header-right{position:absolute;width:30px;height:30px;border-radius:5px;background:rgba(0,0,0,0);color:red;right:10px;top:10px;text-align:center}";
  var gr =
    '<div class="exlg-dialog-wrapper" id="exlg-wrapper" style="display: none;"><div class="exlg-dialog-container container-hide" id="exlg-container"><div class="exlg-dialog-header"><strong id="exlg-dialog-title"></strong><div id="header-right" style="opacity: 0.5;"><svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5446"><path d="M512 128c-211.7 0-384 172.3-384 384s172.3 384 384 384 384-172.3 384-384-172.3-384-384-384z m0 717.4c-183.8 0-333.4-149.6-333.4-333.4S328.2 178.6 512 178.6 845.4 328.2 845.4 512 695.8 845.4 512 845.4zM651.2 372.8c-9.9-9.9-25.9-9.9-35.8 0L512 476.2 408.6 372.8c-9.9-9.9-25.9-9.9-35.8 0-9.9 9.9-9.9 25.9 0 35.8L476.2 512 372.8 615.4c-9.9 9.9-9.9 25.9 0 35.8 4.9 4.9 11.4 7.4 17.9 7.4s13-2.5 17.9-7.4L512 547.8l103.4 103.4c4.9 4.9 11.4 7.4 17.9 7.4s13-2.5 17.9-7.4c9.9-9.9 9.9-25.9 0-35.8L547.8 512l103.4-103.4c9.9-9.9 9.9-25.9 0-35.8z" p-id="5447"></path></svg></div></div><div class="exlg-dialog-body"><div id="exlg-dialog-content"></div><div class="exlg-dialog-footer"><button class="exlg-dialog-btn" btn-rnk="0"></button><button class="exlg-dialog-btn" btn-rnk="1"></button></div></div></div></div>';
  var pr = (e) =>
      new Promise((t) => {
        setTimeout(t, e);
      }),
    q = {},
    wo = oe.reg(
      "exlg-dialog-board",
      "exlg 公告板",
      {
        animation_speed: {
          ty: "enum",
          dft: ".4s",
          vals: ["0s", ".1s", ".25s", ".4s"],
          info: ["Speed of Board Animation", "启动消失动画速度"],
        },
        confirm_position: {
          ty: "enum",
          dft: "left",
          vals: ["left", "right"],
          info: ["Position of Confirm Button", "确定按钮相对位置"],
        },
      },
      ({ msto: e }) => {
        let t = !1,
          r = g(gr)
            .appendTo(g(document.body))
            .on("mouseup", () => {
              t = !1;
            }),
          [n, o, i, s] = [
            "#exlg-container",
            "#exlg-dialog-title",
            "#exlg-dialog-content",
            "#header-right",
          ].map((a) => r.find(a)),
          [l, d] = (e.confirm_position === "right" ? [0, 1] : [1, 0]).map((a) =>
            r.find(`button[btn-rnk="${a}"]`)
          );
        l.text("确定"),
          d.text("取消"),
          l.on("click", async () => {
            let a = q.action.onconfirm?.(q);
            ((a instanceof Promise ? await a : a) ?? !0) && q.hide_dialog(),
              q.resolve_result("confirmed");
          }),
          d.on("click", async () => {
            let a = q.action.oncancel?.(q);
            ((a instanceof Promise ? await a : a) ?? !0) && q.hide_dialog(),
              q.resolve_result("canceled");
          }),
          s.on("click", async () => {
            let a = q.action.onclose?.(q);
            ((a instanceof Promise ? await a : a) ?? !0) && q.hide_dialog(),
              q.resolve_result("closed");
          }),
          n.on("click", (a) => a.stopPropagation()),
          n.on("mousedown", (a) => (t = !0) && a.stopPropagation()),
          e.animation_speed !== "0s" && n.css("transition", e.animation_speed);
        let u = { "0s": 0, ".1s": 100, ".25s": 250, ".4s": 400 },
          c = { 0: "0s", 100: ".1s", 250: ".25s", 400: ".4s" };
        q = new Proxy(
          {
            dom: { $wrap: r, $cont: n, $head: o, $main: i, $close: s },
            jsdom: {
              wrapper: r[0],
              container: n[0],
              header: o[0].parentNode,
              title: o[0],
              content: i[0],
              button: { confirm: l[0], cancel: d[0], close: s[0] },
            },
            jqdom: {
              wrapper: r[0],
              container: n[0],
              header: o[0].parentNode,
              title: o[0],
              content: i[0],
              button: { confirm: l[0], cancel: d[0], close: s[0] },
            },
            wait_time: u[e.animation_speed],
            async show_dialog() {
              (this.jsdom.wrapper.style.display = "flex"),
                await pr(50),
                this.jsdom.container.classList.remove("container-hide"),
                this.jsdom.container.classList.add("container-show");
            },
            async hide_dialog() {
              this.jsdom.container.classList.add("container-hide"),
                this.jsdom.container.classList.remove("container-show"),
                await pr(this.wait_time),
                (this.jsdom.wrapper.style.display = "none");
            },
            resolve_result(a) {
              this._resolve?.(a);
            },
            then() {
              return new Promise((a) => {
                this._resolve = a;
              });
            },
          },
          {
            get(a, p, f) {
              return p === "width"
                ? a.jsdom.container.style.width
                : /^min(-h|_h|H)eight$/.test(p)
                ? a.jsdom.container.style.minHeight
                : p === "title"
                ? a.jsdom.title.innerHTML
                : p === "content"
                ? a.jsdom.content.innerHTML
                : Reflect.get(a, p);
            },
            set(a, p, f, x) {
              return p === "width"
                ? Reflect.set(a.jsdom.container.style, "width", f)
                : /^min(-h|_h|H)eight$/.test(p)
                ? Reflect.set(a.jsdom.container.style, "minHeight", f)
                : p === "wait_time"
                ? typeof f == "number" && Object.keys(c).includes(f)
                  ? ((e.animation_speed = c[f]), Reflect.set(a, "wait_time", f))
                  : !1
                : p === "title"
                ? Reflect.set(a.jsdom.title, "innerHTML", f)
                : p === "content"
                ? Reflect.set(a.jsdom.content, "innerHTML", f)
                : Reflect.set(a, p, f);
            },
          }
        );
      },
      (
        e,
        t = "",
        r = "exlg 提醒您",
        n = {},
        { width: o, min_height: i } = {}
      ) => (
        (q.action = typeof n == "function" ? { onconfirm: n } : n),
        (q.jsdom.container.style.width = o ?? "500px"),
        (q.jsdom.container.style.minHeight = i ?? "300px"),
        (q.jsdom.title.innerHTML = r),
        (q.jsdom.content.innerHTML = t),
        q.show_dialog(),
        q.action.onopen?.(q),
        q
      ),
      dr
    ),
    N = wo;
  v.reg_board(
    "search-user",
    "用户查找",
    null,
    ({ $board: e }) => {
      e.html(cr);
      let t = g("#search-user"),
        r = () => {
          t.prop("disabled", !0),
            g.get(
              `/api/user/search?keyword=${g("[name=username]").val().trim()}`,
              (n) => {
                n.users[0]
                  ? (location.href = `/user/${n.users[0].uid}`)
                  : (t.prop("disabled", !1), N("无法找到指定用户"));
              }
            );
        };
      t.on("click", r), g("#search-user-input").whenKey("Enter", r);
    },
    null,
    "module"
  );
  v.reg_board(
    "benben-ranklist",
    "犇犇龙王排行榜",
    {
      show: {
        ty: "boolean",
        dft: !0,
        info: ["Show in default", "是否默认展开"],
      },
    },
    ({ msto: e, $board: t }) => {
      t.html(``);
      let r = t.find("#bb-rnklst"),
        n = t.find("#bb-rnklst-btn > a").on("click", () => {
          (e.show = !e.show), n.text(e.show ? "收起" : "展开"), r.toggle();
        }),
        o = t.find("#refresh-bbrnk"),
        i = !1;
      function s(d) {
        i || ((i = !0), r.html(d), (i = !1));
      }
      function l() {
        o.addClass("btn-disable").text("刷新中"),
          ne({
            url: "https://bens.rotriw.com/ranklist?_contentOnly=1",
            onload(d) {
              o.removeClass("btn-disable").text("刷新"),
                s(
                  JSON.parse(d.response)
                    .map(
                      ([u, c, a]) => `<li class="bb-rnkitm">
                    <span>
                        <a href="https://bens.rotriw.com/user/${a}">${c}</a>
                        <span>${u} 条</span>
                    </span>
                </li>`
                    )
                    .join("")
                );
            },
          });
      }
      t.find("#refresh-bbrnk").on("click", l), l();
    },
    lr,
    "module"
  );
  v.reg(
    "captcha",
    "验证码自动填充",
    ["@/discuss/.+", "@/image"],
    null,
    () => {
      let e = g("img[data-v-3e1b4641],#verify_img"),
        t = async () => {
          let r = document.createElement("canvas");
          (r.width = e[0].width),
            (r.height = e[0].height),
            r.getContext("2d").drawImage(e[0], 0, 0);
          let n = g("input[placeholder$='验证码']")[0];
          (n.value = await K(
            "https://luogu-captcha-bypass.piterator.com/predict/",
            r.toDataURL("image/jpeg")
          ).responseText),
            n.dispatchEvent(new Event("input"));
        };
      e.length
        ? (e.click(), (e[0].onload = t))
        : g(document).on("focus", "input[placeholder$='验证码']", () => {
            (e = g("#--swal-image-hosting-upload-captcha")), (e[0].onload = t);
          });
    },
    null,
    "module"
  );
  var ur =
    ".exlg-copy{position:relative;display:inline-block;border:1px solid #3498db;border-radius:3px;background-color:#3498db00;color:#3498db;font-family:-apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Noto Sans,Noto Sans CJK SC,Noto Sans CJK,Source Han Sans,PingFang SC,Segoe UI,Microsoft YaHei,sans-serif;flex:none;outline:0;cursor:pointer;font-weight:400;line-height:1.5;text-align:center;vertical-align:middle;background:0 0;font-size:12px;padding:0 5px;margin-left:1px}.exlg-copy.exlg-copy-right{float:right}.exlg-copy:hover{background-color:#3498db1a}div.exlg-copied{background-color:#3498dbe6!important;color:#fff!important}div.exlg-copied.exlg-copied-fail{background-color:#db3434e6!important;color:#fff!important}.copy-btn{font-size:.8em;padding:0 5px}.lfe-form-sz-middle{font-size:.875em;padding:.313em 1em}.exlg-code-title{margin:0;font-family:inherit;font-size:1.125em;color:inherit}";
  var fr = `h3.exlg-code-title.exlg-beautified-cbex{margin-bottom:0!important;padding:.4rem .6rem .4rem 2rem;background-color:#eee;font-weight:700;border-top-left-radius:5px;border-top-right-radius:5px;padding-top:8px;margin-top:10px;box-shadow:0 2px 2px #00000024,0 1px 5px #0000001f,0 3px 1px -2px #0003}h3.exlg-code-title.exlg-beautified-cbex+pre[exlg-copy-code-block]{margin-top:0;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border:1px solid #eee;box-shadow:0 2px 2px #00000024,0 1px 5px #0000001f,0 3px 1px -2px #0003;background-color:#fafafa}h3.exlg-code-title.exlg-beautified-cbex+pre>code.hljs[class]{font-family:Fira Code,Consolas,monospace;background:white;padding:.5em}h3.exlg-code-title.exlg-beautified-cbex>div.exlg-copy{color:#6c757d;border:0px solid #3498db;margin-left:1px;font-size:0;transition:background-color .3s;background-image:url("data:image/svg+xml;utf8,<svg class='icon' style='width: 1em;height: 1em;vertical-align: middle;fill: rgb(108, 117, 125);overflow: hidden;' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2669'><path d='M661.333333 234.666667A64 64 0 0 1 725.333333 298.666667v597.333333a64 64 0 0 1-64 64h-469.333333A64 64 0 0 1 128 896V298.666667a64 64 0 0 1 64-64z m-21.333333 85.333333H213.333333v554.666667h426.666667v-554.666667z m191.829333-256a64 64 0 0 1 63.744 57.856l0.256 6.144v575.701333a42.666667 42.666667 0 0 1-85.034666 4.992l-0.298667-4.992V149.333333H384a42.666667 42.666667 0 0 1-42.368-37.674666L341.333333 106.666667a42.666667 42.666667 0 0 1 37.674667-42.368L384 64h447.829333z' p-id='2670'></path></svg>");height:20px;width:20px;padding:0}h3.exlg-code-title.exlg-beautified-cbex>div.exlg-copy:hover{background-color:#6c757d1a}h3.exlg-code-title.exlg-beautified-cbex>div.exlg-copied[class]{background-color:#6c757d00!important;background-image:url("data:image/svg+xml;utf8,<svg class='icon' style='width: 1em;height: 1em;vertical-align: middle;fill: rgb(70, 160, 240);overflow: hidden;' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2669'><path d='M661.333333 234.666667A64 64 0 0 1 725.333333 298.666667v597.333333a64 64 0 0 1-64 64h-469.333333A64 64 0 0 1 128 896V298.666667a64 64 0 0 1 64-64z m-21.333333 85.333333H213.333333v554.666667h426.666667v-554.666667z m191.829333-256a64 64 0 0 1 63.744 57.856l0.256 6.144v575.701333a42.666667 42.666667 0 0 1-85.034666 4.992l-0.298667-4.992V149.333333H384a42.666667 42.666667 0 0 1-42.368-37.674666L341.333333 106.666667a42.666667 42.666667 0 0 1 37.674667-42.368L384 64h447.829333z' p-id='2670'></path></svg>")}h3.exlg-code-title.exlg-beautified-cbex>div.exlg-copied[class]:hover{background-color:#6c757d4d!important}h3.exlg-code-title.exlg-beautified-cbex>div.exlg-copied.exlg-copied-fail[class]{background-color:#6c757d00!important;background-image:url("data:image/svg+xml;utf8,<svg class='icon' style='width: 1em;height: 1em;vertical-align: middle;fill: rgb(219, 52, 52);overflow: hidden;' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2669'><path d='M661.333333 234.666667A64 64 0 0 1 725.333333 298.666667v597.333333a64 64 0 0 1-64 64h-469.333333A64 64 0 0 1 128 896V298.666667a64 64 0 0 1 64-64z m-21.333333 85.333333H213.333333v554.666667h426.666667v-554.666667z m191.829333-256a64 64 0 0 1 63.744 57.856l0.256 6.144v575.701333a42.666667 42.666667 0 0 1-85.034666 4.992l-0.298667-4.992V149.333333H384a42.666667 42.666667 0 0 1-42.368-37.674666L341.333333 106.666667a42.666667 42.666667 0 0 1 37.674667-42.368L384 64h447.829333z' p-id='2670'></path></svg>")}h3.exlg-code-title.exlg-beautified-cbex>div.exlg-copied.exlg-copied-fail[class]:hover{background-color:#6c757d4d!important}`;
  v.reg_hook_new(
    "code-block-ex",
    "代码块优化",
    "@/.*",
    {
      copy_code_position: {
        ty: "enum",
        vals: ["left", "right"],
        dft: "left",
        info: ["Copy Button Position", "复制按钮对齐方式"],
      },
      beautify_code_block: {
        ty: "boolean",
        dft: !0,
        info: ["Beautify Code Block", "代码块美化"],
      },
      code_block_title: {
        ty: "string",
        dft: "源代码 - ${lang}",
        info: [
          "Custom Code Title(with Language)",
          "自定义代码块标题 - 限定语言",
        ],
      },
      code_block_title_nolang: {
        ty: "string",
        dft: "源代码",
        info: [
          "Custom Code Title(without Language)",
          "自定义代码块标题 - 默认",
        ],
      },
      copy_code_font: {
        ty: "string",
        dft: "'Fira Code', 'Fira Mono', Consolas",
        info: ["Code Block Font", "代码块字体"],
        strict: !0,
      },
      cb_background_color: {
        ty: "string",
        dft: "white",
        info: [
          "Code Block Background Color",
          "代码块背景色 (配合其他美化插件)",
        ],
        strict: !0,
      },
      max_show_lines: {
        ty: "number",
        dft: -1,
        min: -1,
        max: 100,
        info: ["Max Lines On Show", "代码块最大显示行数"],
        strict: !0,
      },
    },
    ({ msto: e, args: t }) => {
      let r = /\/record\/.*/.test(location.href),
        n = {
          c: "C",
          cpp: "C++",
          pascal: "Pascal",
          python: "Python",
          java: "Java",
          javascript: "JavaScript",
          php: "PHP",
          latex: "LaTeX",
        },
        o = (i) => {
          let s = "undefined";
          return r
            ? g(g(".value.lfe-caption")[0]).text()
            : (i.attr("data-rendered-lang")
                ? (s = i.attr("data-rendered-lang"))
                : i.attr("class") &&
                  i
                    .attr("class")
                    .split(" ")
                    .forEach((l) => {
                      l.startsWith("language-") && (s = l.slice(9));
                    }),
              n[s]);
        };
      t.attr("exlg-copy-code-block", ""),
        t.each((i, s, l = g(s)) => {
          if (
            s.parentNode.className === "mp-preview-content" ||
            s.parentNode.parentNode.className === "mp-preview-area"
          )
            return;
          let d = r
              ? l.children(".copy-btn")
              : g('<div class="exlg-copy">复制</div>').on("click", () => {
                  if (d.text() === "复制") {
                    try {
                      GM_setClipboard(l.text(), "text/plain");
                    } catch (f) {
                      d
                        .text("复制失败")
                        .toggleClass("exlg-copied")
                        .toggleClass("exlg-copied-fail"),
                        setTimeout(
                          () =>
                            d
                              .text("复制")
                              .toggleClass("exlg-copied")
                              .toggleClass("exlg-copied-fail"),
                          800
                        ),
                        M("复制到剪贴板失败，错误信息: ", f);
                      return;
                    }
                    d.text("复制成功").toggleClass("exlg-copied"),
                      setTimeout(
                        () => d.text("复制").toggleClass("exlg-copied"),
                        800
                      );
                  }
                }),
            u = l.children("code");
          e.copy_code_font && u.css("font-family", e.copy_code_font || ""),
            u.hasClass("hljs") ||
              u.addClass("hljs").css("background", e.cb_background_color),
            d.addClass(`exlg-copy-${e.copy_code_position}`);
          let c = o(u),
            a = c
              ? e.code_block_title.replace("${lang}", c)
              : e.code_block_title_nolang,
            p = r
              ? g(".lfe-h3").text(a)
              : g(
                  `<h3 class="exlg-code-title" style="/*width: 100%;*/">${a}</h3>`
                );
          e.beautify_code_block && p.addClass("exlg-beautified-cbex"),
            r || l.before(p.append(d));
        });
    },
    (e) => {
      let t = g(e.target).find(
        "pre:has(> code:not(.cm-s-default)):not([exlg-copy-code-block])"
      );
      return { result: t.length, args: t };
    },
    () => g("pre:has(> code:not(.cm-s-default)):not([exlg-copy-code-block])"),
    ur + fr,
    "module"
  );
  var mr =
    '<svg data-v-a97ae32a="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-code fa-w-20"><path data-v-a97ae32a="" fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" class=""></path></svg>';
  var hr =
    '<svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-mark-github"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>';
  var br =
    '<svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" width="24" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5446"><path d="M512 128c-211.7 0-384 172.3-384 384s172.3 384 384 384 384-172.3 384-384-172.3-384-384-384z m0 717.4c-183.8 0-333.4-149.6-333.4-333.4S328.2 178.6 512 178.6 845.4 328.2 845.4 512 695.8 845.4 512 845.4zM651.2 372.8c-9.9-9.9-25.9-9.9-35.8 0L512 476.2 408.6 372.8c-9.9-9.9-25.9-9.9-35.8 0-9.9 9.9-9.9 25.9 0 35.8L476.2 512 372.8 615.4c-9.9 9.9-9.9 25.9 0 35.8 4.9 4.9 11.4 7.4 17.9 7.4s13-2.5 17.9-7.4L512 547.8l103.4 103.4c4.9 4.9 11.4 7.4 17.9 7.4s13-2.5 17.9-7.4c9.9-9.9 9.9-25.9 0-35.8L547.8 512l103.4-103.4c9.9-9.9 9.9-25.9 0-35.8z" p-id="5447"></path></svg>';
  var xr =
    '<div class="exlg-unselectable exlg-badge-page" style="font-family: Consolas;white-space: nowrap;text-align: left;"><div class="exlg-regbadge-board" mode="main" wd="800px" mh="400px"><!-- 左侧的一列，包含用户信息和按钮 --><div class="exlg-regbadge-box"><span style="margin: 5px;"><span class="exlg-regbadge-fronttitle">uid</span><input key="uid" type="text" style="padding: .1em;" placeholder="填写用户名或uid" value="" disabled title="暂不支持为别人注册 badge" /></span><br /><span style="margin: 5px;"><span class="exlg-regbadge-fronttitle">激活码</span><input key="active" type="text" style="padding: .1em;" /></span><br /><span style="margin: 5px;" style="display: none"><span class="exlg-regbadge-fronttitle">伪tag</span><input key="tagText" type="text" style="padding: .1em;" /></span><br /><span style="margin: 5px;"><span class="exlg-regbadge-fronttitle">内容</span><input key="badgeText" type="text" style="padding: .1em;" /></span><br /><span style="margin: 5px;"><span style="height: 1.5em;float: left;padding: .1em;width: 5em;"> </span><span fid="buttons" style="float: left;margin-left: 5px;"><button act="toPreset" exlg>预设...</button><br /></span></span></div><div class="exlg-regbadge-box" id="regbadge-settings"></div></div><div class="exlg-regbadge-board" mode="showError"><div style="margin-bottom: 1.5em;"><div><strong style="color: red;">错误信息:</strong></div><div class="error-message"></div></div><small>点击确定以返回。</small></div><div class="exlg-regbadge-board" mode="getPreset" wd="600px">想要与别人分享你的预设方案吗？使用下面的输入框吧！<br /><input exlg-regbadge act="preset-json" type="text" style="padding: .1em;width: 100%;height: 2em" /><br /><span style="color: red;font-weight: bold">JSON 不合法!</span><br />另外，这里是些我们早期制作好的！<div class="exlg-regbadge-preset-list"></div></div><div class="exlg-regbadge-board" mode="setbgColor" wd="600px">模式<select id="regbadge-setbgColor-type-select" type="select" style="padding: .1em;padding-right: 20px;width: auto;display: inline;"><option value="text">配置文本</option><option value="lgdefault">跟随名字颜色</option><option value="single">单色</option><option value="xncolorpicker">xncolorpicker</option><option value="image">图片填充</option></select><br /><div class="exlg-regbadge-bg-box" mode="text" style="display: none;"><input /></div><div class="exlg-regbadge-bg-box" mode="lgdefault" style="display: none;"><small>提示：exlg 会把 bg 中的 <code style="font-family: Fira Code, Consolas, monospace">${luogu-default}</code>替换为你当前的名字颜色，<br />并且随着名字颜色变化而变化。<br />试试将 bg 中的颜色换成上述占位符？</small></div><div class="exlg-regbadge-bg-box" mode="single" style="display: none;"><!--这里应该有一个拾色器--><span exlg="bg-single-pickr"></span></div><div class="exlg-regbadge-bg-box" mode="xncolorpicker" style="display: none;"><!--这里应该有一个拾色器--><span exlg="bg-xncolorpicker"></span></div><div class="exlg-regbadge-bg-box" mode="image" style="display: none;">这里先摆了。</div></div></div><div class="exlg-unselectable exlg-badge-page" style="text-align: left;"><span class="exlg-regbadge-fronttitle">预览</span><span class="feed-username"><span class="user-name"><a><span style="font-weight: bold; color: LG_USER_COLOR">LG_USER_NAME</span></a><span data-v-499508d0="" class="ccf-badge" data-v-f9624136=""><a data-v-303bbf52="" href="/discuss/show/142324" target="_blank" colorscheme="none" class="color-none"><svg data-v-303bbf52="" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="badge-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-badge-check fa-w-16"><g data-v-303bbf52="" class="fa-group"><path data-v-303bbf52="" fill="currentColor" d="M512 256a88 88 0 0 0-57.1-82.4A88 88 0 0 0 338.4 57.1a88 88 0 0 0-164.8 0A88 88 0 0 0 57.1 173.6a88 88 0 0 0 0 164.8 88 88 0 0 0 116.5 116.5 88 88 0 0 0 164.8 0 88 88 0 0 0 116.5-116.5A88 88 0 0 0 512 256zm-144.8-44.25l-131 130a11 11 0 0 1-15.55-.06l-75.72-76.33a11 11 0 0 1 .06-15.56L171 224a11 11 0 0 1 15.56.06l42.15 42.49 97.2-96.42a11 11 0 0 1 15.55.06l25.82 26a11 11 0 0 1-.08 15.56z" class="fa-secondary"></path><path data-v-303bbf52="" fill="currentColor" d="M367.2 211.75l-131 130a11 11 0 0 1-15.55-.06l-75.72-76.33a11 11 0 0 1 .06-15.56L171 224a11 11 0 0 1 15.56.06l42.15 42.49 97.2-96.42a11 11 0 0 1 15.55.06l25.82 26a11 11 0 0 1-.06 15.56z" class="fa-primary"></path></g></svg></a></span></span><span tag-preview></span></span><span badge-preview></span></div><div class="exlg-unselectable exlg-badge-page" style="text-align: left;"></div><!--<select id="regbadge-type-select" type="select" style="padding: .1em;padding-right: 20px;width: auto;display: inline;"><option value="default">default</option></select>-->';
  var wr =
    '#regbadge-preview .exlg-badge-preview{border:none}#regbadge-preview input{border:none;background:0 0;outline:0}textarea.exlg-regbadge-configinput,.exlg-regbadge-box input:not([disabled]),input[exlg-regbadge]{padding:.5em;line-height:1.2;color:#555;outline:0;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:0;-webkit-appearance:none;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}textarea.exlg-regbadge-configinput:hover{background-color:#fefffe;border-color:#3bb4f2;outline:0;-webkit-box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%),0 0 5px rgb(59 180 242 / 30%);box-shadow:inset 0 1px 1px #00000014,0 0 5px #3bb4f24d}input[exlg-regbadge]:hover{background-color:#fefffe;border-color:#3bb4f2}input[exlg-regbadge]:focus{background-color:#fefffe;border-color:#3bb4f2;outline:0;-webkit-box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%),0 0 5px rgb(59 180 242 / 30%);box-shadow:inset 0 1px 1px #00000014,0 0 5px #3bb4f24d}.exlg-regbadge-box input:not([disabled]):hover{background-color:#fefffe;border-color:#3bb4f2}.exlg-regbadge-box input:not([disabled]):focus{background-color:#fefffe;border-color:#3bb4f2;outline:0;-webkit-box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%),0 0 5px rgb(59 180 242 / 30%);box-shadow:inset 0 1px 1px #00000014,0 0 5px #3bb4f24d}#regbadge-preview-id{font-family:apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Noto Sans CJK SC,Noto Sans CJK,Source Han Sans,PingFang SC,Microsoft YaHei,sans-serif}#preview-lg-badge>.lg3-badge{text-align:center;box-sizing:border-box;display:inline-block;min-width:10px;padding:.25em .625em;font-size:1.2rem;font-weight:700;color:#fff;line-height:1;vertical-align:baseline;white-space:nowrap;border-radius:2px}#preview-lg-badge>.lg4-badge{color:#fff;display:inline-block;padding:0 8px;box-sizing:border-box;font-weight:400;line-height:1.5;border-radius:2px;margin-left:.2em;font-size:.875em}.exlg-badge-page .exlg-regbadge-box{width:50%;float:left;display:inline}.exlg-badge-page .exlg-regbadge-fronttitle{height:1.5em;float:left;padding:.1em;width:5em}.exlg-badge-page button[exlg]{color:#666;min-width:75px;cursor:pointer;background:rgba(255,255,255,.2);padding:3px 10px;border:1px solid #ddd;border-radius:3px}select[exlg-badge-register]{background:url("data:image/svg+xml;charset=UTF-8, %3Csvg%20style=%22fill:%20rgb(108,%20117,%20125);%22%20width=%2210%22%20height=%2210%22%20viewBox=%220%200%209%209%22%20fill=%22rgb(108,%20117,%20125)%22%20xmlns=%22http://www.w3.org/2000/svg%22%20class=%22link-icon--right%22%3E%3Cpath%20fill-rule=%22evenodd%22%20clip-rule=%22evenodd%22%20d=%22M7.50588%203.40623C7.40825%203.3086%207.24996%203.3086%207.15232%203.40623L4.41244%206.14612L1.67255%203.40623C1.57491%203.3086%201.41662%203.3086%201.31899%203.40623C1.22136%203.50386%201.22136%203.66215%201.31899%203.75978L4.11781%206.5586C4.28053%206.72132%204.54434%206.72132%204.70706%206.5586L7.50588%203.75978C7.60351%203.66215%207.60351%203.50386%207.50588%203.40623Z%22%20fill=%22rgb(108,%20117,%20125)%22%3E%3C/path%3E%3Cpath%20d=%22M7.15232%203.40623L7.50588%203.75978L7.50588%203.75978L7.15232%203.40623ZM7.50588%203.40623L7.15232%203.75978L7.15233%203.75978L7.50588%203.40623ZM4.41244%206.14612L4.05888%206.49967C4.15265%206.59344%204.27983%206.64612%204.41244%206.64612C4.54504%206.64612%204.67222%206.59344%204.76599%206.49967L4.41244%206.14612ZM1.67255%203.40623L2.0261%203.05268L2.0261%203.05268L1.67255%203.40623ZM1.31899%203.40623L0.965439%203.05268L0.965439%203.05268L1.31899%203.40623ZM1.31899%203.75978L1.67255%203.40623V3.40623L1.31899%203.75978ZM4.11781%206.5586L3.76425%206.91215L4.11781%206.5586ZM4.70706%206.5586L4.35351%206.20505L4.70706%206.5586ZM7.50588%203.75978L7.15233%203.40623L7.15232%203.40623L7.50588%203.75978ZM7.50588%203.75978C7.40825%203.85742%207.24996%203.85742%207.15232%203.75978L7.85943%203.05268C7.56654%202.75978%207.09166%202.75978%206.79877%203.05268L7.50588%203.75978ZM4.76599%206.49967L7.50588%203.75978L6.79877%203.05268L4.05888%205.79257L4.76599%206.49967ZM1.31899%203.75978L4.05888%206.49967L4.76599%205.79257L2.0261%203.05268L1.31899%203.75978ZM1.67254%203.75979C1.57491%203.85742%201.41662%203.85742%201.31899%203.75979L2.0261%203.05268C1.73321%202.75978%201.25833%202.75978%200.965439%203.05268L1.67254%203.75979ZM1.67255%203.40623C1.77018%203.50386%201.77018%203.66215%201.67255%203.75978L0.965439%203.05268C0.672546%203.34557%200.672546%203.82044%200.965439%204.11334L1.67255%203.40623ZM4.47136%206.20505L1.67255%203.40623L0.965439%204.11334L3.76425%206.91215L4.47136%206.20505ZM4.35351%206.20505C4.38605%206.1725%204.43882%206.1725%204.47136%206.20505L3.76425%206.91215C4.12223%207.27013%204.70264%207.27013%205.06062%206.91215L4.35351%206.20505ZM7.15232%203.40623L4.35351%206.20505L5.06062%206.91215L7.85943%204.11334L7.15232%203.40623ZM7.15233%203.75978C7.05469%203.66215%207.05469%203.50386%207.15233%203.40623L7.85943%204.11334C8.15233%203.82045%208.15233%203.34557%207.85943%203.05268L7.15233%203.75978Z%22%20fill=%22rgb(108,%20117,%20125)%22%3E%3C/path%3E%3C/svg%3E") right no-repeat;background-size:auto}.exlg-badge-page div.exlg-regbadge-preset-list{border:1px solid #ccc;height:200px;overflow:overlay}.exlg-badge-page div.exlg-regbadge-preset-list>span{width:50%;display:inline-block}.exlg-badge-page div.exlg-regbadge-preset-list>span>span{text-align:center;margin:0 10px}.exlg-badge-page div.exlg-regbadge-preset-title{font-weight:700;margin:0 15px;font-size:large}.exlg-badge-page div.pickr{display:inline-block}';
  var Ce = {
    "exlg-presets": {
      title: "exlg 预设",
      presetList: [
        { name: "exlg 经典", id: "exlg-default", config: "{}" },
        {
          name: "洛谷经典",
          id: "luogu-default",
          config: '{"bg":"${luogu-default}"}',
        },
        {
          name: "西红柿炒鸡蛋",
          id: "flandre-scarlet",
          config:
            '{"bg":"linear-gradient(90.0deg,rgb(254, 76, 97) 21.5%,rgba(255,213,79,1) 100.0%)"}',
        },
        { name: "⑨baka 联名", id: "cirno", config: "{}" },
        { name: "复古控制台", id: "console", config: "{}" },
        { name: "迈恩克拉夫特", id: "minecraft", config: "{}" },
        { name: "妈妈我紫了", id: "be-purple", config: "{}" },
        {
          name: "铃酱同款",
          id: "green-hook",
          config: `{"bg":"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0 PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSIjNWViOTVlIiBzdHlsZT0ibWFyZ2luLWJv dHRvbTogLTNweDsiPjxwYXRoIGQ9Ik0xNiA4QzE2IDYuODQzNzUgMTUuMjUgNS44NDM3NSAxNC4x ODc1IDUuNDM3NUMxNC42NTYyIDQuNDM3NSAxNC40Njg4IDMuMTg3NSAxMy42NTYyIDIuMzQzNzVD MTIuODEyNSAxLjUzMTI1IDExLjU2MjUgMS4zNDM3NSAxMC41NjI1IDEuODEyNUMxMC4xNTYyIDAu NzUgOS4xNTYyNSAwIDggMEM2LjgxMjUgMCA1LjgxMjUgMC43NSA1LjQwNjI1IDEuODEyNUM0LjQw NjI1IDEuMzQzNzUgMy4xNTYyNSAxLjUzMTI1IDIuMzQzNzUgMi4zNDM3NUMxLjUgMy4xODc1IDEu MzEyNSA0LjQzNzUgMS43ODEyNSA1LjQzNzVDMC43MTg3NSA1Ljg0Mzc1IDAgNi44NDM3NSAwIDhD MCA5LjE4NzUgMC43MTg3NSAxMC4xODc1IDEuNzgxMjUgMTAuNTkzOEMxLjMxMjUgMTEuNTkzOCAx LjUgMTIuODQzOCAyLjM0Mzc1IDEzLjY1NjJDMy4xNTYyNSAxNC41IDQuNDA2MjUgMTQuNjg3NSA1 LjQwNjI1IDE0LjIxODhDNS44MTI1IDE1LjI4MTIgNi44MTI1IDE2IDggMTZDOS4xNTYyNSAxNiAx MC4xNTYyIDE1LjI4MTIgMTAuNTYyNSAxNC4yMTg4QzExLjU5MzggMTQuNjg3NSAxMi44MTI1IDE0 LjUgMTMuNjU2MiAxMy42NTYyQzE0LjQ2ODggMTIuODQzOCAxNC42NTYyIDExLjU5MzggMTQuMTg3 NSAxMC41OTM4QzE1LjI1IDEwLjE4NzUgMTYgOS4xODc1IDE2IDhaTTExLjQ2ODggNi42MjVMNy4z NzUgMTAuNjg3NUM3LjIxODc1IDEwLjg0MzggNyAxMC44MTI1IDYuODc1IDEwLjY4NzVMNC41IDgu MzEyNUM0LjM3NSA4LjE4NzUgNC4zNzUgNy45Njg3NSA0LjUgNy44MTI1TDUuMzEyNSA3QzUuNDY4 NzUgNi44NzUgNS42ODc1IDYuODc1IDUuODEyNSA3LjAzMTI1TDcuMTI1IDguMzQzNzVMMTAuMTU2 MiA1LjM0Mzc1QzEwLjMxMjUgNS4xODc1IDEwLjUzMTIgNS4xODc1IDEwLjY1NjIgNS4zNDM3NUwx MS40Njg4IDYuMTU2MjVDMTEuNTkzOCA2LjI4MTI1IDExLjU5MzggNi41IDExLjQ2ODggNi42MjVa Ij48L3BhdGg+PC9zdmc+') 0px center / 16px no-repeat","fg":"rgba(0,0,0,0)"}`,
        },
        { name: "AKIOI", id: "ak-ioi", config: "{}" },
        { name: "三 哼 经", id: "tadokoro-koji", config: "{}" },
      ],
    },
  };
  var yr =
    ".exlg-badge{border-radius:50px;padding:2px 10px;transition:all .15s;display:inline;min-width:10px;font-size:1em;font-weight:700;line-height:1;vertical-align:baseline;white-space:nowrap;cursor:pointer;margin-left:2px;margin-right:2px}";
  var ue = { 100250: "风神少女", 196899: "可爱", 89092: "", 224978: "o2" },
    Mo = {
      "lg-fg-purple": "#8e44ad",
      "lg-fg-red": "#e74c3c",
      "lg-fg-orange": "#e67e22",
      "lg-fg-green": "#5eb95e",
      "lg-fg-bluelight": "#0e90d2",
      "lg-fg-gray": "#bbb",
      "lg-fg-brown": "#996600",
    },
    Ao = (e) => {
      let t = e.className.slice(e.className.indexOf("lg-fg-"));
      return t
        ? t.slice(0, t.indexOf(" "))
        : e.childNodes.length
        ? e.childNodes[0].style.color
        : null;
    },
    Fe = (
      e,
      t,
      r,
      { bg: n, fg: o, text: i, ft: s, fw: l, bd: d, fs: u, pseudo: c },
      a = !0
    ) => {
      typeof e == "number" && (e = String(e));
      let p = i
        ? g(
            `<span class="exlg-badge" badge-uid="${e}" badge-type="${r}">${i}</span>`
          ).css({
            background: (n || "mediumturquoise").replaceAll(
              "${luogu-default}",
              t.includes("lg-fg-") ? Mo[t] : t
            ),
            color: o || "#fff",
            "font-family": s || "",
            "font-weight": l || "700",
            "font-size": u || "",
            border: d || "",
          })
        : g("");
      return (
        i && a && p.on("click", () => A.exlg.register_badge()),
        Object.keys(ue).includes(e) && !c && (c ??= ue[e]),
        {
          pseudoTag:
            Object.keys(ue).includes(e) && c
              ? (r !== "luogu4"
                  ? g(
                      `<span class="am-badge am-radius lg-bg-${t.slice(
                        6
                      )}">${c}</span>`
                    )
                  : g(
                      `<span class="lfe-caption" style="color: rgb(255, 255, 255); background: ${t};">${c}</span>`
                    ).css({
                      display: "inline-block",
                      padding: "0 8px",
                      "box-sizing": "border-box",
                      "font-weight": 400,
                      "line-height": 1.5,
                      "border-radius": "2px",
                      "margin-left": "0.2em",
                    }))[0]
              : null,
          exlg: p[0],
        }
      );
    },
    vr = [
      {
        pathTest: /^\/problem\/solution.*$/,
        domSelector: ".card>.info-rows a[target='_blank']",
        type: { displayType: "luogu4", elementType: "solu", anceLevel: 3 },
      },
      {
        pathTest: /^\/problem\/.*$/,
        domSelector: ".full-container .user a[target='_blank']",
        type: { displayType: "luogu4", elementType: "prob", anceLevel: 0 },
      },
      {
        pathTest: ({ pathname: e, hash: t }) =>
          /^\/user\/[0-9]{0,}.*$/.test(e) && t === "#activity",
        domSelector: ".feed a[target='_blank']",
        type: { displayType: "luogu4", elementType: "user-feed", anceLevel: 3 },
      },
      {
        pathTest: ({ pathname: e, hash: t }) =>
          /^\/user\/[0-9]{0,}.*$/.test(e) && /^#following/.test(t),
        domSelector: ".follow-container a[target='_blank']",
        type: {
          displayType: "luogu4",
          elementType: "user-follow",
          anceLevel: 1,
        },
      },
      {
        pathTest: () => !0,
        domSelector: "a[target='_blank'][href^='/user/']",
        type: { displayType: "luogu3", elementType: "luogu3", anceLevel: 0 },
      },
    ],
    kr = (e) => !e.querySelectorAll("svg").length;
  v.reg_hook_new(
    "sponsor-tag",
    "badge 显示",
    [
      "@/",
      "@/paste",
      "@/discuss/.*",
      "@/problem/.*",
      "@/ranking.*",
      "@/user/\\d*.*",
    ],
    {
      cache: {
        ty: "string",
        dft: "3600",
        info: ["Cache time", "缓存时间（秒）"],
      },
      badges: { ty: "string", priv: !0 },
    },
    (
      (e, t, r) =>
      async ({
        msto: n,
        args: {
          domList: o,
          type: { displayType: i, elementType: s, anceLevel: l },
        },
      }) => {
        g.isEmptyObject(t) &&
          n.badges &&
          Object.assign(t, JSON.parse(n.badges));
        let d = Array.from(o).map((p) => {
          let f = p.attributes.href.value.slice(6);
          return !e.has(f) && !(f in t && W() - t[f].ts <= n.cache)
            ? (e.add(f), f)
            : null;
        });
        d.length &&
          r.push(
            (async () => {
              Object.assign(
                t,
                Object.fromEntries(
                  Object.entries(
                    await K("https://exlg.piterator.com/badge/mget", {
                      uid: C.uid,
                      token: I["^token"].token,
                      data: d,
                    }).data.data
                  ).map(([p, f]) => [p, Object.assign(f, { ts: W() })])
                )
              );
            })()
          ),
          await Promise.all(r),
          (n.badges = JSON.stringify(t));
        let u = (p, f) => {
            if (p === "luogu3" || !Object.keys(f).includes("lg4")) return f;
            let x = Object.clone(f);
            return delete x.lg4, Object.assign(Object.clone(f.lg4));
          },
          c = (p, f) => {
            if (!f) return;
            let x = p.previousElementSibling;
            if (x) {
              let h =
                x.tagName.toLowerCase() === "img"
                  ? x
                  : x.childNodes.filter(
                      (m) => m.tagName.toLowerCase() === "img"
                    )[0];
              if (h) return h.getAttribute("src").replace(/[^0-9]/gi, "");
            }
            return c(p.parentNode, f - 1);
          },
          a = (p, f) => (p ? (f ? a(p.parentNode, f - 1) : p) : null);
        o.forEach((p) => {
          let f = g(p);
          if (!f || f.hasClass("exlg-badge-username")) return;
          f.addClass("exlg-badge-username");
          let x = f.attr("href").slice(6);
          if (s === "prob") {
            let { provider: S } = _feInstance.currentData.problem;
            S.name === p.innerText.trim() && (x = S.uid);
          }
          i === "luogu4" && x === "ript:void 0" && (x = c(p, 5));
          let h = t[x];
          if (!h || (!h.text && !(Object.keys(ue).includes(x) && h.pseudo)))
            return;
          let [m, b, w] = [p, p.nextElementSibling, !1];
          b &&
            (b.classList ? [...b.classList] : b.className.split(" ")).includes(
              "sb_amazeui"
            ) &&
            (m = b),
            (b = m.nextElementSibling),
            b &&
              (b.classList
                ? [...b.classList]
                : b.className.split(" ")
              ).includes("am-badge") &&
              ([m, w] = [b, !0]);
          let k = Fe(
              x,
              i === "luogu4" ? p.childNodes[0].style.color : Ao(p),
              i,
              u(i, h)
            ),
            L = a(m, 3);
          if (
            L &&
            (L.classList ? [...L.classList] : L.className.split(" ")).includes(
              "card"
            )
          )
            k.pseudoTag && !w && m.parentNode.appendChild(k.pseudoTag),
              m.parentNode.appendChild(k.exlg);
          else {
            let S = document.createElement("span");
            (S.innerHTML = "&nbsp;"),
              (L = a(m, l)),
              L.after(k.exlg),
              l === 0 && L.after(S),
              k.pseudoTag &&
                !w &&
                (L.after(k.pseudoTag), l === 0 && L.after(S));
          }
        });
      }
    )(new Set(), {}, []),
    (e) => {
      let t = { args: null, result: !1 };
      return (
        vr.every(({ pathTest: r, domSelector: n, type: o }) =>
          (typeof r == "function" ? r(location) : r.test(location.pathname))
            ? ((t = (() => {
                let i = Array.from(e.target.querySelectorAll(n)).filter(kr);
                return {
                  args: { type: o, domList: i },
                  result: Boolean(i?.length),
                };
              })()),
              0)
            : 1
        ),
        t
      );
    },
    () => {
      let e = { args: null, result: !1 };
      return (
        vr.every(({ pathTest: t, domSelector: r, type: n }) =>
          (typeof t == "function" ? t(location) : t.test(location.pathname))
            ? ((e = (() => {
                let o = Array.from(document.querySelectorAll(r)).filter(kr);
                return { type: n, domList: o };
              })()),
              0)
            : 1
        ),
        e
      );
    },
    yr,
    "module"
  );
  var Z = {},
    G,
    y = {},
    ct = {
      Red: "rgb(254, 76, 97)",
      Orange: "rgb(243, 156, 17)",
      Green: "rgb(82, 196, 26)",
      Blue: "rgb(52, 152, 219)",
      Gray: "rgb(191, 191, 191)",
      Cheater: "rgb(173, 139, 0)",
      Purple: "rgb(157, 61, 207)",
    },
    Eo = oe.reg(
      "register-badge",
      "badge 注册",
      { isFirst: { ty: "boolean", dft: !0, priv: !0 } },
      null,
      async ({ msto: e }, t = null) => {
        if (e.isFirst) {
          if (
            confirm(`看起来您是第一次使用注册器，您是否要注册 badge？
出于各种原因，badge 只能对实名认证的用户注册，且 badge 注册以后不能更改用户。
如果选择“否”，您仍然可以在官网（exlg.cc）注册。`)
          ) {
            let s = prompt("请输入激活码"),
              l = prompt("请输入你要的 badge 文字（可以后续修改，包括样式）");
            M("开始注册"),
              await v.execute("token"),
              M("成功生成 token"),
              GM_xmlhttpRequest({
                url: "https://exlg.piterator.com/badge/set",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({
                  token: I["^token"].token,
                  uid: C.uid,
                  activation: s,
                  data: { text: l },
                }),
                onload(d) {
                  let u = JSON.parse(d.responseText);
                  u.status === 200
                    ? (M(
                        "OK. 请手动刷新 badge 以查看效果，后续的修改可使用注册器。"
                      ),
                      alert(
                        "OK. 请手动刷新 badge 以查看效果，后续的修改可使用注册器。"
                      ))
                    : (Q(u.error), alert("出现了一点问题。请在控制台中查看"));
                },
                onerror(d) {
                  Q(d), alert("出现了一点问题。请在控制台中查看");
                },
              });
          }
          e.isFirst = !1;
        }
        A.getconf = () => Z;
        let r = {
            bg: { css: "background", name: "背景", default: "mediumturquoise" },
            fg: { css: "color", name: "字色", default: "white" },
            bd: { css: "border", name: "边框", default: "" },
            ft: { css: "font-family", name: "字体", default: "" },
            fs: { css: "font-size", name: "字号", default: "" },
            fw: { css: "font-weight", name: "字粗", default: "700" },
          },
          n = Object.keys(r),
          o = (s) => {
            try {
              (0, eval)(s);
            } catch (l) {
              return Q("Fail to execute the action: ", l), !1;
            }
            return !0;
          };
        if (
          o(GM_getResourceText("colorpicker_temp_new")) ||
          o(GM_getResourceText("colorpicker_old"))
        )
          M("起码至少有一个能用了");
        else {
          M("废了废了"),
            N(
              "这个狗屎页面不能用取色器，错误信息自己看控制台输出<br/>点击确定回到主页。",
              "exlg 提醒您",
              () => (location.href = location.origin)
            );
          return;
        }
        if (o(GM_getResourceText("pickr_resource"))) M("OK Well~");
        else {
          M("废了废了"),
            N(
              "这个狗屎页面不能用取色器，错误信息自己看控制台输出<br/>点击确定回到主页。",
              "exlg 提醒您",
              () => (location.href = location.origin)
            );
          return;
        }
        let i = "exlg badge 注册器 ~ 奶奶的，还在测试，bug 巨他妈多";
        return (
          N(
            xr
              .replaceAll("LG_USER_NAME", C.name)
              .replaceAll("LG_USER_COLOR", ct[C.color]),
            i,
            {
              onopen: (s) => {
                (y.boards = {}),
                  ["main", "showError", "getPreset", "setbgColor"].forEach(
                    (c) =>
                      (y.boards[c] = s.jsdom.content.querySelector(
                        `div.exlg-regbadge-board[mode="${c}"]`
                      ))
                  ),
                  (y.errorMessage =
                    y.boards.showError.querySelector(".error-message")),
                  (s.jsdom.content.querySelector("input[key='uid']").value =
                    C.uid),
                  (y.badgePreview =
                    s.jsdom.content.querySelector("[badge-preview]")),
                  (y.pseudoPreview =
                    s.jsdom.content.querySelector("[tag-preview]")),
                  (y.badgePresetList = s.jsdom.content.querySelector(
                    ".exlg-regbadge-preset-list"
                  )),
                  (y.pseudoInput = s.jsdom.content.querySelector(
                    "input[key='tagText']"
                  )),
                  (y.activeInput = s.jsdom.content.querySelector(
                    "input[key='active']"
                  )),
                  (y.badgeInput = s.jsdom.content.querySelector(
                    "input[key='badgeText']"
                  )),
                  (y.presetInput = s.jsdom.content.querySelector(
                    "input[act='preset-json']"
                  )),
                  (y.ccfBadge = s.jsdom.content.querySelector(".ccf-badge")),
                  (y.JSONerror = s.jsdom.content.querySelector(
                    ".exlg-regbadge-board > span"
                  )),
                  (y.JSONerror.style.display = "none");
                let l = JSON.parse(I["sponsor-tag"].badges)[C.uid];
                typeof l > "u"
                  ? (y.isactive = !1)
                  : (t === null ? (Z = l) : (Z = t),
                    (y.activeInput.value = "已激活"),
                    y.activeInput.setAttribute("disabled", "")),
                  console.log(Z),
                  (y.badgeInput.value = Z.text ??= ""),
                  C.uid in ue
                    ? ((y.pseudoInput.parentNode.style.display = ""),
                      (y.pseudoInput.value = Z.pseudo ??= ue[C.uid]))
                    : (y.pseudoInput.parentNode.style.display = "none");
                let d = (c = Z) => {
                  let a = {};
                  Object.assign(a, c),
                    (a.pseudo = C.badge ?? a.pseudo ?? ue[C.uid]);
                  let p = Fe(C.uid, ct[C.color], "luogu4", a, !1);
                  (y.badgePreview.innerHTML = ""),
                    y.badgePreview.append(p.exlg ?? "(内容为空则不显示)"),
                    p.pseudoTag &&
                      ((y.pseudoPreview.innerHTML = ""),
                      y.pseudoPreview.append(p.pseudoTag));
                };
                C.ccfLevel < 3
                  ? (y.ccfBadge.style.cssText = "display: none;")
                  : C.ccfLevel < 6
                  ? (y.ccfBadge.style.cssText =
                      "--fa-primary-color:#fff; --fa-secondary-color:#52c41a; --fa-secondary-opacity:1;")
                  : C.ccfLevel < 8
                  ? (y.ccfBadge.style.cssText =
                      "--fa-primary-color:#fff; --fa-secondary-color:#3498db; --fa-secondary-opacity:1;")
                  : (y.ccfBadge.style.cssText =
                      "--fa-primary-color:#fff; --fa-secondary-color:#ffc116; --fa-secondary-opacity:1;"),
                  d(),
                  (y.setMode = function (c) {
                    (this.mode = c),
                      Object.keys(this.boards).forEach(
                        (a) => (this.boards[a].style.display = "none")
                      ),
                      (this.boards[c].style.display = ""),
                      (s.width = this.boards[c].getAttribute("wd") ?? "500px"),
                      (s.minHeight =
                        this.boards[c].getAttribute("mh") ?? "300px"),
                      c === "main" && d();
                  }),
                  (y.showError = function (c) {
                    this.setMode("showError"),
                      (this.errorMessage.innerText = c);
                  }),
                  y.setMode("main");
                let u = null;
                (y.presetInput.oninput = () => {
                  u && (u.style.border = "2px solid rgba(0, 0, 0, 0)");
                  let c = null,
                    a = !0;
                  document.querySelector(
                    ".exlg-regbadge-board > span"
                  ).style.display = "none";
                  try {
                    if (
                      ((c = JSON.parse(y.presetInput.value)),
                      typeof c != "object" || Array.isArray(c))
                    )
                      throw new TypeError(
                        "JSON ConfigData are supposed to be an Object!"
                      );
                  } catch (p) {
                    Q(p),
                      (a = !1),
                      (document.querySelector(
                        ".exlg-regbadge-board > span"
                      ).style.display = "");
                  }
                  a && d({ text: Z.text, pseudo: Z.pseudo, ...c });
                }),
                  (s.jsdom.content.querySelector(
                    'button[act="toPreset"]'
                  ).onclick = () => {
                    y.setMode("getPreset");
                    let c = {};
                    n.forEach((a) => {
                      c[a] = Z[a] ?? "";
                    }),
                      (y.presetInput.value = JSON.stringify(c)),
                      y.presetInput.oninput();
                  }),
                  n.forEach((c) => (Z[c] ??= "")),
                  (G = new Proxy(Z, {
                    get(c, a, p) {
                      if (a === "pseudo") return c.pseudo;
                      if (a === "text") return c.text;
                      if (n.includes(a)) return c[a];
                    },
                    set(c, a, p, f) {
                      try {
                        if (a === "pseudo" || a === "text")
                          return (
                            ((a === "pseudo"
                              ? y.pseudoInput
                              : y.badgeInput
                            ).value = p),
                            Reflect.set(c, a, p)
                          );
                        if (n.includes(a))
                          return (
                            (r[a].inputdom.value = p), Reflect.set(c, a, p)
                          );
                        if (a === "configString")
                          return y.assignData(JSON.parse(p)), !0;
                      } catch (x) {
                        Q(x);
                      } finally {
                        d();
                      }
                    },
                  })),
                  (y.assignData = (c) => {
                    if (
                      (console.log("assign: ", c),
                      typeof c != "object" || Array.isArray(c))
                    )
                      throw new TypeError(
                        "JSON ConfigData are supposed to be an Object!"
                      );
                    n.forEach((a) => {
                      G[a] = c[a] ?? "";
                    });
                  }),
                  (y.pseudoInput.oninput = () =>
                    (G.pseudo = y.pseudoInput.value)),
                  (y.badgeInput.oninput = () => (G.text = y.badgeInput.value)),
                  G.pseudo,
                  G.text,
                  n.forEach((c) => {
                    let a = r[c],
                      p = document.createElement("span");
                    p.style.margin = "5px";
                    let f = document.createElement("span");
                    (f.className = "exlg-regbadge-fronttitle"),
                      (f.innerText = a.name);
                    let x = document.createElement("input");
                    if (
                      (x.setAttribute("keyId", c),
                      x.setAttribute("exlg-badge-register", ""),
                      x.setAttribute("type", "text"),
                      x.setAttribute("placeholder", a.default),
                      (x.style.padding = ".1em"),
                      (x.value = Z[c]),
                      p.append(f),
                      p.append(x),
                      s.jsdom.content
                        .querySelector("#regbadge-settings")
                        .append(p),
                      s.jsdom.content
                        .querySelector("#regbadge-settings")
                        .append(document.createElement("br")),
                      (x.oninput = () => {
                        G[c] = x.value;
                      }),
                      (r[c].inputdom = x),
                      c === "bg")
                    ) {
                      let h = document.createElement("button");
                      (h.innerHTML = "+"),
                        p.append(h),
                        (h.onclick = () => y.setMode("setbgColor"));
                    }
                    if (c === "fg") {
                      let h = document.createElement("span");
                      h.classList.add("exlg-colpicker"),
                        (h.id = `exlg-pickr-${c}`);
                      let m = document.createElement("style");
                      (m.innerHTML = GM_getResourceText("pickr_resource_css")),
                        p.append(m),
                        p.append(h);
                      let b = Pickr.create({
                        el: `#exlg-pickr-${c}`,
                        theme: "nano",
                        swatches: [
                          "rgba(244, 67, 54, 1)",
                          "rgba(233, 30, 99, 0.95)",
                          "rgba(156, 39, 176, 0.9)",
                          "rgba(103, 58, 183, 0.85)",
                          "rgba(63, 81, 181, 0.8)",
                          "rgba(33, 150, 243, 0.75)",
                          "rgba(3, 169, 244, 0.7)",
                          "rgba(0, 188, 212, 0.7)",
                          "rgba(0, 150, 136, 0.75)",
                          "rgba(76, 175, 80, 0.8)",
                          "rgba(139, 195, 74, 0.85)",
                          "rgba(205, 220, 57, 0.9)",
                          "rgba(255, 235, 59, 0.95)",
                          "rgba(255, 193, 7, 1)",
                        ],
                        components: {
                          preview: !0,
                          opacity: !0,
                          hue: !0,
                          interaction: {
                            hex: !1,
                            rgba: !1,
                            hsla: !1,
                            hsva: !1,
                            cmyk: !1,
                            input: !0,
                            clear: !0,
                            save: !0,
                          },
                        },
                      });
                      (r[c].isUserSave = !1),
                        b
                          .on("init", (w) => {
                            console.log('Event: "init"', w);
                            let k = G[c];
                            b.setColor(
                              y.pseudoPreview.lastElementChild.style[r[c].css]
                            ),
                              (G[c] = k);
                          })
                          .on("save", (w, k) => {
                            console.log('Event: "save"', w, k),
                              w !== null &&
                                ((G[c] = w.toHEXA().toString()),
                                (r[c].isUserSave = !0));
                          }),
                        (r[c].cp = b),
                        (x.oninput = () => {
                          (G[c] = x.value),
                            r[c].isUserSave || b.setColor(null),
                            (r[c].isUserSave = !1);
                        });
                    }
                  }),
                  Object.keys(Ce).forEach((c) => {
                    let a = document.createElement("div");
                    (a.innerHTML = Ce[c].title),
                      (a.className = "exlg-regbadge-preset-title"),
                      y.badgePresetList.append(a),
                      Object.keys(Ce[c].presetList).forEach((p, f) => {
                        let { name: x, config: h } = Ce[c].presetList[p],
                          m = JSON.parse(h);
                        console.log(x, h, m);
                        let b = document.createElement("span");
                        (b.style.border = "2px solid rgba(0, 0, 0, 0)"),
                          b.append(
                            Fe(
                              C.uid,
                              ct[C.color],
                              "luogu4",
                              { text: "exlg", ...m },
                              !1
                            ).exlg
                          );
                        let w = document.createElement("span");
                        w.append(x),
                          b.append(w),
                          (b.onclick = () => {
                            (y.presetInput.value = h),
                              y.presetInput.oninput(),
                              (b.style.border = "2px solid grey"),
                              (u = b);
                          }),
                          y.badgePresetList.append(b),
                          f & 1 &&
                            y.badgePresetList.append(
                              document.createElement("br")
                            );
                      });
                  }),
                  (A.regBadge = y),
                  (A.configProxy = G),
                  (y.bgModeSelect = s.jsdom.content.querySelector(
                    "#regbadge-setbgColor-type-select"
                  )),
                  (y.bgBoard = {}),
                  y.bgModeSelect.childNodes.forEach((c) => {
                    let a = c.value;
                    !a ||
                      ((y.bgBoard[a] = s.jsdom.content.querySelector(
                        `.exlg-regbadge-bg-box[mode="${a}"]`
                      )),
                      console.log(c, a, y.bgBoard[a]));
                  }),
                  (y.bgModeSelect.onchange = function () {
                    Object.keys(y.bgBoard).forEach((c) => {
                      y.bgBoard[c].style.display = "none";
                    }),
                      (y.bgBoard[this.value].style.display = "");
                  }),
                  (y.bgtextInput = y.bgBoard.text.querySelector("input")),
                  (y.bgtextInput.value = G.bg),
                  (y.bgsingle = Pickr.create({
                    el: 'span[exlg="bg-single-pickr"]',
                    theme: "nano",
                    swatches: [
                      "rgba(244, 67, 54, 1)",
                      "rgba(233, 30, 99, 0.95)",
                      "rgba(156, 39, 176, 0.9)",
                      "rgba(103, 58, 183, 0.85)",
                      "rgba(63, 81, 181, 0.8)",
                      "rgba(33, 150, 243, 0.75)",
                      "rgba(3, 169, 244, 0.7)",
                      "rgba(0, 188, 212, 0.7)",
                      "rgba(0, 150, 136, 0.75)",
                      "rgba(76, 175, 80, 0.8)",
                      "rgba(139, 195, 74, 0.85)",
                      "rgba(205, 220, 57, 0.9)",
                      "rgba(255, 235, 59, 0.95)",
                      "rgba(255, 193, 7, 1)",
                    ],
                    components: {
                      preview: !0,
                      opacity: !0,
                      hue: !0,
                      interaction: {
                        hex: !1,
                        rgba: !1,
                        hsla: !1,
                        hsva: !1,
                        cmyk: !1,
                        input: !0,
                        clear: !0,
                        save: !0,
                      },
                    },
                  }));
              },
              oncancel: () => {
                switch (y.mode) {
                  case "success":
                  case "main":
                    return !0;
                  default:
                    return y.setMode("main"), !1;
                }
              },
              onconfirm: async (s) => {
                if (y.mode === "success") return location.reload(), !0;
                if (y.mode === "showError") return y.setMode("main"), !1;
                if (y.mode === "getPreset") {
                  try {
                    y.assignData(JSON.parse(y.presetInput.value));
                  } catch (c) {
                    return (
                      (s.title = "[Err] 无效json"),
                      Q(c),
                      setTimeout(() => (s.title = i), 1500),
                      !1
                    );
                  }
                  return y.setMode("main"), !1;
                }
                if (y.mode === "setbgColor") {
                  switch (y.bgModeSelect.value) {
                    case "text":
                      G.bg = y.bgtextInput.value;
                      break;
                    case "lgdefault":
                      G.bg = "${luogu-default}";
                      break;
                    case "single":
                      console.log(y.bgsingle.getColor().toHEXA().toString()),
                        (G.bg = y.bgsingle.getColor().toHEXA().toString());
                      break;
                    case "xncolorpicker":
                      G.bg = y.bgxnpicker.getColor();
                      break;
                  }
                  return y.setMode("main"), !1;
                }
                if (
                  !((c) =>
                    c
                      ? ((s.title = c),
                        setTimeout(() => (s.title = i), 1500),
                        !1)
                      : !0)(
                    ((c) => {
                      if (c.fs)
                        if (
                          /^\d{0,}(.\d{0,})?(px|em)$/.test(c.fs) &&
                          !["px", "em"].includes(c.fs)
                        ) {
                          let a = c.fs.slice(0, -2);
                          if (
                            (c.fs.includes("px") && a > 16) ||
                            (c.fs.includes("em") && a > 1)
                          )
                            return "[Err] 字号过大，应不超过 16px/1em";
                        } else return "[Err] 字号应以 px/em 为单位且合法";
                    })(Z)
                  )
                )
                  return !1;
                (s.title = "获取并验证令牌..."),
                  v.execute("token"),
                  console.log(Z);
                let l = { uid: C.uid, token: I["^token"].token, data: Z };
                y.isactive || (l.activation = y.activeInput.value),
                  (s.title = "请求中...");
                let d = await K("https://exlg.piterator.com/badge/set", l).data;
                if ("error" in d)
                  return (s.title = "[Err] 失败"), y.showError(d.error), !1;
                let u = JSON.parse(I["sponsor-tag"].badges);
                return (
                  (u[l.uid] = Z),
                  (u[l.uid].ts = W()),
                  (I["sponsor-tag"].badges = JSON.stringify(u)),
                  (s.title = "badge 激活成功"),
                  (s.content =
                    "badge 激活成功！感谢您对 exlg 的<del>打钱</del>支持。"),
                  (y.mode = "success"),
                  !1
                );
              },
            },
            { width: "800px", min_height: "400px" }
          ),
          y
        );
      },
      wr
    ),
    He = Eo;
  var No = oe.reg(
      "get-latest",
      "获取最新版本",
      {
        fetch_preview: {
          ty: "boolean",
          dft: !1,
          info: ["Update preview versions", "预览版更新"],
        },
      },
      null,
      ({ msto: e }) =>
        new Promise((t, r) => {
          ne({
            url: `https://api.github.com/repos/extend-luogu/extend-luogu/releases${
              e.fetch_preview ? "?per_page=1" : "/latest"
            }`,
            onload: (n) => {
              let o = JSON.parse(n.responseText),
                i = (Array.isArray(o) ? o[0] : o).tag_name,
                { version: s } = GM_info.script,
                l = pe(s, i),
                d = `Comparing version: ${s} ${l} ${i}`;
              M(d), t([i, l]);
            },
            onerror: (n) => {
              U(n), r(n);
            },
          });
        })
    ),
    Qe = No;
  var _r =
    '#exlg-dash{margin-right:5px;position:relative;display:inline-block;padding:1px 10px 3px;color:#fff;border-radius:6px;box-shadow:0 0 7px #1e90ff;cursor:pointer}#exlg-dash>.exlg-warn{position:absolute;top:-.5em;right:-.5em}.exlg-icon:before{display:inline-block;width:1.3em;height:1.3em;margin-left:3px;text-align:center;border-radius:50%}.exlg-icon:hover:after{display:inline-block}.exlg-icon:after{display:none;content:attr(name);margin-left:5px;padding:0 3px;background-color:#fff;box-shadow:0 0 7px #00bfff;border-radius:7px}.exlg-icon.exlg-info:before{content:"i";color:#fff;background-color:#00bfff;font-style:italic}.exlg-icon.exlg-warn:before{content:"!";color:#fff;background-color:#e74c3c;font-style:normal}.exlg-unselectable{-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none}:root{--exlg-azure: #7bb8eb;--exlg-aqua: #03a2e8;--exlg-indigo: #3f48cb;--std-mediumturquoise: #48d1cc;--std-cornflowerblue: #6495ed;--std-dodgerblue: #1e90ff;--std-white: #fff;--std-black: #000;--lg-gray: #bbb;--lg-gray-2: #7f7f7f;--lg-gray-3: #6c757d;--lg-gray-4: #414345;--lg-gray-5: #333;--lg-gray-6: #000000bf;--lg-blue: #3498db;--lg-blue-button: #0e90d2;--lg-blue-dark: #34495e;--lg-blue-2: #7cb5ecbf;--lg-green: #5eb95e;--lg-green-dark: #054310c9;--lg-green-light: #5eb95e26;--lg-green-light-2: #c9e7c9;--lg-yellow: #f1c40f;--lg-orange: #e67e22;--lg-red: #e74c3c;--lg-red-light: #dd514c26;--lg-red-light-2: #f5cecd;--lg-red-button: #dd514c;--lg-purple: #8e44ad;--argon-indigo: #5e72e4;--argon-red: #f80031;--argon-red-button: #f5365c;--argon-green: #1aae6f;--argon-green-button: #2dce89;--argon-cyan: #03acca;--argon-yellow: #ff9d09;--lg-red-problem: #fe4c61;--lg-orange-problem: #f39c11;--lg-yellow-problem: #ffc116;--lg-green-problem: #52c41a;--lg-blue-problem: #3498db;--lg-purple-problem: #9d3dcf;--lg-black-problem: #0e1d69;--lg-gray-problem: #bfbfbf}.exlg-difficulty-color{font-weight:700}.exlg-difficulty-color.color-0{color:#bfbfbf!important}.exlg-difficulty-color.color-1{color:#fe4c61!important}.exlg-difficulty-color.color-2{color:#f39c11!important}.exlg-difficulty-color.color-3{color:#ffc116!important}.exlg-difficulty-color.color-4{color:#52c41a!important}.exlg-difficulty-color.color-5{color:#3498db!important}.exlg-difficulty-color.color-6{color:#9d3dcf!important}.exlg-difficulty-color.color-7{color:#0e1d69!important}#exlg-dash-wrapper:hover>.exlg-window{visibility:visible;opacity:1;transition-delay:unset}#exlg-dash-wrapper>.exlg-window{position:absolute;top:35px;left:0;z-index:148;visibility:hidden;opacity:0;width:340px;padding:15px;background:white;color:#000;border-radius:7px;box-shadow:#bbe3ff 0 0 7px;transition:.233s ease all}.exlg-window{position:absolute;top:35px;left:0;width:340px;padding:15px;z-index:6;background:white;color:#000;border-radius:7px;box-shadow:#bbe3ff 0 0 7px;transition:.233s ease all}.exlg-windiv-left-tag{height:2em;width:18%;margin-right:10px;display:inline-block;text-align:center}.exlg-windiv-btn{font-size:.9em;display:inline-block;flex:none;outline:0;cursor:pointer;color:#fff;font-weight:inherit;line-height:1.5;text-align:center;vertical-align:middle;background:0 0;border-radius:5px;border:1px solid;margin:4px}.dropdown>.center{padding:4px 1px 10px}';
  var $r =
    "#exlg-dash{padding:3px 19px 4px;box-shadow:0 2px 5px #0009;font-family:Fira Code,Fira Mono,Consolas}#exlg-dash-window[class=exlg-window]{box-shadow:0 3px 8px #0009;font-family:Fira Code,Fira Mono,Consolas;padding:10px;width:400px!important;left:-175px!important;background:rgba(255,255,255,.6);backdrop-filter:blur(12px);margin-top:10px}#exlg-windiv,#exlg-dash-window>h2{padding:5px}#exlg-dash-window>h2 g{fill:#3f48cc}.exlg-windiv-btn{background-color:#3f48cc!important;border:none!important;padding:.313em 1em}.exlg-windiv-btn:hover{background-color:#607ee8!important;transition:background-color .25s}#link-div .exlg-windiv-btnspan:nth-child(2) svg{fill:#fff;padding-right:3px;height:16px;width:16px;line-height:1.5}";
  var dt =
    '.ops>a.color-none{width:auto;display:flex;align-items:center;justify-content:space-between;padding:6px 14px;border-radius:8px;color:var(--text2);font-size:14px;cursor:pointer;transition:background-color .3s;margin:2px}.ops>a.color-none:hover{background-color:#e3e5e7;border-radius:8px}.ops>a.color-none>.link-title{display:flex;align-items:center}.ops>a.color-none>.link-title>svg{margin-right:8px;width:16px}.ops>a.color-none:after{transform:rotate(-90deg);content:url("data:image/svg+xml;charset=UTF-8, %3Csvg%20style=%22fill:%20rgb(108,%20117,%20125);%22%20width=%2210%22%20height=%2210%22%20viewBox=%220%200%209%209%22%20fill=%22rgb(108,%20117,%20125)%22%20xmlns=%22http://www.w3.org/2000/svg%22%20class=%22link-icon--right%22%3E%3Cpath%20fill-rule=%22evenodd%22%20clip-rule=%22evenodd%22%20d=%22M7.50588%203.40623C7.40825%203.3086%207.24996%203.3086%207.15232%203.40623L4.41244%206.14612L1.67255%203.40623C1.57491%203.3086%201.41662%203.3086%201.31899%203.40623C1.22136%203.50386%201.22136%203.66215%201.31899%203.75978L4.11781%206.5586C4.28053%206.72132%204.54434%206.72132%204.70706%206.5586L7.50588%203.75978C7.60351%203.66215%207.60351%203.50386%207.50588%203.40623Z%22%20fill=%22rgb(108,%20117,%20125)%22%3E%3C/path%3E%3Cpath%20d=%22M7.15232%203.40623L7.50588%203.75978L7.50588%203.75978L7.15232%203.40623ZM7.50588%203.40623L7.15232%203.75978L7.15233%203.75978L7.50588%203.40623ZM4.41244%206.14612L4.05888%206.49967C4.15265%206.59344%204.27983%206.64612%204.41244%206.64612C4.54504%206.64612%204.67222%206.59344%204.76599%206.49967L4.41244%206.14612ZM1.67255%203.40623L2.0261%203.05268L2.0261%203.05268L1.67255%203.40623ZM1.31899%203.40623L0.965439%203.05268L0.965439%203.05268L1.31899%203.40623ZM1.31899%203.75978L1.67255%203.40623V3.40623L1.31899%203.75978ZM4.11781%206.5586L3.76425%206.91215L4.11781%206.5586ZM4.70706%206.5586L4.35351%206.20505L4.70706%206.5586ZM7.50588%203.75978L7.15233%203.40623L7.15232%203.40623L7.50588%203.75978ZM7.50588%203.75978C7.40825%203.85742%207.24996%203.85742%207.15232%203.75978L7.85943%203.05268C7.56654%202.75978%207.09166%202.75978%206.79877%203.05268L7.50588%203.75978ZM4.76599%206.49967L7.50588%203.75978L6.79877%203.05268L4.05888%205.79257L4.76599%206.49967ZM1.31899%203.75978L4.05888%206.49967L4.76599%205.79257L2.0261%203.05268L1.31899%203.75978ZM1.67254%203.75979C1.57491%203.85742%201.41662%203.85742%201.31899%203.75979L2.0261%203.05268C1.73321%202.75978%201.25833%202.75978%200.965439%203.05268L1.67254%203.75979ZM1.67255%203.40623C1.77018%203.50386%201.77018%203.66215%201.67255%203.75978L0.965439%203.05268C0.672546%203.34557%200.672546%203.82044%200.965439%204.11334L1.67255%203.40623ZM4.47136%206.20505L1.67255%203.40623L0.965439%204.11334L3.76425%206.91215L4.47136%206.20505ZM4.35351%206.20505C4.38605%206.1725%204.43882%206.1725%204.47136%206.20505L3.76425%206.91215C4.12223%207.27013%204.70264%207.27013%205.06062%206.91215L4.35351%206.20505ZM7.15232%203.40623L4.35351%206.20505L5.06062%206.91215L7.85943%204.11334L7.15232%203.40623ZM7.15233%203.75978C7.05469%203.66215%207.05469%203.50386%207.15233%203.40623L7.85943%204.11334C8.15233%203.82045%208.15233%203.34557%207.85943%203.05268L7.15233%203.75978Z%22%20fill=%22rgb(108,%20117,%20125)%22%3E%3C/path%3E%3C/svg%3E")}.ops>a:hover{background-color:#e3e5e7;border-radius:1em}.wrapper.hover>.dropdown>.center{font-size:1.1em}.exlg-dropdown.field{display:inline-block;border-left:none;padding:0 .8em}.exlg-dropdown.field:hover{color:#00aeec!important}.exlg-dropdown.field:hover>.value{color:#00aeec!important}.exlg-dropdown.field:hover>.key{color:#00aeec!important}.exlg-dropdown.field>.value{display:block;text-align:center;line-height:1.5;font-weight:700;color:#6c757d;font-size:1.1em;transition:color .2s}.exlg-dropdown.field>.key{display:block;text-align:center;color:#9499a0;font-weight:400;font-size:.75em;transition:color .2s}.exlg-dropdown.field>.key-small{display:block;text-align:center;color:#9499a0;font-weight:400;font-size:.5em;transition:color .2s}.ops[data-v-78704ac9]{padding:.5em .9em}.header[data-v-78704ac9]{margin-bottom:-.6em}';
  v.reg_main(
    "dash-board",
    "控制面板",
    v.path_dash_board,
    {
      msg: {
        ty: "object",
        priv: !0,
        lvs: {
          queue: {
            ty: "array",
            itm: {
              ty: "object",
              lvs: { text: { ty: "string" }, id: { ty: "number" } },
            },
          },
          last_id: { ty: "number", dft: 0 },
        },
      },
      lang: {
        ty: "enum",
        dft: "zh",
        vals: ["zh", "en"],
        info: ["Language of descriptions in the dashboard", "控制面板提示语言"],
      },
      load_speed: {
        ty: "number",
        dft: 10,
        min: 0,
        max: 10,
        info: ["Dash animation speed", "dash 动画速度"],
      },
    },
    () => {
      let e = (r, n = []) =>
          Object.entries(r)
            .filter(([o, i]) => (n.length || o !== "on") && !i.priv)
            .flatMap(([o, i]) =>
              i.ty === "object"
                ? e(i.lvs, n.concat(o))
                : {
                    name: n.concat(o),
                    displayName: o
                      .split("_")
                      .map((s) => s.toInitialCase())
                      .join(" "),
                    description: i.info,
                    type: {
                      number: "SLIDER",
                      boolean: "CHECKBOX",
                      string: "TEXTBOX",
                      enum: "SELECTBOX",
                    }[i.ty],
                    ...(i.ty === "number" && {
                      minValue: i.min,
                      maxValue: i.max,
                      increment: i.step,
                    }),
                    ...(i.ty === "enum" && { acceptableValues: i.vals }),
                  }
            ),
        t = [...Y._].map(
          ([r, { description: n, alias: o, icon: i, unclosable: s }]) => ({
            name: r,
            description: n,
            icon: i,
            children: (r === "component"
              ? [...oe._]
              : [...v._].filter(([, l]) => l.cate === r)
            ).map(([l, d]) => ({
              rawName: o + l,
              name: l,
              description: d.info,
              unclosable: s,
              settings: e(J[o + l]?.lvs ?? {}),
            })),
          })
        );
      console.log(t), A.guiStart(t);
    }
  );
  v.reg_hook_new(
    "dash-bridge",
    "控制桥",
    "@/.*",
    {
      source: {
        ty: "enum",
        vals: ["exlg", "gh_index", "debug"],
        dft: "exlg",
        info: [
          "The website to open when clicking the exlg button",
          "点击 exlg 按钮时打开的网页",
        ],
      },
      beautify_dropdown: {
        ty: "boolean",
        dft: !0,
        info: ["Beautify Dropdown", "右上角用户信息卡美化"],
      },
      beautify_dash: {
        ty: "boolean",
        dft: !0,
        info: ["Beautify Dash Board", "控制桥面板美化"],
      },
      enable_rclick: {
        ty: "boolean",
        dft: !0,
        info: ["Use Right Click to change source", "右键点击按钮换源"],
      },
      latest_ignore: { ty: "string", dft: "0.0.0" },
    },
    ({ msto: e, args: t }) => {
      ["exlg", "gh_index", "debug"].indexOf(e.source) === -1 &&
        (e.source = "exlg");
      let { $tar: r } = t,
        n = () =>
          (A.exlg.dash = A.open(
            {
              exlg: "https://dash.exlg.cc/index.html",
              gh_index:
                "https://extend-luogu.github.io/exlg-setting-new/index.html",
              debug: "localhost:1634/index.html",
            }[e.source]
          ));
      if (e.beautify_dropdown) {
        GM_addStyle(dt);
        let d = (c, a, p = g(a)) => {
          p.addClass("exlg-dash-options"),
            (a.innerHTML = `<div class="link-title">${a.innerHTML}</div>`);
        };
        if (t.type === 2) {
          d(0, r[0], r);
          return;
        }
        let u = (c, a) => {
          c.children(".header").after(`<style>${dt}</style>`).after(`
                <div style="margin-top: 0.4em;">
                    <a class="exlg-dropdown field" href="//www.luogu.com.cn/user/${
                      C.uid
                    }#following.following">
                        <span class="value">${C.followingCount}</span>
                        <span data-v-3c4577b8="" class="key">关注</span>
                    </a>
                    <a class="exlg-dropdown field" href="//www.luogu.com.cn/user/${
                      C.uid
                    }#following.follower">
                        <span class="value">${C.followerCount}</span>
                        <span data-v-3c4577b8="" class="key">粉丝</span>
                    </a>
                    <a class="exlg-dropdown field" href="//www.luogu.com.cn/user/notification">
                        <span class="value">${
                          C.unreadNoticeCount + C.unreadMessageCount
                        }</span>
                        <span data-v-3c4577b8="" class="key">动态</span>
                    </a>
                </div>
                `).after(`
                <div class="exlg-dropdown field">
                    <span data-v-3c4577b8="" class="key-small">CCF 评级: <strong>${C.ccfLevel}</strong> | 咕值排行: <strong>${C.ranking}</strong></span>
                </div>
                `),
            a.each(d);
          let p = g(a[5]).clone().attr("href", "javascript:void 0");
          p.on("click", n),
            g(a[5]).after(p),
            p.children("div.link-title").html(`${mr} 插件设置`);
        };
        (r.hasClass("user-nav") || r.parent().hasClass("user-nav")) &&
          u(r.find(".dropdown > .center"), r.find(".ops > a"));
      }
      let o = g('<span id="exlg-dash-wrapper"></span>').prependTo(r),
        i = g('<span id="exlg-dash-window" class="exlg-window"></span>').css(
          "left",
          "-125px"
        ),
        s = g('<div id="exlg-dash" exlg="exlg">exlg</div>')
          .prependTo(o)
          .css(
            "backgroundColor",
            {
              exlg: "cornflowerblue",
              gh_index: "darkblue",
              debug: "steelblue",
            }[e.source]
          )
          .css("margin-top", r.hasClass("nav-container") ? "5px" : "0px");
      if (
        (e.enable_rclick
          ? s.on("contextmenu", !1).on("mousedown", (d) => {
              d.button
                ? d.button === 2 &&
                  ((e.source = {
                    exlg: "gh_index",
                    gh_index: "debug",
                    debug: "exlg",
                  }[e.source]),
                  s.css(
                    "backgroundColor",
                    {
                      exlg: "cornflowerblue",
                      gh_index: "darkblue",
                      debug: "steelblue",
                    }[e.source]
                  ))
                : n();
            })
          : s.on("click", n),
        !r.parent().hasClass("mobile-nav-container"))
      ) {
        e.beautify_dash && i.append(`<style>${$r}</style>`),
          i.appendTo(o),
          g(
            `<h2 align="center" style="margin-top: 5px;margin-bottom: 10px;">${qe}</h2>`
          ).appendTo(i);
        let d = g('<div id="exlg-windiv"></div>').appendTo(i);
        [
          { tag: "vers", title: "版本", buttons: [] },
          {
            tag: "source",
            title: "源码",
            buttons: [
              {
                html: "OSS",
                url: "https://exlg.oss-cn-shanghai.aliyuncs.com/latest/dist/extend-luogu.min.user.js",
              },
              {
                html: "JsDelivr",
                url: `https://fastly.jsdelivr.net/gh/extend-luogu/extend-luogu${
                  I["#get-latest"].fetch_preview ? "@preview" : ""
                }/dist/extend-luogu.min.user.js`,
              },
              {
                html: "Raw",
                url: `https://github.com/extend-luogu/extend-luogu/raw/${
                  I["#get-latest"].fetch_preview ? "preview" : "latest"
                }/dist/extend-luogu.min.user.js`,
              },
            ],
          },
          {
            tag: "link",
            title: "链接",
            buttons: [
              { html: "官网", url: "https://exlg.cc" },
              {
                col: "#666",
                html: `<a style="height: 8px;width: 8px;">${hr}</a>Github`,
                url: "https://github.com/extend-luogu/extend-luogu",
              },
              { html: "爱发电", url: "https://afdian.net/@extend-luogu" },
            ],
          },
          {
            tag: "help",
            title: "帮助",
            buttons: [
              { html: "官方文档", url: "https://docs.exlg.cc" },
              { html: "用户协议", url: "https://docs.exlg.cc/POLICY.html" },
            ],
          },
          {
            tag: "debug",
            title: "debug",
            buttons: [
              {
                html: "清除数据",
                title: "清空所有数据，无法恢复。",
                onclick: () => {
                  N(
                    '你确定要这么做吗？<br/><strong style="color: red;">数据将不可恢复！</strong>',
                    "exlg 警告！",
                    () => (
                      GM_listValues().forEach(GM_deleteValue),
                      location.reload(),
                      !0
                    )
                  );
                },
              },
              {
                html: "刷新 token",
                title: "多用于犇犇、badge 等服务不能正确运行时。",
                onclick: () => {
                  N(
                    "点击确定以刷新用户 token。",
                    "exlg 提醒您",
                    async () => (
                      await v.execute("token"), location.reload(), !0
                    )
                  );
                },
              },
            ],
          },
          {
            tag: "badge",
            title: "badge",
            buttons: [
              { html: "注册/修改", onclick: () => He() },
              {
                html: "刷新 badge",
                title: "多用于 badge 数据滞后时。",
                onclick: () => {
                  N(
                    "点击确定以刷新 badge 数据。",
                    "exlg 提醒您",
                    async () => (
                      (I["sponsor-tag"].badges = "{}"), location.reload(), !0
                    )
                  );
                },
              },
            ],
          },
          {
            tag: "author",
            title: "Expanded",
            buttons: [
              {
                html: "by yingjingxu_NaS2O3",
                url: "https://www.luogu.com.cn/user/495469",
              },
            ],
          },
        ].forEach((c) => {
          let a = g(
              `<div id="${c.tag}-div"><span class="exlg-windiv-left-tag">${c.title}</span></div>`
            ).appendTo(d),
            p = g("<span></span>").appendTo(a);
          if (
            (c.buttons.forEach((f) => {
              let x = f.col ?? "#66ccff";
              g('<span class="exlg-windiv-btnspan"></span>')
                .append(
                  g(
                    `<button class="exlg-windiv-btn"${
                      f.title ? ` title="${f.title}"` : ""
                    }" style="background-color: ${x};border-color: ${x};">${
                      f.html
                    }</button>`
                  ).on("click", f.onclick ?? (() => (location.href = f.url)))
                )
                .appendTo(p);
            }),
            c.tag === "vers")
          ) {
            p.append(
              g(`<span id="version-text" style="min-width: 60%; margin-left: 5px;">
    <span title="当前版本">${GM_info.script.version}</span>
    <span id="vers-comp-operator" style="margin-left: 5px;"></span>
    <span id="latest-version" style="margin-left: 5px;"></span>
    <span id="annoyingthings"></span></span>"`)
            );
            let f = g(
                '<button class="exlg-windiv-btn" style="background-color: red;border-color: red;float: right;margin: 0 20px 0 0;">刷新</button>'
              ),
              x = p.find("#vers-comp-operator"),
              h = p.find("#latest-version"),
              m = p.find("#annoyingthings"),
              b = async () => {
                x.text(""), h.text(""), m.html("");
                let [w, k] = await Qe();
                if (
                  (x
                    .html(k)
                    .css(
                      "color",
                      { "<<": "#fe4c61", "==": "#52c41a", ">>": "#3498db" }[k]
                    ),
                  h.text(w).attr("title", "最新版本"),
                  m
                    .html(
                      {
                        "<<": '<i class="exlg-icon exlg-info" name="有新版本"></i>',
                        ">>": '<i class="exlg-icon exlg-info" name="内测中！"></i>',
                      }[k] || ""
                    )
                    .children()
                    .css(
                      "cssText",
                      "position: absolute;display: inline-block;"
                    ),
                  k === "<<" && pe(e.latest_ignore, w) === "<<")
                ) {
                  let L = g(
                    `<span style="color: red;margin-left: 30px;">${br}</span>`
                  )
                    .on("click", () => {
                      (e.latest_ignore = w), L.hide();
                    })
                    .appendTo(m);
                }
                k === "==" && (e.latest_ignore = GM_info.script.version);
              };
            f.on("click", b).appendTo(p);
          }
        });
      }
    },
    (e) => {
      let t = g(e.target);
      if (
        e.target.tagName.toLowerCase() === "a" &&
        t.hasClass("color-none") &&
        t.parent().hasClass("ops") &&
        !t.hasClass("exlg-dash-options")
      )
        return { result: 2, args: { $tar: g(e.target), type: 2 } };
      let r = t.find(".user-nav, .nav-container");
      return r.length && !r.find("#exlg-dash-window").length
        ? {
            result: r.length,
            args: {
              $tar: r[0].tagName === "DIV" ? g(r[0].firstChild) : r,
              type: 1,
            },
          }
        : { result: 0 };
    },
    () => ({
      $tar: g("nav.user-nav, div.user-nav > nav, .nav-container"),
      type: 0,
    }),
    _r,
    "core"
  );
  var Lr =
    ".am-btn-warning{border-color:#ffc116;background-color:#ffc116;color:#fff}.am-btn-warning:hover{border-color:#f37b1d;background-color:#f37b1d;color:#fff}.am-btn{outline:none}";
  v.reg(
    "discussion-save",
    "讨论保存",
    ["@/discuss/\\d+(\\?page\\=\\d+)*$"],
    {
      auto_save_discussion: {
        ty: "boolean",
        dft: !1,
        strict: !0,
        info: ["Discussion Auto Save", "自动保存讨论"],
      },
    },
    ({ msto: e }) => {
      let t = g(
          '<button class="am-btn am-btn-success am-btn-sm" name="save-discuss">保存讨论</button>'
        ),
        r = window.location.pathname.split("/")[2];
      t.on("click", () => {
        t.prop("disabled", !0),
          t.text("保存中..."),
          ne({
            url: `https://lda.piterator.com/${r}`,
            onload: (o) => {
              o.status <= 400
                ? (M("Discuss saved"),
                  t.text("保存成功"),
                  setTimeout(() => {
                    t.text("保存讨论"), t.removeAttr("disabled");
                  }, 1e3))
                : (M("Fail to save discuss: ", o),
                  t.text("保存失败"),
                  t.toggleClass("am-btn-success").toggleClass("am-btn-danger"),
                  setTimeout(() => {
                    t.text("保存讨论"),
                      t.removeAttr("disabled"),
                      t
                        .toggleClass("am-btn-success")
                        .toggleClass("am-btn-danger");
                  }, 1e3));
            },
            onerror: (o) => {
              M(`Error:${o}`), t.removeAttr("disabled");
            },
          });
      }).css("margin-top", "5px");
      let n = g(
        `<a class="am-btn am-btn-warning am-btn-sm" name="save-discuss" href="https://lglg.top/${r}">查看备份</a>`
      ).css("margin-top", "5px");
      g("section.lg-summary")
        .find("p")
        .append(g("<br>"))
        .append(t)
        .append(g("<span>&nbsp;</span>"))
        .append(n),
        e.auto_save_discussion && t.click();
    },
    Lr,
    "module"
  );
  var Tr =
    ".mp-editor-ground.exlg-ext.exlg-show-emo.exlg-show-emo-long{top:8.25em!important}.mp-editor-ground.exlg-ext.exlg-show-emo.exlg-show-emo-short{top:4.75em!important}.mp-editor-menu>br~li{position:relative;display:inline-block;margin:0;padding:5px 1px}.mp-editor-menu.exlg-show-emo.exlg-show-emo-long{height:6em!important;overflow:auto;background-color:#fff}.mp-editor-menu.exlg-show-emo.exlg-show-emo-short{height:2.5em!important;overflow:auto;background-color:#fff}.exlg-emo-btn{position:relative;top:0;border:none;background-color:#eee;border-radius:.7em;margin:.1em;transition:all .4s;height:2em}.exlg-emo-btn:hover{background-color:#f3f3f3;top:-3px}.exlg-emo,.exlg-ext{transition:all .15s}";
  var he = { EMO: 1, TXT: 2 };
  v.reg(
    "emoticon",
    "表情输入",
    ["@/paste", "@/discuss/.*", "@/"],
    {
      benben: { ty: "boolean", dft: !0, info: ["Show in benben", "犇犇表情"] },
      show: {
        ty: "boolean",
        dft: !0,
        info: ["Show in default", "是否默认显示表情栏"],
      },
      src: {
        ty: "enum",
        vals: ["图.tk", "啧.tk"],
        dft: "图.tk",
        info: ["Emoticon Source", "表情源"],
      },
      height_limit: {
        ty: "boolean",
        dft: !0,
        info: ["Expand in default", "是否默认展开表情"],
      },
    },
    ({ msto: e }) => {
      let t = []
          .filter((u) => e.src !== "啧.tk" || typeof u != "object")
          .map((u, c) =>
            typeof u == "string"
              ? {
                  type: he.EMO,
                  name: [u],
                  slug:
                    c >= 10
                      ? String.fromCharCode(97 + (c - 10))
                      : String.fromCharCode(48 + c),
                }
              : { type: he.TXT, ...u }
          ),
        r =
          e.src === "啧.tk"
            ? ({ name: u }) => `//${e.src}/${u[0]}`
            : ({ slug: u, type: c }) =>
                `//${e.src}/${u + (c === he.TXT ? "!25" : "")}`;
      if (e.benben && location.pathname === "/") {
        let u = g("#feed-content"),
          c = u[0];
        g("#feed-content").before("<div id='emo-lst'></div>"),
          t.forEach((a) => {
            let p = g(
              a.type === he.EMO
                ? `<button class="exlg-emo-btn" exlg="exlg"><img src="${r(
                    a
                  )}" /></button>`
                : `<button class="exlg-emo-btn" exlg="exlg">${a.name_display}</button>`
            );
            p
              .on("click", () => {
                let f = c.value,
                  x = c.selectionStart,
                  h = `${f.slice(0, x)}![](${r(a)})`;
                (c.value = h + f.slice(c.selectionEnd)),
                  c.focus(),
                  c.setSelectionRange(h.length, h.length);
              })
              .appendTo("#emo-lst"),
              a.width
                ? p.css("width", `${a.width}px`)
                : a.type === he.EMO
                ? p.css("width", "40px")
                : p.css("width", "83px");
          }),
          g("#feed-content").before("<br>");
      }
      let n = g(".mp-editor-menu"),
        o = g(".CodeMirror-wrap textarea");
      if (!n.length) return;
      let i = n.clone().addClass("exlg-emo").text("");
      n.after(i).append("<br />");
      let s = g(".mp-editor-ground").addClass("exlg-ext"),
        l = n.children().first().clone(!0).addClass("exlg-unselectable"),
        d = n.children().first().clone(!0).addClass("exlg-unselectable");
      n.children().last().before(l),
        n.children().last().before(d),
        l
          .children()
          .attr("title", "")
          .text(e.show ? "隐藏" : "显示"),
        e.show && (i.addClass("exlg-show-emo"), s.addClass("exlg-show-emo")),
        l.on("click", () => {
          (l.children()[0].innerHTML = ["显示", "隐藏"][
            ["隐藏", "显示"].indexOf(l.children()[0].innerHTML)
          ]),
            i.toggleClass("exlg-show-emo"),
            s.toggleClass("exlg-show-emo"),
            (e.show = !e.show);
        }),
        d
          .children()
          .attr("title", "")
          .text(e.height_limit ? "展开" : "收起"),
        e.height_limit
          ? (i.addClass("exlg-show-emo-short"),
            s.addClass("exlg-show-emo-short"))
          : (i.addClass("exlg-show-emo-long"),
            s.addClass("exlg-show-emo-long")),
        d.on("click", () => {
          (d.children()[0].innerHTML = ["收起", "展开"][
            ["展开", "收起"].indexOf(d.children()[0].innerHTML)
          ]),
            i
              .toggleClass("exlg-show-emo-short")
              .toggleClass("exlg-show-emo-long"),
            s
              .toggleClass("exlg-show-emo-short")
              .toggleClass("exlg-show-emo-long"),
            (e.height_limit = !e.height_limit);
        }),
        t.forEach((u) => {
          let c = g(
            u.type === he.EMO
              ? `<button class="exlg-emo-btn" exlg="exlg"><img src="${r(
                  u
                )}" /></button>`
              : `<button class="exlg-emo-btn" exlg="exlg">${u.name_display}</button>`
          );
          c
            .on("click", () =>
              o
                .trigger("focus")
                .val(`![](${r(u)})`)
                .trigger("input")
            )
            .appendTo(i),
            u.width
              ? c.css("width", `${u.width}px`)
              : u.type === he.EMO
              ? c.css("width", "40px")
              : c.css("width", "83px");
        }),
        i.append("<div style='height: .35em'></div>");
    },
    Tr,
    "module"
  );
  var Cr =
    ".juan-rnkitm:nth-child(1)::marker{color:var(--lg-red);font-weight:900}.juan-rnkitm:nth-child(2)::marker{color:var(--lg-orange);font-weight:900}.juan-rnkitm:nth-child(3)::marker{color:var(--lg-yellow);font-weight:900}.juan-rnkitm>span{display:flex;flex-wrap:wrap}.juan-rnkitm>span>span{margin-left:auto}";
  v.reg_v2(
    { name: "juan-inspector", info: "卷王监视器", path: "@/", cate: "module" },
    { lastFetched: { ty: "string", dft: "[]", priv: !0 } },
    (e) => {
      e.hook(
        { name: "login-hooker", info: "签到 Hook" },
        {},
        ({ gsto: t, args: r }) => {
          g(r).on("click", async () => {
            let { users: n } = await g.get(
                `/api/user/followings?user=${C.uid}`
              ),
              { result: o, perPage: i } = n,
              s = [],
              l = n.count - i;
            for (let f = 2; l > 0; f++, l -= i)
              s.push(
                (async () =>
                  o.push(
                    ...(
                      await g.get(
                        `/api/user/followings?user=${C.uid}&page=${f}`
                      )
                    ).users.result
                  ))()
              );
            await Promise.all(s);
            let d = new Map();
            o.forEach(({ uid: f, name: x, passedProblemCount: h }, m, b) => {
              (b[m] = [f, h]), d.set(f, x);
            }),
              o.sort((f, x) => f[0] - x[0]);
            let u = JSON.parse(t.lastFetched),
              c = [];
            t.lastFetched = JSON.stringify(o);
            let a = 0,
              p = 0;
            for (; a < o.length && p < u.length; )
              o[a][0] === u[p][0]
                ? (c.push([o[a][0], o[a][1] - u[p][1]]), a++, p++)
                : o[a][0] > u[p][0]
                ? p++
                : a++;
            c.sort((f, x) => x[1] - f[1]),
              c.length &&
                N(`<p>从上一次打卡到现在，关注用户中卷题量前三为：</p>
                <ol style="margin: 0 25% 0 15%;">
                    ${c
                      .slice(0, 3)
                      .map(
                        ([f, x]) =>
                          `<li class="juan-rnkitm"><span><a href="/user/${f}">${d.get(
                            f
                          )}</a><span>${x} 道</span></span></li>`
                      )
                      .join("")}
                </ol>`);
          });
        },
        _e("a[title=hello]")
      );
    },
    Cr
  );
  var Sr =
    "#exlg-cli{position:fixed;top:0;z-index:134;display:none;width:100%;height:40px;background-color:#fff;box-shadow:0 0 7px #1e90ff}#exlg-cli-input{display:block;height:100%;width:100%;border:none;outline:none;font-family:Fira Code,Fira Mono,consolas,Courier New;color:#000}#exlg-cli-input.error{background-color:#cd5c5c}";
  v.reg(
    "keyboard-and-cli",
    "键盘操作与命令行",
    "@/.*",
    { lang: { ty: "enum", dft: "en", vals: ["en", "zh"] } },
    ({ msto: e }) => {
      let t = g('<div id="exlg-cli" exlg="exlg"></div>').appendTo(g("body")),
        r = g('<input id="exlg-cli-input" />').appendTo(t),
        n = !1,
        o = [],
        i = 0,
        s = ["en", "zh"],
        l = {
          ".": ["。"],
          ",": ["，"],
          "!": ["！"],
          "?": ["？"],
          cli: ["命令行"],
          current: ["当前"],
          language: ["语言"],
          available: ["可用"],
          command: ["命令"],
          commands: ["命令"],
          unknown: ["未知"],
          forum: ["板块"],
          target: ["目标"],
          mod: ["模块"],
          action: ["操作"],
          illegal: ["错误"],
          param: ["参数"],
          expected: ["期望"],
          type: ["类型"],
          lost: ["缺失"],
          essential: ["必要"],
          user: ["用户"],
        },
        d = s.indexOf(e.lang) || 0,
        u = (h, ...m) => {
          n = !0;
          let b = h
            .map(
              (w, k) =>
                w
                  .split(/\b/)
                  .map((L) => l[L]?.[d - 1] ?? L)
                  .join("") + (m[k] || "")
            )
            .join("");
          return r.val(b);
        },
        c = (h, ...m) =>
          Q(
            u(h, ...m)
              .addClass("error")
              .val()
          ),
        a = () => ((n = !1), r.val("").removeClass("error")),
        p = (h, m, b, w) => (
          (m = m
            .replace(/ /g, "")
            .split(",")
            .map((k) => {
              let L = {};
              return (
                k[0] === "["
                  ? ((L.essential = !1), (k = k.slice(1, -1)))
                  : (L.essential = !0),
                ([L.name, L.type] = k.split(":")),
                L
              );
            })),
          { name: h, arg: m, help: b, fn: w }
        ),
        f = [
          p(
            "help",
            "[cmd: string]",
            [
              "get the help of <cmd>. or list all cmds.",
              "获取 <cmd> 的帮助。空则列出所有",
            ],
            (h) => {
              if (!h)
                u`exlg cli. current language: ${d}, available commands: ${Object.keys(
                  f
                ).join(", ")}`;
              else {
                let m = f[h];
                if (!m) return c`help: unknown command "${h}"`;
                let b = m.arg
                  .map((w) => {
                    let k = `${w.name}: ${w.type}`;
                    return w.essential ? `<${k}>` : `[${k}]`;
                  })
                  .join(" ");
                u`${h} ${b} ${m.help[d]}`;
              }
            }
          ),
          p(
            "cd",
            "path: string",
            [
              "jump to <path>, relative path is OK.",
              "跳转至 <path>，支持相对路径。",
            ],
            (h) => {
              let m;
              if (h[0] === "/") m = h;
              else {
                let b = location.pathname.replace(/^\/+/, "").split("/");
                h.split("/").forEach((k) => {
                  k !== "." && (k === ".." ? b.pop() : b.push(k));
                }),
                  (m = b.join("/"));
              }
              location.href = `${location.origin}/${m.replace(/^\/+/, "")}`;
            }
          ),
          p(
            "cdd",
            "forum: string",
            [
              "jump to the forum named <forum> of discussion. use all the names you can think of.",
              "跳转至名为 <forum> 的讨论板块，你能想到的名字基本都有用。",
            ],
            (h) => {
              let m = [
                ["relevantaffairs", "gs", "gsq", "灌水", "灌水区", "r", "ra"],
                ["academics", "xs", "xsb", "学术", "学术版", "a", "ac"],
                ["siteaffairs", "zw", "zwb", "站务", "站务版", "s", "sa"],
                ["problem", "tm", "tmzb", "题目", "题目总版", "p"],
                [
                  "service",
                  "fk",
                  "fksqgd",
                  "反馈",
                  "反馈、申请、工单专版",
                  "se",
                ],
              ];
              if (((h = m.find((b) => b.includes(h))?.[0]), !m))
                return c`cdd: unknown forum "${h}"`;
              location.href = `https://www.luogu.com.cn/discuss/lists?forumname=${h}`;
            }
          ),
          p(
            "cc",
            "[name: char]",
            [
              'jump to <name>, "h|p|c|r|d|i|m|n" stands for home|problem|contest|record|discuss|I myself|message|notification. or jump home.',
              '跳转至 [name]，"h|p|c|r|d|i|m|n" 代表：主页 | 题目 | 比赛 | 评测记录 | 讨论 | 个人中心 | 私信 | 通知。空则跳转主页。',
            ],
            (h) => {
              h = h || "h";
              let m = {
                h: "/",
                p: "/problem/list",
                c: "/contest/list",
                r: "/record/list",
                d: "/discuss/lists",
                i: `/user/${C.uid}`,
                m: "/chat",
                n: "/user/notification",
              }[h];
              m ? f.cd.fn(m) : c`cc: unknown target "${h}"`;
            }
          ),
          p(
            "mod",
            "action: string, [name: string]",
            [
              'for <action> "enable|disable|toggle", opearte the mod named <name>.',
              '当 <action> 为 "enable|disable|toggle"，对名为 <name> 的模块执行对应操作：启用 | 禁用 | 切换。',
            ],
            (h, m) => {
              switch (h) {
                case "enable":
                case "disable":
                case "toggle":
                  if (!v.has(m)) return c`mod: unknown mod "${m}"`;
                  I[m].on = {
                    enable: () => !0,
                    disable: () => !1,
                    toggle: (b) => !b,
                  }[h](I[m].on);
                  break;
                default:
                  return c`mod: unknown action "${h}"`;
              }
            }
          ),
          p(
            "lang",
            "lang: string",
            [
              'for <lang> "en|zh" switch current cli language.',
              '当 <lang> 为 "en|zh"，切换当前语言。',
            ],
            (h) => {
              try {
                (e.lang = h), (d = s.indexOf(h));
              } catch {
                return c`lang: unknown language ${h}`;
              }
            }
          ),
          p(
            "go",
            "type: string, [extinfo: string]",
            ["jumps to any corner of Luogu.", "跳转到洛谷的任何一个角落。"],
            (h, m) => {
              let b = 0,
                w = {
                  h: ["home", "homepage"],
                  p: ["problem"],
                  c: ["contest"],
                  r: ["record", "submission"],
                  d: ["discuss", "forum"],
                  i: ["user"],
                  m: ["chat", "message"],
                  n: ["notification"],
                },
                k = {
                  h: "/",
                  p: "/problem/list",
                  c: "/contest/list",
                  r: "/record/list",
                  d: "/discuss/lists",
                  i: `/user/${C.uid}`,
                  m: "/chat",
                  n: "/user/notification",
                },
                L = (O) => (H) =>
                  isNaN(+H)
                    ? ((b = 1), c`unable to parse integer "${H}"`)
                    : `/${O}/${+H}`,
                S = {
                  p(O) {
                    return (
                      (O = O.toUpperCase()),
                      ye(O)
                        ? `/problem/${O}`
                        : ((b = 1), c`unable to judge pid ${O}`)
                    );
                  },
                  c: L("contest"),
                  r: L("record"),
                  d(O) {
                    let ee = [
                      [
                        "relevantaffairs",
                        "gs",
                        "gsq",
                        "灌水",
                        "灌水区",
                        "r",
                        "ra",
                      ],
                      ["academics", "xs", "xsb", "学术", "学术版", "a", "ac"],
                      ["siteaffairs", "zw", "zwb", "站务", "站务版", "s", "sa"],
                      ["problem", "tm", "tmzb", "题目", "题目总版", "p"],
                      [
                        "service",
                        "fk",
                        "fksqgd",
                        "反馈",
                        "反馈、申请、工单专版",
                        "se",
                      ],
                    ].find((fe) => fe.includes(O))?.[0];
                    return ee ? `/discuss/lists?forumname=${ee}` : L("discuss");
                  },
                  i: L("user"),
                },
                R = "",
                j = h;
              for (let [O, H] of Object.entries(w))
                if (H.includes(h)) {
                  j = O;
                  break;
                }
              if (m) {
                if (!(j in S)) return c`category ${h} has no arguments`;
                R = S[j](m);
              } else R = k[j];
              b || (location.href = R);
            }
          ),
          p(
            "uid",
            "uid: integer",
            [
              "jumps to homepage of user whose uid is <uid>.",
              "跳转至 uid 为 <uid> 的用户主页。",
            ],
            (h) => (location.href = `/user/${h}`)
          ),
          p(
            "un",
            "name: string",
            [
              "jumps to homepage of user whose username is like <name>.",
              "跳转至用户名与 <name> 类似的用户主页。",
            ],
            (h) => {
              g.get(`/api/user/search?keyword=${h}`, (m) => {
                m.users[0]
                  ? (location.href = `/user/${m.users[0].uid}`)
                  : c`un: unknown user "${h}".`;
              });
            }
          ),
        ].reduce((h, m) => ((h[m.name] = m), h), {}),
        x = (h) => {
          M(`Parsing command: "${h}"`);
          let m = h.trim().replace(/^\//, "").split(" "),
            b = m.shift();
          if (!b) return;
          let w = f[b];
          if (!w) return c`exlg: unknown command "${b}"`;
          let k = -1,
            L;
          for ([k, L] of m.entries()) {
            let S = w.arg[k].type;
            if (
              ((S === "number" || S === "integer") && (m[k] = +L),
              !(
                (S === "char" && L.length === 1) ||
                (S === "number" && !isNaN(m[k])) ||
                (S === "integer" && !isNaN(m[k]) && !(m[k] % 1)) ||
                S === "string"
              ))
            )
              return c`${b}: illegal param "${L}", expected type ${S}.`;
          }
          if (w.arg[k + 1]?.essential)
            return c`${b}: lost essential param "${w.arg[k + 1].name}"`;
          w.fn(...m);
        };
      r.on("keydown", (h) => {
        switch (h.key) {
          case "Enter":
            if (n) return a();
            let m = r.val();
            if ((o.push(m), (i = o.length), x(m), !n)) return a();
            break;
          case "/":
            n && a();
            break;
          case "Escape":
            t.hide();
            break;
          case "ArrowUp":
          case "ArrowDown":
            let b = i + { ArrowUp: -1, ArrowDown: 1 }[h.key];
            if (b < 0 || b >= o.length) return;
            (i = b), r.val(o[b]);
            break;
        }
      }),
        g(A).on("keydown", (h) => {
          let m = g(document.activeElement);
          if (m.is("body")) {
            let b = { ArrowLeft: "prev", ArrowRight: "next" }[h.key];
            if (b) return g(`a[rel=${b}]`)[0].click();
            if (h.shiftKey) {
              let w = { ArrowUp: 0, ArrowDown: 1e6 }[h.key];
              w !== void 0 && A.scrollTo(0, w);
            }
            h.key === "/" && (t.show(), a().trigger("focus"));
          } else
            m.is("[name=captcha]") &&
              h.key === "Enter" &&
              g("#submitpost, #submit-reply")[0].click();
        });
    },
    Sr,
    "module"
  );
  var Mr =
    ".exlg-high-risk{color:#dd514c}.exlg-med-risk{color:#ff5722}.exlg-low-risk{color:#8c8c8c}";
  v.reg(
    "malicious-code-identifier",
    "有害代码检查器",
    ["@/discuss/\\d+(\\?page\\=\\d+)*$"],
    {
      strength: {
        ty: "number",
        dft: 3,
        min: 1,
        max: 5,
        step: 1,
        info: ["Strength", "强度"],
        strict: !0,
      },
    },
    ({ msto: e }) => {
      let t = g("code").text().toLowerCase(),
        r = e.strength,
        n = [],
        o =
          t.match("system") &&
          !(t.match("System.out") || t.match("import java"));
      r >= 1 &&
        (o && t.match("net user") && n.push("高危 操作用户"),
        o && t.match("shutdown") && n.push("高危 关机"),
        o && t.match("socksorkstation") && n.push("高危 锁定桌面"),
        o && t.match("reg add") && n.push("高危 注册进程")),
        r >= 2 &&
          (o && t.match("taskkill") && n.push("危险 关闭进程"),
          o && t.match("setcursorpos") && n.push("危险 修改光标")),
        r >= 3 &&
          (t.match("windows.h") && n.push("可疑 引用 windows.h"),
          o && (n.push("可疑 调用系统函数"), (o = !0)),
          o &&
            (t.match("encode") || t.match("decode")) &&
            n.push("高危 存在加密字符串")),
        n.length !== 0 &&
          N(
            n
              .join("</br>")
              .replaceAll("高危", '<a class = "exlg-high-risk">[高危]</a>')
              .replaceAll("危险", '<a class = "exlg-med-risk">[危险]</a>')
              .replaceAll("可疑", '<a class = "exlg-low-risk">[可疑]</a>'),
            "发现有害代码"
          );
    },
    Mr,
    "module"
  );
  var Ar =
    "#exlg-messages-outter{z-index:129;position:fixed;right:1em;bottom:96px;border-radius:.6em;padding:6px;width:calc(18em + 12px);overflow:hidden}#exlg-messages-container{position:relative;width:100%;height:100%}.exlg-message-outter{background-color:#faf9fa;border-radius:.6em;width:18em;height:6em;box-shadow:0 0 6px #e1e1e2;position:relative;margin:.4em 0}.exlg-message-inner{width:100%;height:100%}.exlg-message-avatar{position:absolute;top:.8em;left:.8em;border-radius:100%;width:3.4em;height:3.4em}.exlg-message-username{position:absolute;top:.4em;left:4.7em;width:10.5em;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.exlg-message-content{position:absolute;top:2em;left:4.7em;width:12em;line-height:1;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.exlg-message-type{position:absolute;top:5.45em;left:1.1em;font-size:.8em;color:#bbbabb}.exlg-message-close{position:absolute;top:.4em;right:.4em;width:1.2em;height:1.2em;border-radius:100%;text-align:center;background-color:#f1f0f1;box-sizing:border-box;transition:ease-in-out background-color .1s;cursor:pointer}.exlg-message-close:hover{background-color:#e3e2e3}.exlg-message-close>svg{position:relative;top:40%;transform:translateY(-50%)}.exlg-message-show{display:block;color:#000;text-decoration:none;position:absolute;top:5.2em;right:.5em;font-size:.8em;padding-top:.1em;width:5em;height:1.7em;border-radius:.3em;text-align:center;background-color:#f1f0f1;box-sizing:border-box;transition:ease-in-out background-color .1s}.exlg-message-show:hover{background-color:#e3e2e3;color:#000}.exlg-message-show:visited{color:#000}";
  v.reg(
    "messages",
    "新消息提醒",
    ["@/.*"],
    {
      message_tab_disappear_time: {
        ty: "number",
        dft: 30,
        min: 0,
        max: 60,
        info: [
          "The Time before message tab disappear (second)",
          "信息自动消失时间（秒）",
        ],
        strict: !0,
      },
    },
    (e) => {
      if (window.location.href.search("/chat") !== -1) return;
      let t = g("body")
        .append(
          '<div id="exlg-messages-outter"><div id="exlg-messages-container"></div></div>'
        )
        .find("#exlg-messages-container");
      function r(o) {
        let i = g(`
        <div class="exlg-message-outter" id="exlg-message-${o.id}">
            <div class="exlg-message-inner">
                <a href="https://www.luogu.com.cn/user/${o.sender.uid}" target="_blank">
                    <img class="exlg-message-avatar" src="https://cdn.luogu.com.cn/upload/usericon/${o.sender.uid}.png">
                </a>
                <div class="exlg-message-username" id="exlg-message-username-${o.id}"></div>
                <div class="exlg-message-content" id="exlg-message-content-${o.id}"></div>
                <div class="exlg-message-type">私信</div>
            </div>
            <div class="exlg-message-close" msg-id="${o.id}" id="exlg-message-close-${o.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <a class="exlg-message-show" id="exlg-message-show-${o.id}" href="https://www.luogu.com.cn/chat" target="_blank">查看</a>
        </div>`);
        t
          .append(i)
          .on(
            "click",
            `#exlg-message-close-${o.id}, #exlg-message-show-${o.id}`,
            () => {
              i.remove();
            }
          ),
          g(`#exlg-message-username-${o.id}`).text(o.sender.name),
          g(`#exlg-message-content-${o.id}`).text(o.content),
          e.msto.message_tab_disappear_time !== 0 &&
            window.setTimeout(() => {
              i.remove();
            }, e.msto.message_tab_disappear_time * 1e3);
      }
      Xt(
        "exlg-message",
        (o) => {
          let i = new WebSocket("wss://ws.luogu.com.cn/ws");
          (i.onopen = () =>
            i.send(
              JSON.stringify({
                type: "join_channel",
                channel: "chat",
                channel_param: String(C.uid),
                exclusive_key: null,
              })
            )),
            (i.onmessage = (s) => {
              o.postMessage(s.data);
              let l = JSON.parse(s.data);
              l._ws_type === "server_broadcast" &&
                l.message instanceof Object &&
                l.message.sender.uid !== C.uid &&
                r(l.message);
            });
        },
        (o) => {
          let i = JSON.parse(o);
          i._ws_type === "server_broadcast" &&
            i.message instanceof Object &&
            i.message.sender.uid !== C.uid &&
            r(i.message);
        }
      );
      let n = (o) => {
        let i = new BroadcastChannel(o);
        i.onmessage = (s) => {
          M(o, ": ", s.data);
        };
      };
      n("exlg-message-ctrl"), n("exlg-message-data");
    },
    Ar,
    "module"
  );
  var Er =
    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="door-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-door-open fa-w-20"><path data-v-450d4937="" data-v-303bbf52="" fill="currentColor" d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z"></path></svg>';
  var Nr =
    "a.sol-btn{transition:opacity 2s cubic-bezier(.8,0,.9,-.03);opacity:0}a.sol-btn:hover{opacity:1}.item-row{display:none}";
  var zr =
    ".exlg-back-to-contest{text-decoration:none;float:right;color:#e74c3c}.exlg-back-to-contest:hover{color:#e74c3c}";
  v.reg(
    "dbc-jump",
    "双击题号跳题",
    "@/.*",
    null,
    () => {
      g(document).on("dblclick", (e) => {
        let t = window.getSelection().toString().trim().toUpperCase(),
          r = e.ctrlkey
            ? `${g(".ops > a[href*=blog]").attr("href")}solution-`
            : "https://www.luogu.com.cn/problem/";
        ye(t) && window.open(r + t);
      });
    },
    null,
    "module"
  );
  v.reg(
    "hide-solution",
    "隐藏题解",
    ["@/problem/[A-Z0-9]+", "@/problem/solution/.*"],
    {
      hidesolu: { ty: "boolean", dft: !1, priv: !0 },
      on: { ty: "boolean", dft: !1 },
    },
    () =>
      /@\/problem\/[A-Z0-9]+/g.test(location.href) &&
      g('a[href^="/problem/solution"]').addClass("sol-btn"),
    Nr,
    "module"
  );
  v.reg_hook_new(
    "back-to-contest",
    "返回比赛列表",
    ["@/problem/[A-Z0-9]+\\?contestId=[1-9][0-9]{0,}"],
    null,
    ({ args: e }) => {
      let { $info_rows: t } = e,
        r = g('<a class="exlg-back-to-contest"></a>'),
        { cid: n } = e,
        { pid: o } = e;
      !o ||
        !n ||
        t.children(".exlg-back-to-contest").length > 0 ||
        r
          .attr("href", `/contest/${n}#problems`)
          .html(`${Er}返回列表`)
          .appendTo(t);
    },
    (e) => {
      let t = e.target,
        r = E.contest.id,
        { pid: n } = E.problem;
      return {
        args: { cid: r, pid: n, $info_rows: g(t.parentNode) },
        result:
          t.tagName.toLowerCase() === "a" &&
          (t.href || "").includes("/record/list") &&
          t.href.slice(t.href.indexOf("/record/list")) ===
            `/record/list?pid=${n}&contestId=${r}`,
      };
    },
    () => ({
      cid: E.contest.id,
      pid: E.problem.pid,
      $info_rows: g(".info-rows").parent(),
    }),
    zr,
    "module"
  );
  v.reg_hook_new(
    "submission-color",
    "记录难度可视化",
    "@/record/list.*",
    null,
    (e) => {
      (e.pid_taglist ?? document.body.querySelectorAll(".pid")).forEach((t) => {
        g(t)
          .addClass("exlg-difficulty-color")
          .addClass(
            `color-${
              _feInstance.currentData.records.result.filter(
                (r) => r.problem.pid === t.innerText.trim()
              )[0].problem.difficulty
            }`
          );
      });
    },
    (e) =>
      e.target &&
      e.target.tagName.toLowerCase() === "a" &&
      /^\/problem\/[A-Z][A-Z0-9]+$/.exec(new URL(e.target.href).pathname)
        ? { result: !0, args: { pid_taglist: [e.target.firstChild] } }
        : { result: !1 },
    () => null,
    null,
    "module"
  );
//   v.reg(
//     "mainpage-discuss-limit",
//     "主页讨论个数限制",
//     ["@/"],
//     {
//       max_discuss: {
//         ty: "number",
//         dft: 16,
//         min: 4,
//         max: 20,
//         step: 1,
//         info: ["Max Discussions On Show", "主页讨论显示上限"],
//         strict: !0,
//       },
//     },
//     ({ msto: e }) => {
//       let t;
//       location.href.includes("blog") ||
//         (g(".lg-article").each((r, n, o = g(n)) => {
//           let i = n.childNodes[1];
//           i &&
//             i.tagName.toLowerCase() === "h2" &&
//             i.innerText.includes("讨论") &&
//             (t = o.children(".am-panel"));
//         }),
//         t.each((r, n, o = g(n)) => {
//           r >= e.max_discuss && o.hide();
//         }));
//     },
//     null,
//     "module"
//   );
  v.reg(
    "user-css",
    "自定义样式表",
    ".*",
    { css: { ty: "string" } },
    ({ msto: e }) => GM_addStyle(e.css),
    null,
    "module"
  );
  v.reg_v2(
    {
      name: "original-difficulty",
      info: "显示原始难度",
      path: ["@/problem/CF.*", "@/problem/AT.*"],
      cate: "module",
    },
    {
      cf_src: {
        ty: "enum",
        dft: "codeforces.com",
        vals: ["codeforces.com", "codeforces.ml", "codeforc.es"],
        info: ["Codeforces problem source", "CF 题目源"],
        migration: !0,
      },
      atdiff: { ty: "string", priv: !0 },
    },
    (e) => {
      e.chore(
        { name: "atdiff-fetch", info: "获取 AtCoder 难度", period: "10D" },
        null,
        ({ gsto: n }) => {
          let o = {};
          ne({
            url: "https://kenkoooo.com/atcoder/resources/problem-models.json",
            onload: (i) => {
              let s = JSON.parse(i.responseText);
              for (let l in s) o[l] = s[l].difficulty;
              n.atdiff = JSON.stringify(o);
            },
          });
        }
      );
      let t = null;
      e.preload(
        { name: "load-difficulty", info: "加载原始难度" },
        null,
        ({ gsto: n }) =>
          (t = new Promise((o, i) => {
            let s = location.pathname
              .match(/(CF|AT)([0-9]|[A-Z])*$/g)[0]
              .substring(2);
            if (location.pathname.includes("CF")) {
              let l = s.match(/^[0-9]*/g)[0],
                d = s.substring(l.length);
              ne({
                url: `https://${n.cf_src}/problemset/problem/${l}/${d}`,
                onload: (u) => {
                  let c = g(u.responseText)
                    .find("span[title=Difficulty]")
                    .text()
                    .trim();
                  o(c ? c.substring(1) : null);
                },
                onerror: (u) => {
                  U(u), i(u);
                },
              });
            } else {
              let l = JSON.parse(n.atdiff),
                d = E.problem.description
                  .match(/^.{22}[-./A-Za-z0-9_]*/g)[0]
                  .match(/[^/]*$/g)[0];
              d in l
                ? o(
                    Math.round(
                      l[d] >= 400 ? l[d] : 400 / Math.exp(1 - l[d] / 400)
                    )
                  )
                : o(null);
            }
          }))
      );
      let r = "";
      e.hook(
        { name: "difficulty-display", info: "显示原始难度" },
        null,
        ({ result: n, target: o }) => {
          if (!n) return;
          let i = g(o[3]),
            s = i.clone(!0);
          i.after(s);
          let [l, d] = s
            .find("span")
            .get()
            .map((u) => g(u));
          l.text("原始难度"),
            d.text("获取中"),
            t.then((u) => d.text(u ?? "不可用"));
        },
        (n) => {
          if (r === location.href) return !1;
          let o =
            n.target.querySelectorAll &&
            n.target.querySelectorAll("div.stat > div.field");
          return o?.length > 0
            ? ((r = location.href), { result: !0, target: o })
            : { result: !1 };
        }
      );
    }
  );
  var Ir =
    ".exlg-rand-settings{display:inline-block;padding:1px 5px;background-color:#fff;border:1px solid #6495ED;color:#6495ed;border-radius:6px;font-size:12px;position:relative;top:-2px}.exlg-rand-settings.selected{background-color:#6495ed;border:1px solid #6495ED;color:#fff}.exlg-rand-settings:hover{box-shadow:0 0 7px #1e90ff}.exlg-smallbtn{position:relative;display:inline-block;padding:1px 5px;color:#fff;border-radius:6px;font-size:12px;margin-left:1px;margin-right:1px}.exrand-enabled{width:49%;float:left}.exrand-disabled{width:49%;float:right}#exlg-dash-0>#exlg-exrand-window{width:250px;height:300px;z-index:6;background:white;color:#000;border-radius:7px;box-shadow:#bbe3ff 0 0 7px;visibility:hidden;opacity:0;transition:.233s ease all;position:absolute;left:-100px;top:20px;z-index:9;font-weight:initial}#exlg-dash-0:hover>#exlg-exrand-window{visibility:visible;opacity:1;transition-delay:unset}";
  v.reg(
    "rand-problem-ex",
    "随机跳题_ex",
    "@/",
    {
      exrand_difficulty: {
        ty: "tuple",
        lvs: at(
          Array.from("11111111").map((e) => !!e),
          { ty: "boolean", strict: !0 }
        ),
        priv: !0,
      },
      exrand_source: {
        ty: "tuple",
        lvs: at(
          Array.from("10000").map((e) => !!e),
          { ty: "boolean", strict: !0 }
        ),
        priv: !0,
      },
    },
    ({ msto: e }) => {
      let t = [
          ["入门", "red"],
          ["普及-", "orange"],
          ["普及/提高-", "yellow"],
          ["普及 +/提高", "green"],
          ["提高 +/省选-", "blue"],
          ["省选/NOI-", "purple"],
          ["NOI/NOI+/CTSC", "black"],
          ["暂无评定", "gray"],
        ].map((m, b, w) => ({
          text: m[0],
          color: m[1],
          id: (b + 1) % w.length,
        })),
        r = [
          { text: "洛谷题库", color: "red", id: "P" },
          { text: "Codeforces", color: "orange", id: "CF" },
          { text: "SPOJ", color: "yellow", id: "SP" },
          { text: "AtCoder", color: "green", id: "AT" },
          { text: "UVA", color: "blue", id: "UVA" },
        ],
        n = (m) => {
          ye(m) && (m = m.toUpperCase()),
            m === "" || typeof m > "u"
              ? A.show_alert("提示", "请输入题号")
              : (location.href = `https://www.luogu.com.cn/problem/${m}`);
        },
        o = g("input[name='toproblem']");
      o.after(o.clone()).remove(), (o = g("input[name='toproblem']"));
      let i = g(".am-btn[name='goto']");
      i.after(i.clone()).remove(), (i = g(".am-btn[name='goto']"));
      let s = i.parent(),
        l = g('<div id="exlg-dash-0" class="exlg-rand-settings">ex 设置</div>');
      g(".am-btn[name='gotorandom']").text("随机");
      let d = g(
        '<button class="am-btn am-btn-success am-btn-sm" name="gotorandomex">随机 ex</button>'
      ).appendTo(s);
      i.on("click", () => {
        /^[0-9]+.?[0-9]*$/.test(o.val()) && o.val(`P${o.val()}`), n(o.val());
      }),
        o.on("keydown", (m) => {
          m.keyCode === 13 && i.click();
        });
      let u =
        g(`<span id="exlg-exrand-window" class="exlg-window" style="display: block;">
    <br>
    <ul></ul>
    </span>`)
          .appendTo(l)
          .css({
            position: "absolute",
            left: "-100px",
            top: "20px",
            "z-index": 9,
            "font-weight": "initial",
          });
      g(".lg-index-stat>h2").text("问题跳转 ").append(l);
      let c = u.children("ul").css("list-style-type", "none"),
        a = g('<div id="exlg-exrand-menu"></div>').appendTo(c);
      g("<br>").appendTo(c);
      let p = g(
          '<div id="exlg-exrand-diff" class="smallbtn-list"></div>'
        ).appendTo(c),
        f = g('<div id="exlg-exrand-srce" class="smallbtn-list"></div>')
          .appendTo(c)
          .hide(),
        x = g.double(
          (m) =>
            g(
              `<div class="exlg-rand-settings exlg-unselectable exrand-entry">${m}</div>`
            ).appendTo(a),
          "题目难度",
          "题目来源"
        );
      x[0].after(g('<span class="exlg-unselectable">&nbsp;&nbsp;</span>')),
        x[0].addClass("selected").css("margin-right", "38px"),
        g.double(
          ([m, b]) => {
            m.on("click", () => {
              g(".exrand-entry").removeClass("selected"),
                m.addClass("selected"),
                g(".smallbtn-list").hide(),
                b.show();
            });
          },
          [x[0], p],
          [x[1], f]
        ),
        g.double(
          ([m, b, w]) => {
            let k = g.double(
              ([L, S]) =>
                g(`<span class="${L}">
        <span class="lg-small lg-inline-up exlg-unselectable">${S}</span>
        <br>
        </span>`).appendTo(m),
              ["exrand-enabled", "已选择"],
              ["exrand-disabled", "未选择"]
            );
            b.forEach((L, S) => {
              let R = g.double(
                (j) =>
                  g(
                    `<div class="exlg-smallbtn exlg-unselectable">${L.text}</div>`
                  )
                    .css("background-color", `var(--lg-${L.color}-problem)`)
                    .appendTo(j),
                k[0],
                k[1]
              );
              g.double(
                (j) => {
                  R[j].on("click", () => {
                    R[j].hide(), R[1 - j].show(), (w[S] = !!j);
                  }),
                    w[S] === !!j && R[j].hide();
                },
                0,
                1
              );
            });
          },
          [p, t, e.exrand_difficulty],
          [f, r, e.exrand_source]
        ),
        g("#exlg-dash-0").on("mouseenter", () => {
          g.double(
            ([m, b]) => {
              g.double(
                ([w, k]) => {
                  m.children(w)
                    .children(".exlg-smallbtn")
                    .each((L, S, R = g(S)) =>
                      b[L] === k ? R.show() : R.hide()
                    );
                },
                [".exrand-enabled", !0],
                [".exrand-disabled", !1]
              );
            },
            [p, e.exrand_difficulty],
            [f, e.exrand_source]
          );
        });
      let h = async () => {
        let m = g.double(
            ([O, H, ee]) => {
              let fe = [];
              return (
                O.forEach((We, Xe) => {
                  H[Xe] && fe.push(We.id);
                }),
                fe.length ||
                  ((fe = ee),
                  O.forEach((We, Xe) => (H[Xe] = ee.includes(We.id)))),
                fe[Math.floor(Math.random() * fe.length)]
              );
            },
            [t, e.exrand_difficulty, [0, 1, 2, 3, 4, 5, 6, 7]],
            [r, e.exrand_source, ["P"]]
          ),
          b = await X(`/problem/list?difficulty=${m[0]}&type=${m[1]}&page=1`),
          w = b.currentData.problems.count,
          k = Math.ceil(w / 50),
          L = Math.floor(Math.random() * k) + 1;
        b = await X(`/problem/list?difficulty=${m[0]}&type=${m[1]}&page=${L}`);
        let S = b.currentData.problems.result,
          R = Math.floor(Math.random() * S.length),
          { pid: j } = S[R];
        location.href = `/problem/${j}`;
      };
      d.on("click", h);
    },
    Ir,
    "module"
  );
  var jr =
    ".exlg-rand-training-problem-btn{border-color:#343434;background-color:#343434}";
  v.reg_hook_new(
    "rand-training-problem",
    "题单内随机跳题",
    "@/training/[0-9]+(#.*)?",
    {
      mode: {
        ty: "enum",
        vals: ["unac only", "unac and new", "new only"],
        dft: "unac and new",
        info: ["Preferences about problem choosing", "随机跳题的题目种类"],
      },
    },
    ({ msto: e, args: t }) => {
      let r = e.mode.startsWith("unac") + e.mode.endsWith("only") * -1 + 2;
      !t.length ||
        g(t[0].firstChild)
          .clone(!0)
          .appendTo(t)
          .text("随机跳题")
          .addClass("exlg-rand-training-problem-btn")
          .on("click", () => {
            let n = E.training,
              o = [];
            for (let s of n.problems)
              if (n.userScore === null) o.push(s.problem.pid);
              else {
                let l = n.userScore.score[s.problem.pid];
                ((l === null && r & 1) || (l < s.problem.fullScore && r & 2)) &&
                  o.push(s.problem.pid);
              }
            if (!n.problemCount) return N("题单不能为空");
            if (!o.length)
              return r === 1
                ? N("您已经做完所有新题啦！")
                : r === 2
                ? N("您已经订完所有错题啦！")
                : N("您已经切完所有题啦！");
            let i = ~~(Math.random() * 1e6) % o.length;
            location.href = `https://www.luogu.com.cn/problem/${o[i]}`;
          });
    },
    (e) => {
      let t = g(e.target).find("div.operation");
      return { result: t.length > 0, args: t };
    },
    () => g("div.operation"),
    jr,
    "module"
  );
  var Or =
    "iframe{border:none;display:block;width:100%;height:100%}iframe::-webkit-scrollbar{display:none}";
  v.reg_main(
    "springboard",
    "跨域跳板",
    ["@bili/robots.txt?.*", "@/robots.txt?.*"],
    null,
    () => {
      let e = new URLSearchParams(location.search);
      switch (e.get("type")) {
        case "update":
          A.addEventListener("message", (r) => {
            r.data.unshift("update"), A.parent.postMessage(r.data, "*");
          });
          break;
        case "page":
          let t = e.get("url");
          (!e.get("confirm") || confirm(`是否加载来自 ${t} 的页面？`)) &&
            (document.body.innerHTML = `<iframe src="${t}" exlg="exlg"></iframe>`);
          break;
        case "dash":
          break;
      }
    },
    Or
  );
  var Dr = ".exlg-rand-tasklist-problem-btn{margin-left:.5em}";
  v.reg(
    "tasklist-ex",
    "任务计划 ex",
    "@/",
    {
      auto_clear: {
        ty: "boolean",
        dft: !0,
        info: ["Hide accepted problems", "隐藏已经 AC 的题目"],
      },
      rand_problem_in_tasklist: {
        ty: "boolean",
        dft: !0,
        info: ["Random problem in tasklist", "任务计划随机跳题"],
      },
    },
    ({ msto: e }) => {
      let t = [];
      g.each(g("div.tasklist-item"), (i, s, l = g(s)) => {
        let d = l.attr("data-pid");
        s.innerHTML.search(/check/g) === -1 &&
          e.rand_problem_in_tasklist &&
          t.push(d),
          l.find("i").hasClass("am-icon-check") &&
            l.addClass("tasklist-ac-problem");
      });
      let r = g('<div>[<a id="toggle-button">隐藏已 AC</a>]</div>');
      g("button[name=task-edit]").parent().after(r);
      let n = g(".tasklist-ac-problem"),
        o = g("#toggle-button").on("click", () => {
          n.toggle(),
            o.text(`${["隐藏", "显示"][+(e.auto_clear = !e.auto_clear)]}已 AC`);
        });
      if ((e.auto_clear && o.click(), e.rand_problem_in_tasklist)) {
        let i = g(
          '<button name="task-rand" class="am-btn am-btn-sm am-btn-success lg-right">随机</button>'
        );
        g("button[name='task-edit']").before(i),
          i.addClass("exlg-rand-tasklist-problem-btn").click(() => {
            let s = ~~(Math.random() * 1e6) % t.length;
            location.href += `problem/${t[s]}`;
          });
      }
    },
    Dr,
    "module"
  );
  v.reg_chore(
    "token",
    "exlg 令牌",
    "10m",
    "@/.*",
    { token: { ty: "string", priv: !0 } },
    async ({ msto: e }) => {
      if (unsafeWindow._feInjection.currentUser) {
        if (e.token) {
          let r = (
            await K("https://exlg.piterator.com/token/ttl", {
              uid: unsafeWindow._feInjection.currentUser.uid,
              token: e.token,
            })
          ).data;
          if (r.status !== 401 && r.data >= 60 * 15) return !1;
        }
        let t = (
          await K(
            "https://www.luogu.com.cn/paste/new?_contentOnly",
            {
              data: (
                await st("https://exlg.piterator.com/token/generate")
              ).data.data,
              public: !0,
            },
            {
              "x-csrf-token": g("[name='csrf-token']").attr("content"),
              referer: "https://www.luogu.com.cn/paste",
            }
          )
        ).data.id;
        (e.token = (
          await st(`https://exlg.piterator.com/token/verify/${t}`)
        ).data.data.token),
          await K(
            `https://www.luogu.com.cn/paste/delete/${t}?_contentOnly`,
            {},
            {
              "x-csrf-token": g("[name='csrf-token']").attr("content"),
              referer: "https://www.luogu.com.cn/paste",
            }
          );
      } else return !0;
    }
  );
  var Rr = `^M discussion-save
 : 讨论区帖子数量显示增加至 16 个，并搭载了 linch 的跳转插件。
 : 原作者：Exlg 团队，拓展作者：yingjingxu_NaS2O3`;
  var Pr =
    ".exlg-update-log-text{overflow-x:auto;white-space:nowrap;text-align:left}";
  v.reg_chore("update", "检查更新", "1D", ".*", null, async () => {});
  var Xo = ["$", "#<@"].map((e) => e.split("")),
    qr = {
      Ty: {
        "-": "添加",
        x: "删减",
        "!": "重大",
        "*": "修改",
        "^": "修复",
        $: "重构",
      },
      Op: {
        "-": "特性",
        "?": "文档",
        "#": "依赖",
        "<": "代码风格",
        ">": "命令",
        M: "模块",
        H: "钩子",
        "@": "GitHub Action",
      },
    };
  v.reg(
    "update-log",
    "更新日志显示",
    "@/.*",
    {
      last_version: { ty: "string", priv: !0 },
      style: {
        ty: "enum",
        vals: ["Commit Message", "自然语言"],
        get: "id",
        info: ["The way to display log", "显示 Log 的方式"],
      },
      keep_dev: {
        ty: "boolean",
        dft: !0,
        info: ["Keep developer messages", "保留开发者更新信息"],
      },
    },
    ({ msto: e }) => {
      if (location.href.includes("blog")) return;
      let { version: t } = GM_info.script,
        r = !1,
        n = (o) => {
          let i = `<div class="exlg-update-log-text" style="font-family: ${I["code-block-ex"].copy_code_font};">`;
          return (
            o
              .split(
                `
`
              )
              .forEach((s) => {
                let l = s.trimStart();
                if (l.length) {
                  if (e.keep_dev) r = !1;
                  else if (l[0] === ":") {
                    if (!r) return;
                  } else if (Xo.some((d, u) => d.includes(l[u]))) {
                    r = !1;
                    return;
                  } else r = !0;
                  e.style === 1 &&
                    l[0] !== ":" &&
                    (s =
                      " ".repeat(s.length - l.length) +
                      qr.Ty[l[0]] +
                      qr.Op[l[1]] +
                      l.substring(2));
                }
                i += `<div>${s.replace(/ /g, "&nbsp;")}</div>`;
              }),
            `${i}</div>`
          );
        };
      switch (pe(e.last_version, t)) {
        case "==":
          break;
        case "<<":
          N(n(Rr), `extend-luogu ver. ${t} 更新日志`);
        case ">>":
          e.last_version = t;
      }
    },
    Pr,
    "module"
  );
  var Br =
    '<svg class="icon exlg-usercom-edit" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="942"><path d="M295.384615 708.923077h433.23077a19.692308 19.692308 0 1 1 0 39.384615h-433.23077a19.692308 19.692308 0 1 1 0-39.384615zM590.769231 303.576615L618.653538 275.692308l72.979693 73.019077-27.844923 27.844923L590.769231 303.576615z m-236.307693 196.923077L382.345846 472.615385l89.284923 89.324307-27.844923 27.844923L354.461538 500.499692zM401.329231 616.841846l308.342154-308.342154-55.689847-55.689846-308.381538 308.342154-8.152615 63.881846 63.881846-8.192z m-93.065846-74.043077l317.833846-317.833846a39.384615 39.384615 0 0 1 55.729231 0l55.689846 55.689846a39.384615 39.384615 0 0 1 0 55.689846l-317.833846 317.833847-127.763693 16.344615 16.344616-127.724308z" p-id="943"></path></svg>';
  var Ur =
    ".exlg-usercom-edit{transition:all .4s;opacity:0;border-radius:.2em;margin-left:.2em;width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden}.exlg-usercom-edit:hover{transition:all .4s;opacity:.8;background:rgba(0,0,0,.1)}.exlg-usercom-tag{color:#8a7b7b;font-weight:lighter;font-size:.9em;margin-left:.3em;line-height:1em;font-family:Consolas}";
  var V = null;
  v.reg_hook_new(
    "user-comment",
    "用户备注",
    ".*",
    {
      comments: { ty: "string", dft: "{}", priv: !0 },
      direct_display: {
        ty: "boolean",
        dft: !0,
        info: ["Directly replace username", "直接替换用户名"],
      },
    },
    ({ msto: e, result: t, args: r }) => {
      let n = (o, i, s = o.attr("exlg-usercom")) => {
        if (!o || !o.length) return;
        if (o.length > 1) {
          o.each((d, u) => n(g(u), i));
          return;
        }
        let l = o;
        o.children("span[style]").length && (l = o.children("span[style]")),
          e.direct_display
            ? (l.css("white-space", "pre"), l.text(i ?? s))
            : (l.children("span.exlg-usercom-tag").remove(),
              i &&
                l.append(
                  `<span class="exlg-usercmt exlg-usercom-tag">(${i})</span>`
                ));
      };
      if (!t) {
        V = JSON.parse(e.comments);
        for (let [o, i] of Object.entries(V))
          (i === null || i === "") && delete V[o];
        if (/^\/user\/[1-9][0-9]{0,}$/.test(location.pathname)) {
          let o = g(".user-header-top > .user-info > div.user-name"),
            i = o[0].firstElementChild.innerText.trim(),
            s = +location.pathname.slice(6),
            l = g(
              '<span id="exlg-name-text" style="font-size: medium;color: #ddd;" class="exlg-usercom-tag"></span>'
            ).appendTo(o);
          l.text(`(${s in V ? V[s] : i})`), s in V || l.hide();
          let d = g(`<span title="修改用户备注">${Br}</span>`);
          o.append(d),
            d.on("click", () => {
              N(
                `<div>请设置用户 <span style="font-family: Consolas;">${i} (uid: ${s})</span> 的备注名。<br/><small>留空则清除备注。</small></div><input exlg-badge-register type="text" style="font-family: Consolas;line-height: 1.5;padding: .1em;" class="am-form-field exlg-badge-input" placeholder="${i}" name="username" id="exlg-user-com-input">`,
                "exlg 用户备注",
                () => {
                  let u = g("#exlg-user-com-input").val();
                  return (
                    u.trim() === ""
                      ? (delete V[s], (u = i), l.hide())
                      : ((V[s] = u.trim()), l.show()),
                    n(
                      g(`a[href="/user/${s}"][target=_blank]`),
                      e.direct_display ? V[s] ?? i : V[s],
                      i
                    ),
                    (e.comments = JSON.stringify(V)),
                    l.text(`(${s in V ? V[s] : i})`),
                    !0
                  );
                }
              ),
                g("#exlg-user-com-input").val(s in V ? V[s] : i);
            });
        }
      }
      r.forEach((o) => {
        let i = g(o),
          s = o.href.split("/").at(-1);
        typeof i.attr("exlg-usercom") < "u" ||
          (i.attr("exlg-usercom", i.text().trim()),
          (!s || s === "javascript:void 0") &&
            (s = g(
              o.parentNode.parentNode.previousElementSibling ??
                o.parentNode.parentNode.parentNode.parentNode.parentNode
                  .previousElementSibling
            )
              .find("img")
              .attr("src")
              .replace(/[^0-9]/gi, "")),
          s in V && n(i, V[s]));
      });
    },
    (e) => {
      if (
        /^\/user\/[0-9]{0,}.*$/.test(location.pathname) &&
        ((g(e.target).hasClass("feed") &&
          !g(e.target).hasClass("exlg-badge-feed")) ||
          (/^#following/.test(location.hash) &&
            g(e.target).parent().hasClass("sub-body")))
      ) {
        let r = Array.from(
          e.target.querySelectorAll("a[target='_blank']")
        ).filter((n) => !n.querySelectorAll("svg").length);
        return { result: r.length, args: r };
      }
      let t = e.target.querySelectorAll('a[href^="/user"][target=_blank]');
      return { result: t.length > 0, args: t };
    },
    () => {
      if (/^\/user\/[0-9]{0,}.*$/.test(location.pathname)) {
        if (location.hash === "#activity")
          return Array.from(
            document.querySelectorAll(".feed .wrapper>a[target='_blank']")
          ).filter((e) => !e.querySelectorAll("svg").length);
        if (/^#following/.test(location.hash))
          return Array.from(
            document.querySelectorAll(
              ".follow-container .wrapper>a[target='_blank']"
            )
          ).filter((e) => !e.querySelectorAll("svg").length);
      }
      return document.querySelectorAll("a[target='_blank'][href^='/user/']");
    },
    Ur,
    "module"
  );
  var Zr =
    "iframe{border:none;display:block}iframe::-webkit-scrollbar{display:none}";
  v.reg_user_tab(
    "user-intro-ins",
    "用户首页_HTML_显示",
    "main",
    null,
    null,
    () => {
      function e() {
        g(".introduction > *").each(async (r, n, o = g(n)) => {
          let i,
            s = o.children()[0];
          g(s).length !== 0 && s.nodeName === "A"
            ? (i = g(s).attr("href"))
            : (i = o.text());
          let [, , l, d] = i.match(/^(exlg.|%)([a-z|-]+):([^]+)$/) ?? [];
          if (!l) return;
          let u = d.split(/(?<!!)%/g).map((a) => a.replace(/!%/g, "%")),
            c = g(g(".user-action").children()[0]);
          if (l === "html")
            o.replaceWith(g(`<p exlg="exlg">${me.process(u[0])}</p>`));
          else if (l === "frame")
            o.replaceWith(
              Pe(
                { type: "page", url: encodeURI(u[0]), confirm: !0 },
                `width: ${u[1]}; height: ${u[2]};`
              )
            );
          else if (l === "blog") {
            if (c.text().trim() !== "个人博客") return;
            c.attr("href", u), o.remove();
          } else if (l === "html-paste") {
            if (u[0].trim() === "") return;
            let a = await X(`/paste/${u[0].trim()}`);
            o.replaceWith(
              g(`<p exlg="exlg">${me.process(a.currentData.paste.data)}</p>`)
            );
          }
        });
      }
      e();
      function t(r, n) {
        return n === 0 ? r : g(t(g(r.children()[0]), n - 1));
      }
      t(g("section.main"), 3).addClass("lg-editt"),
        g("button.lg-editt").on("click", () => {
          let r = t(g("section.main"), 2),
            n = g(r.children()[0]),
            o = g(r.children()[1]);
          n.addClass("lg-editt"), o.addClass("lg-editt"), e();
        });
    },
    Zr,
    "module"
  );
  var gt = {
    NOT_AT_PRACTICE_PAGE: -1,
    NONE: -2,
    COMMENT_TAG: -3,
    NOT_A_PROBLEM_ELEMENT: -4,
    PRIVATE_INFORMATION: -5,
    ADD_COMPARE: 1,
  };
  var Gr = ".main>.card>h3{display:inline-block}";
  v.reg_v2(
    {
      name: "user-problem-color",
      info: "题目颜色数量和比较",
      path: "@/user/[0-9]{0,}.*",
      cate: "module",
    },
    {
      problem_compare: {
        ty: "boolean",
        strict: !0,
        dft: !0,
        info: ["AC compare", "AC 题目比较"],
        migration: !0,
      },
    },
    (e) => {
      let t = { SUBMITTED_PROBLEMS: 0, PASSED_PROBLEMS: 1 },
        r = [
          [191, 191, 191],
          [254, 76, 97],
          [243, 156, 17],
          [255, 193, 22],
          [82, 196, 26],
          [52, 152, 219],
          [157, 61, 207],
          [14, 29, 105],
        ],
        n,
        o,
        i = -1,
        s = t.SUBMITTED_PROBLEMS,
        l = -1;
      e.preload(
        { name: "compare-problem", info: "比较通过的题目" },
        null,
        ({ gsto: d }) => {
          (n =
            typeof E.submittedProblems > "u" || typeof E.passedProblems > "u"),
            d.problem_compare &&
              !n &&
              (o = new Promise((u) => {
                X(`/user/${C.uid}`)
                  .then((c) => {
                    u(new Set(c.currentData.passedProblems.map((a) => a.pid)));
                  })
                  .catch((c) => {
                    U(c);
                  });
              }));
        }
      ),
        e.hook(
          { name: "problem-color", info: "题目颜色" },
          null,
          ({ gsto: d, args: u }) => {
            if (n) return;
            let c = (a) => `rgb(${r[a][0]},${r[a][1]},${r[a][2]})`;
            u.forEach((a) => {
              if (
                a.target.href !== "javascript:void 0" &&
                (a.target.style.setProperty(
                  "color",
                  c([
                    (a.board_id ? E.passedProblems : E.submittedProblems)[
                      a.position
                    ].difficulty,
                  ]),
                  "important"
                ),
                (a.board_id === t.PASSED_PROBLEMS &&
                  a.position === E.passedProblems.length - 1) ||
                  (E.passedProblems.length === 0 &&
                    a.board_id === t.SUBMITTED_PROBLEMS &&
                    a.position === E.submittedProblems.length - 1))
              ) {
                g(".exlg-counter").remove();
                let p = a.target.parentNode.parentNode.parentNode.parentNode,
                  f = [p.firstChild.childNodes[2], p.lastChild.childNodes[2]];
                for (let x = 0; x < 2; ++x) {
                  let h = f[x],
                    m = E[["submittedProblems", "passedProblems"][x]];
                  h.before(
                    g(
                      `<span id="exlg-problem-count-${x}" class="exlg-counter" exlg="exlg">${m.length}</span>`
                    )[0]
                  );
                }
                if (!d.problem_compare || E.user.uid === C.uid) return;
                o.then((x) => {
                  let h = 0,
                    m = f[1],
                    b = E.passedProblems;
                  m.querySelectorAll("a").forEach((w, k) => {
                    k < b.length &&
                      x.has(b[k].pid) &&
                      (h++,
                      (w.style.backgroundColor = "rgba(82, 196, 26, 0.3)"));
                  }),
                    g("#exlg-problem-count-1").html(
                      `<span class="exlg-counter" exlg="exlg">${b.length} <> ${x.size} : ${h}<i class="exlg-icon exlg-info" name="ta 的 &lt;&gt; 我的 : 相同"></i></span>`
                    );
                });
              }
            });
          },
          (d) => {
            if (location.hash !== "#practice") return { result: !1 };
            if (!E.submittedProblems.length && !E.passedProblems.length) {
              if (d.target.className === "card padding-default")
                if (g(d.target).children(".problems").length) {
                  let p = E[["submittedProblems", "passedProblems"][l]];
                  if (
                    (g(d.target.firstChild).after(
                      `<span id="exlg-problem-count-${l}" class="exlg-counter" exlg="exlg" style="margin-left: 5px">${p.length}</span>`
                    ),
                    ++l > 1)
                  )
                    return { result: !0, args: { message: gt.ADD_COMPARE } };
                } else
                  g(d.target).children(".difficulty-tags").length && (l = 0);
              return { result: !1, args: { message: gt.NONE } };
            }
            if (
              d.target.tagName.toLowerCase() !== "a" ||
              d.target.className !== "color-default" ||
              !d.target.pathname.startsWith("/problem/")
            )
              return { result: !1 };
            let u = d.target,
              c = [
                E.submittedProblems[0]?.pid,
                E.passedProblems[0]?.pid,
              ].indexOf(u.href.slice(33)),
              a = c !== -1;
            return (
              a ? ((s = c), (i = 0)) : i++,
              {
                result: !0,
                args: [{ onchange: a, board_id: s, position: i, target: u }],
              }
            );
          }
        );
    },
    Gr
  );
  var Vr =
    "#exlg-vp{margin-right:.5em;display:inline-block;flex:none;outline:0;cursor:pointer;color:#fff;font-weight:inherit;line-height:1.5;text-align:center;vertical-align:middle;background:0 0;border-radius:3px;border:1px solid;border-color:#52c41a;background-color:#52c41a}";
  v.reg(
    "virtual-participation",
    "创建重现赛",
    "@/contest/[0-9]*(#.*)?",
    {},
    () => {
      if (E.contest.name.match("Virtual Participation")) {
        let e = g(".items"),
          t = () => {
            (location.hash || "#main") === "#problems" &&
              g(".pid").length !== 0 &&
              E.contest.startTime > W() &&
              (g("a.title.color-default").on("click", () => {
                N("比赛尚未开始，请开始后再查看题目");
              }),
              g("a.title.color-default").removeAttr("href"));
          };
        e.on("click", t), t();
        return;
      }
      if (E.contest.endTime > W()) {
        Q("Contest has not started or ended.");
        return;
      }
      g("<button id='exlg-vp' class='lfe-form-sz-middle'>重现比赛</button>")
        .appendTo(g("div.operation"))
        .click(async () => {
          N(
            `<div>
                <p>设置「${E.contest.name}」的重现赛</p>
                <p>开始时间：<input type="date" id="vpTmDt"/> <input type="time" id="vpTmClk"/></p>
            </div><br>`,
            "创建重现赛",
            async () => {
              let e = g("#vpTmDt")[0].value.split("-"),
                t = g("#vpTmClk")[0].value.split(":"),
                r = new Date(e[0], e[1] - 1, e[2], t[0], t[1], 0, 0);
              r = r.getTime() / 1e3;
              let n = [],
                o = {};
              g.each(E.contestProblems, (d, u) => {
                n.push(String(u.problem.pid)),
                  (o[u.problem.pid] = u.problem.fullScore);
              });
              let i = null;
              i = await we(
                "/fe/api/contest/new",
                JSON.stringify({
                  settings: {
                    name: `Virtual Participation for ${E.contest.name}`,
                    description: E.contest.description,
                    visibilityType: 5,
                    invitationCodeType: 1,
                    ruleType: E.contest.ruleType,
                    startTime: r,
                    endTime: r + E.contest.endTime - E.contest.startTime,
                    rated: !1,
                    ratingGroup: null,
                  },
                  hostID: C.uid,
                })
              );
              let s = i.id.toString();
              (i.status ?? 200) === 200
                ? (s = i.id.toString())
                : U(
                    `Failed to modify contest ${s} with status code ${i.status}.`
                  ),
                (i = null);
              try {
                i = await we(
                  `/fe/api/contest/editProblem/${s}`,
                  JSON.stringify({ pids: n, scores: o })
                );
              } catch {
                return (
                  setTimeout(
                    N("<p>本场比赛的题目不公开</p>", "重现赛创建失败"),
                    500
                  ),
                  !1
                );
              }
              let l = await X(`/contest/edit/${s}`);
              return (
                await we(
                  `/fe/api/contest/join/${s}`,
                  `{"code": "${l.currentData.contest.joinCode}"}`
                ),
                N(
                  `<p>邀请码: ${l.currentData.contest.joinCode}</p>
                    <p>点确定自动跳转</p>`,
                  "重现赛创建成功",
                  () => (
                    (location.href = `https://www.luogu.com.cn/contest/${s}`),
                    !0
                  )
                ),
                !1
              );
            }
          );
        });
    },
    Vr,
    "module"
  );
  v.reg(
    "meta-discussion-guiding",
    "元讨论引导",
    [
      "@/discuss/lists\\?forumname=(siteaffairs|problem|academics|relevantaffairs|service).*",
    ],
    {},
    () => {
      let e = "432028",
        t = [/exlg/i, /ex(tend)?[- ]luogu/i, /badge/i],
        r = g("#newpost"),
        n = g(".lg-input-title"),
        o = g("#submitpost"),
        i = o.wrap("<div></div>").parent(),
        s = `<a href="/discuss/${e}"><b>专贴</b></a>`;
      r.after(`<p>exlg 相关问题请在 ${s} 讨论</p>`),
        i[0].addEventListener(
          "click",
          (l) => {
            let d = A.markdownPalettes.content?.toLowerCase(),
              u = n.val(),
              c = t
                .map((a) => [d.match(a)?.[0], u.match(a)?.[0]])
                .flat()
                .filter((a, p, f) => a && a !== f[p + 1]);
            if (c.length) {
              l.stopPropagation();
              let a;
              N(
                `检测到您将要发送的讨论内容包含与 exlg 有关的关键词：<br />${c
                  .map((p) => `“${p}”`)
                  .join(
                    ", "
                  )}<br />建议前往 ${s} 讨论。<br />这是为了防止占用讨论资源，营造一个更高质量的社区。 <br />我们很担心 exlg 相关讨论霸占版面，造成负面影响。<br /><span style="color: orange"><b>洛谷管理员提醒您：发布无意义讨论可能导致禁言。</b> <br /><small>* 无意义讨论包括但不限于“大家看得到我的 badge 吗” 等等</small></span> <br />如果您确定要发送，请在下方输入框键入 “放心” 后确定。<br/><small comment>（输入框过一会才会出现）</small>`,
                "exlg 提醒您",
                {
                  onconfirm: () =>
                    !a || a.val() !== "放心"
                      ? !1
                      : (setTimeout(o.trigger("click"), 500), !0),
                  onopen: async ({ dom: { $main: p } }) => {
                    await Jt(3e3),
                      p.find("small[comment]").remove(),
                      (a = g('<input type="text" />').appendTo(p));
                  },
                }
              );
            }
          },
          !0
        );
    },
    "",
    "module"
  );
  v.reg_lfe(
    "import-problem-to-cph",
    "添加到 cph",
    [
      "@/problem/[A-Z]+[0-9]+[A-Z]*(#.*)?(\\?contestId=[0-9]*)?",
      "@/record/.*",
      "@/contest/[0-9]+(#.*)?",
    ],
    {
      auto_hide_button: {
        ty: "boolean",
        dft: !0,
        strict: !0,
        info: ["Auto Hide Button", "自动隐藏按钮"],
      },
      problem_template: {
        ty: "string",
        dft: "Luogu_${pid}",
        info: [
          "Custom Problemname Template (Not Contest)",
          "自定义题目名称格式（非比赛）",
        ],
      },
      contest_template: {
        ty: "string",
        dft: "Luogu_${cid}_${pid}",
        info: [
          "Custom Problemname Template (Contest)",
          "自定义题目名称格式（比赛）",
        ],
      },
    },
    async (e) => {
      function t(i, s = "problem", l = 0) {
        g.get(i, (d) => {
          function u(f) {
            return new DOMParser().parseFromString(f, "text/html")
              .documentElement;
          }
          let c;
          d = u(d);
          for (let f of d.querySelectorAll("script")) {
            let x = f.textContent;
            if (x.startsWith("window._feInjection")) {
              let h = x.indexOf('"'),
                m = x.substr(h + 1).indexOf('"'),
                b = x.substr(h + 1, m);
              c = JSON.parse(decodeURIComponent(b)).currentData.problem;
            }
          }
          if (c == null) throw new Error("Failed to find problem data");
          let a = [];
          for (let f of c.samples) a.push({ input: f[0], output: f[1] });
          let p = e.msto.problem_template;
          s === "contest" &&
            ((p = e.msto.contest_template), (p = p.replace("${cid}", `${l}`))),
            (p = p.replace("${pid}", c.pid)),
            GM_xmlhttpRequest({
              url: "http://localhost:27121/",
              method: "POST",
              data: JSON.stringify({
                batch: { id: "exlg", size: 1 },
                name: p,
                group: "Luogu",
                url: i,
                interactive: "false",
                memoryLimit: Math.floor(Math.max(...c.limits.memory) / 1024),
                timeLimit: Math.max(...c.limits.time),
                tests: a,
                input: { type: "stdin" },
                output: { type: "stdout" },
                language: { java: { mainClass: "Main", taskClass: c.pid } },
                testType: "single",
              }),
              onload(f) {
                f.status === 502 && N("未启动 cph，传输失败！");
              },
              onerror() {
                N("未启动 cph，传输失败！");
              },
            });
        });
      }
      if (
        !g("div.operation").length ||
        window.location.href.search("/record/") !== -1
      )
        return;
      let r = new Promise((i) => {
        GM_xmlhttpRequest({
          url: "http://localhost:27121/",
          method: "POST",
          onload() {
            i(!0);
          },
          onerror() {
            i(!1);
          },
        });
      });
      function n() {
        window.location.href.search("/contest/") !== -1
          ? g("button.exlg-cph").click(async () => {
              let { href: i } = window.location,
                s = i.search("#");
              s !== -1 && (i = i.substring(0, s));
              let l = await X(i);
              l.currentData.contestProblems === null && N("比赛未开始！");
              let d = l.currentData.contestProblems;
              for (let u = 0; u < d.length; u++)
                t(
                  `https://www.luogu.com.cn/problem/${d[u].problem.pid}`,
                  "contest",
                  l.currentData.contest.id
                );
            })
          : g("button.exlg-cph").click(() => {
              t(window.location.href);
            });
      }
      (!(await r) && e.msto.auto_hide_button) ||
        (g("button.lfe-form-sz-middle").addClass("lg-btm"),
        window.location.href.search("#submit") === -1 &&
          g("button.exlg-cph").length === 0 &&
          (g("div.operation").append(
            '<button data-v-7ade990c="" data-v-43063e73="" type="button" class="exlg-cph lfe-form-sz-middle" data-v-2dfcfd35="" style="border-color: rgb(52, 152, 219); background-color: rgb(52, 152, 219);"> 传送至 cph </button>'
          ),
          n()),
        g("button.lg-btm").click(() => {
          window.location.href.search("#submit") === -1
            ? g("button.exlg-cph").length === 0 &&
              (g("button.lfe-form-sz-middle").addClass("lg-btm"),
              g("div.operation").append(
                '<button data-v-7ade990c="" data-v-43063e73="" type="button" class="exlg-cph lfe-form-sz-middle" data-v-2dfcfd35="" style="border-color: rgb(52, 152, 219); background-color: rgb(52, 152, 219);"> 传送至 cph </button>'
              ),
              n())
            : g("button.exlg-cph").remove();
        }));
    },
    null,
    "module"
  );
  var Fr = (e) => JSON.parse(JSON.stringify(e)),
    F = (e, t) => {
      throw globalThis[e](`[ProxyData] ${t}`);
    },
    pt = () => ({
      get: GM_getValue,
      set: GM_setValue,
      del: GM_deleteValue,
      list: GM_listValues,
    });
  var ni = (e) =>
      e?.__scm__?.ty
        ? e.__scm__.ty
        : e === null
        ? "null"
        : Array.isArray(e)
        ? "array"
        : e instanceof RegExp
        ? "regexp"
        : typeof e,
    oi = {
      string_number: (e) => +e,
      string_regexp: (e) => e,
      number_string: (e) => "" + e,
      number_boolean: (e) => !!e,
    },
    ii = {
      object: { layer: 1, container: () => ({}) },
      tuple: { layer: 1, container: () => [] },
      array: {
        layer: 2,
        container: () => [],
        api: (e, t, r = t.__scm__, n = t.__tar__) => ({
          $new(o, i = 1) {
            for (let s = o + i; o < s; o++) {
              let l = e.scm.lvs[s];
              l &&
                F(
                  "ReferenceError",
                  `Leaf @ ${l.path} already exists, but was attempted to re-new.`
                ),
                Je(e, s, t, n, !0);
            }
          },
          get $length() {
            return r.lvs.length;
          },
          $push(...o) {
            return o.forEach((i) => (t[r.lvs.length] = i)), r.lvs.length;
          },
          $fill(o, i = 0, s = r.lvs.length) {
            for (; i < s; i++) t[i] = o;
            return t;
          },
          $pop() {
            let o = r.lvs.length,
              i = t[o - 1];
            return delete t[o - 1], r.lvs.length--, i;
          },
          $splice(o, i) {
            let s = r.lvs.length;
            for (i ??= s, i = Math.min(s - o, i); o < s; o++)
              t[o] = o + i < s ? t[o + i] : void 0;
            r.lvs.length -= i;
          },
          $swap(o, i) {
            (t.__tmp__ = t[o]),
              (t[o] = t[i]),
              (t[i] = t.__tmp__),
              delete t.__tmp__;
          },
          $reverse() {
            let o = r.lvs.length,
              i = Math.floor(o / 2);
            for (let s = 0; s < i; s++) s in r.lvs && t.$swap(s, o - s - 1);
            return t;
          },
          $includes(o) {
            let i = r.lvs.length;
            for (let s = 0; s < i; s++) if (s in r.lvs && o === t[s]) return !0;
            return !1;
          },
          $indexOf(o) {
            let i = r.lvs.length;
            for (let s = 0; s < i; s++) if (s in r.lvs && o === t[s]) return +s;
            return -1;
          },
          $lastIndexOf(o) {
            for (let i = r.lvs.length - 1; i >= 0; i--)
              if (i in r.lvs && o === t[i]) return +i;
            return -1;
          },
          $find(o) {
            let i = r.lvs.length;
            for (let s = 0; s < i; s++)
              if (s in r.lvs) {
                let l = t[s];
                if (o(l)) return l;
              }
          },
          $findIndex(o) {
            let i = r.lvs.length;
            for (let s = 0; s < i; s++)
              if (s in r.lvs) {
                let l = t[s];
                if (o(l)) return +s;
              }
          },
          $forEach(o) {
            let i = r.lvs.length;
            for (let s = 0; s < i; s++) s in r.lvs && o(t[s], +s, t);
          },
          $at(o) {
            return o < 0 ? t[r.lvs.length + o] : t[o];
          },
          *[Symbol.iterator]() {
            for (let o in r.lvs) yield t[o];
          },
        }),
      },
    },
    Je = (e, t, r, n, o) => {
      let { data: i, map: s, scm: l, oldRoot: d, old: u, access: c } = e;
      o && (l.lvs[t] = Fr(l.itm));
      let a = l.lvs[t];
      a.path = (l.path ?? "") + "." + t;
      let p = ii[a.ty];
      (a.layer = p?.layer ?? 0),
        a.layer &&
          ((i[t] = p.container()), a.layer > 1 && (a.lvs = p.container()));
      let f = (h) => JSON.stringify(h, null, 2) + ": ";
      a.ty === "enum" &&
        ((a.get ??= "val"),
        (a.set ??= "val"),
        (a.fromOld = (h) => {
          let m = a.set;
          (a.set = "id"), (r[t] = h), (a.set = m);
        }),
        a.get !== "both" &&
          a.set === "both" &&
          F(
            "SyntaxError",
            f(a) + "{ ty: 'enum' → ¬(get: 'both' ∧ set: ¬ 'both') }"
          )),
        a.ty === "tuple" &&
          (a.lvs = a.lvs.flatMap((h) => {
            let m = 1;
            return (
              "repeat" in h &&
                ((m = h.repeat),
                (typeof m != "number" || m < 0 || m % 1) &&
                  F(
                    "SyntaxError",
                    f(a) +
                      "{ ty: 'tuple' → itm: [ ∀ i: { repeat?: integer } } ]"
                  ),
                delete h.repeat),
              Array.from({ length: m }, () => Fr(h))
            );
          })),
        s(a),
        (a.pathRoot = a.root ? "#" + a.path : l.pathRoot ?? t),
        (a.raw = (a.root ? null : l.raw) ?? (() => i[t]));
      let x = {
        data: i[t],
        map: s,
        scm: a,
        oldRoot: d,
        old: u?.[t],
        access: c,
      };
      if (a.layer) n[t] = Hr(x);
      else {
        let h = a.root ? d[a.pathRoot] : u?.[t];
        h !== void 0
          ? a.ty === "enum"
            ? a.fromOld(h)
            : (r[t] = h)
          : "dft" in a && (r[t] = a.dft);
      }
      p?.api && (a.api = p.api(x, n[t]));
    },
    Hr = (e) => {
      let { data: t, scm: r, oldRoot: n, old: o, access: i } = e,
        s = {},
        l = `Parent ${r.ty} @ ${r.path}`,
        d = (c) => {
          if (typeof c != "symbol" && r.ty === "array") {
            let a =
              l +
              ` requires the index to be in [ ${(r.minIdx ??= 0)}, ${(r.maxIdx ??=
                1 / 0)} ], but got ${c}. `;
            (c < r.minIdx || c > r.maxIdx) && F("RangeError", a);
          }
        },
        u = new Proxy(s, {
          get: (c, a) => {
            if (a === "__scm__") return r;
            if (a === "__tar__") return s;
            if (r.api && a in r.api) return r.api[a];
            if ((d(a), !r.lvs[a]))
              switch (r.layer) {
                case 1:
                  F("TypeError", l + ` doesn't have leaf ${a}.`);
                  break;
                case 2:
                  return;
              }
            let p = r.lvs[a];
            if (p.ty === "enum")
              switch (p.get) {
                case "id":
                  return s[a];
                case "val":
                  return p.vals[s[a]];
                case "both":
                  return {
                    get id() {
                      return s[a];
                    },
                    set id(f) {
                      let x = p.set;
                      (p.set = "id"), (u[a] = f), (p.set = x);
                    },
                    get val() {
                      return p.vals[s[a]];
                    },
                    set val(f) {
                      let x = p.set;
                      (p.set = "val"), (u[a] = f), (p.set = x);
                    },
                  };
              }
            return s[a];
          },
          set: (c, a, p) => {
            if ((d(a), !r.lvs[a]))
              switch (r.layer) {
                case 1:
                  F("TypeError", l + ` doesn't have leaf ${a}.`);
                  break;
                case 2:
                  Je(e, a, u, s, !0);
                  break;
              }
            r.api && a in r.api && F("TypeError", l + ` has API ${a}. Failed.`);
            let f = r.lvs[a],
              x = `Leaf @ ${f.path}`,
              h = "Failed strictly.",
              m =
                x +
                ` is ${
                  ["simple", "fixed complex", "flexible complex"][f.layer]
                } type, `;
            f.locked &&
              F("TypeError", x + " is locked, but was attempted to modify.");
            let b = ni(p);
            if (b === "undefined") {
              if (
                (r.layer === 1 &&
                  !r.del &&
                  F(
                    "TypeError",
                    m + "but its " + x + " was attempted to delete."
                  ),
                f.layer)
              ) {
                f.del = !0;
                for (let w in f.lvs) delete s[a][w];
              }
              delete r.lvs[a];
            } else if (
              (b === "array" && f.lvs instanceof Array) ||
              (b === "object" && f.lvs && !(f.lvs instanceof Array))
            ) {
              for (let w in f.lvs) s[a][w] = p[w];
              return !0;
            } else if (!["any", "enum"].includes(f.ty) && b !== f.ty) {
              let w = x + ` requires type ${f.ty}, but got ${b}: ${p}. `;
              f.strict && F("TypeError", w + h);
              let k = oi[`${b}_${f.ty}`];
              k ? (p = k(p)) : F("TypeError", w + "Failed to convert.");
            }
            if (f.ty === "number") {
              let w =
                x +
                ` requires to be in [ ${f.min ?? -1 / 0}, ${
                  f.max ?? 1 / 0
                } ], but got ${p}. `;
              (p < f.min || p > f.max) && F("RangeError", w),
                f.int &&
                  p % 1 &&
                  (f.strict &&
                    F("RangeError", x + " requires to be an integer. " + h),
                  (p = Math.floor(p)));
            } else if (f.ty === "enum")
              switch (f.set) {
                case "id":
                  (typeof p != "number" || !p in f.vals) &&
                    F(
                      "RangeError",
                      x +
                        ` requires to be an enum index in [ ${0}, ${
                          f.vals.length
                        } ], but got ${p}.`
                    );
                  break;
                case "val":
                  (p = f.vals.findIndex((w) => w === p)),
                    p < 0 &&
                      F(
                        "RangeError",
                        x +
                          ` requires to be in the enum { ${f.vals.join(
                            ", "
                          )} }, but got ${p}.`
                      );
                  break;
                case "both":
                  F(
                    "TypeError",
                    x +
                      " is an enum accepting both id and value ways of modification, but was attempted to modify without using any setter."
                  );
              }
            if (((s[a] = t[a] = p), f.quick || f.root)) {
              let w = f.raw();
              w === void 0 ? i.del(f.pathRoot) : i.set(f.pathRoot, w);
            }
            return !0;
          },
          deleteProperty: (c, a) => ((u[a] = void 0), !0),
          has: (c, a) => a in r.lvs,
        });
      switch (r.layer) {
        case 1:
          for (let a in r.lvs) Je(e, a, u, s);
          break;
        case 2:
          (r.itmRoot
            ? Object.keys(n)
                .map((a) => a.match(String.raw`^#${r.path}\.([^.]+)`)?.[1])
                .filter((a) => a)
            : Object.keys(o ?? {})
          ).forEach((a) => Je(e, a, u, s, !0));
          break;
      }
      return u;
    },
    Se = class {
      loadData(t, { access: r, autoSave: n, old: o, map: i }) {
        return (
          this.raw && F("Error", "ProxyData cannot be loaded multiple times."),
          (this.raw = {}),
          (this.access = r),
          (o ??= r.list().reduce((s, l) => ((s[l] = r.get(l)), s), {})),
          n && window.addEventListener("beforeunload", () => this.saveData()),
          Hr({
            data: this.raw,
            scm: { lvs: t, layer: 1 },
            map: i ?? ((s) => s),
            old: o,
            oldRoot: o,
            access: r,
          })
        );
      }
      saveData(t = this.raw) {
        Object.keys(t).forEach((r) => this.access.set(r, t[r]));
      }
      clearData() {
        (this.raw = null), this.access.list().forEach(this.access.del);
      }
    };
  M("Exposing");
  var Jr = new Se(),
    Qr = Jr.loadData(
      { settingVersion: { ty: "number", dft: 0 } },
      { access: pt() }
    );
  Qr.settingVersion === 0 &&
    (GM_listValues().every((e) => typeof GM_getValue(e) == "string") &&
      GM_listValues().forEach((e) =>
        GM_setValue(e, JSON.parse(GM_getValue(e)))
      ),
    (Qr.settingVersion = 1),
    Jr.saveData());
  var Wr = new Se(),
    Xr = Wr.loadData(J, {
      access: pt(),
      map: (e) => {
        (e.root = !e.rec), (e.itmRoot = e.rec === 2);
      },
    });
  v.fake_sto = oe.sto = Xr;
  Object.assign(A, {
    exlg: {
      mod: v,
      compo: oe,
      scm: J,
      log: M,
      error: U,
      queues: ce,
      springboard: Pe,
      version_cmp: pe,
      lg_alert: Wt,
      lg_content: X,
      register_badge: He,
      lg_post: we,
      exlg_alert: N,
      xss: me,
      pd: Wr,
      sto: Xr,
    },
    GM: {
      GM_info,
      GM_addStyle,
      GM_setClipboard,
      GM_xmlhttpRequest,
      GM_getValue,
      GM_setValue,
      GM_deleteValue,
      GM_listValues,
    },
    $$: g,
  });
  v.preload();
  v.execute_v2();
  ce.preload.apply();
  g(() => {
    M("Launching"), ce.onload.apply();
  });
})();
