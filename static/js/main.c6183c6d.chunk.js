(this.webpackJsonpqdraw=this.webpackJsonpqdraw||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(2),c=t.n(a),i=(t(9),t(10),t(3));var u=function(){var e=Object(o.useRef)(null),n=Object(o.useRef)(null),t=Object(o.useState)(!1),a=Object(i.a)(t,2),c=a[0],u=a[1];Object(o.useEffect)((function(){var t=e.current;t.width=2*window.innerWidth,t.height=2*window.innerHeight,t.style.width="".concat(window.innerWidth,"px"),t.style.height="".concat(window.innerHeight,"px");var o=t.getContext("2d");o.scale(2,2),o.lineCap="round",o.strokeStyle="black",o.lineWidth=5,n.current=o}),[]);var s=function(e){var t=e.nativeEvent,o=t.offsetX,r=t.offsetY;n.current.beginPath(),n.current.moveTo(o,r),u(!0)},l=function(){n.current.closePath(),u(!1)},f=function(e){var t=e.nativeEvent;if(c){var o=t.offsetX,r=t.offsetY;n.current.lineTo(o,r),n.current.stroke()}};return r.a.createElement("div",null,r.a.createElement("canvas",{className:"canvas",onMouseDown:s,onMouseUp:l,onMouseMove:f,onTouchStart:s,onTouchEnd:l,onTouchMove:f,ref:e}))};var s=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c6183c6d.chunk.js.map