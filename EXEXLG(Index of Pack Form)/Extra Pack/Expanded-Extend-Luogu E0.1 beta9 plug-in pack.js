// ==UserScript==
// @name         Expanded-Extend-Luogu E0.1 beta9 plug-in pack
// @namespace    https://www.tampermonkey.net/
// @version      E0.1_beta9
// @description  EXEXLG的追加插件包，EXLG源码太乱不好改，所以另开一包，注意beta版本不支持luogu.me，需要VPN。
// @author       linch, yingjingxu
// @match        *://*.luogu.com/*
// @match        *://*.luogu.com.cn/*
// ==/UserScript==

(function() {
    'use strict';
    let a = document.URL;
    let t = document.documentElement.outerHTML;
    let b = "https://lglg.top/";
    let c=-1;
    //帖子跳转 by linch
    for (let i = 0; i < a.length; i++) {
        if (i < a.length - 8 && a[i] == 'd' && a[i + 1] == 'i' && a[i + 2] == 's' && a[i + 3] == 'c' && a[i + 4] == 'u' && a[i + 5] == 's' && a[i + 6] == 's' && a[i+7]!='?') {
            c=i+8;
            break;
        }
    }
    if(c!=-1){
        if(t.indexOf("1058316")>=0 && a.indexOf("1058316")==-1){
            for(let i=c;i<a.length;i++){
                b+=a[i];
            }
            window.location.replace(b);
        }
        else if(t.indexOf("You are unable to access</span> luogu.com</h2>")>=0){
            for(let i=c;i<a.length;i++){
                b+=a[i];
            }
            window.location.replace(b);
        }
    }
    if(a.indexOf(".cn")!=-1&&a.indefOf("mine")==-1&&a.indefOf("_new")==-1)
    {
        c=-1;
        b = "https://www.luogu.com/article/";
        for (let i = 0; i < a.length; i++) {
            if (i < a.length - 8 && a[i] == 'a' && a[i + 1] == 'r' && a[i + 2] == 't' && a[i + 3] == 'i' && a[i + 4] == 'c' && a[i + 5] == 'l' && a[i + 6] == 'e' && a[i+7]!='?') {
                c=i+8;
                break;
            }
        }
        if(c!=-1){
            for(let i=c;i<a.length;i++){
                b+=a[i];
            }
            window.location.replace(b);
        }
    }
})();
