/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

/*(c) aac services 2020. All Rights reserved)*/
"use strict";var __decorate=this&&this.__decorate||function(e,t,s,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;0<=a;a--)(o=e[a])&&(n=(r<3?o(n):3<r?o(t,s,n):o(t,s))||n);return 3<r&&n&&Object.defineProperty(t,s,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),router_1=require("@angular/router"),SpiceMap=function(){function SpiceMap(e,t,s,i,o,r,n,a){this.zone=e,this.language=t,this.model=s,this.modelutilities=i,this.backend=o,this.router=r,this.metadata=n,this.libloader=a,this.componentconfig={},this.map={},this.circle={},this.mousedown=!1,this.mapBoundaries={},this.modelMarker={},this.surroundingFunction={},this.surroundingMarkers=[],this.surroundingObjects=[],this.listfields=[]}return SpiceMap.prototype.getListFields=function(){return this.metadata.getFieldSetFields(this.componentconfig.fieldset)},SpiceMap.prototype.ngAfterViewInit=function(){var t=this;this.libloader.loadLib("maps.googleapis").subscribe(function(e){t.renderMap()})},Object.defineProperty(SpiceMap.prototype,"latField",{get:function(){return this.componentconfig.key&&""!=this.componentconfig.key?this.componentconfig.key+"_address_latitude":"address_latitude"},enumerable:!0,configurable:!0}),Object.defineProperty(SpiceMap.prototype,"lngField",{get:function(){return this.componentconfig.key&&""!=this.componentconfig.key?this.componentconfig.key+"_address_longitude":"address_longitude"},enumerable:!0,configurable:!0}),Object.defineProperty(SpiceMap.prototype,"lat",{get:function(){return this.model.data[this.latField]},enumerable:!0,configurable:!0}),Object.defineProperty(SpiceMap.prototype,"lng",{get:function(){return this.model.data[this.lngField]},enumerable:!0,configurable:!0}),SpiceMap.prototype.renderMap=function(){var e=this,t={lat:48.2,lng:16.3};this.lng&&this.lat&&(t={lat:this.lat,lng:this.lng}),this.map=new google.maps.Map(this.mapelement.element.nativeElement,{center:t,scrollwheel:!0,zoom:14,minZoom:8}),this.lng&&this.lat&&(this.modelMarker=new google.maps.Marker({position:t,map:this.map,icon:"https://maps.google.com/mapfiles/ms/micons/red-dot.png",title:this.model.data.summary_text})),this.map.addListener("bounds_changed",function(){e.mapBoundaries=e.map.getBounds(),e.surroundingFunction&&window.clearTimeout(e.surroundingFunction),e.surroundingFunction=window.setTimeout(function(){return e.getSurrounding()},500)})},SpiceMap.prototype.reCenter=function(){this.map.setCenter(this.modelMarker.position)},SpiceMap.prototype.isApiLoaded=function(){return window.google&&window.google.maps},SpiceMap.prototype.getSurrounding=function(){for(var o=this,e=0,t=this.surroundingMarkers;e<t.length;e++){t[e].setMap(null)}this.surroundingMarkers=[];var s=this.mapBoundaries.getNorthEast(),i=this.mapBoundaries.getSouthWest(),r={join:"AND",conditions:[{field:"id",operator:"<>",value:this.model.id},{field:this.lngField,operator:"<",value:s.lng()},{field:this.latField,operator:"<",value:s.lat()},{field:this.lngField,operator:">",value:i.lng()},{field:this.latField,operator:">",value:i.lat()}]},n={searchfields:JSON.stringify(r),fields:JSON.stringify(["id","name",this.lngField,this.latField])};this.backend.getRequest("module/"+this.model.module,n).subscribe(function(e){for(var t in e.list){for(var s in e.list[t])e.list[t][s]=o.modelutilities.backend2spice(o.model.module,s,e.list[t][s]);var i=new google.maps.Marker({position:{lat:e.list[t][o.latField],lng:e.list[t][o.lngField]},map:o.map,title:e.list[t].summary_text,icon:"http://maps.google.com/mapfiles/ms/micons/green.png",sugarId:e.list[t].id,sugarModule:o.model.module});o.surroundingMarkers.push(i)}o.surroundingObjects=e.list,o.zone.run(function(){})})},SpiceMap.prototype.mouseOver=function(t){this.surroundingMarkers.some(function(e){if(e.sugarId===t)return e.setIcon("http://maps.google.com/mapfiles/ms/micons/yellow-dot.png"),!0})},SpiceMap.prototype.mouseOut=function(t){this.surroundingMarkers.some(function(e){if(e.sugarId===t)return e.setIcon("http://maps.google.com/mapfiles/ms/micons/green.png"),!0})},__decorate([core_1.ViewChild("mapelement",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],SpiceMap.prototype,"mapelement",void 0),SpiceMap=__decorate([core_1.Component({selector:"spice-map",template:'<article class="slds-card slds-card_boundary slds-m-bottom--medium"><div class="slds-card__header slds-grid"><header class="slds-media slds-media--center slds-has-flexi-truncate"><div class="slds-media__body slds-truncate"><h2><span class="slds-text-heading--small">{{language.getLabel(\'LBL_MAP_VIEW\')}} ({{surroundingObjects.length}})</span></h2></div></header><div class="slds-button-group" role="group"><button class="slds-button slds-button--neutral" (click)="reCenter()">{{language.getLabel(\'LBL_RECENTER\')}}</button></div></div><div class="slds-card__body slds-p-horizontal--small"><div #mapelement style="width: 100%; height: 400px; border-radius: 4px; overflow: hidden;"></div><div class="slds-p-top--small"><table class="slds-table slds-table--bordered slds-table--fixed-layout"><thead><tr class="slds-text-title--caps"><th *ngFor="let item of getListFields()" class="slds-is-sortable" scope="col"><a href="javascript:void(0);" class="slds-th__action slds-text-link--reset"><span class="slds-truncate">{{language.getFieldDisplayName(module, item.field, item.fieldconfig)}}</span></a></th><th class="slds-cell-shrink" scope="col"></th></tr></thead><tbody><tr object-related-list-item *ngFor="let surroundingObject of surroundingObjects" [module]="model.module" [listfields]="getListFields()" [listitem]="surroundingObject" class="slds-hint-parent" (mouseenter)="mouseOver(surroundingObject.id)" (mouseleave)="mouseOut(surroundingObject.id)"></tr></tbody></table></div></div></article>'}),__metadata("design:paramtypes",[core_1.NgZone,services_1.language,services_1.model,services_1.modelutilities,services_1.backend,router_1.Router,services_1.metadata,services_1.libloader])],SpiceMap)}();exports.SpiceMap=SpiceMap;var SpiceMapSelector=function(){function SpiceMapSelector(e,t,s,i){this.zone=e,this.language=t,this.metadata=s,this.libloader=i,this.map={},this.circle={},this._radius=10,this.searchterm="",this.geoSearchemitter=new core_1.EventEmitter}return Object.defineProperty(SpiceMapSelector.prototype,"radius",{get:function(){return this._radius?this._radius:10},set:function(e){this._radius=e,this.circle&&this.circle.setRadius(1e3*this._radius)},enumerable:!0,configurable:!0}),SpiceMapSelector.prototype.ngAfterViewInit=function(){var t=this;this.libloader.loadLib("maps.googleapis").subscribe(function(e){t.lat||t.lng?t.renderMap():navigator.geolocation.getCurrentPosition(function(e){t.lat=e.coords.latitude,t.lng=e.coords.longitude,t.renderMap(),t.reverseGeoCode()},function(){t.renderMap()})})},SpiceMapSelector.prototype.renderMap=function(){var e=this,t={lat:this.lat,lng:this.lng};this.map=new google.maps.Map(this.mapelement.element.nativeElement,{center:t,scrollwheel:!0,streetViewControl:!1,zoom:11,minZoom:8}),this.circle=new google.maps.Circle({strokeColor:"red",fillColor:"#dddddd",fillOpacity:.5,strokeWeight:2,clickable:!0,draggable:!0,editable:!0,zIndex:1,map:this.map,center:t,radius:1e3*this._radius}),google.maps.event.addListener(this.circle,"center_changed",function(){e.lat!=e.circle.getCenter().lat()&&e.lng!=e.circle.getCenter().lng()&&(e.lat=e.circle.getCenter().lat(),e.lng=e.circle.getCenter().lng(),e.reverseGeoCode())}),google.maps.event.addListener(this.circle,"radius_changed",function(){e._radius=Math.round(e.circle.getRadius()/100)/10}),this.reverseGeoCode()},SpiceMapSelector.prototype.reverseGeoCode=function(){var s=this;(new google.maps.Geocoder).geocode({location:{lat:this.lat,lng:this.lng}},function(e,t){s.address=e[0].formatted_address})},SpiceMapSelector.prototype.close=function(){this.self.destroy()},SpiceMapSelector.prototype.set=function(){this.geoSearchemitter.emit({radius:this._radius,lat:this.lat,lng:this.lng,address:this.address}),this.close()},SpiceMapSelector.prototype.clear=function(){this.geoSearchemitter.emit(!1),this.close()},SpiceMapSelector.prototype.setDetails=function(e){this.lat=e.address.latitude,this.lng=e.address.longitude,this.address=[e.name,e.formatted_address].join(", "),this.map.setCenter({lat:e.address.latitude,lng:e.address.longitude}),this.circle.setCenter({lat:e.address.latitude,lng:e.address.longitude})},Object.defineProperty(SpiceMapSelector.prototype,"mapStyle",{get:function(){this.headerinput.element.nativeElement.getBoundingClientRect();return{width:"100%",height:"calc(100% - "+this.headerinput.element.nativeElement.getBoundingClientRect().height+"px)"}},enumerable:!0,configurable:!0}),__decorate([core_1.ViewChild("mapelement",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],SpiceMapSelector.prototype,"mapelement",void 0),__decorate([core_1.ViewChild("headerinput",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],SpiceMapSelector.prototype,"headerinput",void 0),SpiceMapSelector=__decorate([core_1.Component({selector:"spice-map-selector",template:'<system-modal size="large"><system-modal-header (close)="close()"></system-modal-header><system-modal-content margin="none" [grow]="true"><div #headerinput class="slds-grid slds-grid_vertical-align-center slds-p-around--x-small"><system-googleplaces-search class="slds-size--2-of-3" [(ngModel)]="searchterm" (details)="setDetails($event)"></system-googleplaces-search><div class="slds-grid slds-grid_vertical-align-center slds-size--1-of-3 slds-p-left--x-small"><div class="slds-slider slds-p-horizontal--x-small slds-grow"><input type="range" min="0" max="100" class="slds-slider__range" [(ngModel)]="radius"></div><input style="width: 60px;" type="number" class="slds-input" [(ngModel)]="radius"> <span class="slds-p-horizontal--x-small">km</span></div></div><div #mapelement [ngStyle]="mapStyle"></div></system-modal-content><system-modal-footer>{{address}} <button class="slds-button slds-button--neutral" (click)="clear()">{{language.getLabel(\'LBL_CLEAR\')}}</button> <button class="slds-button slds-button--neutral" (click)="set()">{{language.getLabel(\'LBL_SET\')}}</button> <button class="slds-button slds-button--neutral" (click)="close()">{{language.getLabel(\'LBL_CLOSE\')}}</button></system-modal-footer></system-modal>'}),__metadata("design:paramtypes",[core_1.NgZone,services_1.language,services_1.metadata,services_1.libloader])],SpiceMapSelector)}();exports.SpiceMapSelector=SpiceMapSelector;var SpiceGoogleMaps=function(){function e(e,t,s){this.language=e,this.model=t,this.libLoader=s,this.map={}}return Object.defineProperty(e.prototype,"isApiLoaded",{get:function(){return window.google&&window.google.maps},enumerable:!0,configurable:!0}),e.prototype.ngAfterViewInit=function(){var e=this;this.libLoader.loadLib("maps.googleapis").subscribe(function(){return e.renderMap()})},e.prototype.renderMap=function(){this.map=new google.maps.Map(this.mapContainer.element.nativeElement,{center:{lat:-34.397,lng:150.644},zoom:8})},__decorate([core_1.ViewChild("mapContainer",{read:core_1.ViewContainerRef,static:!1}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"mapContainer",void 0),e=__decorate([core_1.Component({selector:"spice-google-maps",template:'<div #mapContainer style="width: 100%; height: 100%; border-radius: 4px; overflow: hidden;"></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.libloader])],e)}();exports.SpiceGoogleMaps=SpiceGoogleMaps;var ModuleSpiceMap=function(){function ModuleSpiceMap(e){this.vms=e,this.version="1.0",this.build_date="2020-03-23",this.vms.registerModule(this)}return ModuleSpiceMap=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[SpiceMap,SpiceGoogleMaps,SpiceMapSelector]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleSpiceMap)}();exports.ModuleSpiceMap=ModuleSpiceMap;