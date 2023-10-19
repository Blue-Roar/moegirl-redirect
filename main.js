// ==UserScript==
// @name         萌娘百科重定向
// @namespace    https://github.com/Blue-Roar/moegirl-redirect
// @version      0.6
// @description  将萌娘百科移动版重定向到桌面版，语言转换（默认简体），主站到镜像站（可选）
// @author       Blue-Roar
// @match        *://mzh.moegirl.org.cn/*
// @match        *://zh.moegirl.org.cn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

const oldURL = document.location.href;
var newURL = oldURL;
const targetLang = 'zh-hans'; //可修改为下方语言列表中的值
/*
    萌娘百科支持的语言列表
    zh          关闭转换
    zh-hans     简体
    zh-hant     繁体
    zh-cn       大陆简体
    zh-hk       香港繁体
    zh-tw       台湾繁体
*/
newURL = newURL.replace('mzh.moegirl.org.cn', 'zh.moegirl.org.cn');
newURL = newURL.replace('zh-cn', targetLang).replace('zh-hk', targetLang).replace('zh-tw', targetLang).replace('zh-sg', targetLang).replace('zh-hans', targetLang).replace('zh-hant', targetLang);

// 下面一行为镜像站跳转功能，如有需要可取消注释，亦可将脚本内的所有镜像站域名(moegirl.uk)替换成别的
// newURL = newURL.replace('zh.moegirl.org.cn', 'moegirl.uk');

// 如果启用了镜像站跳转功能，请把下面一行插入到脚本头部 @grant none 前：
// @match        *://moegirl.uk/*

if (newURL != oldURL) document.location.href = newURL;