"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var q=s(function(I,p){
function j(e,r,t,v,a,o,f){var i,n,d,u;if(e===0)return 0;for(n=f,i=v,u=0;u<e-1;u++){if(r[i]<=0)return u+1;d=a[n],a[n]=d/r[i],i+=t,r[i]-=a[n]*d,n+=o}return r[i]<=0?e:0}p.exports=j
});var c=s(function(J,g){
var h=require('@stdlib/error-tools-fmtprodmsg/dist'),F=q();function V(e,r,t){if(e<0)throw new RangeError(h('1ytG7',e));return F(e,r,1,0,t,1,0)}g.exports=V
});var x=s(function(K,l){
var _=require('@stdlib/error-tools-fmtprodmsg/dist'),E=q();function O(e,r,t,v,a,o,f){if(e<0)throw new RangeError(_('1ytG7',e));return E(e,r,t,v,a,o,f)}l.exports=O
});var y=s(function(L,w){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=c(),z=x();k(b,"ndarray",z);w.exports=b
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),G=y(),m,R=B(A(__dirname,"./native.js"));C(R)?m=G:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
