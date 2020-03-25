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
"use strict";var __extends=this&&this.__extends||function(){var s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};return function(e,t){function i(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),__decorate=this&&this.__decorate||function(e,t,i,s){var r,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;0<=n;n--)(r=e[n])&&(a=(o<3?r(a):3<o?r(t,i,a):r(t,i))||a);return 3<o&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),forms_1=require("@angular/forms"),core_1=require("@angular/core"),services_1=require("../services/services"),objectfields_1=require("../objectfields/objectfields"),systemcomponents_1=require("../systemcomponents/systemcomponents"),objectcomponents_1=require("../objectcomponents/objectcomponents"),router_1=require("@angular/router"),DhtmlxDiagram=function(){function DhtmlxDiagram(e,t){this.metadata=e,this.libloader=t}return DhtmlxDiagram=__decorate([core_1.Component({selector:"dhtmlx-diagram",template:"dhtmlx"}),__metadata("design:paramtypes",[services_1.metadata,services_1.libloader])],DhtmlxDiagram)}();exports.DhtmlxDiagram=DhtmlxDiagram;var SpiceTimestream=function(){function SpiceTimestream(e,t,i,s,r,o){var a=this;this.language=e,this.userpreferences=t,this.model=i,this.modellist=s,this.modelutilities=r,this.metadata=o,this.modellistsubscribe=void 0,this.requestedFields=[],this.focusDate=new moment,this.timestream={period:"y",dateStart:null,dateEnd:null},this.modellistsubscribe=this.modellist.listtype$.subscribe(function(e){return a.switchListtype()}),this.requestedFields=["name","account_name","account_id","sales_stage","amount_usdollar","amount"],this.modellist.getListData(this.requestedFields),this.period="y"}return SpiceTimestream.prototype.switchListtype=function(){this.modellist.getListData(this.requestedFields)},Object.defineProperty(SpiceTimestream.prototype,"period",{get:function(){return this.timestream.period},set:function(e){switch(e){case"M":var t=moment(this.focusDate).month();this.timestream.dateStart=new moment(this.focusDate),this.timestream.dateStart.month(t),this.timestream.dateStart.date(1),this.timestream.dateStart.day(0),this.timestream.dateStart.hour(0),this.timestream.dateStart.minute(0),this.timestream.dateEnd=new moment(this.focusDate),this.timestream.dateEnd.month(t),this.timestream.dateEnd.date(31),this.timestream.dateEnd.day(6),this.timestream.dateEnd.hour(23),this.timestream.dateEnd.minute(59);break;case"Q":var i=moment(this.focusDate).month()+1;this.timestream.dateStart=new moment(this.focusDate),this.timestream.dateStart.month(3*Math.floor(i/3)),this.timestream.dateStart.date(1),this.timestream.dateStart.hour(0),this.timestream.dateStart.minute(0),this.timestream.dateEnd=new moment(this.focusDate),this.timestream.dateEnd.month(3*Math.floor(i/3)+3),this.timestream.dateEnd.date(31),this.timestream.dateEnd.hour(23),this.timestream.dateEnd.minute(59);break;case"y":this.timestream.dateStart=new moment(this.focusDate),this.timestream.dateStart.month(0),this.timestream.dateStart.date(1),this.timestream.dateStart.hour(0),this.timestream.dateStart.minute(0),this.timestream.dateEnd=new moment(this.focusDate),this.timestream.dateEnd.month(11),this.timestream.dateEnd.date(31),this.timestream.dateEnd.hour(23),this.timestream.dateEnd.minute(59)}this.timestream.period=e},enumerable:!0,configurable:!0}),Object.defineProperty(SpiceTimestream.prototype,"periodText",{get:function(){switch(this.timestream.period){case"M":return moment(this.timestream.dateStart).day(6).format("MMM/Y");case"Q":return this.timestream.dateStart.format("Q/Y");case"y":return this.timestream.dateStart.format("Y")}},enumerable:!0,configurable:!0}),SpiceTimestream.prototype.prev=function(){this.focusDate.subtract(1,this.timestream.period),this.period=this.timestream.period},SpiceTimestream.prototype.next=function(){this.focusDate.add(1,this.timestream.period),this.period=this.timestream.period},__decorate([core_1.ViewChild("streamwindow",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],SpiceTimestream.prototype,"streamwindow",void 0),SpiceTimestream=__decorate([core_1.Component({selector:"spice-timestream",template:'<div class="slds-grid"><div class="slds-border--right slds-size--1-of-8" style="width:250px;"><div class="slds-border--bottom slds-p-vertical--xx-small slds-p-horizontal--x-small" style="height: 40px;"><div class="slds-grid slds-grid--align-spread slds-grid_vertical-align-center"><div class="slds-form-element slds-p-horizontal--small slds-size--1-of-2"><div class="slds-form-element__control"><div class="slds-select_container"><select class="slds-select" [(ngModel)]="period"><option value="y">{{language.getLabel(\'LBL_YEAR\')}}</option><option value="Q">{{language.getLabel(\'LBL_QUARTER\')}}</option><option value="M">{{language.getLabel(\'LBL_MONTH\')}}</option></select></div></div></div><div class="slds-grid"><button class="slds-button slds-button_icon" (click)="prev()"><system-button-icon [icon]="\'left\'"></system-button-icon></button><div class="slds-p-horizontal--small">{{periodText}}</div><button class="slds-button slds-button_icon" (click)="next()"><system-button-icon [icon]="\'right\'"></system-button-icon></button></div></div></div><div *ngFor="let item of modellist.listData.list" class="slds-border--bottom slds-p-vertical--xx-small slds-p-horizontal--x-small" style="height: 34px;" spice-timestream-label [item]="item" [parentmodel]="model"></div></div><div #streamwindow class="slds-size--7-of-8"><div style="height: 40px;" spice-timestream-header [timestream]="timestream"></div><div *ngFor="let item of modellist.listData.list" spice-timestream-item [timestream]="timestream" [elementstart]="item.start_date" [elementend]="item.end_date" style="height: 34px;"></div></div></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.userpreferences,services_1.model,services_1.modellist,services_1.modelutilities,services_1.metadata])],SpiceTimestream)}();exports.SpiceTimestream=SpiceTimestream;var SpiceTimestreamHeader=function(){function e(e,t){this.elementRef=e,this.userpreferences=t,this.timestream={},this.dateElements=[]}return Object.defineProperty(e.prototype,"startDate",{get:function(){return this.timestream.datestart.format(this.userpreferences.getDateFormat())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"endDate",{get:function(){return this.timestream.dateend.format(this.userpreferences.getDateFormat())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this.elementRef.nativeElement.parentElement.getBoundingClientRect().width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"periods",{get:function(){var e=[],t=0;switch(this.timestream.period){case"M":for(var i=moment(this.timestream.dateStart);i.isSameOrBefore(this.timestream.dateEnd);)e.push({name:i.format("DD"),displayclass:0==i.day()||6==i.day()?"slds-theme_shade":""}),i.add(1,"d");break;case"Q":for(;t<3;){var s=(new moment).month(this.timestream.dateStart.month()+t);e.push({name:s.format("MMM")}),t++}break;case"y":for(;t<12;){s=(new moment).month(t);e.push({name:s.format("MMM")}),t++}}return e},enumerable:!0,configurable:!0}),e.prototype.getPeriodStyle=function(){return{width:"calc(100% / "+this.periods.length+")"}},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"timestream",void 0),e=__decorate([core_1.Component({selector:"[spice-timestream-header]",template:'<div class="slds-grid slds-border--top slds-border--bottom" style="height: 100%"><div *ngFor="let period of periods; let i = index" class="slds-border--right" [ngStyle]="getPeriodStyle()" [ngClass]="period.displayclass"><div class="slds-align--absolute-center" style="height: 100%">{{period.name}}</div></div></div>'}),__metadata("design:paramtypes",[core_1.ElementRef,services_1.userpreferences])],e)}();exports.SpiceTimestreamHeader=SpiceTimestreamHeader;var SpiceTimestreamLabel=function(){function e(e,t,i,s){this.elementRef=e,this.metadata=t,this.model=i,this.footer=s,this.item={},this.parentmodel={},this.showPopover=!1,this.showPopoverTimeout={},this.popoverCmp=null}return e.prototype.ngOnInit=function(){this.model.module=this.parentmodel.module,this.model.id=this.item.id,this.model.data=this.item},e.prototype.onMouseOver=function(){var e=this;this.showPopoverTimeout=window.setTimeout(function(){return e.renderPopover()},500)},e.prototype.onMouseOut=function(){this.showPopoverTimeout&&window.clearTimeout(this.showPopoverTimeout),this.destroyPopover()},e.prototype.renderPopover=function(){var t=this;this.metadata.addComponent("fieldModelFooterPopover",this.footer.footercontainer).subscribe(function(e){e.instance.popovermodule=t.parentmodel.module,e.instance.popoverid=t.item.id,e.instance.parentElementRef=t.elementRef,e.instance.self=e,t.popoverCmp=e})},e.prototype.destroyPopover=function(){this.popoverCmp&&this.popoverCmp.destroy()},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"item",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"parentmodel",void 0),e=__decorate([core_1.Component({selector:"[spice-timestream-label]",template:'<div class="slds-grid slds-grid--align-spread slds-grid_vertical-align-center"><div class="slds-text-link_reset" (mouseover)="onMouseOver()" (mouseout)="onMouseOut()">{{item.name}}</div><object-action-menu [buttonsize]="\'small\'"></object-action-menu></div>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[core_1.ElementRef,services_1.metadata,services_1.model,services_1.footer])],e)}();exports.SpiceTimestreamLabel=SpiceTimestreamLabel;var SpiceTimestreamItem=function(){function e(e,t){this.elementRef=e,this.userpreferences=t,this.timestream={},this.elementstart={},this.elementend={}}return Object.defineProperty(e.prototype,"displayItem",{get:function(){return this.elementstart&&this.elementend&&this.elementstart.isBefore(this.elementend)&&this.elementstart.isBefore(this.timestream.dateEnd)&&this.elementend.isAfter(this.timestream.dateStart)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startdate",{get:function(){return this.elementstart.isBefore(this.timestream.dateStart)?this.timestream.dateStart:this.elementstart},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"enddate",{get:function(){return this.elementend.isAfter(this.timestream.dateEnd)?this.timestream.dateEnd:this.elementend},enumerable:!0,configurable:!0}),e.prototype.getStart=function(){var e=this.timestream.dateEnd.diff(this.timestream.dateStart,"days");return this.startdate.diff(this.timestream.dateStart,"days")/e*100},e.prototype.getWidth=function(){var e=this.timestream.dateEnd.diff(this.timestream.dateStart,"days");return this.enddate.diff(this.startdate,"days")/e*100},e.prototype.getElementStyle=function(){return{left:this.getStart()+"%",width:this.getWidth()+"%"}},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"timestream",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"elementstart",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"elementend",void 0),e=__decorate([core_1.Component({selector:"[spice-timestream-item]",template:'<div class="slds-grid slds-border--bottom slds-is-relative" style="height: 100%"><div *ngIf="displayItem" class="slds-is-absolute slds-theme--shade" style="height:10px; top: 11px; border-radius: 3px; background-color: #CA1B1F;" [ngStyle]="getElementStyle()"></div></div>'}),__metadata("design:paramtypes",[core_1.ElementRef,services_1.userpreferences])],e)}();exports.SpiceTimestreamItem=SpiceTimestreamItem;var SpiceTerritorriesDetail=function(){function SpiceTerritorriesDetail(e,t,i,s,r,o,a){this.language=e,this.model=t,this.modelutilities=i,this.configuration=s,this.backend=r,this.router=o,this.metadata=a,this.expanded=!0}return SpiceTerritorriesDetail.prototype.togglePanel=function(){this.expanded=!this.expanded},SpiceTerritorriesDetail.prototype.getChevronStyle=function(){if(!this.expanded)return{transform:"rotate(45deg)","margin-top":"4px"}},SpiceTerritorriesDetail.prototype.getTabStyle=function(){if(!this.expanded)return{"margin-top":"-100%"}},SpiceTerritorriesDetail.prototype.getContainerStyle=function(){return{overflow:"hidden"}},SpiceTerritorriesDetail=__decorate([core_1.Component({selector:"spice-territorries-detail",template:'<div class="slds-panel__section slds-p-horizontal--none slds-p-vertical--none"><h3 class="slds-text-heading--small slds-section-title--divider slds-m-bottom--medium"><div class="panelChevron" (click)="togglePanel()" [ngStyle]="getChevronStyle()"></div>Territorry management</h3><div class="slds-p-horizontal--small slds-grid" [ngStyle]="getContainerStyle()"><div class="spicecrm-object-record-details-tab-row-field slds-size--1-of-2"><field-label [fieldname]="\'korgobjectmain\'"></field-label><spice-territorries-primary></spice-territorries-primary></div><div class="spicecrm-object-record-details-tab-row-field slds-size--1-of-2"><field-label [fieldname]="\'korgobjectmultiple\'"></field-label><spice-territories-additional></spice-territories-additional></div></div></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.modelutilities,services_1.configurationService,services_1.backend,router_1.Router,services_1.metadata])],SpiceTerritorriesDetail)}();exports.SpiceTerritorriesDetail=SpiceTerritorriesDetail;var tfieldGeneric=function(){function e(e,t,i,s,r){this.model=e,this.view=t,this.language=i,this.metadata=s,this.router=r,this.fieldname="",this.fieldconfig={},this.fieldid="",this.fielddisplayclass="",this.fieldid=this.model.generateGuid()}return e.prototype.isEditable=function(){return!(!this.view.isEditable||this.fieldconfig.readonly||this.model.data&&this.model.data.acl_fieldcontrol&&this.model.data.acl_fieldcontrol[this.fieldname]&&parseInt(this.model.data.acl_fieldcontrol[this.fieldname],10)<3)},e.prototype.isEditMode=function(){return!(!this.view.isEditMode()||!this.isEditable())},e.prototype.displayLink=function(){try{return this.fieldconfig.link&&this.model.data.acl.detail}catch(e){return!1}},e.prototype.setEditMode=function(){this.model.startEdit(),this.view.setEditMode()},e.prototype.getFieldClass=function(){return[]},e.prototype.setFieldError=function(e){},e.prototype.getFieldError=function(){},e.prototype.clearFieldError=function(){},e.prototype.fieldHasError=function(){return!1},e.prototype.goRecord=function(){this.router.navigate(["/module/"+this.model.module+"/"+this.model.id])},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"fieldname",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"fieldconfig",void 0),e=__decorate([core_1.Component({}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router])],e)}(),SpiceTerritorriesPrimary=function(c){function e(e,t,i,s,r,o,a,n,d){var l=c.call(this,e,t,s,r,o)||this;return l.model=e,l.view=t,l.popup=i,l.language=s,l.metadata=r,l.router=o,l.elementRef=a,l.renderer=n,l.territories=d,l.relateSearchOpen=!1,l.objectsearchterm="",l.showPopover=!1,l.showPopoverTimeout={},l.popup.closePopup$.subscribe(function(){return l.closePopups()}),l}return __extends(e,c),e.prototype.getTerritorryName=function(){return this.model.data.korgobjectmain?this.territories.getTerritoryName(this.model.module,this.model.data.korgobjectmain):""},e.prototype.canRemove=function(){return this.territories.isUserTerritory(this.model.module,this.model.data.korgobjectmain)},e.prototype.getTerritories=function(){for(var e=[],t=0,i=this.territories.userTerritories[this.model.module];t<i.length;t++){var s=i[t];(""===this.objectsearchterm||""!==this.objectsearchterm&&-1!==s.name.toLowerCase().indexOf(this.objectsearchterm.toLowerCase()))&&e.push(s)}return e},e.prototype.setTerritory=function(e){this.model.data.korgobjectmain=e,this.closePopups()},e.prototype.onClick=function(e){this.elementRef.nativeElement.contains(e.target)||this.closePopups()},e.prototype.closePopups=function(){this.clickListener(),this.model.data.korgobjectmain&&(this.objectsearchterm=""),this.relateSearchOpen=!1},e.prototype.clearField=function(){this.model.data.korgobjectmain=""},e.prototype.onFocus=function(){var t=this;this.relateSearchOpen=!0,this.clickListener=this.renderer.listen("document","click",function(e){return t.onClick(e)})},e.prototype.relateSearchStyle=function(){if(this.relateSearchOpen)return{width:this.elementRef.nativeElement.getBoundingClientRect().width+"px",display:"block"}},e.prototype.getPopoverStyle=function(){var e=this.elementRef.nativeElement.getBoundingClientRect(),t=this.popover.element.nativeElement.getBoundingClientRect();return{position:"fixed",top:e.top+(e.height-t.height)/2+"px",left:e.left<t.width?e.left+100+"px":e.left-t.width-15+"px",display:this.showPopover?"":"none"}},e.prototype.getPopoverSide=function(){var e=this.elementRef.nativeElement.getBoundingClientRect(),t=this.popover.element.nativeElement.getBoundingClientRect();return e.left<t.width?"right":"left"},e.prototype.onMouseOver=function(){var e=this;this.showPopoverTimeout=window.setTimeout(function(){return e.showPopover=!0},500)},e.prototype.onMouseOut=function(){this.showPopoverTimeout&&window.clearTimeout(this.showPopoverTimeout),this.showPopover=!1},__decorate([core_1.ViewChild("popover",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"popover",void 0),e=__decorate([core_1.Component({selector:"spice-territorries-primary",template:'<div class="slds-truncate" title="{{field}}"><p *ngIf="!isEditMode()" class="slds-text-body--regular slds-truncate slds-p-vertical--x-small slds-border--bottom"><span>{{getTerritorryName()}}</span> <button *ngIf="isEditable()" style="float: right" class="slds-button slds-button--icon" (click)="view.setEditMode()"><system-button-icon [icon]="\'edit\'"></system-button-icon></button></p><div *ngIf="isEditable() && isEditMode()" class="slds-form-element__control" [ngClass]="getFieldClass()"><div class="slds-form-element slds-lookup"><div *ngIf="model.data.korgobjectmain" class="slds-form-element__control"><div class="slds-pill_container"><span class="slds-pill slds-m-vertical--xxx-small slds-p-vertical--xx-small slds-size--1-of-1"><span class="slds-icon_container slds-icon-standard-hierarchy slds-pill__icon_container"><system-icon [icon]="\'hierarchy\'" [sprite]="\'standard\'" [size]="\'small\'"></system-icon></span> <span class="slds-pill__label">{{getTerritorryName()}}</span> <button *ngIf="canRemove()" class="slds-button slds-button--icon slds-pill__remove" (click)="clearField()"><system-button-icon [icon]="\'close\'"></system-button-icon></button></span></div></div><div *ngIf="!model.data.korgobjectmain" class="slds-form-element__control slds-grid slds-box--border" [ngClass]="getFieldClass()"><div class="slds-input-has-icon slds-input-has-icon--right slds-grow slds-m-vertical--xxx-small"><system-utility-icon [icon]="\'search\'" [addclasses]="\'slds-input__icon\'"></system-utility-icon><input type="search" class="slds-lookup__search-input slds-input--bare" [(ngModel)]="objectsearchterm" (focus)="onFocus()" [placeholder]="language.getLabel(\'LBL_SEARCH\') + \' \' + language.getLabel(\'LBL_TERRITORY\')" role="combobox"></div></div></div><div *ngIf="relateSearchOpen" class="slds-lookup__menu" [ngStyle]="relateSearchStyle()"><ul class="slds-lookup__list" role="listbox"><li *ngFor="let territory of getTerritories()" role="presentation" (click)="setTerritory(territory.id)"><span class="slds-lookup__item-action slds-media" role="option"><div class="slds-media__body"><div class="slds-lookup__result-text">{{territory.name}}</div></div></span></li><li *ngIf="getTerritories().length === 0"><span class="slds-lookup__item-action slds-media" role="option"><div class="slds-media__body"><div class="slds-lookup__result-text">no territory found</div></div></span></li></ul></div></div></div>',providers:[services_1.popup],host:{}}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.popup,services_1.language,services_1.metadata,router_1.Router,core_1.ElementRef,core_1.Renderer2,services_1.territories])],e)}(exports.tfieldGeneric=tfieldGeneric);exports.SpiceTerritorriesPrimary=SpiceTerritorriesPrimary;var SpiceTerritoriesAdditional=function(c){function e(e,t,i,s,r,o,a,n,d){var l=c.call(this,e,t,s,r,o)||this;return l.model=e,l.view=t,l.popup=i,l.language=s,l.metadata=r,l.router=o,l.elementRef=a,l.renderer=n,l.territories=d,l.territorySearchOpen=!1,l.objectsearchterm="",l.showPopover=!1,l.showPopoverTimeout={},l.searchObjects=!1,l.popup.closePopup$.subscribe(function(){return l.closePopups()}),l}return __extends(e,c),e.prototype.getTerritoryName=function(e){return this.territories.getTerritoryName(this.model.module,e)},e.prototype.getTerritorryNames=function(){var e=[];if(this.model.data.korgobjectmultiple)for(var t=0,i=JSON.parse(this.model.data.korgobjectmultiple).secondary;t<i.length;t++){var s=i[t];e.push(this.getTerritoryName(s))}return e.join(", ")},e.prototype.getAdditonalTerritories=function(){var e=[];if(this.model.data.korgobjectmultiple)for(var t=0,i=JSON.parse(this.model.data.korgobjectmultiple).secondary;t<i.length;t++){var s=i[t];e.push({id:s,name:this.getTerritoryName(s)})}return e},e.prototype.getTerritories=function(){var e=[],t={primary:this.model.data.korgobjectmain,secondary:[]};if(""!==this.model.data.korgobjectmultiple)JSON.parse(this.model.data.korgobjectmultiple);for(var i=0,s=this.territories.userTerritories[this.model.module];i<s.length;i++){var r=s[i];-1===t.secondary.indexOf(r.id)&&r.id!==t.primary&&(""===this.objectsearchterm||""!==this.objectsearchterm&&-1!==r.name.toLowerCase().indexOf(this.objectsearchterm.toLowerCase()))&&e.push(r)}return e},e.prototype.addTerritory=function(e){var t={primary:this.model.data.korgobjectmain,secondary:[]};this.model.data.korgobjectmultiple&&(t=JSON.parse(this.model.data.korgobjectmultiple)),t.secondary.push(e.id),this.model.data.korgobjectmultiple=JSON.stringify(t),this.territorySearchOpen=!1},e.prototype.canRemove=function(e){return this.territories.isUserTerritory(this.model.module,e)},e.prototype.startSearch=function(){var t=this;this.searchObjects=!0,this.clickListener=this.renderer.listen("document","click",function(e){return t.onClick(e)})},e.prototype.onClick=function(e){this.elementRef.nativeElement.contains(e.target)||(this.closePopups(),this.searchObjects=!1,this.territorySearchOpen=!1)},e.prototype.closePopups=function(){this.clickListener(),this.model.data.korgobjectmain&&(this.objectsearchterm=""),this.searchObjects=!1},e.prototype.removeTerritory=function(i){var s=JSON.parse(this.model.data.korgobjectmultiple);s.secondary.some(function(e,t){if(e===i)return s.secondary.splice(t,1),!0}),this.model.data.korgobjectmultiple=JSON.stringify(s)},e.prototype.onFocus=function(){this.territorySearchOpen=!0},e.prototype.relateSearchStyle=function(){if(this.territorySearchOpen)return{width:this.elementRef.nativeElement.getBoundingClientRect().width+"px",display:"block"}},e.prototype.getPopoverStyle=function(){var e=this.elementRef.nativeElement.getBoundingClientRect(),t=this.popover.element.nativeElement.getBoundingClientRect();return{position:"fixed",top:e.top+(e.height-t.height)/2+"px",left:e.left<t.width?e.left+100+"px":e.left-t.width-15+"px",display:this.showPopover?"":"none"}},e.prototype.getPopoverSide=function(){var e=this.elementRef.nativeElement.getBoundingClientRect(),t=this.popover.element.nativeElement.getBoundingClientRect();return e.left<t.width?"right":"left"},e.prototype.onMouseOver=function(){var e=this;this.showPopoverTimeout=window.setTimeout(function(){return e.showPopover=!0},500)},e.prototype.onMouseOut=function(){this.showPopoverTimeout&&window.clearTimeout(this.showPopoverTimeout),this.showPopover=!1},__decorate([core_1.ViewChild("popover",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"popover",void 0),e=__decorate([core_1.Component({selector:"spice-territories-additional",template:'<div title="{{field}}"><p *ngIf="!isEditMode()" class="slds-text-body--regular slds-truncate slds-p-vertical--x-small slds-border--bottom"><span>{{getTerritorryNames()}}</span> <button *ngIf="isEditable()" style="float: right" class="slds-button slds-button--icon" (click)="view.setEditMode()"><system-button-icon [icon]="\'edit\'"></system-button-icon></button></p><div *ngIf="isEditable() && isEditMode()" class="slds-form-element__control" [ngClass]="getFieldClass()"><div class="slds-form-element slds-lookup"><div class="slds-form-element__control"><div class="slds-pill_container" (click)="startSearch()"><div *ngIf="searchObjects" class="slds-form-element__control slds-grid slds-box--border slds-m-bottom--xx-small" [ngClass]="getFieldClass()"><div class="slds-input-has-icon slds-input-has-icon--right slds-grow"><system-utility-icon [icon]="\'search\'" [addclasses]="\'slds-input__icon\'"></system-utility-icon><input type="search" class="slds-lookup__search-input slds-input--bare" [(ngModel)]="objectsearchterm" (focus)="onFocus()" [placeholder]="language.getLabel(\'LBL_SEARCH\') + \' \' + language.getLabel(\'LBL_TERRITORY\')" role="combobox"></div></div><span class="slds-pill slds-m-vertical--xxx-small slds-p-vertical--xx-small" *ngFor="let addTerritory of getAdditonalTerritories()"><span class="slds-icon_container slds-icon-standard-hierarchy slds-pill__icon_container"><system-icon [icon]="\'hierarchy\'" [sprite]="\'standard\'" [size]="\'small\'"></system-icon></span> <span class="slds-pill__label">{{addTerritory.name}}</span> <button *ngIf="canRemove(addTerritory.id)" class="slds-button slds-button--icon slds-pill__remove" (click)="removeTerritory(addTerritory.id)"><system-button-icon [icon]="\'close\'" (click)="removeTerritory(addTerritory.id)"></system-button-icon></button></span></div></div></div><div *ngIf="territorySearchOpen" class="slds-lookup__menu" [ngStyle]="relateSearchStyle()"><ul class="slds-lookup__list" role="listbox"><li *ngFor="let territory of getTerritories()" role="presentation" (click)="addTerritory(territory)"><span class="slds-lookup__item-action slds-media" role="option"><div class="slds-media__body"><div class="slds-lookup__result-text">{{territory.name}}</div></div></span></li><li *ngIf="getTerritories().length === 0"><span class="slds-lookup__item-action slds-media" role="option"><div class="slds-media__body"><div class="slds-lookup__result-text">no territory found</div></div></span></li></ul></div></div></div>',providers:[services_1.popup],host:{}}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.popup,services_1.language,services_1.metadata,router_1.Router,core_1.ElementRef,core_1.Renderer2,services_1.territories])],e)}(tfieldGeneric);exports.SpiceTerritoriesAdditional=SpiceTerritoriesAdditional;var AddComponentsModule=function(){function AddComponentsModule(e){this.vms=e,this.version="1.0",this.build_date="2020-03-25",this.vms.registerModule(this)}return AddComponentsModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents],declarations:[DhtmlxDiagram,SpiceTimestream,SpiceTimestreamHeader,SpiceTimestreamLabel,SpiceTimestreamItem,SpiceTerritorriesDetail,SpiceTerritorriesPrimary,SpiceTerritoriesAdditional],entryComponents:[SpiceTerritorriesDetail],exports:[DhtmlxDiagram]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],AddComponentsModule)}();exports.AddComponentsModule=AddComponentsModule;