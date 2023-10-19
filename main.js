// ==UserScript==
// @name         萌娘百科重定向
// @namespace    https://github.com/Blue-Roar/moegirl-redirect
// @version      0.3
// @description  将萌娘百科移动版重定向到桌面版，繁中到简中，主站到镜像站（可选）
// @author       Blue-Roar
// @include      *://mzh.moegirl.org.cn/*
// @include      *://zh.moegirl.org.cn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

const oldURL = document.location.href;
var newURL = oldURL;
newURL = newURL.replace('zh-tw', 'zh-cn').replace('zh-hk', 'zh-cn').replace('zh-sg', 'zh-cn');
newURL = newURL.replace('mzh.moegirl.org.cn', 'zh.moegirl.org.cn');

// 下面一行为镜像站跳转功能，如有需要可取消注释，亦可将脚本内的所有镜像站域名(moegirl.uk)替换成别的
// newURL = newURL.replace('zh.moegirl.org.cn', 'moegirl.uk');

// 如果启用了镜像站跳转功能，请在上方的==UserScript==字段内插入下面一行（可插入到 @grant none 前）：
// @include      *://moegirl.uk/*

if (newURL != oldURL) document.location.href = newURL;