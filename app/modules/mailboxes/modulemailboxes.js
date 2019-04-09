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
"use strict";var __decorate=this&&this.__decorate||function(e,t,i,s){var a,l=arguments.length,o=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;0<=n;n--)(a=e[n])&&(o=(l<3?a(o):3<l?a(t,i,o):a(t,i))||o);return 3<l&&o&&Object.defineProperty(t,i,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),directives_1=require("../../directives/directives"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),objectfields_1=require("../../objectfields/objectfields"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),rxjs_1=require("rxjs"),router_1=require("@angular/router"),platform_browser_1=require("@angular/platform-browser"),mailboxesEmails=function(){function e(e,t){this.backend=e,this.modelutilities=t,this.mailboxesLoaded$=new core_1.EventEmitter,this.limit=30,this.mailboxes=[],this.emails=[],this.activeEmail$=new core_1.EventEmitter,this.unreadonly=!0,this.openonly=!0,this.isLoading=!1,this.emailopenness="",this.allLoaded=!1,this.getMailboxes()}return Object.defineProperty(e.prototype,"activeEmail",{get:function(){return this._activeEmail},set:function(e){this._activeEmail=e,this.activeEmail$.emit(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeMailBox",{get:function(){return this._activeMailBox},set:function(e){this._activeMailBox=e,this.allLoaded=!1},enumerable:!0,configurable:!0}),e.prototype.getMailboxes=function(){var a=this;this.backend.getRequest("mailboxes/getmailboxes",{scope:"inbound"}).subscribe(function(e){for(var t=0,i=e;t<i.length;t++){var s=i[t];a.mailboxes.push({actionset:s.actionset,id:s.value,name:s.display})}a.mailboxesLoaded$.emit(!0)})},e.prototype.fetchEmails=function(){var t=this,i=new rxjs_1.Subject;this.backend.getRequest("/modules/Mailboxes/"+this.activeMailBox.id+"/fetchemails").subscribe(function(e){0<e.new_mail_count&&t.loadMails(),i.next(e),i.complete()})},e.prototype.loadMails=function(){var t=this;if(!this.activeMailBox)return!1;this.activeEmail=void 0,this.emails=[];var e=[{field:"mailbox_id",operator:"=",value:this.activeMailBox.id},{field:"type",value:"inbound",operator:"="}];this.emailopenness&&e.push({field:"openness",value:this.emailopenness,operator:"="}),this.unreadonly&&e.push({field:"status",value:"unread",operator:"="});var i={fields:JSON.stringify(["name","id","from_addr_name","date_sent","status","openness","sentiment","magnitude"]),searchfields:JSON.stringify({conditions:e,join:"and"}),sortdirection:"DESC",sortfield:"date_sent"};this.isLoading=!0,this.backend.getRequest("module/Emails",i).subscribe(function(e){t.emails=e.list,t.isLoading=!1})},e.prototype.loadMore=function(){var a=this;this.isLoading=!0;var e={};e=this.unreadonly?{fields:JSON.stringify(["name","id","from_addr_name","date_sent","status","openness","sentiment","magnitude"]),limit:this.limit,offset:this.emails.length,searchfields:JSON.stringify({conditions:[{field:"mailbox_id",operator:"=",value:this.activeMailBox.id},{field:"status",value:"user_closed",operator:"!="},{field:"type",value:"inbound",operator:"="}],join:"and"}),sortdirection:"DESC",sortfield:"date_sent"}:{fields:JSON.stringify(["name","id","from_addr_name","date_sent","status","openness"]),limit:this.limit,offset:this.emails.length,searchfields:JSON.stringify({conditions:[{field:"mailbox_id",value:this.activeMailBox.id,operator:"="},{field:"type",value:"inbound",operator:"="}],join:"and"}),sortdirection:"DESC",sortfield:"date_sent"},this.backend.getRequest("module/Emails",e).subscribe(function(e){if(0<e.list.length)for(var t=0,i=e.list;t<i.length;t++){var s=i[t];a.emails.push(s)}else a.allLoaded=!0;a.isLoading=!1})},__decorate([core_1.Output("mailboxesLoaded"),__metadata("design:type",core_1.EventEmitter)],e.prototype,"mailboxesLoaded$",void 0),e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[services_1.backend,services_1.modelutilities])],e)}();exports.mailboxesEmails=mailboxesEmails;var MailboxManager=function(){function MailboxManager(e,t,i,s){this.navigation=e,this.backend=t,this.language=i,this.mailboxesEmails=s,this.email={},this.start=0,this.limit=25,this.emailList=[],this.navigation.setActiveModule("Mailboxes")}return __decorate([core_1.ViewChild("mailboxdetail",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],MailboxManager.prototype,"mailboxdetail",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MailboxManager.prototype,"email",void 0),MailboxManager=__decorate([core_1.Component({providers:[mailboxesEmails],selector:"mailbox-manager",template:'<mailbox-manager-header></mailbox-manager-header><div class="slds-grid"><mailbox-manager-emails class="slds-size--2-of-5"></mailbox-manager-emails><mailbox-manager-email-details class="slds-size--3-of-5"></mailbox-manager-email-details></div>'}),__metadata("design:paramtypes",[services_1.navigation,services_1.backend,services_1.language,mailboxesEmails])],MailboxManager)}();exports.MailboxManager=MailboxManager;var MailboxManagerHeader=function(){function MailboxManagerHeader(e,t,i,s){this.activatedRoute=e,this.language=t,this.mailboxesEmails=i,this.metadata=s;var a=this.metadata.getComponentConfig("MailboxManagerHeader");this.emailopenness=a.selectionstatus?a.selectionstatus:"",this.mailboxesEmails.unreadonly=!!a.unreadonly&&a.unreadonly}return Object.defineProperty(MailboxManagerHeader.prototype,"emailopenness",{get:function(){return""==this.mailboxesEmails.emailopenness?"all":this.mailboxesEmails.emailopenness},set:function(e){this.mailboxesEmails.emailopenness="all"==e?"":e,this.mailboxesEmails.loadMails()},enumerable:!0,configurable:!0}),Object.defineProperty(MailboxManagerHeader.prototype,"buttonenabled",{get:function(){return!(!this.mailboxesEmails.activeMailBox||this.mailboxesEmails.isLoading)},enumerable:!0,configurable:!0}),MailboxManagerHeader.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(e){t.mailboxselection=e.id,t.mailboxesEmails.mailboxesLoaded$.subscribe(function(e){!0===e&&t.selectMailbox()})})},MailboxManagerHeader.prototype.selectMailbox=function(){this.mailboxesEmails.activeMailBox={};for(var e=0,t=this.mailboxesEmails.mailboxes;e<t.length;e++){var i=t[e];i.id===this.mailboxselection&&(this.mailboxesEmails.activeMailBox=i)}this.mailboxesEmails.loadMails()},MailboxManagerHeader.prototype.reloadList=function(){this.mailboxesEmails.loadMails()},MailboxManagerHeader.prototype.fetchEmails=function(){this.mailboxesEmails.fetchEmails()},MailboxManagerHeader=__decorate([core_1.Component({selector:"mailbox-manager-header",template:'<div class="slds-grid slds-form--inline slds-p-around--small slds-border--bottom"><div class="slds-grid slds-grid--vertical-align-center"><div class="slds-form-element__control"><select class="slds-select" [(ngModel)]="mailboxselection" (change)="selectMailbox()" style="min-width: 250px;" [disabled]="mailboxesEmails.mailboxes.length==0"><option *ngFor="let mailbox of mailboxesEmails.mailboxes" value="{{mailbox.id}}">{{mailbox.name}}</option></select></div><div class="slds-form-element__control slds-p-left--small"><span class="slds-checkbox"><input type="checkbox" [disabled]="refreshDisabled" name="options" id="unread_only" value="1" [(ngModel)]="mailboxesEmails.unreadonly" (change)="reloadList()"> <label class="slds-checkbox__label" for="unread_only"><span class="slds-checkbox_faux"></span> <span class="slds-form-element__label">{{language.getLabel(\'LBL_UNREAD_ONLY\', \'EmailTemplates\')}}</span></label></span></div><div class="slds-form-element__control"><select class="slds-select" [(ngModel)]="emailopenness"><option value="all" selected>{{language.getLabel(\'LBL_EMAILS_ALL\', \'EmailTemplates\')}}</option><option value="open">{{language.getLabel(\'LBL_EMAILS_OPEN\', \'EmailTemplates\')}}</option><option value="user_closed">{{language.getLabel(\'LBL_EMAILS_USER_CLOSED\', \'EmailTemplates\')}}</option><option value="system_closed">{{language.getLabel(\'LBL_EMAILS_SYSTEM_CLOSED\', \'EmailTemplates\')}}</option></select></div></div><div class="slds-col--bump-left"><button class="slds-button slds-button--neutral" [disabled]="!buttonenabled" (click)="reloadList()"><div class="slds-grid slds-grid--vertical-align-center"><system-button-icon [icon]="\'refresh\'"></system-button-icon><span>{{language.getLabel(\'LBL_REFRESH\')}}</span></div></button> <button class="slds-button slds-button--neutral" [disabled]="!buttonenabled" (click)="fetchEmails()"><div class="slds-grid slds-grid--vertical-align-center"><system-button-icon [icon]="\'email\'"></system-button-icon><span>{{language.getLabel(\'LBL_FETCH_EMAILS\')}}</span></div></button></div></div>'}),__metadata("design:paramtypes",[router_1.ActivatedRoute,services_1.language,mailboxesEmails,services_1.metadata])],MailboxManagerHeader)}();exports.MailboxManagerHeader=MailboxManagerHeader;var MailboxManagerEmails=function(){function e(e,t,i){this.language=e,this.mailboxesEmails=t,this.elementref=i}return Object.defineProperty(e.prototype,"containerStyle",{get:function(){return{height:"calc(100vh - "+this.elementref.nativeElement.offsetTop+"px)"}},enumerable:!0,configurable:!0}),e.prototype.onScroll=function(e){if(!1===this.mailboxesEmails.allLoaded){var t=this.elementref.nativeElement;t.scrollTop+t.clientHeight+50>t.scrollHeight&&!this.mailboxesEmails.isLoading&&this.mailboxesEmails.loadMore()}},e=__decorate([core_1.Component({selector:"mailbox-manager-emails",template:'<div class="slds-scrollable--y slds-border--right" [ngStyle]="containerStyle" (scroll)="onScroll($event)"><mailbox-manager-email *ngFor="let email of mailboxesEmails.emails" [email]="email"></mailbox-manager-email><div *ngIf="mailboxesEmails.isLoading" class="slds-p-around--medium"><system-spinner></system-spinner></div></div>'}),__metadata("design:paramtypes",[services_1.language,mailboxesEmails,core_1.ElementRef])],e)}();exports.MailboxManagerEmails=MailboxManagerEmails;var MailboxManagerEmail=function(){function MailboxManagerEmail(e,t,i,s,a,l,o){this.metadata=e,this.language=t,this.mailboxesEmails=i,this.elementref=s,this.view=a,this.model=l,this.modelutilities=o,this.email={},this.componentFields=[],this.view.displayLinks=!1}return MailboxManagerEmail.prototype.ngOnInit=function(){this.model.module="Emails",this.model.id=this.email.id,this.model.data=this.modelutilities.backendModel2spice("Emails",this.email);var e=this.metadata.getComponentConfig("MailboxManagerEmail").fieldset;e&&(this.componentFields=this.metadata.getFieldSetItems(e))},MailboxManagerEmail.prototype.selectMail=function(e){this.mailboxesEmails.activeEmail&&e.id==this.mailboxesEmails.activeEmail.id||(this.mailboxesEmails.activeEmail=e)},Object.defineProperty(MailboxManagerEmail.prototype,"isSelected",{get:function(){return this.mailboxesEmails.activeEmail&&this.mailboxesEmails.activeEmail.id==this.model.id},enumerable:!0,configurable:!0}),Object.defineProperty(MailboxManagerEmail.prototype,"nameStyle",{get:function(){var e={};switch("unread"===this.email.status&&(e["font-weight"]="bold"),this.email.openness){case"user_closed":case"system_closed":e["text-decoration"]="line-through"}return e},enumerable:!0,configurable:!0}),__decorate([core_1.Input(),__metadata("design:type",Object)],MailboxManagerEmail.prototype,"email",void 0),MailboxManagerEmail=__decorate([core_1.Component({providers:[services_1.model,services_1.view],selector:"mailbox-manager-email",template:'<div class="slds-p-horizontal--small slds-p-vertical--small slds-border--bottom" (click)="selectMail(email)" style="cursor: pointer;" [ngClass]="{\'slds-theme_default\': isSelected}"><div class="slds-grid slds-grid--vertical-align-center"><div>{{email.sentiment}}/{{email.magnitude}}</div><div class="slds-text-title_caps slds-truncate" [ngStyle]="nameStyle">{{email.name}}</div><div class="slds-col--bump-left slds-p-left--xx-small"><field-container field="date_sent" fielddisplayclass="slds-truncate"></field-container></div></div><div *ngIf="componentFields.length > 0"><div class="slds-grid slds-grid--vertical-align-center" *ngFor="let componentField of componentFields"><field-label class="slds-truncate" [fieldname]="componentField.field" [fieldconfig]="componentField.fieldconfig"></field-label><field-container class="slds-col--bump-left slds-truncate" [field]="componentField.field" [fieldconfig]="componentField.fieldconfig" [fielddisplayclass]="\'slds-truncate\'"></field-container></div></div></div>'}),__metadata("design:paramtypes",[services_1.metadata,services_1.language,mailboxesEmails,core_1.ElementRef,services_1.view,services_1.model,services_1.modelutilities])],MailboxManagerEmail)}();exports.MailboxManagerEmail=MailboxManagerEmail;var MailboxmanagerEmailDetails=function(){function e(e,t,i,s,a,l,o,n){var r=this;this.language=e,this.metadata=t,this.model=i,this.sanitizer=s,this.mailboxesEmails=a,this.elementref=l,this.backend=o,this.toast=n,this.containerComponents=[],this.model.module="Emails",a.activeEmail$.subscribe(function(e){r.loadEmail(e)})}return Object.defineProperty(e.prototype,"containerStyle",{get:function(){return{height:"calc(100vh - "+this.elementref.nativeElement.offsetTop+"px)"}},enumerable:!0,configurable:!0}),e.prototype.loadEmail=function(e){var t=this;this.model.initialize(),e?(this.model.id=e.id,this.buildContainer(),this.model.getData(!1,"").subscribe(function(e){"unread"==t.model.getFieldValue("status")&&t.setStatus("read")})):this.model.id=void 0},e.prototype.ngAfterViewInit=function(){},e.prototype.destroyContainer=function(){for(var e=0,t=this.containerComponents;e<t.length;e++){t[e].destroy()}this.containerComponents=[]},e.prototype.handleAction=function(e){switch(e){case"save":this.buildContainer()}},e.prototype.buildContainer=function(){var i=this;this.destroyContainer();for(var e=this.metadata.getComponentConfig("MailboxmanagerEmailDetails",this.model.module).componentset,t=function(t){s.metadata.addComponent(t.component,s.detailscontent).subscribe(function(e){e.instance.componentconfig=t.componentconfig?t.componentconfig:{},i.containerComponents.push(e)})},s=this,a=0,l=this.metadata.getComponentSetObjects(e);a<l.length;a++){t(l[a])}},Object.defineProperty(e.prototype,"sanitizedEmailHtml",{get:function(){return this.sanitizer.bypassSecurityTrustHtml(this.model.data.body)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nameStyle",{get:function(){var e={};return this.isCompleted&&(e["text-decoration"]="line-through"),e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isUserClosed",{get:function(){return"user_closed"==this.model.getField("openness")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRead",{get:function(){return"read"==this.model.getField("status")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isCompleted",{get:function(){return"user_closed"===this.model.data.emailopenness},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"actionSet",{get:function(){return this.mailboxesEmails.activeMailBox.actionset?this.mailboxesEmails.activeMailBox.actionset:""},enumerable:!0,configurable:!0}),e.prototype.completeMail=function(){this.setOpenness("user_closed")},e.prototype.markUnread=function(){this.setStatus("unread")},e.prototype.reopen=function(){this.setOpenness("open")},e.prototype.setStatus=function(t){var i=this;this.model.setField("status",t),this.backend.postRequest("/module/Emails/"+this.model.id+"/setstatus/"+t).subscribe(function(e){i.mailboxesEmails.activeEmail.status=t},function(e){i.toast.sendAlert("Cannot change status to "+t)})},e.prototype.setOpenness=function(t){var i=this;this.model.setField("openness",t),this.backend.postRequest("/module/Emails/"+this.model.id+"/setopenness/"+t).subscribe(function(e){i.mailboxesEmails.activeEmail.openness=t},function(e){i.toast.sendAlert("Cannot change openness to "+t)})},__decorate([core_1.ViewChild("detailscontent",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"detailscontent",void 0),e=__decorate([core_1.Component({providers:[services_1.model,services_1.view],selector:"mailbox-manager-email-details",template:'<div [ngStyle]="containerStyle" class="slds-theme--shade slds-scrollable--y"><div [ngClass]="{\'slds-hide\': !model.id}"><div class="slds-page-header" *ngIf="model.id"><div class="slds-grid"><div class="slds-col slds-has-flexi-truncate"><div class="slds-media slds-no-space slds-grow"><object-icon [module]="model.module"></object-icon><div class="slds-media__body"><div class="slds-text-title--caps slds-line-height--reset slds-grid"><field-container field="date_sent" fielddisplayclass="slds-truncate"></field-container><div class="slds-p-horizontal--small">•</div><field-container field="status" fielddisplayclass="slds-truncate"></field-container></div><h1 class="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate"><field-container field="name" fielddisplayclass="slds-truncate"></field-container></h1></div></div></div><object-action-container [actionset]="actionSet" (actionemitter)="handleAction($event)"></object-action-container><div class="slds-p-left--small"><button class="slds-button slds-button--neutral" *ngIf="!isUserClosed" (click)="completeMail()">{{language.getLabel(\'LBL_MARK_USER_CLOSED\')}}</button> <button class="slds-button slds-button--neutral" *ngIf="isRead" (click)="markUnread()">{{language.getLabel(\'LBL_MARK_UNREAD\')}}</button> <button class="slds-button slds-button--neutral" *ngIf="isUserClosed" (click)="reopen()">{{language.getLabel(\'LBL_REOPEN\')}}</button></div></div></div><div class="slds-m-around--x-small slds-p-around--x-small slds-theme--default"><div #detailscontent></div></div></div><div *ngIf="!model.id" class="slds-align--absolute-center" style="height:100%">Please select an Email</div></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,platform_browser_1.DomSanitizer,mailboxesEmails,core_1.ElementRef,services_1.backend,services_1.toast])],e)}();exports.MailboxmanagerEmailDetails=MailboxmanagerEmailDetails;var MailboxEmailToLeadButton=function(){function MailboxEmailToLeadButton(e,t,i,s,a){this.language=e,this.metadata=t,this.model=i,this.modal=s,this.toast=a}return MailboxEmailToLeadButton.prototype.execute=function(){var t=this;this.modal.openModal("MailboxEmailToLeadModal").subscribe(function(e){e.instance.email=t.model})},MailboxEmailToLeadButton=__decorate([core_1.Component({selector:"mailbox-email-to-lead-emailbutton",template:"<span>{{language.getLabel('Leads', 'LBL_NEW_FORM_TITLE')}}</span>"}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.modal,services_1.toast])],MailboxEmailToLeadButton)}();exports.MailboxEmailToLeadButton=MailboxEmailToLeadButton;var MailboxEmailToLeadModal=function(){function MailboxEmailToLeadModal(e,t,i,s){this.language=e,this.metadata=t,this.view=i,this.model=s,this.email=null,this.self=null,this.componentRefs=[],this.leadFields=["first_name","last_name","department","account_name","phone_mobile","phone_work","email1","primary_address_street","primary_address_city","primary_address_postalcode","primary_address_country","description"],this.model.module="Leads"}return MailboxEmailToLeadModal.prototype.ngOnInit=function(){this.model.initializeModel(this.email),this.view.isEditable=!0,this.view.setEditMode()},MailboxEmailToLeadModal.prototype.ngAfterViewInit=function(){this.buildContainer()},MailboxEmailToLeadModal.prototype.closeModal=function(){this.self.destroy()},MailboxEmailToLeadModal.prototype.buildContainer=function(){for(var i=this,e=0,t=this.componentRefs;e<t.length;e++){t[e].destroy()}this.componentRefs=[];for(var s=this.metadata.getComponentConfig("ObjectRecordDetails",this.model.module),a=function(t){l.metadata.addComponent(t.component,l.detailcontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig,i.componentRefs.push(e)})},l=this,o=0,n=this.metadata.getComponentSetObjects(s.componentset);o<n.length;o++){a(n[o])}},MailboxEmailToLeadModal.prototype.setField=function(e){this.model.data[e.field]=e.value},MailboxEmailToLeadModal.prototype.saveLead=function(){var t=this;this.model.save().subscribe(function(e){t.closeModal()})},__decorate([core_1.ViewChild("detailcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],MailboxEmailToLeadModal.prototype,"detailcontainer",void 0),MailboxEmailToLeadModal=__decorate([core_1.Component({providers:[services_1.model,services_1.view],template:'<system-modal size="large"><system-modal-header (close)="closeModal()">{{language.getLabel(\'Leads\', \'LBL_NEW_FORM_TITLE\')}}</system-modal-header><system-modal-content><div class="slds-grid" style="height: 70vh;"><div class="slds-size--1-of-2 slds-p-around--small" style="height: 100%;"><mailbox-email-to-lead-emailtext [emailmodule]="model.module" [emailtext]="email.data.description" [emailhtml]="email.data.body" [emailfields]="leadFields" (setfield)="setField($event)"></mailbox-email-to-lead-emailtext></div><div class="slds-size--1-of-2 slds-scrollable" style="height: 100%;"><div #detailcontainer></div></div></div></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="closeModal()">{{language.getLabel(\'LBL_CANCEL\')}}</button> <button class="slds-button slds-button--brand" (click)="saveLead()">{{language.getLabel(\'LBL_SAVE\')}}</button></system-modal-footer></system-modal>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.view,services_1.model])],MailboxEmailToLeadModal)}();exports.MailboxEmailToLeadModal=MailboxEmailToLeadModal;var MailboxEmailToLeadEmailText=function(){function e(e,t,i){this.elementRef=e,this.renderer=t,this.language=i,this.emailtext="",this.emailhtml="",this.emailmodule="",this.emailfields=["first_name","last_name"],this.setfield=new core_1.EventEmitter,this.clickListener=null,this.displayContextMenu=!1,this.displayContextCoordinates={top:0,left:0}}return Object.defineProperty(e.prototype,"content",{get:function(){return this.emailhtml?this.emailhtml:this.emailtext},enumerable:!0,configurable:!0}),e.prototype.ngOnDestroy=function(){this.clickListener&&this.clickListener()},e.prototype.showContextMenu=function(e){var t=this;this.selectedText&&(e.preventDefault(),this.displayContextMenu=!0,this.displayContextCoordinates.top=e.clientY,this.displayContextCoordinates.left=e.clientX,this.clickListener=this.renderer.listen("document","click",function(e){return t.onClick(e)}))},Object.defineProperty(e.prototype,"selectedText",{get:function(){var e=window.getSelection().toString();return e?e.trim():""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contextMenuStyle",{get:function(){var e=this.elementRef.nativeElement.getBoundingClientRect();return{left:this.displayContextCoordinates.left-e.left+"px",top:this.displayContextCoordinates.top-e.top+"px"}},enumerable:!0,configurable:!0}),e.prototype.onClick=function(e){this.contextMenu.element.nativeElement.contains(e.target)||(this.displayContextMenu=!1,this.clickListener&&(this.clickListener(),this.clickListener=null))},e.prototype.setField=function(e){this.displayContextMenu=!1,this.clickListener&&(this.clickListener(),this.clickListener=null),this.setfield.emit({field:e,value:this.selectedText})},__decorate([core_1.ViewChild("contextMenu",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"contextMenu",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"emailtext",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"emailhtml",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"emailmodule",void 0),__decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"emailfields",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"setfield",void 0),e=__decorate([core_1.Component({selector:"mailbox-email-to-lead-emailtext",template:'<div class="slds-form-element slds-is-relative" style="height: 100%;"><div class="slds-box slds-scrollable" style="height: 100%" [innerHTML]="content" (contextmenu)="showContextMenu($event)"></div><div #contextMenu *ngIf="displayContextMenu" [ngStyle]="contextMenuStyle" class="slds-dropdown slds-dropdown_left slds-is-absolute"><ul class="slds-dropdown__list" role="menu"><li *ngFor="let emailfield of emailfields" class="slds-dropdown__item" role="presentation"><a href="javascript:void(0);" role="menuitem" tabindex="0" (click)="setField(emailfield)"><span class="slds-truncate">{{language.getFieldDisplayName(emailmodule, emailfield)}}</span></a></li></ul></div></div>'}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer2,services_1.language])],e)}();exports.MailboxEmailToLeadEmailText=MailboxEmailToLeadEmailText;var MailboxesDashlet=function(){function MailboxesDashlet(e,t,i,s,a,l){this.language=e,this.metadata=t,this.backend=i,this.model=s,this.router=a,this.elementRef=l,this.isLoading=!0,this.mailboxes=[],this.canLoadMore=!0,this.loadLimit=20,this.getMailBoxesInterval=void 0}return Object.defineProperty(MailboxesDashlet.prototype,"tablestyle",{get:function(){return{height:"calc(98% - "+this.headercontainer.element.nativeElement.clientHeight+"px"}},enumerable:!0,configurable:!0}),MailboxesDashlet.prototype.ngOnInit=function(){this.model.module="Mailboxes",this.getMailboxes(),this.getMailBoxesInterval=this.getMailboxesInterval()},MailboxesDashlet.prototype.ngOnDestroy=function(){this.getMailBoxesInterval&&clearInterval(this.getMailBoxesInterval)},MailboxesDashlet.prototype.trackByFn=function(e,t){return t.id},MailboxesDashlet.prototype.getMailboxes=function(t){var i=this;void 0===t&&(t=!1),this.backend.getRequest("/modules/Mailboxes/dashlet").subscribe(function(e){e&&0!=e.length&&(e.map(function(e){return e.emailsread=e.emailsread-e.emailsclosed}),t?i.mailboxes.every(function(t){return e.some(function(e){if(e.id==t.id)return t.emailsread=e.emailsread,t.emailsunread=e.emailsunread,!0}),!0}):i.mailboxes=e,e.length<i.loadLimit&&(i.canLoadMore=!1),i.isLoading=!1)})},MailboxesDashlet.prototype.getMailboxesInterval=function(){var e=this;return setInterval(function(){return e.getMailboxes(!0)},6e4)},MailboxesDashlet.prototype.onScroll=function(){var e=this.tablecontainer.element.nativeElement;e.scrollTop+e.clientHeight>=e.scrollHeight&&this.loadMore()},MailboxesDashlet.prototype.goToRecord=function(e){this.router.navigate(["/module/"+this.model.module+"/"+e])},MailboxesDashlet.prototype.loadMore=function(){var t=this;this.canLoadMore&&(this.isLoading=!0,this.backend.getRequest("/modules/Mailboxes/dashlet").subscribe(function(e){t.mailboxes=t.mailboxes.concat(e),e.length<t.loadLimit&&(t.canLoadMore=!1),t.isLoading=!1}))},__decorate([core_1.ViewChild("tablecontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],MailboxesDashlet.prototype,"tablecontainer",void 0),__decorate([core_1.ViewChild("headercontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],MailboxesDashlet.prototype,"headercontainer",void 0),MailboxesDashlet=__decorate([core_1.Component({selector:"dashboard-mailboxes-dashlet",template:'<div #headercontainer class="slds-grid slds-grid--vertical-align-center slds-border--bottom slds-p-around--x-small"><system-icon [module]="\'Mailboxes\'" [size]="\'small\'"></system-icon><h2 class="slds-text-heading--medium slds-p-bottom--xx-small">Mailboxes</h2></div><div class="slds-table--header-fixed_container" style="width: 100%" [ngStyle]="tablestyle"><div #tablecontainer class="slds-scrollable--y" style="width: 100%;height:100%" (scroll)="onScroll()"><table class="slds-table slds-table_bordered slds-table_cell-buffer slds-table_header-fixed" style="border-top: 0"><thead><tr class="slds-text-title_caps"><th scope="col"><div class="slds-truncate slds-cell-fixed slds-grid slds-grid_vertical-align-center slds-p-horizontal--x-small" style="padding-left: 0">{{language.getLabel(\'LBL_NAME\')}}</div></th><th scope="col"><div class="slds-truncate slds-cell-fixed slds-grid slds-grid_vertical-align-center slds-p-horizontal--x-small">{{language.getLabel(\'LBL_UNREAD\')}}</div></th><th scope="col"><div class="slds-truncate slds-cell-fixed slds-grid slds-grid_vertical-align-center slds-p-horizontal--x-small">{{language.getLabel(\'LBL_READ\')}}</div></th></tr></thead><tbody *ngIf="!isLoading && mailboxes.length > 0"><tr *ngFor="let mailbox of mailboxes; trackBy: trackByFn" style="cursor: pointer" (click)="goToRecord(mailbox.id)"><td class="slds-truncate" style="min-width: 120px">{{mailbox.name}}</td><td class="slds-truncate" [ngClass]="mailbox.emailsunread > 0 ? \'slds-text-color--error\':\'\'" style="min-width: 100px">{{mailbox.emailsunread}}</td><td class="slds-truncate" style="min-width: 100px">{{mailbox.emailsread}}</td></tr></tbody><tbody *ngIf="isLoading" system-table-stencils [columns]="3"></tbody></table></div></div>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.backend,services_1.model,router_1.Router,core_1.ElementRef])],MailboxesDashlet)}();exports.MailboxesDashlet=MailboxesDashlet;var ModuleMailboxes=function(){function ModuleMailboxes(e){this.vms=e,this.version="1.0",this.build_date="2019-04-09",this.vms.registerModule(this)}return ModuleMailboxes=__decorate([core_1.NgModule({declarations:[MailboxManager,MailboxManagerHeader,MailboxManagerEmails,MailboxManagerEmail,MailboxmanagerEmailDetails,MailboxEmailToLeadButton,MailboxEmailToLeadModal,MailboxEmailToLeadEmailText,MailboxesDashlet],imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleMailboxes)}();exports.ModuleMailboxes=ModuleMailboxes;