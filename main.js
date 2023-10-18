// ==UserScript==
// @name         萌娘百科重定向
// @namespace    https://github.com/Blue-Roar/moegirl-redirect
// @version      0.1
// @description  将萌娘百科移动版重定向到桌面版，繁中到简中，主站到镜像站
// @author       Blue-Roar
// @include      *://mzh.moegirl.org.cn/*
// @include      *://zh.moegirl.org.cn/*
// @include      *://moegirl.uk/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('mzh.moegirl.org.cn', 'zh.moegirl.org.cn')
                                               .replace('zh-tw', 'zh-cn').replace('zh-hk', 'zh-cn').replace('zh-sg', 'zh-cn')
                                               .replace('zh.moegirl.org.cn', 'moegirl.uk');
