/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

/** 
 * © 2015 - 2020 aac services k.s. All rights reserved.
 * release: 2020.02.001
 * date: 2020-07-30 10:06:03
 * build: 2020.02.001.1596096363749
 **/
"use strict";var __decorate=this&&this.__decorate||function(e,t,s,i){var a,l=arguments.length,o=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;0<=n;n--)(a=e[n])&&(o=(l<3?a(o):3<l?a(t,s,o):a(t,s))||o);return 3<l&&o&&Object.defineProperty(t,s,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),directives_1=require("../../directives/directives"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),objectfields_1=require("../../objectfields/objectfields"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),rxjs_1=require("rxjs"),router_1=require("@angular/router"),mailboxesEmails=function(){function e(e){this.backend=e,this.mailboxesLoaded$=new core_1.EventEmitter,this.limit=30,this.mailboxes=[],this.emails=[],this.totalcount=0,this.source="fts",this.activeMessage$=new core_1.EventEmitter,this._unreadonly=!0,this.isLoading=!1,this.emailopenness="",this.getMailboxes()}return Object.defineProperty(e.prototype,"activeMessage",{get:function(){return this._activeMessage},set:function(e){this._activeMessage=e,this.activeMessage$.emit(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeMailBox",{get:function(){return this._activeMailBox},set:function(e){this._activeMailBox=e,this.emails=[],this.totalcount=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"unreadonly",{get:function(){return this._unreadonly},set:function(e){this._unreadonly=e,this.loadMessages()},enumerable:!0,configurable:!0}),e.prototype.getMailboxes=function(){var a=this;this.backend.getRequest("mailboxes/getmailboxes",{scope:"inbound"}).subscribe(function(e){for(var t=0,s=e;t<s.length;t++){var i=s[t];a.mailboxes.push({actionset:i.actionset,id:i.value,name:i.display,type:i.type})}a.mailboxesLoaded$.emit(!0)})},e.prototype.fetchEmails=function(){var t=this,s=new rxjs_1.Subject;return this.backend.getRequest("/modules/Mailboxes/"+this.activeMailBox.id+"/fetchemails").subscribe(function(e){0<e.new_mail_count&&t.loadMessages(),s.next({status:"success",newmailcount:e.new_mail_count}),s.complete()},function(e){s.error({status:"error",error:e}),s.complete()}),s.asObservable()},e.prototype.generateFilters=function(){var e={logicaloperator:"and",groupscope:"all",conditions:[{field:"mailbox_id",filtervalue:this.activeMailBox.id,operator:"equals"}]};return"sms"==this.activeMailBox.type?e.conditions.push({field:"direction",filtervalue:"i",operator:"equals"}):(e.conditions.push({field:"type",filtervalue:"inbound",operator:"equals"}),this.emailopenness&&e.conditions.push({field:"openness",filtervalue:this.emailopenness,operator:"equals"}),this.unreadonly&&e.conditions.push({field:"status",filtervalue:"unread",operator:"equals"})),e},Object.defineProperty(e.prototype,"endpoint",{get:function(){return"sms"==this.activeMailBox.type?"module/TextMessages":"module/Emails"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"requestFields",{get:function(){return"sms"==this.activeMailBox.type?["name","id","msisdn_e164","date_sent","description"]:["name","id","from_addr_name","date_sent","status","openness","sentiment","magnitude"]},enumerable:!0,configurable:!0}),e.prototype.loadMessages=function(){var t=this;if(!this.activeMailBox||this.activeMailBox&&!this.activeMailBox.id)return!1;this.activeMessage=void 0,this.emails=[];this.activeMailBox.id;var e={filter:this.generateFilters(),sortfields:[{sortdirection:"DESC",sortfield:"date_sent"}],fields:JSON.stringify(this.requestFields),limit:this.limit};this.isLoading=!0,this.backend.getRequest(this.endpoint,e).subscribe(function(e){t.emails=e.list,t.source=e.source,t.totalcount=e.totalcount,t.isLoading=!1})},e.prototype.loadMore=function(){var t=this;if(this.isLoading||this.emails.length>=this.totalcount)return!1;this.isLoading=!0;var e={fields:JSON.stringify(this.requestFields),filter:this.generateFilters(),limit:this.limit,start:this.emails.length,sortfields:[{sortdirection:"DESC",sortfield:"date_sent"}]};this.backend.getRequest(this.endpoint,e).subscribe(function(e){0<e.list.length&&(t.emails=t.emails.concat(e.list),t.source=e.source,t.totalcount=e.totalcount),t.isLoading=!1})},__decorate([core_1.Output("mailboxesLoaded"),__metadata("design:type",core_1.EventEmitter)],e.prototype,"mailboxesLoaded$",void 0),e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[services_1.backend])],e)}();exports.mailboxesEmails=mailboxesEmails;var MailboxManager=function(){function MailboxManager(e,t){this.navigation=e,this.mailboxesEmails=t,this.navigation.setActiveModule("Mailboxes")}return Object.defineProperty(MailboxManager.prototype,"isEmailMailbox",{get:function(){return!(!this.mailboxesEmails.activeMailBox||"email"!=this.mailboxesEmails.activeMailBox.type)},enumerable:!0,configurable:!0}),MailboxManager=__decorate([core_1.Component({providers:[mailboxesEmails],selector:"mailbox-manager",template:'<mailbox-manager-header></mailbox-manager-header><div class="slds-grid"><mailbox-manager-emails *ngIf="isEmailMailbox" class="slds-size--2-of-5"></mailbox-manager-emails><mailbox-manager-textmessages *ngIf="!isEmailMailbox" class="slds-size--2-of-5"></mailbox-manager-textmessages><mailbox-manager-email-details class="slds-size--3-of-5"></mailbox-manager-email-details></div>'}),__metadata("design:paramtypes",[services_1.navigation,mailboxesEmails])],MailboxManager)}();exports.MailboxManager=MailboxManager;var MailboxManagerHeader=function(){function MailboxManagerHeader(e,t,s,i){this.activatedRoute=e,this.language=t,this.mailboxesEmails=s,this.metadata=i,this.isFetching=!1;var a=this.metadata.getComponentConfig("MailboxManagerHeader");this.emailopenness=a.selectionstatus?a.selectionstatus:"",this.mailboxesEmails.unreadonly=!!a.unreadonly&&a.unreadonly}return Object.defineProperty(MailboxManagerHeader.prototype,"emailopenness",{get:function(){return""==this.mailboxesEmails.emailopenness?"all":this.mailboxesEmails.emailopenness},set:function(e){this.mailboxesEmails.emailopenness="all"==e?"":e,this.mailboxesEmails.loadMessages()},enumerable:!0,configurable:!0}),Object.defineProperty(MailboxManagerHeader.prototype,"buttonenabled",{get:function(){return!(!this.mailboxesEmails.activeMailBox||this.mailboxesEmails.isLoading||this.isFetching)},enumerable:!0,configurable:!0}),MailboxManagerHeader.prototype.ngOnInit=function(){var s=this;this.activatedRoute.params.subscribe(function(t){s.mailbox=t.id,s.mailboxesEmails.mailboxesLoaded$.subscribe(function(e){!0===e&&(s.mailbox=t.id)})})},Object.defineProperty(MailboxManagerHeader.prototype,"mailbox",{get:function(){return this._mailbox},set:function(t){(this._mailbox=t)?(this.mailboxesEmails.activeMailBox=this.mailboxesEmails.mailboxes.find(function(e){return e.id==t}),this.mailboxesEmails.loadMessages()):this.mailboxesEmails.activeMailBox={}},enumerable:!0,configurable:!0}),MailboxManagerHeader.prototype.reloadList=function(){this.mailboxesEmails.loadMessages()},MailboxManagerHeader.prototype.fetchEmails=function(){var t=this;this.isFetching=!0,this.mailboxesEmails.fetchEmails().subscribe(function(e){t.isFetching=!1},function(e){t.isFetching=!1})},MailboxManagerHeader=__decorate([core_1.Component({selector:"mailbox-manager-header",template:'<div class="slds-grid slds-form--inline slds-p-around--small slds-border--bottom"><div class="slds-grid slds-grid--vertical-align-center"><div class="slds-form-element__control slds-p-right--xx-small"><select class="slds-select" [(ngModel)]="mailbox" style="min-width: 250px;" [disabled]="mailboxesEmails.mailboxes.length==0 || isFetching"><option *ngFor="let mailbox of mailboxesEmails.mailboxes" value="{{mailbox.id}}">{{mailbox.name}}</option></select></div><div class="slds-form-element__control slds-p-horizontal--xx-small"><system-checkbox [(ngModel)]="mailboxesEmails.unreadonly"><system-label label="LBL_UNREAD_ONLY"></system-label></system-checkbox></div><div class="slds-form-element__control slds-p-horizontal--xx-small"><select class="slds-select" [(ngModel)]="emailopenness"><option value="all"><system-label label="LBL_EMAILS_ALL"></system-label></option><option value="open"><system-label label="LBL_EMAILS_OPEN"></system-label></option><option value="user_closed"><system-label label="LBL_EMAILS_USER_CLOSED"></system-label></option><option value="system_closed"><system-label label="LBL_EMAILS_SYSTEM_CLOSED"></system-label></option></select></div><div class="slds-p-horizontal--xx-small"><ul class="slds-list_horizontal slds-has-dividers_left slds-has-block-links_space"><li class="slds-item"><span>{{mailboxesEmails.emails.length}} <system-label label="LBL_OF"></system-label> {{mailboxesEmails.totalcount}} <system-label label="LBL_ITEMS"></system-label></span></li><li class="slds-item"><system-utility-icon [icon]="mailboxesEmails.source == \'db\' ? \'database\' : \'feed\'" size="xx-small"></system-utility-icon></li></ul></div></div><div class="slds-col--bump-left slds-button-group"><button class="slds-button slds-button--neutral" [disabled]="!buttonenabled" (click)="reloadList()"><system-button-icon class="slds-button__icon--left" icon="refresh"></system-button-icon><span><system-label label="LBL_REFRESH"></system-label></span></button> <button class="slds-button slds-button--neutral" [disabled]="!buttonenabled" (click)="fetchEmails()"><system-button-icon class="slds-button__icon--left" icon="email"></system-button-icon><span><system-label label="LBL_FETCH_EMAILS"></system-label></span></button></div></div>'}),__metadata("design:paramtypes",[router_1.ActivatedRoute,services_1.language,mailboxesEmails,services_1.metadata])],MailboxManagerHeader)}();exports.MailboxManagerHeader=MailboxManagerHeader;var MailboxManagerEmails=function(){function e(e){this.mailboxesEmails=e}return e.prototype.trackbyfn=function(e,t){return t.id},e.prototype.loadmore=function(){this.mailboxesEmails.loadMore()},e=__decorate([core_1.Component({selector:"mailbox-manager-emails",template:'<div class="slds-scrollable--y slds-border--right" (system-to-bottom)="loadmore()"><mailbox-manager-email *ngFor="let email of mailboxesEmails.emails;trackBy:trackbyfn" [email]="email"></mailbox-manager-email><div *ngIf="mailboxesEmails.isLoading" class="slds-p-around--medium slds-align--absolute-center"><system-spinner></system-spinner></div></div>'}),__metadata("design:paramtypes",[mailboxesEmails])],e)}();exports.MailboxManagerEmails=MailboxManagerEmails;var MailboxManagerEmail=function(){function MailboxManagerEmail(e,t,s,i,a,l){this.metadata=e,this.language=t,this.mailboxesEmails=s,this.view=i,this.model=a,this.modelutilities=l,this.email={},this.view.displayLinks=!1,this.view.displayLabels=!1,this.fieldset=this.metadata.getComponentConfig("MailboxManagerEmail").fieldset}return MailboxManagerEmail.prototype.ngOnInit=function(){this.model.module="Emails",this.model.id=this.email.id,this.model.data=this.modelutilities.backendModel2spice("Emails",this.email)},MailboxManagerEmail.prototype.selectMail=function(e){this.mailboxesEmails.activeMessage&&e.id==this.mailboxesEmails.activeMessage.id||(this.mailboxesEmails.activeMessage=e)},Object.defineProperty(MailboxManagerEmail.prototype,"isSelected",{get:function(){return this.mailboxesEmails.activeMessage&&this.mailboxesEmails.activeMessage.id==this.model.id},enumerable:!0,configurable:!0}),Object.defineProperty(MailboxManagerEmail.prototype,"nameStyle",{get:function(){var e={};switch("unread"===this.email.status&&(e["font-weight"]="bold"),this.email.openness){case"user_closed":case"system_closed":e["text-decoration"]="line-through"}return e},enumerable:!0,configurable:!0}),__decorate([core_1.Input(),__metadata("design:type",Object)],MailboxManagerEmail.prototype,"email",void 0),MailboxManagerEmail=__decorate([core_1.Component({providers:[services_1.model,services_1.view],selector:"mailbox-manager-email",template:'<div class="slds-p-horizontal--small slds-p-vertical--small slds-border--bottom" (click)="selectMail(email)" style="cursor: pointer;" [ngClass]="{\'slds-theme_default\': isSelected}"><div class="slds-grid slds-grid--vertical-align-center"><div class="slds-text-title_caps slds-truncate" [ngStyle]="nameStyle">{{email.name}}</div><div class="slds-col--bump-left slds-p-left--xx-small"><field-container field="date_sent" fielddisplayclass="slds-truncate"></field-container></div></div><object-record-fieldset [fieldset]="fieldset" fielddisplayclass></object-record-fieldset></div>'}),__metadata("design:paramtypes",[services_1.metadata,services_1.language,mailboxesEmails,services_1.view,services_1.model,services_1.modelutilities])],MailboxManagerEmail)}();exports.MailboxManagerEmail=MailboxManagerEmail;var MailboxmanagerEmailDetails=function(){function MailboxmanagerEmailDetails(e,t,s,i,a,l,o){var n=this;this.language=e,this.metadata=t,this.model=s,this.mailboxesEmails=i,this.backend=a,this.toast=l,this.view=o,this.containerComponents=[],this.fieldset="",this.mailboxSubscription=this.mailboxesEmails.activeMessage$.subscribe(function(e){n.loadEmail(e)}),this.view.displayLabels=!1}return MailboxmanagerEmailDetails.prototype.ngOnDestroy=function(){this.mailboxSubscription.unsubscribe()},MailboxmanagerEmailDetails.prototype.loadEmail=function(e){var t=this;this.mailboxesEmails.activeMailBox&&("sms"==this.mailboxesEmails.activeMailBox.type?this.model.module="TextMessages":"email"==this.mailboxesEmails.activeMailBox.type&&(this.model.module="Emails")),this.model.initialize(),e?(this.model.id=e.id,this.buildContainer(),this.model.getData(!1,"").subscribe(function(e){"unread"==t.model.getFieldValue("status")&&t.setStatus("read")})):this.model.id=void 0},MailboxmanagerEmailDetails.prototype.destroyContainer=function(){for(var e=0,t=this.containerComponents;e<t.length;e++){t[e].destroy()}this.containerComponents=[]},MailboxmanagerEmailDetails.prototype.handleAction=function(e){switch(e){case"save":this.buildContainer()}},MailboxmanagerEmailDetails.prototype.buildContainer=function(){var s=this;this.destroyContainer();for(var e=this.metadata.getComponentConfig("MailboxmanagerEmailDetails",this.model.module),t=e.componentset,i=function(t){a.metadata.addComponent(t.component,a.detailscontent).subscribe(function(e){e.instance.componentconfig=t.componentconfig?t.componentconfig:{},s.containerComponents.push(e)})},a=this,l=0,o=this.metadata.getComponentSetObjects(t);l<o.length;l++){i(o[l])}this.fieldset=e.fieldset},Object.defineProperty(MailboxmanagerEmailDetails.prototype,"isUserClosed",{get:function(){return"user_closed"==this.model.getField("openness")},enumerable:!0,configurable:!0}),Object.defineProperty(MailboxmanagerEmailDetails.prototype,"isRead",{get:function(){return"read"==this.model.getField("status")},enumerable:!0,configurable:!0}),Object.defineProperty(MailboxmanagerEmailDetails.prototype,"actionSet",{get:function(){return this.mailboxesEmails.activeMailBox.actionset?this.mailboxesEmails.activeMailBox.actionset:""},enumerable:!0,configurable:!0}),MailboxmanagerEmailDetails.prototype.completeMail=function(){this.setOpenness("user_closed")},MailboxmanagerEmailDetails.prototype.markUnread=function(){this.setStatus("unread")},MailboxmanagerEmailDetails.prototype.reopen=function(){this.setOpenness("open")},MailboxmanagerEmailDetails.prototype.setStatus=function(t){var s=this;this.model.setField("status",t),this.backend.postRequest("/module/"+this.model.module+"/"+this.model.id+"/setstatus/"+t).subscribe(function(e){s.mailboxesEmails.activeMessage.status=t},function(e){s.toast.sendAlert("Cannot change status to "+t)})},MailboxmanagerEmailDetails.prototype.setOpenness=function(t){var s=this;this.model.setField("openness",t),this.backend.postRequest("/module/"+this.model.module+"/"+this.model.id+"/setopenness/"+t).subscribe(function(e){s.mailboxesEmails.activeMessage.openness=t},function(e){s.toast.sendAlert("Cannot change openness to "+t)})},__decorate([core_1.ViewChild("detailscontent",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],MailboxmanagerEmailDetails.prototype,"detailscontent",void 0),MailboxmanagerEmailDetails=__decorate([core_1.Component({providers:[services_1.model,services_1.view],selector:"mailbox-manager-email-details",template:'<div class="slds-theme--shade"><div [ngClass]="{\'slds-hide\': !model.id}"><div class="slds-p-around--medium slds-border--bottom" *ngIf="model.id"><div class="slds-grid"><div class="slds-col slds-has-flexi-truncate"><div class="slds-media slds-no-space slds-grow"><system-icon [module]="model.module"></system-icon><div class="slds-media__body"><ul class="slds-list_horizontal slds-has-dividers_left"><li class="slds-item"><field-container field="date_sent" fielddisplayclass="slds-truncate"></field-container></li><li class="slds-item"><field-container field="status" fielddisplayclass="slds-truncate"></field-container></li></ul><h1 class="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate"><ng-container *ngIf="!fieldset">{{model.data.summary_text}}</ng-container><object-record-fieldset-horizontal-list *ngIf="fieldset" [fieldset]="fieldset"></object-record-fieldset-horizontal-list></h1></div></div></div><object-action-container [actionset]="actionSet" (actionemitter)="handleAction($event)"></object-action-container><div class="slds-p-left--small slds-button-group"><button class="slds-button slds-button--icon slds-button_icon-border-filled" *ngIf="isRead" (click)="markUnread()" [title]="language.getLabel(\'LBL_MARK_UNREAD\')"><system-button-icon icon="email"></system-button-icon></button> <button class="slds-button slds-button--icon slds-button_icon-border-filled" *ngIf="!isUserClosed" (click)="completeMail()" [title]="language.getLabel(\'LBL_MARK_USER_CLOSED\')"><system-button-icon icon="lock"></system-button-icon></button> <button class="slds-button slds-button--icon slds-button_icon-border-filled" *ngIf="isUserClosed" (click)="reopen()" [title]="language.getLabel(\'LBL_REOPEN\')"><system-button-icon icon="unlock"></system-button-icon></button></div></div></div><div class="slds-m-around--x-small slds-p-around--x-small slds-theme--default" system-to-bottom><div #detailscontent></div></div></div><div *ngIf="!model.id" class="slds-align--absolute-center" system-to-bottom-noscroll><system-label label="LBL_SELECT_EMAIL"></system-label></div></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,mailboxesEmails,services_1.backend,services_1.toast,services_1.view])],MailboxmanagerEmailDetails)}();exports.MailboxmanagerEmailDetails=MailboxmanagerEmailDetails;var MailboxEmailToLeadButton=function(){function MailboxEmailToLeadButton(e,t,s,i,a){this.language=e,this.metadata=t,this.model=s,this.modal=i,this.toast=a}return MailboxEmailToLeadButton.prototype.execute=function(){var t=this;this.modal.openModal("MailboxEmailToLeadModal").subscribe(function(e){e.instance.email=t.model})},MailboxEmailToLeadButton=__decorate([core_1.Component({selector:"mailbox-email-to-lead-emailbutton",template:'<span><system-label label="LBL_NEW_FORM_TITLE"></system-label></span>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.modal,services_1.toast])],MailboxEmailToLeadButton)}();exports.MailboxEmailToLeadButton=MailboxEmailToLeadButton;var MailboxEmailToLeadModal=function(){function MailboxEmailToLeadModal(e,t,s,i){this.language=e,this.metadata=t,this.view=s,this.model=i,this.email=null,this.self=null,this.componentRefs=[],this.leadFields=["first_name","last_name","department","account_name","phone_mobile","phone_work","email1","primary_address_street","primary_address_city","primary_address_postalcode","primary_address_country","description"],this.model.module="Leads"}return MailboxEmailToLeadModal.prototype.ngOnInit=function(){this.model.initializeModel(this.email),this.view.isEditable=!0,this.view.setEditMode()},MailboxEmailToLeadModal.prototype.ngAfterViewInit=function(){this.buildContainer()},MailboxEmailToLeadModal.prototype.closeModal=function(){this.self.destroy()},MailboxEmailToLeadModal.prototype.buildContainer=function(){for(var s=this,e=0,t=this.componentRefs;e<t.length;e++){t[e].destroy()}this.componentRefs=[];for(var i=this.metadata.getComponentConfig("ObjectRecordDetails",this.model.module),a=function(t){l.metadata.addComponent(t.component,l.detailcontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig,s.componentRefs.push(e)})},l=this,o=0,n=this.metadata.getComponentSetObjects(i.componentset);o<n.length;o++){a(n[o])}},MailboxEmailToLeadModal.prototype.setField=function(e){this.model.data[e.field]=e.value},MailboxEmailToLeadModal.prototype.saveLead=function(){var t=this;this.model.save().subscribe(function(e){t.closeModal()})},__decorate([core_1.ViewChild("detailcontainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],MailboxEmailToLeadModal.prototype,"detailcontainer",void 0),MailboxEmailToLeadModal=__decorate([core_1.Component({providers:[services_1.model,services_1.view],template:'<system-modal size="large"><system-modal-header (close)="closeModal()"><system-label label="LBL_NEW_FORM_TITLE"></system-label></system-modal-header><system-modal-content><div class="slds-grid" style="height: 70vh;"><div class="slds-size--1-of-2 slds-p-around--small" style="height: 100%;"><mailbox-email-to-lead-emailtext [emailmodule]="model.module" [emailtext]="email.data.description" [emailhtml]="email.data.body" [emailfields]="leadFields" (setfield)="setField($event)"></mailbox-email-to-lead-emailtext></div><div class="slds-size--1-of-2 slds-scrollable" style="height: 100%;"><div #detailcontainer></div></div></div></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="closeModal()"><system-label label="LBL_CANCEL"></system-label></button> <button class="slds-button slds-button--brand" (click)="saveLead()"><system-label label="LBL_SAVE"></system-label></button></system-modal-footer></system-modal>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.view,services_1.model])],MailboxEmailToLeadModal)}();exports.MailboxEmailToLeadModal=MailboxEmailToLeadModal;var MailboxEmailToLeadEmailText=function(){function e(e,t,s){this.elementRef=e,this.renderer=t,this.language=s,this.emailtext="",this.emailhtml="",this.emailmodule="",this.emailfields=["first_name","last_name"],this.setfield=new core_1.EventEmitter,this.clickListener=null,this.displayContextMenu=!1,this.displayContextCoordinates={top:0,left:0}}return Object.defineProperty(e.prototype,"content",{get:function(){return this.emailhtml?this.emailhtml:this.emailtext},enumerable:!0,configurable:!0}),e.prototype.ngOnDestroy=function(){this.clickListener&&this.clickListener()},e.prototype.showContextMenu=function(e){var t=this;this.selectedText&&(e.preventDefault(),this.displayContextMenu=!0,this.displayContextCoordinates.top=e.clientY,this.displayContextCoordinates.left=e.clientX,this.clickListener=this.renderer.listen("document","click",function(e){return t.onClick(e)}))},Object.defineProperty(e.prototype,"selectedText",{get:function(){var e=window.getSelection().toString();return e?e.trim():""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contextMenuStyle",{get:function(){var e=this.elementRef.nativeElement.getBoundingClientRect();return{left:this.displayContextCoordinates.left-e.left+"px",top:this.displayContextCoordinates.top-e.top+"px"}},enumerable:!0,configurable:!0}),e.prototype.onClick=function(e){this.contextMenu.element.nativeElement.contains(e.target)||(this.displayContextMenu=!1,this.clickListener&&(this.clickListener(),this.clickListener=null))},e.prototype.setField=function(e){this.displayContextMenu=!1,this.clickListener&&(this.clickListener(),this.clickListener=null),this.setfield.emit({field:e,value:this.selectedText})},__decorate([core_1.ViewChild("contextMenu",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"contextMenu",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"emailtext",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"emailhtml",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"emailmodule",void 0),__decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"emailfields",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"setfield",void 0),e=__decorate([core_1.Component({selector:"mailbox-email-to-lead-emailtext",template:'<div class="slds-form-element slds-is-relative" style="height: 100%;"><div class="slds-box slds-scrollable" style="height: 100%" [innerHTML]="content" (contextmenu)="showContextMenu($event)"></div><div #contextMenu *ngIf="displayContextMenu" [ngStyle]="contextMenuStyle" class="slds-dropdown slds-dropdown_left slds-is-absolute"><ul class="slds-dropdown__list" role="menu"><li *ngFor="let emailfield of emailfields" class="slds-dropdown__item" role="presentation"><a href="javascript:void(0);" role="menuitem" tabindex="0" (click)="setField(emailfield)"><span class="slds-truncate"><system-label-fieldname [module]="emailmodule" [field]="emailfield"></system-label-fieldname></span></a></li></ul></div></div>'}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer2,services_1.language])],e)}();exports.MailboxEmailToLeadEmailText=MailboxEmailToLeadEmailText;var MailboxesDashlet=function(){function MailboxesDashlet(e,t,s,i){this.language=e,this.backend=t,this.model=s,this.router=i,this.isLoading=!1,this.mailboxes=[],this.canLoadMore=!0,this.loadLimit=20,this.getMailBoxesInterval=void 0}return MailboxesDashlet.prototype.ngOnInit=function(){this.model.module="Mailboxes",this.getMailboxes(),this.getMailBoxesInterval=this.getMailboxesInterval()},MailboxesDashlet.prototype.ngOnDestroy=function(){this.getMailBoxesInterval&&window.clearInterval(this.getMailBoxesInterval)},MailboxesDashlet.prototype.trackByFn=function(e,t){return t.id},MailboxesDashlet.prototype.getMailboxes=function(t){var s=this;this.isLoading=!0,this.backend.getRequest("/modules/Mailboxes/dashlet").subscribe(function(e){if(!e||0==e.length)return s.isLoading=!1;e.map(function(e){return e.emailsread=e.emailsread-e.emailsclosed}),t?s.mailboxes.every(function(t){return e.some(function(e){if(e.id==t.id)return t.emailsread=e.emailsread,t.emailsunread=e.emailsunread,!0}),!0}):s.mailboxes=e,e.length<s.loadLimit&&(s.canLoadMore=!1),s.isLoading=!1})},MailboxesDashlet.prototype.getMailboxesInterval=function(){var e=this;return window.setInterval(function(){return e.getMailboxes(!0)},6e4)},MailboxesDashlet.prototype.onScroll=function(){var e=this.tablecontainer.element.nativeElement;e.scrollTop+e.clientHeight>=e.scrollHeight&&this.loadMore()},MailboxesDashlet.prototype.goToRecord=function(e){this.router.navigate(["/module/"+this.model.module+"/"+e])},MailboxesDashlet.prototype.loadMore=function(){var t=this;this.canLoadMore&&(this.isLoading=!0,this.backend.getRequest("/modules/Mailboxes/dashlet").subscribe(function(e){t.mailboxes=t.mailboxes.concat(e),e.length<t.loadLimit&&(t.canLoadMore=!1),t.isLoading=!1}))},__decorate([core_1.ViewChild("tablecontainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],MailboxesDashlet.prototype,"tablecontainer",void 0),MailboxesDashlet=__decorate([core_1.Component({selector:"dashboard-mailboxes-dashlet",template:'<div class="slds-grid slds-grid--vertical" style="height: 100%"><div class="slds-grid slds-grid--vertical-align-center slds-border--bottom slds-p-around--x-small"><system-icon module="Mailboxes" size="small"></system-icon><h2 class="slds-text-heading--medium slds-p-bottom--xx-small">Mailboxes</h2></div><div #tablecontainer class="slds-scrollable--y slds-grow" style="width: 100%;" (scroll)="onScroll()"><table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table--fixed-layout spice-table_header-fixed" style="border-top: 0"><thead><tr class="slds-text-title_caps"><th scope="col"><div class="slds-truncate slds-text-align--center"><system-label label="LBL_NAME"></system-label></div></th><th scope="col"><div class="slds-truncate slds-text-align--center"><system-label label="LBL_UNREAD"></system-label></div></th><th scope="col"><div class="slds-truncate slds-text-align--center"><system-label label="LBL_READ"></system-label></div></th></tr></thead><tbody *ngIf="!isLoading && mailboxes.length > 0"><tr *ngFor="let mailbox of mailboxes; trackBy: trackByFn" style="cursor: pointer" (click)="goToRecord(mailbox.id)"><td class="slds-truncate" style="min-width: 120px"><div class="slds-truncate slds-p-vertical--xxx-small slds-align--absolute-center" style="width: fit-content;height: fit-content;">{{mailbox.name}}</div></td><td class="slds-truncate" style="min-width: 100px"><div [ngClass]="mailbox?.emailsunread > 0 ? \'slds-badge slds-theme--success\' : \'\'" [class.slds-p-horizontal--xx-small]="mailbox?.emailsunread > 9" class="slds-truncate slds-p-vertical--xxx-small slds-align--absolute-center" style="border-radius: 50%;width: fit-content;height: fit-content;">{{mailbox.emailsunread}}</div></td><td class="slds-truncate" style="min-width: 100px"><div class="slds-truncate slds-p-vertical--xxx-small slds-align--absolute-center" style="width: fit-content;height: fit-content;">{{mailbox.emailsread}}</div></td></tr></tbody><tbody *ngIf="isLoading" system-table-stencils [columns]="3"></tbody></table></div></div>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.backend,services_1.model,router_1.Router])],MailboxesDashlet)}();exports.MailboxesDashlet=MailboxesDashlet;var MailboxManagerTextMessages=function(){function e(e){this.mailboxesEmails=e}return e.prototype.trackbyfn=function(e,t){return t.id},e.prototype.loadmore=function(){this.mailboxesEmails.loadMore()},e=__decorate([core_1.Component({selector:"mailbox-manager-textmessages",template:'<div class="slds-scrollable--y slds-border--right" (system-to-bottom)="loadmore()"><mailbox-manager-textmessage *ngFor="let email of mailboxesEmails.emails;trackBy:trackbyfn" [message]="email"></mailbox-manager-textmessage><div *ngIf="mailboxesEmails.isLoading" class="slds-p-around--medium"><system-spinner></system-spinner></div></div>'}),__metadata("design:paramtypes",[mailboxesEmails])],e)}();exports.MailboxManagerTextMessages=MailboxManagerTextMessages;var MailboxManagerTextMessage=function(){function e(e,t,s,i,a,l){this.metadata=e,this.language=t,this.mailboxesEmails=s,this.view=i,this.model=a,this.modelutilities=l,this.message={},this.view.displayLinks=!1,this.view.displayLabels=!1,this.fieldset=this.metadata.getComponentConfig("MailboxManagerTextMessage").fieldset}return e.prototype.ngOnInit=function(){this.model.module="TextMessages",this.model.id=this.message.id,this.model.data=this.modelutilities.backendModel2spice("TextMessages",this.message)},e.prototype.selectTextmessage=function(e){this.mailboxesEmails.activeMessage&&e.id==this.mailboxesEmails.activeMessage.id||(this.mailboxesEmails.activeMessage=e)},Object.defineProperty(e.prototype,"isSelected",{get:function(){return this.mailboxesEmails.activeMessage&&this.mailboxesEmails.activeMessage.id==this.model.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nameStyle",{get:function(){var e={};switch("unread"===this.message.status&&(e["font-weight"]="bold"),this.message.openness){case"user_closed":case"system_closed":e["text-decoration"]="line-through"}return e},enumerable:!0,configurable:!0}),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"message",void 0),e=__decorate([core_1.Component({providers:[services_1.model,services_1.view],selector:"mailbox-manager-textmessage",template:'<div class="slds-p-horizontal--small slds-p-vertical--small slds-border--bottom" (click)="selectTextmessage(message)" style="cursor: pointer;" [ngClass]="{\'slds-theme_default\': isSelected}"><div class="slds-grid slds-grid--vertical-align-center"><div class="slds-text-title_caps slds-truncate" [ngStyle]="nameStyle">{{message.description}}</div><div class="slds-col--bump-left slds-p-left--xx-small"><field-container field="date_sent" fielddisplayclass="slds-truncate"></field-container></div></div><object-record-fieldset [fieldset]="fieldset" fielddisplayclass></object-record-fieldset></div>'}),__metadata("design:paramtypes",[services_1.metadata,services_1.language,mailboxesEmails,services_1.view,services_1.model,services_1.modelutilities])],e)}();exports.MailboxManagerTextMessage=MailboxManagerTextMessage;var ModuleMailboxes=function(){function ModuleMailboxes(e){this.vms=e,this.version="1.0",this.build_date="2020-07-30 10:03:46",this.vms.registerModule(this)}return ModuleMailboxes=__decorate([core_1.NgModule({declarations:[MailboxManager,MailboxManagerHeader,MailboxManagerEmails,MailboxManagerEmail,MailboxmanagerEmailDetails,MailboxManagerTextMessage,MailboxManagerTextMessages,MailboxEmailToLeadButton,MailboxEmailToLeadModal,MailboxEmailToLeadEmailText,MailboxesDashlet],imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleMailboxes)}();exports.ModuleMailboxes=ModuleMailboxes;