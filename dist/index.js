"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=s(function(I,p){
function j(r,e,i,v,a,o,f){var t,n,d,u;if(r===0)return 0;for(n=f,t=v,u=0;u<r-1;u++){if(e[t]<=0)return u+1;d=a[n],a[n]=d/e[t],t+=i,e[t]-=a[n]*d,n+=o}return e[t]<=0?r:0}p.exports=j
});var c=s(function(J,g){
var h=require('@stdlib/error-tools-fmtprodmsg/dist'),F=q();function V(r,e,i){if(r<0)throw new RangeError(h("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return F(r,e,1,0,i,1,0)}g.exports=V
});var x=s(function(K,l){
var _=require('@stdlib/error-tools-fmtprodmsg/dist'),E=q();function O(r,e,i,v,a,o,f){if(r<0)throw new RangeError(_("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return E(r,e,i,v,a,o,f)}l.exports=O
});var y=s(function(L,w){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=c(),z=x();k(b,"ndarray",z);w.exports=b
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),G=y(),m,R=B(A(__dirname,"./native.js"));C(R)?m=G:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
