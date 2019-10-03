/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

/*(c) aac services 2019. All Rights reserved)*/
"use strict";var __decorate=this&&this.__decorate||function(e,s,t,i){var a,o=arguments.length,n=o<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,s,t,i);else for(var l=e.length-1;0<=l;l--)(a=e[l])&&(n=(o<3?a(n):3<o?a(s,t,n):a(s,t))||n);return 3<o&&n&&Object.defineProperty(s,t,n),n},__metadata=this&&this.__metadata||function(e,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,s)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),directives_1=require("../../directives/directives"),Home=function(){function Home(e,s,t,i){this.broadcast=e,this.navigation=s,this.metadata=t,this.userpreferences=i,this.navigation.setActiveModule("Home")}return Object.defineProperty(Home.prototype,"hasDashboardSet",{get:function(){return this.userpreferences.toUse.home_dashboardset&&0<this.userpreferences.toUse.home_dashboardset.length},enumerable:!0,configurable:!0}),Object.defineProperty(Home.prototype,"displayHomeAssistant",{get:function(){var e=!this.userpreferences.toUse.home_assistant||"hidden"==this.userpreferences.toUse.home_assistant;return 1024<window.innerWidth&&!e},enumerable:!0,configurable:!0}),Home=__decorate([core_1.Component({template:'<div *ngIf="displayHomeAssistant" class="slds-grid"><div class="slds-col slds-large-size--3-of-4 slds-medium-size--1-of-2"><ng-container *ngIf="hasDashboardSet; else homeDashboardContainer"><home-dashboardset-container></home-dashboardset-container></ng-container></div><div class="slds-col slds-large-size--1-of-4 slds-medium-size--1-of-2"><home-assistant></home-assistant></div></div><div *ngIf="!displayHomeAssistant" class="slds-grid"><div class="slds-col slds-size--1-of-1"><ng-container *ngIf="hasDashboardSet; else homeDashboardContainer"><home-dashboardset-container></home-dashboardset-container></ng-container></div></div><ng-template #homeDashboardContainer><home-dashboard></home-dashboard></ng-template>'}),__metadata("design:paramtypes",[services_1.broadcast,services_1.navigation,services_1.metadata,services_1.userpreferences])],Home)}();exports.Home=Home;var HomeAssistant=function(){function HomeAssistant(e,s,t){this.assistant=e,this.navigation=s,this.language=t,this.navigation.setActiveModule("Home"),this.assistant.initlaize()}return HomeAssistant.prototype.reload=function(){this.assistant.loadItems()},Object.defineProperty(HomeAssistant.prototype,"containerstyle",{get:function(){return{height:"calc(100vh - "+this.itemcontainer.element.nativeElement.getBoundingClientRect().top+"px)"}},enumerable:!0,configurable:!0}),Object.defineProperty(HomeAssistant.prototype,"loading",{get:function(){return this.assistant.loading},enumerable:!0,configurable:!0}),Object.defineProperty(HomeAssistant.prototype,"noActivities",{get:function(){return!this.assistant.loading&&0==this.assistant.assitantItems.length},enumerable:!0,configurable:!0}),__decorate([core_1.ViewChild("itemcontainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],HomeAssistant.prototype,"itemcontainer",void 0),HomeAssistant=__decorate([core_1.Component({selector:"home-assistant",template:'<div class="slds-grid slds-theme--default slds-grid--vertical slds-nowrap slds-border--left slds-border--right"><div class="slds-p-around--small"><div class="slds-grid slds-grid--align-spread slds-has-flexi-truncate slds-grid--vertical-align-center"><h1 class="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate">{{language.getLabel(\'LBL_ASSISTANT\')}}</h1><div class="slds-shrink-none"><home-assistant-filter></home-assistant-filter><system-utility-icon [icon]="\'refresh\'" [size]="\'xx-small\'" (click)="reload()" [title]="language.getLabel(\'LBL_REFRESH\')"></system-utility-icon></div></div></div><div tobottom class="spicecrm-scrollbar"><div *ngIf="noActivities" class="slds-align--absolute-center slds-height_full"><system-illustration-no-task></system-illustration-no-task></div><ul #itemcontainer class="slds-timeline"><li *ngFor="let item of assistant.assitantItems" class="slds-p-around--xx-small"><object-activitiytimeline-item-container [activity]="item"></object-activitiytimeline-item-container></li></ul><ul *ngIf="loading" class="slds-timeline"><li class="slds-p-around--xx-small"><object-activitiytimeline-stencil></object-activitiytimeline-stencil></li><li style="opacity: 0.8" class="slds-p-around--xx-small"><object-activitiytimeline-stencil></object-activitiytimeline-stencil></li><li style="opacity: 0.6" class="slds-p-around--xx-small"><object-activitiytimeline-stencil></object-activitiytimeline-stencil></li><li style="opacity: 0.4" class="slds-p-around--xx-small"><object-activitiytimeline-stencil></object-activitiytimeline-stencil></li><li style="opacity: 0.2" class="slds-p-around--xx-small"><object-activitiytimeline-stencil></object-activitiytimeline-stencil></li></ul></div></div>'}),__metadata("design:paramtypes",[services_1.assistant,services_1.navigation,services_1.language])],HomeAssistant)}();exports.HomeAssistant=HomeAssistant;var HomeAssistantTile=function(){function HomeAssistantTile(e,s,t,i){this.language=e,this.model=s,this.view=t,this.metadata=i,this.item={},this.tileFields=[],this.actionset="",t.isEditable=!1}return HomeAssistantTile.prototype.ngOnInit=function(){var e=this.metadata.getComponentConfig("HomeAssistantTile",this.item.module);e&&e.fieldset&&(this.tileFields=this.metadata.getFieldSetFields(e.fieldset)),e&&e.actionset&&(this.actionset=e.actionset),this.model.module=this.item.module,this.model.id=this.item.id,this.model.data=this.item.data},HomeAssistantTile.prototype.goDetail=function(){this.model.goDetail()},__decorate([core_1.Input(),__metadata("design:type",Object)],HomeAssistantTile.prototype,"item",void 0),HomeAssistantTile=__decorate([core_1.Component({selector:"home-assistant-tile",template:'<article class="slds-tile slds-media slds-p-around--x-small slds-border--bottom"><system-icon [module]="item.module" [size]="\'small\'"></system-icon><div class="slds-media__body"><div class="slds-grid slds-grid_align-spread slds-has-flexi-truncate slds-p-bottom--xx-small"><h3 class="slds-tile__title slds-truncate" modelPopOver><a href="javascript:void(0);" (click)="goDetail()">{{item.data.summary_text}}</a></h3><div class="slds-shrink-none"><object-actionset-menu [buttonsize]="\'x-small\'" [actionset]="actionset"></object-actionset-menu></div></div><div class="slds-tile__detail"><dl class="slds-list_horizontal slds-wrap"><ng-container *ngFor="let tileField of tileFields"><dt class="slds-item--label slds-text-color--weak slds-truncate">{{language.getFieldDisplayName(model.module, tileField.field)}}</dt><dd class="slds-item--detail slds-truncate"><field-container [field]="tileField.field" [fieldconfig]="tileField.fieldconfig" [fielddisplayclass]="\'slds-truncate\'"></field-container></dd></ng-container></dl></div></div></article>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.view,services_1.metadata])],HomeAssistantTile)}();exports.HomeAssistantTile=HomeAssistantTile;var HomeAssistantFilter=function(){function e(e,s,t,i,a){this.renderer=e,this.elementRef=s,this.language=t,this.metadata=i,this.assistant=a,this.isOpen=!1,this.activityObjects=["Tasks","Meetings","Calls","Opportunities","Reminders"],this.activityTypes=[],this.objectfilters=[],this.timefilter="all",this.setFromService()}return e.prototype.setFromService=function(){this.objectfilters=JSON.parse(JSON.stringify(this.assistant.assistantFilters.objectfilters)),this.timefilter=JSON.parse(JSON.stringify(this.assistant.assistantFilters.timefilter))},e.prototype.setToService=function(){this.assistant.assistantFilters.objectfilters=JSON.parse(JSON.stringify(this.objectfilters)),this.assistant.assistantFilters.timefilter=JSON.parse(JSON.stringify(this.timefilter)),this.assistant.loadItems()},e.prototype.toggleOpen=function(){var s=this;this.isOpen=!this.isOpen,this.isOpen?this.clickListener=this.renderer.listen("document","click",function(e){return s.onClick(e)}):this.clickListener&&this.clickListener()},e.prototype.onClick=function(e){this.buildTypes(),this.elementRef.nativeElement.contains(e.target)||(this.isOpen=!1,this.clickListener())},e.prototype.buildTypes=function(){this.activityTypes=[];for(var e=0,s=this.activityObjects;e<s.length;e++){var t=s[e];this.activityTypes.push({type:t,name:this.language.getModuleName(t)})}this.activityTypes.sort(function(e,s){return e.name>s.name?1:-1})},Object.defineProperty(e.prototype,"filterColorClass",{get:function(){return 0<this.assistant.assistantFilters.objectfilters.length||"all"!=this.assistant.assistantFilters.timefilter?"slds-icon-text-error":"slds-icon-text-default"},enumerable:!0,configurable:!0}),e.prototype.setFilter=function(e,s){if(e.preventDefault(),"all"==s)this.objectfilters=[];else{var t=this.objectfilters.indexOf(s);0<=t?this.objectfilters.splice(t,1):this.objectfilters.push(s)}},e.prototype.getChecked=function(e){return"all"==e?0==this.objectfilters.length:0<=this.objectfilters.indexOf(e)},e.prototype.closeDialog=function(e){this.clickListener&&this.clickListener(),e?this.setToService():this.setFromService(),this.isOpen=!1},e=__decorate([core_1.Component({selector:"home-assistant-filter",template:'<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-p-horizontal--xxx-small" [ngClass]="{\'slds-is-open\': isOpen}"><system-utility-icon [icon]="\'filterList\'" [size]="\'xx-small\'" (click)="toggleOpen()" [colorclass]="filterColorClass" [title]="language.getLabel(\'LBL_FILTER\')"></system-utility-icon><div class="slds-is-absolute slds-dropdown slds-dropdown_right slds-nubbin_top-right" style="right:-10px;top:25px;"><div class="slds-grid"><div class="slds-p-horizontal--small slds-border--right" style="min-width: 180px"><div class="slds-p-vertical--x-small">{{language.getLabel(\'LBL_TYPE\')}}</div><div class="slds-form-element slds-p-vertical--xx-small"><div class="slds-form-element__control" (click)="setFilter($event, \'all\')"><span class="slds-checkbox"><input type="checkbox" id="alltypes" [checked]="getChecked(\'all\')"> <label class="slds-checkbox__label" for="alltypes"><span class="slds-checkbox_faux"></span> <span class="slds-form-element__label">{{language.getLabel(\'LBL_ALL\')}}</span></label></span></div></div><div class="slds-form-element slds-p-vertical--xx-small" *ngFor="let activityType of activityTypes"><div class="slds-form-element__control" (click)="setFilter($event, activityType.type)"><span class="slds-checkbox"><input type="checkbox" [id]="activityType.type" [checked]="getChecked(activityType.type)"> <label class="slds-checkbox__label" [attr.for]="activityType.type"><span class="slds-checkbox_faux"></span> <span class="slds-form-element__label">{{activityType.name}}</span></label></span></div></div></div><div class="slds-p-horizontal--small" style="min-width: 180px"><div class="slds-p-vertical--x-small">{{language.getLabel(\'LBL_FILTER\')}}</div><fieldset class="slds-form-element"><div class="slds-form-element__control"><span class="slds-radio"><input type="radio" id="timeall" name="filters" value="all" [(ngModel)]="timefilter"> <label class="slds-radio__label" for="timeall"><span class="slds-radio_faux"></span> <span class="slds-form-element__label">{{language.getLabel(\'LBL_ALL\')}}</span></label></span> <span class="slds-radio"><input type="radio" id="timeoverdue" name="filters" value="overdue" [(ngModel)]="timefilter"> <label class="slds-radio__label" for="timeoverdue"><span class="slds-radio_faux"></span> <span class="slds-form-element__label">{{language.getLabel(\'LBL_OVERDUE\')}}</span></label></span> <span class="slds-radio"><input type="radio" id="timetoday" name="filters" value="today" [(ngModel)]="timefilter"> <label class="slds-radio__label" for="timetoday"><span class="slds-radio_faux"></span> <span class="slds-form-element__label">{{language.getLabel(\'LBL_TODAY\')}}</span></label></span></div></fieldset></div></div><footer class="slds-popover__footer"><div class="slds-grid"><button class="slds-col--bump-left slds-button slds-button_neutral" (click)="closeDialog(false)">{{language.getLabel(\'LBL_CANCEL\')}}</button> <button class="slds-button slds-button--brand" (click)="closeDialog(true)">{{language.getLabel(\'LBL_APPLY\')}}</button></div></footer></div></div>'}),__metadata("design:paramtypes",[core_1.Renderer2,core_1.ElementRef,services_1.language,services_1.metadata,services_1.assistant])],e)}();exports.HomeAssistantFilter=HomeAssistantFilter;var HomeDashboard=function(){function HomeDashboard(e,s,t,i){var a=this;this.broadcast=e,this.metadata=s,this.language=t,this.userpreferences=i,this.componentSubscriptions=[],this.dashboardid="",this.dashboardcontainercomponent=void 0,this.componentSubscriptions.push(this.broadcast.message$.subscribe(function(e){a.handleMessage(e)})),this.loadDashboardConfig()}return HomeDashboard.prototype.handleMessage=function(e){switch(e.messagetype){case"applauncher.setrole":this.loadDashboardConfig()}},HomeDashboard.prototype.loadDashboardConfig=function(){var e=this.userpreferences.toUse.home_dashboard||void 0,s=this.metadata.getActiveRole();this.dashboardid=e||s.default_dashboard||"",this.dashboardcontainercomponent&&(this.dashboardcontainercomponent.instance.dashboardid=this.dashboardid)},HomeDashboard.prototype.ngAfterViewInit=function(){var s=this;this.metadata.addComponent("DashboardContainer",this.dashboardcontainer).subscribe(function(e){e.instance.dashboardid=s.dashboardid,e.instance.context="Home",s.dashboardcontainercomponent=e})},HomeDashboard.prototype.ngOnDestroy=function(){for(var e=0,s=this.componentSubscriptions;e<s.length;e++){s[e].unsubscribe()}},__decorate([core_1.ViewChild("dashboardcontainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],HomeDashboard.prototype,"dashboardcontainer",void 0),HomeDashboard=__decorate([core_1.Component({selector:"home-dashboard",template:'<div class="slds-theme--shade"><div #dashboardcontainer></div></div>'}),__metadata("design:paramtypes",[services_1.broadcast,services_1.metadata,services_1.language,services_1.userpreferences])],HomeDashboard)}();exports.HomeDashboard=HomeDashboard;var HomeDashboardSetContainer=function(){function e(e,s,t,i,a,o,n,l){var r=this;this.broadcast=e,this.metadata=s,this.language=t,this.renderer=i,this.navigation=a,this.backend=o,this.elementRef=n,this.userpreferences=l,this.componentSubscriptions=[],this.dashboardid="",this.dashboardcontainercomponent=void 0,this.dashboardsList=[],this.moreDashboardsList=[],this.isLoading=!1,this.componentSubscriptions.push(this.broadcast.message$.subscribe(function(e){r.handleMessage(e)})),this.loadDashboardConfig()}return e.prototype.ngOnInit=function(){this.setNavigationHasSubTabValue("Home")},e.prototype.ngOnDestroy=function(){for(var e=0,s=this.componentSubscriptions;e<s.length;e++){s[e].unsubscribe()}this.resetView(),this.resizeListener&&this.resizeListener(),this.setNavigationHasSubTabValue(void 0)},e.prototype.ngAfterViewInit=function(){this.loadDashboards()},e.prototype.setNavigationHasSubTabValue=function(e){this.navigation.hasSubTabs=e},e.prototype.loadDashboards=function(){var s=this;this.isLoading=!0,this.loadDashboardSetDashboards().subscribe(function(e){s.isLoading=!1,s.dashboardsList=_.toArray(e),s.renderView(),window.setTimeout(function(){return s.handleOverflow()})}),this.resizeListener=this.renderer.listen("window","resize",function(e){return s.handleOverflow()})},e.prototype.handleMessage=function(e){switch(e.messagetype){case"applauncher.setrole":this.loadDashboardConfig()}},e.prototype.loadDashboardConfig=function(){var e=this.userpreferences.toUse.home_dashboard||void 0,s=this.metadata.getActiveRole();this.dashboardid=e||s.default_dashboard||"",this.dashboardcontainercomponent&&(this.dashboardcontainercomponent.instance.dashboardid=this.dashboardid)},e.prototype.renderView=function(){var s=this;this.resetView(),this.metadata.addComponent("DashboardContainer",this.allDashboardsContainer).subscribe(function(e){e.instance.dashboardid=s.dashboardid,e.instance.context="Home",s.dashboardcontainercomponent=e})},e.prototype.resetView=function(){this.dashboardcontainercomponent&&(this.dashboardcontainercomponent.destroy(),this.dashboardcontainercomponent=void 0)},e.prototype.loadDashboardSetDashboards=function(){var e=this.userpreferences.toUse.home_dashboardset,s={limit:-1,modulefilter:this.metadata.getComponentConfig("HomeDashboardSetContainer","Home").moduleFilter,sort:{sortfield:"dashboardsets_dashboard_sequence",sortdirection:"ASC"}};return this.backend.getRequest("module/DashboardSets/"+e+"/related/dashboards",s)},e.prototype.setActiveDashboard=function(e){this.dashboardid=e,this.renderView()},e.prototype.handleOverflow=function(){var i=this;this.moreDashboardsList=[],this.maintabs.forEach(function(e){e.element.nativeElement.classList.remove("slds-hide"),e.element.nativeElement.classList.add("slds-hidden")}),this.moretab.element.nativeElement.classList.add("slds-hidden"),this.moretab.element.nativeElement.classList.remove("slds-hide");var a=this.elementRef.nativeElement.getBoundingClientRect().width,o=this.moretab.element.nativeElement.getBoundingClientRect().width,n=!1,l=0;this.maintabs.forEach(function(e,s){var t=e.element.nativeElement.getBoundingClientRect().width;a-o<(l+=t)&&(n||s+1<i.maintabs.length||o<t)&&(e.element.nativeElement.classList.add("slds-hide"),i.moreDashboardsList.push(e.element.nativeElement.attributes.getNamedItem("data-dashboard").value),n=!0),e.element.nativeElement.classList.remove("slds-hidden")}),n?(this.moretab.element.nativeElement.classList.remove("slds-hidden"),this.moretabs.forEach(function(e){0<=i.moreDashboardsList.indexOf(e.element.nativeElement.attributes.getNamedItem("data-dashboard").value)?e.element.nativeElement.classList.remove("slds-hide"):e.element.nativeElement.classList.add("slds-hide")})):(this.moretab.element.nativeElement.classList.remove("slds-hidden"),this.moretab.element.nativeElement.classList.add("slds-hide"))},__decorate([core_1.ViewChild("allDashboardsContainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"allDashboardsContainer",void 0),__decorate([core_1.ViewChildren("maintabs",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.QueryList)],e.prototype,"maintabs",void 0),__decorate([core_1.ViewChildren("moretabs",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.QueryList)],e.prototype,"moretabs",void 0),__decorate([core_1.ViewChild("moretab",{read:core_1.ViewContainerRef,static:!1}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"moretab",void 0),e=__decorate([core_1.Component({selector:"home-dashboardset-container",template:'<div class="slds-show" role="tabpanel"><div class="slds-tabs_default slds-sub-tabs"><ul class="slds-tabs_default__nav" role="tablist"><li #maintabs *ngFor="let dashboard of dashboardsList" [attr.data-dashboard]="dashboard.name" [class.slds-active]="dashboard.id == dashboardid" (click)="setActiveDashboard(dashboard.id)" class="slds-tabs_default__item slds-sub-tabs__item slds-grid slds-grid_vertical-align-center" role="presentation"><a class="slds-tabs_default__link slds-p-horizontal_xx-small" href="javascript:void(0);" role="tab" tabindex="0" [title]="dashboard.name"><span class="slds-truncate">{{dashboard.name}}</span></a></li><ng-container *ngIf="isLoading"><li class="slds-p-around--xx-small" style="line-height: 2rem"><system-stencil></system-stencil></li><li class="slds-p-vertical--xx-small slds-p-right--xx-small" style="line-height: 2rem"><system-stencil></system-stencil></li><li class="slds-p-vertical--xx-small slds-p-right--xx-small" style="line-height: 2rem"><system-stencil></system-stencil></li><li class="slds-p-vertical--xx-small" style="line-height: 2rem"><system-stencil></system-stencil></li></ng-container><li #moretab class="slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--hover slds-hidden" aria-haspopup="true"><a href="javascript:void(0);" class="slds-context-bar__label-action slds-tabs--default__link"><span class="slds-truncate">{{language.getLabel(\'LBL_MORE\')}}</span> <button class="slds-button slds-button--icon slds-context-bar__button"><system-utility-icon class="slds-p-horizontal--xx-small" icon="down" size="x-small"></system-utility-icon></button></a><div class="slds-dropdown slds-dropdown--right"><ul class="slds-dropdown__list" role="menu"><li #moretabs *ngFor="let dashboard of dashboardsList" [attr.data-dashboard]="dashboard.name" [class.slds-active]="dashboard.id == dashboardid" (click)="setActiveDashboard(dashboard.id)" [title]="dashboard.name" class="slds-tabs_default__item slds-sub-tabs__item" role="presentation"><a href="javascript:void(0);" class="slds-tabs_default__link slds-p-horizontal_xx-small" role="menuitem" [title]="dashboard.name"><span class="slds-truncate">{{dashboard.name}}</span></a></li></ul></div></li></ul><div class="slds-tabs_default__content slds-p-around--none" role="tabpanel"><div #allDashboardsContainer></div></div></div></div>'}),__metadata("design:paramtypes",[services_1.broadcast,services_1.metadata,services_1.language,core_1.Renderer2,services_1.navigation,services_1.backend,core_1.ElementRef,services_1.userpreferences])],e)}();exports.HomeDashboardSetContainer=HomeDashboardSetContainer;var ModuleHome=function(){function ModuleHome(e){this.vms=e,this.version="1.0",this.build_date="2019-10-03",this.vms.registerModule(this)}return ModuleHome=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[Home,HomeAssistant,HomeAssistantTile,HomeAssistantFilter,HomeDashboard,HomeDashboardSetContainer]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleHome)}();exports.ModuleHome=ModuleHome;