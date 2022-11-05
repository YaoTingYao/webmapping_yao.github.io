﻿!function(t,o){"function"==typeof define&&define.amd?define(["leaflet"],t):"object"==typeof exports&&(module.exports=t(require("leaflet"))),void 0!==o&&o.L&&(o.L.Control.WorldMiniMap=t(L),o.L.control.worldMiniMap=function(t,i){return new o.L.Control.WorldMiniMap(t,i)})}(function(i){var t=i.Control.extend({options:{position:"bottomleft",width:168,height:84,view:"auto",lineWidth:2,lineColor:"white",circleRadius:3,circleColor:"white",map:document.currentScript.src.substring(0,document.currentScript.src.lastIndexOf("."))+".svg",style:{}},style:{backgroundColor:"#919eac",border:"2px solid black",borderRadius:"5px",padding:"3px"},initialize:function(t){i.Util.setOptions(this,t),"object"==typeof t&&i.Util.extend(this.style,t.style),this._container=i.DomUtil.create("canvas","leaflet-control-worldminimap"),i.DomEvent.disableClickPropagation(this._container),i.DomEvent.on(this._container,"mousewheel",i.DomEvent.stopPropagation),this._MMWCtx=this._container.getContext("2d"),this._WMMImg=new Image,this._WMMImg.src=this.options.map,i.Util.extend(this._container.style,this.style),this._container.style.visibility="hidden"},onAdd:function(t){var i=this;return this._WMMImg.onload=function(){0<i.options.height&&(this.height=i.options.height),0<i.options.width&&(this.width=i.options.width),i._container.height=this.height,i._container.width=this.width,i._container.style.height=this.height+"px",i._container.style.width=this.width+"px",i._container.style.visibility="visible",i._showMap(t)},t.on("moveend",this._onMoveEnd,this),this._container},onRemove:function(t){t.off("moveend",this._onMoveEnd,this)},_onMoveEnd:function(t){this._showMap(t.target)},_coord2Px:function(t,i,o){return Math.round((t/i+.5)*o)},_showMap:function(t){var i=this._coord2Px(t.getBounds().getWest(),360,this._container.width),o=this._coord2Px(t.getBounds().getEast(),360,this._container.width),n=this._coord2Px(t.getBounds().getNorth(),-180,this._container.height),e=this._coord2Px(t.getBounds().getSouth(),-180,this._container.height),t=this.options.lineWidth/2;n<t&&(n=t),e>this._container.height-t&&(e=this._container.height-t),e-n<this.options.lineWidth&&(e=n+this.options.lineWidth),o-i>this._container.width?(i=t,o=this._container.width-t):((t=i%this._container.width)<0&&(t+=this._container.width),i+=t-=i,o+=t),o-i<this.options.lineWidth&&(o=i+this.options.lineWidth),this._MMWCtx.clearRect(0,0,this._container.width,this._container.height),this._MMWCtx.drawImage(this._WMMImg,0,0,this._container.width,this._container.height),((o-i>2*this.options.circleRadius||e-n>2*this.options.circleRadius)&&"auto"==this.options.view||"both"==this.options.view||"square"==this.options.view)&&(this._MMWCtx.beginPath(),this._MMWCtx.lineWidth=this.options.lineWidth,this._MMWCtx.strokeStyle=this.options.lineColor,this._MMWCtx.rect(i,n,o-i,e-n),this._MMWCtx.stroke(),o>this._container.width&&(this._MMWCtx.rect(i-this._container.width,n,o-i,e-n),this._MMWCtx.stroke())),(o-i<=2*this.options.circleRadius&&e-n<=2*this.options.circleRadius&&"auto"==this.options.view||"both"==this.options.view||"circle"==this.options.view)&&(this._MMWCtx.fillStyle=this.options.circleColor,this._MMWCtx.beginPath(),this._MMWCtx.arc(.5*(i+o),.5*(n+e),this.options.circleRadius,0,2*Math.PI),this._MMWCtx.fill())}});return i.Map.mergeOptions({worldMiniMapControl:!1}),i.Map.addInitHook(function(){this.options.worldMiniMapControl&&(this.worldMiniMapControl=(new t).addTo(this))}),t},window);
