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
"use strict";var __decorate=this&&this.__decorate||function(e,s,t,a){var i,o=arguments.length,l=o<3?s:null===a?a=Object.getOwnPropertyDescriptor(s,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,s,t,a);else for(var n=e.length-1;0<=n;n--)(i=e[n])&&(l=(o<3?i(l):3<o?i(s,t,l):i(s,t))||l);return 3<o&&l&&Object.defineProperty(s,t,l),l},__metadata=this&&this.__metadata||function(e,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,s)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),platform_browser_1=require("@angular/platform-browser"),TasksManager=function(){function TasksManager(e,s,t,a,i){this.broadcast=e,this.navigation=s,this.elementRef=t,this.model=a,this.modellist=i,this.navigation.setActiveModule("Tasks"),this.model.module="Tasks",this.modellist.setModule("Tasks")}return Object.defineProperty(TasksManager.prototype,"contentStyle",{get:function(){return{height:"calc(100vh - "+this.tasksmanagercontent.element.nativeElement.getBoundingClientRect().top+"px"}},enumerable:!0,configurable:!0}),__decorate([core_1.ViewChild("tasksmanagercontent",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],TasksManager.prototype,"tasksmanagercontent",void 0),TasksManager=__decorate([core_1.Component({template:'<div><tasks-manager-header></tasks-manager-header></div><div #tasksmanagercontent class="slds-grid" [ngStyle]="contentStyle"><tasks-manager-tasks class="slds-size--2-of-3"></tasks-manager-tasks><tasks-manager-task-details class="slds-size--1-of-3"></tasks-manager-task-details></div>'}),__metadata("design:paramtypes",[services_1.broadcast,services_1.navigation,core_1.ElementRef,services_1.model,services_1.modellist])],TasksManager)}();exports.TasksManager=TasksManager;var TasksManagerView=function(){function TasksManagerView(e,s,t,a,i){var o=this;this.broadcast=e,this.navigation=s,this.elementRef=t,this.model=a,this.modellist=i,this.modellistsubscribe={},this.focus=null,this.modellistsubscribe=this.modellist.listtype$.subscribe(function(e){return o.loadList()}),this.loadList()}return TasksManagerView.prototype.ngOnDestroy=function(){this.modellistsubscribe.unsubscribe()},TasksManagerView.prototype.loadList=function(){this.focus=null,this.modellist.sortfield="date_due",this.modellist.sortdirection="ASC",this.modellist.getListData(["name","parent_type","parent_name","parent_id","date_due","assigned_user_name","assigned_user_id","created_by","created_by_name"])},TasksManagerView.prototype.taskSelected=function(e){this.focus=e},TasksManagerView=__decorate([core_1.Component({template:'<div class="slds-grid" style="height: 100%;"><tasks-manager-tasks class="slds-size--1-of-2" (taskselected)="taskSelected($event)"></tasks-manager-tasks><tasks-manager-task-details class="slds-size--1-of-2" [focusid]="focus"></tasks-manager-task-details></div>'}),__metadata("design:paramtypes",[services_1.broadcast,services_1.navigation,core_1.ElementRef,services_1.model,services_1.modellist])],TasksManagerView)}();exports.TasksManagerView=TasksManagerView;var TasksManagerHeader=function(){function e(e,s){this.language=e,this.elementRef=s}return e=__decorate([core_1.Component({selector:"tasks-manager-header",template:'<div class="slds-page-header slds-page-header_object-home"><div class="slds-grid"><div class="slds-col slds-has-flexi-truncate"><div class="slds-media slds-no-space slds-grow"><div class="slds-media__figure"><object-icon [module]="\'Tasks\'"></object-icon></div><div class="slds-media__body"><p class="slds-text-title_caps slds-line-height_reset">{{language.getModuleName(\'Tasks\')}}</p><h1 class="slds-page-header__title slds-p-right_x-small"><div class="slds-truncate">Taskmanager</div></h1></div></div></div><div class="slds-col slds-no-flex slds-grid slds-align-top slds-p-bottom_xx-small"><div class="slds-button-group" role="group"><button class="slds-button slds-button_neutral">Own Tasks</button> <button class="slds-button slds-button_neutral">Delegated Tasks</button></div><div class="slds-m-left--small slds-checkbox_button-group"><span class="slds-button slds-checkbox_button"><input type="checkbox" id="overdue" value="overdue"> <label class="slds-checkbox_button__label" for="overdue"><span class="slds-checkbox_faux">Overdue</span></label></span> <span class="slds-button slds-checkbox_button"><input type="checkbox" id="completed" value="completed"> <label class="slds-checkbox_button__label" for="completed"><span class="slds-checkbox_faux">Completed</span></label></span></div></div></div></div>'}),__metadata("design:paramtypes",[services_1.language,core_1.ElementRef])],e)}();exports.TasksManagerHeader=TasksManagerHeader;var TasksManagerTasks=function(){function e(e,s){this.language=e,this.modellist=s,this.taskselected=new core_1.EventEmitter,this.focus=""}return e.prototype.selectTask=function(e){this.focus=e,this.taskselected.emit(e)},e.prototype.onScroll=function(e){var s=this.taskscontent.element.nativeElement;s.scrollTop+s.clientHeight+50>s.scrollHeight&&this.modellist.loadMoreList()},__decorate([core_1.ViewChild("taskscontent",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"taskscontent",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"taskselected",void 0),e=__decorate([core_1.Component({selector:"tasks-manager-tasks",template:'<div #taskscontent (scroll)="onScroll()" class="slds-scrollable--y" style="height: 100%;"><tasks-manager-task *ngFor="let task of modellist.listData.list" [task]="task" [focus]="focus" (taskselected)="selectTask($event)" [ngClass]="{\'slds-theme_shade\': focus == task.id }"></tasks-manager-task><system-spinner *ngIf="modellist.isLoading"></system-spinner></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.modellist])],e)}();exports.TasksManagerTasks=TasksManagerTasks;var TasksManagerTask=function(){function e(e,s,t,a,i){this.language=e,this.metadata=s,this.model=t,this.modelutilities=a,this.view=i,this.task={},this.focus="",this.taskselected=new core_1.EventEmitter,this.fielsetFields=[];var o=this.metadata.getComponentConfig("TasksManagerTask","Tasks");o.fieldset&&(this.fielsetFields=this.metadata.getFieldSetItems(o.fieldset))}return e.prototype.ngOnInit=function(){this.model.module="Tasks",this.model.id=this.task.id,this.model.data=this.modelutilities.backendModel2spice("Tasks",this.task)},Object.defineProperty(e.prototype,"isCompleted",{get:function(){return"Completed"==this.model.data.status},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canEdit",{get:function(){return this.model.data.acl.edit},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nameStyle",{get:function(){var e={};return this.isCompleted&&(e["text-decoration"]="line-through"),e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusClass",{get:function(){return this.model.id==this.focus?"slds-theme--shade slds-border--right":""},enumerable:!0,configurable:!0}),e.prototype.completeTask=function(){this.model.data.status="Completed",this.model.save()},e.prototype.selectTask=function(){this.taskselected.emit(this.model.id)},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"task",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"focus",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"taskselected",void 0),e=__decorate([core_1.Component({selector:"tasks-manager-task",template:'<div class="slds-p-horizontal--medium slds-p-vertical--medium slds-border--bottom" [ngClass]="focusClass"><div class="slds-grid slds-grid--align-spread" (click)="selectTask()" style="cursor: pointer;"><div class="slds-grid"><div class="slds-form-element"><span class="slds-checkbox"><input type="checkbox" [disabled]="isCompleted || !canEdit" [checked]="isCompleted" [id]="model.id" (click)="completeTask()"> <label class="slds-checkbox__label" [attr.for]="model.id"><span class="slds-checkbox_faux"></span></label></span></div><div><div class="slds-text-title_caps" [ngStyle]="nameStyle">{{model.data.name}}</div><div class="slds-grid"><ng-container *ngFor="let field of fielsetFields; let i = index;"><ng-container *ngIf="model.data[field.field]"><field-container [field]="field.field" [fieldconfig]="field.fieldconfig" [fielddisplayclass]="\'slds-truncate\'"></field-container><span *ngIf="i < fielsetFields.length - 1">&nbsp;•&nbsp;</span></ng-container></ng-container></div></div></div><div><field-container [field]="\'date_due\'" [fieldconfig]="{highlightpast: true}" [fielddisplayclass]="\'slds-truncate\'"></field-container></div></div></div>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.modelutilities,services_1.view])],e)}();exports.TasksManagerTask=TasksManagerTask;var TasksManagerTaskDetails=function(){function e(e,s,t,a,i){var o=this;this.language=e,this.elementRef=s,this.metadata=t,this.model=a,this.broadcast=i,this.focusid="",this.viewComponent=null,this.modelSubscription=null,this.model.module="Tasks",this.modelSubscription=this.broadcast.message$.subscribe(function(e){o.handleMessage(e)})}return e.prototype.handleMessage=function(e){if(e.messagedata.module===this.model.module)switch(e.messagetype){case"model.delete":break;case"model.save":this.model.id===e.messagedata.id&&(this.model.data=e.messagedata.data)}},e.prototype.ngOnChanges=function(){var s=this;this.focusid?this.viewComponent||this.metadata.addComponent("ObjectRecordDetails",this.detailscontent).subscribe(function(e){s.viewComponent=e}):this.viewComponent&&(this.viewComponent.destroy(),this.viewComponent=null),this.focusid&&this.focusid!=this.model.id&&(this.model.id=this.focusid,this.model.getData())},e.prototype.ngOnDestroy=function(){this.modelSubscription.unsubscribe()},Object.defineProperty(e.prototype,"nameStyle",{get:function(){var e={};return this.isCompleted&&(e["text-decoration"]="line-through"),e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isCompleted",{get:function(){return"Completed"==this.model.data.status},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canEdit",{get:function(){try{return this.model.data.acl.edit}catch(e){return!1}},enumerable:!0,configurable:!0}),e.prototype.completeTask=function(){this.model.data.status="Completed",this.model.save()},__decorate([core_1.ViewChild("detailscontent",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"detailscontent",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"focusid",void 0),e=__decorate([core_1.Component({selector:"tasks-manager-task-details",template:'<div class="slds-scrollable--y"><div *ngIf="focusid" class="slds-m-around--x-small slds-p-around--x-small slds-grid slds-grid_vertical-align-center"><div class="slds-form-element__control"><span class="slds-checkbox"><input type="checkbox" id="closetask" [disabled]="isCompleted || !canEdit" [checked]="isCompleted" (click)="completeTask()"> <label class="slds-checkbox__label" for="closetask"><span class="slds-checkbox_faux"></span></label></span></div><h2 class="slds-text-heading--small slds-p-left--small"><field-container [field]="\'name\'" [fielddisplayclass]="\'slds-text-heading--small\'"></field-container></h2></div><div class="slds-m-around--x-small slds-p-around--x-small" [ngClass]="{\'slds-theme--default\' : focusid}"><div #detailscontent></div></div><div *ngIf="!focusid" class="slds-align--absolute-center" style="height:100%">{{ language.getLabel(\'LBL_MAKE_SELECTION\') }}</div></div>',host:{class:"slds-theme--shade"},providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,core_1.ElementRef,services_1.metadata,services_1.model,services_1.broadcast])],e)}();exports.TasksManagerTaskDetails=TasksManagerTaskDetails;var TasksAssitantTileClose=function(){function TasksAssitantTileClose(e,s,t,a){this.model=e,this.language=s,this.helper=t,this.broadcast=a}return TasksAssitantTileClose.prototype.doAction=function(){var s=this;this.helper.confirm(this.language.getLabel("LBL_COMPLETE_TASK"),this.language.getLabel("MSG_COMPLETE_TASK")).subscribe(function(e){e&&(s.model.data.status="Completed",s.model.save(),s.broadcast.broadcastMessage("assistant.complete",{id:s.model.id,module:"Assistant",data:s.model.data}))})},TasksAssitantTileClose=__decorate([core_1.Component({selector:"tasks-assistant-tile-close",template:'<li class="slds-dropdown__item" role="presentation" (click)="doAction()"><a href="javascript:void(0);" role="menuitem"><span class="slds-truncate">{{language.getLabel(\'LBL_CLOSE\')}}</span></a></li>'}),__metadata("design:paramtypes",[services_1.model,services_1.language,services_1.helper,services_1.broadcast])],TasksAssitantTileClose)}();exports.TasksAssitantTileClose=TasksAssitantTileClose;var EmailsPopoverBody=function(){function EmailsPopoverBody(e,s,t){this.model=e,this.language=s,this.domSanitizer=t}return Object.defineProperty(EmailsPopoverBody.prototype,"emailbody",{get:function(){return this.domSanitizer.bypassSecurityTrustHtml(this.model.getFieldValue("body"))},enumerable:!0,configurable:!0}),EmailsPopoverBody=__decorate([core_1.Component({template:'<div style="height: 250px;" class="slds-scrollable--y slds-p-around--xxx-small" [innerHTML]="emailbody"></div>'}),__metadata("design:paramtypes",[services_1.model,services_1.language,platform_browser_1.DomSanitizer])],EmailsPopoverBody)}();exports.EmailsPopoverBody=EmailsPopoverBody;var ModuleActivities=function(){function ModuleActivities(e){this.vms=e,this.version="1.0",this.build_date="2019-04-09",this.vms.registerModule(this)}return ModuleActivities=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents],declarations:[TasksManager,TasksManagerView,TasksManagerHeader,TasksManagerTasks,TasksManagerTask,TasksManagerTaskDetails,TasksAssitantTileClose,EmailsPopoverBody]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleActivities)}();exports.ModuleActivities=ModuleActivities;