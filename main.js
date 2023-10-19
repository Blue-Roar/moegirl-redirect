// ==UserScript==
// @name         萌娘百科重定向
// @namespace    https://github.com/Blue-Roar/moegirl-redirect
// @version      0.2
// @description  将萌娘百科移动版重定向到桌面版，繁中到简中，主站到镜像站（可选）
// @author       Blue-Roar
// @include      *://mzh.moegirl.org.cn/*
// @include      *://zh.moegirl.org.cn/*
// @include      *://moegirl.uk/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

const oldURL = document.location.href;
var newURL = oldURL;
// if (newURL.includes('zh')) {
    newURL = newURL.replace('zh-tw', 'zh-cn').replace('zh-hk', 'zh-cn').replace('zh-sg', 'zh-cn');
// }
// if (document.location.hostname.includes('moegirl.org.cn')) {
    newURL = newURL.replace('mzh.moegirl.org.cn', 'zh.moegirl.org.cn');
    newURL = newURL.replace('zh.moegirl.org.cn', 'moegirl.uk'); //不需要跳转镜像站可注释本行
// }
if (newURL != oldURL) document.location.href = newURL;