(window.webpackJsonp=window.webpackJsonp||[]).push([["zd34"],{zd34:function(n,t,e){"use strict";e.r(t),e.d(t,"export_txt_to_zip",function(){return r});var i=e("B/3w"),o=e.n(i);function r(n,t,e,i){var r=new o.a,c=e||"file",a=i||"file",f=n+"\r\n";t.forEach(function(n){var t;t=n.toString(),f+=t+"\r\n"}),r.file(c+".txt",f),r.generateAsync({type:"blob"}).then(function(n){saveAs(n,a+".zip")},function(n){alert("导出失败")})}e("usd7")}}]);