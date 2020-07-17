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
 * date: 2020-07-17 14:17:31
 * build: 2020.02.001.1594988251916
 **/
"use strict";var __extends=this&&this.__extends||function(){var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])})(e,t)};return function(e,t){function s(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),__decorate=this&&this.__decorate||function(e,t,s,i){var a,l=arguments.length,o=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;0<=n;n--)(a=e[n])&&(o=(l<3?a(o):3<l?a(t,s,o):a(t,s))||o);return 3<l&&o&&Object.defineProperty(t,s,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),platform_browser_1=require("@angular/platform-browser"),router_1=require("@angular/router"),rxjs_1=require("rxjs"),EmailToObjectEmailText=function(){function e(e,t,s,i){this.elementRef=e,this.renderer=t,this.language=s,this.metadata=i,this.text="",this.html="",this.target_module_name="",this.target_module_fields=[],this.setfield=new core_1.EventEmitter,this.clickListener=null,this.displayContextMenu=!1,this.displayContextCoordinates={top:0,left:0}}return Object.defineProperty(e.prototype,"content",{get:function(){return this.html?this.html:this.text},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"striped_content",{get:function(){return this._striped_content||(this.html?this._striped_content=this.html.replace(/<!--.*?-->/gs,"").replace(/<[^>]+>/g,"").replace(/[ ]{2,}/g," ").replace(/[\n\r]{3,}/g,"\n"):this._striped_content=this.text),this._striped_content},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){if(!this.target_module_fields||0===this.target_module_fields.length){var e=["varchar","text"],t=this.metadata.getModuleFields(this.target_module_name);for(var s in t)0<=e.indexOf(t[s].type)&&t[s].vname&&"id"!==t[s].name&&this.target_module_fields.push(s)}},e.prototype.ngOnDestroy=function(){this.clickListener&&this.clickListener()},e.prototype.showContextMenu=function(e){var t=this;this.selectedText&&(e.preventDefault(),this.displayContextMenu=!0,this.displayContextCoordinates.top=e.clientY,this.displayContextCoordinates.left=e.clientX,this.clickListener=this.renderer.listen("document","click",function(e){return t.onClick(e)}))},Object.defineProperty(e.prototype,"selectedText",{get:function(){var e=window.getSelection().toString();return e?e.trim():""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contextMenuStyle",{get:function(){var e=this.elementRef.nativeElement.getBoundingClientRect();return{top:this.displayContextCoordinates.top-e.top+"px",left:this.displayContextCoordinates.left-e.left+"px"}},enumerable:!0,configurable:!0}),e.prototype.onClick=function(e){this.contextMenu.element.nativeElement.contains(e.target)||(this.displayContextMenu=!1,this.clickListener&&(this.clickListener(),this.clickListener=null))},e.prototype.setField=function(e){this.displayContextMenu=!1,this.clickListener&&(this.clickListener(),this.clickListener=null),this.setfield.emit({field:e,value:this.selectedText})},__decorate([core_1.ViewChild("contextMenu",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"contextMenu",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"text",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"html",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"target_module_name",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"target_module_fields",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"setfield",void 0),e=__decorate([core_1.Component({selector:"email-to-object-emailtext",template:'<div class="slds-form-element slds-is-relative" style="height: 100%;"><textarea class="slds-input" style="height: 100%; width: 100%; resize: none;" (contextmenu)="showContextMenu($event)">{{striped_content}}</textarea><div #contextMenu *ngIf="displayContextMenu" [ngStyle]="contextMenuStyle" class="slds-dropdown slds-dropdown_left slds-is-absolute"><ul class="slds-dropdown__list" role="menu"><li *ngFor="let field of target_module_fields" class="slds-dropdown__item" role="presentation"><a href="javascript:void(0);" role="menuitem" tabindex="0" (click)="setField(field)"><span class="slds-truncate"><system-label-fieldname [module]="target_module_name" [field]="field"></system-label-fieldname></span></a></li></ul></div></div>'}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer2,services_1.language,services_1.metadata])],e)}();exports.EmailToObjectEmailText=EmailToObjectEmailText;var EmailToObjectModal=function(){function EmailToObjectModal(e,t,s,i,a){this.language=e,this.metadata=t,this.view=s,this.model=i,this.backend=a,this.email_model=null,this.self=null,this.componentRefs=[],this.save$=new core_1.EventEmitter,this.object_fields=[]}return EmailToObjectModal.prototype.ngOnInit=function(){if(this.model.module=this.object_module_name,this.model.initializeModel(this.email_model),this.object_predefined_fields)for(var e in this.object_predefined_fields)this.model.data[e]=this.object_predefined_fields[e];this.view.isEditable=!0,this.view.setEditMode()},EmailToObjectModal.prototype.ngAfterViewInit=function(){this.buildContainer()},EmailToObjectModal.prototype.close=function(){this.self.destroy()},EmailToObjectModal.prototype.buildContainer=function(){for(var s=this,e=0,t=this.componentRefs;e<t.length;e++){t[e].destroy()}this.componentRefs=[];for(var i=this.metadata.getComponentConfig("ObjectRecordDetails",this.model.module),a=function(t){l.metadata.addComponent(t.component,l.detailcontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig,s.componentRefs.push(e)})},l=this,o=0,n=this.metadata.getComponentSetObjects(i.componentset);o<n.length;o++){a(n[o])}},EmailToObjectModal.prototype.setField=function(e){this.model.setField(e.field,e.value)},EmailToObjectModal.prototype.save=function(){var t=this;this.model.validate()&&this.model.save().subscribe(function(e){t.object_relation_link_name?t.backend.postRequest("module/Emails/"+t.email_model.id+"/related/"+t.object_relation_link_name,[],[t.model.id]).subscribe(function(e){t.save$.emit(t.model.data),t.close()}):(t.save$.emit(t.model.data),t.close())})},__decorate([core_1.ViewChild("detailcontainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],EmailToObjectModal.prototype,"detailcontainer",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],EmailToObjectModal.prototype,"save$",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],EmailToObjectModal.prototype,"object_module_name",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EmailToObjectModal.prototype,"object_fields",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],EmailToObjectModal.prototype,"object_relation_link_name",void 0),__decorate([core_1.Input(),__metadata("design:type",Array)],EmailToObjectModal.prototype,"object_predefined_fields",void 0),EmailToObjectModal=__decorate([core_1.Component({selector:"email-to-object-modal",template:'<div role="dialog" tabindex="-1" class="slds-modal slds-modal_large slds-fade-in-open"><div class="slds-modal__container"><div class="slds-modal__header"><button class="slds-button slds-modal__close slds-button--icon-inverse" title="Close" (click)="close()"><system-button-icon [icon]="\'close\'"></system-button-icon></button><h2 class="slds-text-heading--medium"><system-label-modulename [module]="object_module_name" [singular]="true"></system-label-modulename></h2></div><div class="slds-modal__content"><div class="slds-grid" style="height: 80vh;"><div class="slds-size--1-of-2 slds-p-around--small" style="height: 100%;"><email-to-object-emailtext [target_module_name]="object_module_name" [text]="email_model.data.body" [html]="email_model.data.body" [target_module_fields]="object_fields" (setfield)="setField($event)"></email-to-object-emailtext></div><div class="slds-size--1-of-2 slds-scrollable" style="height: 100%;"><div #detailcontainer></div></div></div></div><div class="slds-modal__footer"><button class="slds-button slds-button--neutral" (click)="close()"><system-label label="LBL_CANCEL"></system-label></button> <button class="slds-button slds-button--brand" (click)="save()"><system-label label="LBL_SAVE"></system-label></button></div></div></div><div class="slds-backdrop slds-backdrop--open"></div>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.view,services_1.model,services_1.backend])],EmailToObjectModal)}();exports.EmailToObjectModal=EmailToObjectModal;var EmailToObjectButton=function(){function EmailToObjectButton(e,t,s,i,a){var l=this;this.language=e,this.model=t,this.metadata=s,this.modal=i,this.relatedmodels=a,this.actionemitter=new core_1.EventEmitter,this.model.data$.subscribe(function(e){l.ngOnInit()})}return Object.defineProperty(EmailToObjectButton.prototype,"disabled",{get:function(){if(!this.metadata.checkModuleAcl(this.actionconfig.module,"create"))return!0;if(this.actionconfig.checklink){if(this.relatedmodels.isloading)return!0;if(0<this.relatedmodels.count)return!0}return!1},enumerable:!0,configurable:!0}),EmailToObjectButton.prototype.ngOnInit=function(){this.object_module_name=this.actionconfig.module,this.actionconfig.checklink&&(this.relatedmodels.module=this.model.module,this.relatedmodels.id=this.model.id,this.relatedmodels.relatedModule=this.actionconfig.module,this.relatedmodels.linkName=this.actionconfig.checklink,this.relatedmodels.getData())},EmailToObjectButton.prototype.execute=function(){var t=this;this.modal.openModal("EmailToObjectModal",!0).subscribe(function(e){e.instance.email_model=t.model,e.instance.object_module_name=t.object_module_name,e.instance.object_relation_link_name=t.actionconfig.relation_link_name,e.instance.object_predefined_fields=t.actionconfig.predefined_fields,e.instance.save$.subscribe(function(e){t.actionemitter.emit("save")})})},__decorate([core_1.Output(),__metadata("design:type",Object)],EmailToObjectButton.prototype,"actionemitter",void 0),EmailToObjectButton=__decorate([core_1.Component({selector:"email-to-object-button",template:'<span><system-label label="LBL_CONVERT_TO"></system-label> <system-label-modulename [module]="object_module_name" [singular]="true"></system-label-modulename></span>',providers:[services_1.relatedmodels]}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.metadata,services_1.modal,services_1.relatedmodels])],EmailToObjectButton)}();exports.EmailToObjectButton=EmailToObjectButton;var EmailPreviewModal=function(){function EmailPreviewModal(e,t,s,i,a,l,o){this.language=e,this.metadata=t,this.sanitizer=s,this.backend=i,this.model=a,this.view=l,this.modelattachments=o,this.self={},this.type="",this.name="",this.isLoading=!0,this.model.module="Emails";var n=this.metadata.getComponentConfig("EmailPreviewModal",this.model.module);this.fieldset=n.fieldset}return EmailPreviewModal.prototype.closeModal=function(){this.self.destroy()},EmailPreviewModal.prototype.ngOnInit=function(){var t=this;this.backend.getRequest("module/Emails/msg/"+this.file.id+"/preview").subscribe(function(e){t.model.setFields(t.model.utils.backendModel2spice("Emails",e)),t.isLoading=!1})},EmailPreviewModal.prototype.download=function(){this.modelattachments.downloadAttachment(this.file.id,this.file.filename)},__decorate([core_1.Input(),__metadata("design:type",String)],EmailPreviewModal.prototype,"type",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],EmailPreviewModal.prototype,"name",void 0),EmailPreviewModal=__decorate([core_1.Component({template:'<system-modal size="large"><system-modal-header (close)="closeModal()"><system-label label="LBL_EMAIL"></system-label> <span *ngIf="!isLoading" class="slds-truncate">"{{model.data.name}}"</span></system-modal-header><system-modal-content margin="none"><div *ngIf="isLoading" style="height: 50vh;" class="slds-align--absolute-center"><div class="slds-grid_vertical"><system-spinner></system-spinner><div class="slds-p-around--small">... <system-label label="LBL_LOADING"></system-label> ...</div></div></div><object-record-fieldset *ngIf="!isLoading" [fieldset]="fieldset" direction="vertical"></object-record-fieldset></system-modal-content><system-modal-footer><button class="slds-button slds-button--icon slds-button--icon-border" [disabled]="isLoading" (click)="download()"><system-button-icon icon="download" size="small"></system-button-icon></button></system-modal-footer></system-modal>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,platform_browser_1.DomSanitizer,services_1.backend,services_1.model,services_1.view,services_1.modelattachments])],EmailPreviewModal)}();exports.EmailPreviewModal=EmailPreviewModal;var EmailMSGPreviewModal=function(){function e(e,t,s){this.language=e,this.sanitizer=t,this.libloader=s,this.self={},this.type="",this.name="",this.libsloaded=!1}return e.prototype.closeModal=function(){this.self.destroy()},Object.defineProperty(e.prototype,"data",{set:function(e){this.libloader.loadLib("msgreader").subscribe(function(e){})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"subject",{get:function(){return this.msgData?this.msgData.subject:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"body",{get:function(){return this.msgData?this.sanitizer.bypassSecurityTrustHtml(this.msgData.body.replace(/\n/g,"<br/>")):""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"objecttype",{get:function(){if(!this.type)return"";var e=this.type.split("/");switch(e[0]){case"audio":case"video":return e[0];default:return"object"}},enumerable:!0,configurable:!0}),e.prototype.download=function(){var e=document.createElement("a");document.body.appendChild(e),e.href=this.blobUrl,e.download=this.name,e.click(),e.remove()},e.prototype.datatoBlob=function(e,t,s){void 0===t&&(t=""),void 0===s&&(s=512);for(var i=[],a=0;a<e.length;a+=s){for(var l=e.slice(a,a+s),o=new Array(l.length),n=0;n<l.length;n++)o[n]=l.charCodeAt(n);var d=new Uint8Array(o);i.push(d)}return new Blob(i,{type:t})},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"type",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"name",void 0),e=__decorate([core_1.Component({template:'<system-modal size="large"><system-modal-header (close)="closeModal()">Email Preview</system-modal-header><system-modal-content margin="none" [grow]="true"><div *ngIf="!msgData" style="height: 50vh;" class="slds-align--absolute-center"><system-spinner></system-spinner></div><div *ngIf="msgData" class="slds-p-around--small slds-text-align--center"><div>subject: {{subject}}</div><div [innerHTML]="body"></div></div></system-modal-content></system-modal>'}),__metadata("design:paramtypes",[services_1.language,platform_browser_1.DomSanitizer,services_1.libloader])],e)}();exports.EmailMSGPreviewModal=EmailMSGPreviewModal;var EmailsPopoverBody=function(){function EmailsPopoverBody(e,t,s){this.model=e,this.language=t,this.sanitized=s,this.fullValue=""}return Object.defineProperty(EmailsPopoverBody.prototype,"emailbody",{get:function(){return this.model.getFieldValue("body")},enumerable:!0,configurable:!0}),Object.defineProperty(EmailsPopoverBody.prototype,"sanitizedValue",{get:function(){return this.emailbody&&(this.emailbody.includes("</html>")?this.fullValue=this.emailbody:this.fullValue='<html><body class="spice">'+this.emailbody+"</body></html>"),this.fullValue!=this.fullValue_cached&&(this._sanitizedValue=this.sanitized.bypassSecurityTrustResourceUrl(this.fullValue?"data:text/html;charset=UTF-8,"+encodeURIComponent(this.fullValue):""),this.fullValue_cached=this.fullValue),this._sanitizedValue},enumerable:!0,configurable:!0}),EmailsPopoverBody=__decorate([core_1.Component({template:'<iframe style="height: 400px;" [src]="sanitizedValue" width="100%" frameborder="0" seamless></iframe>'}),__metadata("design:paramtypes",[services_1.model,services_1.language,platform_browser_1.DomSanitizer])],EmailsPopoverBody)}();exports.EmailsPopoverBody=EmailsPopoverBody;var fieldEmailStatus=function(o){function fieldEmailStatus(e,t,s,i,a){var l=o.call(this,e,t,s,i,a)||this;return l.model=e,l.view=t,l.language=s,l.metadata=i,l.router=a,l}return __extends(fieldEmailStatus,o),Object.defineProperty(fieldEmailStatus.prototype,"statusicon",{get:function(){switch(this.value){case"opened":case"read":return"email_open";case"bounced":case"deferred":case"send_error":return"error";default:return"email"}},enumerable:!0,configurable:!0}),fieldEmailStatus=__decorate([core_1.Component({template:'<field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display [fielddisplayclass]="fielddisplayclass" [editable]="false" [fieldconfig]="fieldconfig" [fieldid]="fieldid"><system-utility-icon [title]="value" size="x-small" [icon]="statusicon"></system-utility-icon></field-generic-display>'}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router])],fieldEmailStatus)}(objectfields_1.fieldGeneric);exports.fieldEmailStatus=fieldEmailStatus;var EmailReplyButton=function(){function EmailReplyButton(e,t,s,i,a,l){this.language=e,this.model=t,this.metadata=s,this.modal=i,this.relatedmodels=a,this.viewContainerRef=l,this.actionemitter=new core_1.EventEmitter}return Object.defineProperty(EmailReplyButton.prototype,"disabled",{get:function(){if(!this.metadata.checkModuleAcl("Emails","create"))return!0;if(this.actionconfig.checklink){if(this.relatedmodels.isloading)return!0;if(0<this.relatedmodels.count)return!0}return!1},enumerable:!0,configurable:!0}),EmailReplyButton.prototype.execute=function(){var t=this;this.modal.openModal("EmailReplyModal",!0,this.viewContainerRef.injector).subscribe(function(e){return e.instance.parent=t.model})},__decorate([core_1.Output(),__metadata("design:type",Object)],EmailReplyButton.prototype,"actionemitter",void 0),EmailReplyButton=__decorate([core_1.Component({selector:"email-reply-button",template:'<span><system-label label="LBL_EMAIL_REPLY"></system-label></span>',providers:[services_1.relatedmodels]}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.metadata,services_1.modal,services_1.relatedmodels,core_1.ViewContainerRef])],EmailReplyButton)}();exports.EmailReplyButton=EmailReplyButton;var EmailReplyModal=function(){function EmailReplyModal(e,t,s,i,a,l,o,n,d){this.language=e,this.metadata=t,this.model=s,this.view=i,this.backend=a,this.prefs=l,this.modal=o,this.session=n,this.userpreferences=d,this.parent=null,this.self=null,this.sending=!1,this.titlelabel="LBL_EMAIL_REPLY",this.mailsent=new core_1.EventEmitter,this.componentconfig={},this.model.module="Emails",this.view.isEditable=!0,this.view.setEditMode(),this.componentconfig=this.metadata.getComponentConfig("EmailReplyModal",this.model.module),this.fieldset=this.componentconfig.fieldset}return EmailReplyModal.prototype.ngOnInit=function(){this.model.initializeModel(this.parent),this.model.setField("parent_type",this.parent.module),this.model.setField("parent_id",this.parent.data.id);for(var e=0,t=this.model.data.recipient_addresses;e<t.length;e++){var s=t[e];if("from"==s.address_type||"to"==s.address_type){var i="from"==s.address_type?"to":"from";s.address_type=i}}this.model.setField("body","<br><br><br>"+this.buildHistoryText())},EmailReplyModal.prototype.buildHistoryText=function(){var e=new moment.utc(this.parent.data.date_sent).tz(this.session.getSessionData("timezone")||moment.tz.guess(!0)),t=e?e.format(this.userpreferences.getDateFormat()):"",s=e?e.format(this.userpreferences.getTimeFormat()):"",i="";return i+="<div class='spicecrm_quote'>",i+="<div dir='ltr' class='crm_attr'>",i+="<b>"+this.language.getLabel("LBL_FROM")+":</b> <a href='mailto:"+this.parent.data.from_addr+"'>"+this.parent.data.from_addr+"</a>",i+="<br>",i+="<b>"+this.language.getLabel("LBL_DATE_SENT")+":</b> "+t+" "+s,i+="<br>",i+="<b>"+this.language.getLabel("LBL_TO")+":</b> "+this.parent.data.to_addrs,i+="<br>",i+="<b>"+this.language.getLabel("LBL_SUBJECT")+":</b> "+this.parent.data.name,i+="<br><br>",i+="</div>",i+='<blockquote class="crm_quote" style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex">',i+=this.parent.data.body,i+="</blockquote>",i+="</div>"},Object.defineProperty(EmailReplyModal.prototype,"isDisabled",{get:function(){var e=this.model.getFieldValue("recipient_addresses"),t=this.model.getFieldValue("mailbox_id"),s=this.model.getFieldValue("name"),i=this.model.getFieldValue("body"),a=e?e.find(function(e){return"to"==e.address_type}):void 0;return!(s&&i&&t&&e&&a)||this.sending},enumerable:!0,configurable:!0}),EmailReplyModal.prototype.close=function(){this.self.destroy()},EmailReplyModal.prototype.sendEmail=function(){var s=this;this.modal.openModal("SystemLoadingModal",!1).subscribe(function(t){t.instance.messagelabel="LBL_SENDING",s.sending=!0,s.model.setField("type","out"),s.model.setField("to_be_sent","1"),s.model.setField("from_addr",s.model.data.from_addr_name),s.model.setField("to_addrs",s.model.data.to_addrs_names),s.model.setField("cc_addrs",s.model.data.cc_addrs_names),s.model.save().subscribe(function(e){t.instance.self.destroy(),s.mailsent.emit(!0),s.close()},function(e){t.instance.self.destroy(),s.sending=!1})})},__decorate([core_1.Input(),__metadata("design:type",Object)],EmailReplyModal.prototype,"parent",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],EmailReplyModal.prototype,"titlelabel",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],EmailReplyModal.prototype,"mailsent",void 0),EmailReplyModal=__decorate([core_1.Component({selector:"email-reply-modal",template:'<system-modal size="large"><system-modal-header (close)="close()"><system-label [label]="titlelabel"></system-label></system-modal-header><system-modal-content><object-record-fieldset [fieldset]="fieldset" direction="vertical"></object-record-fieldset></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="close()"><system-label label="LBL_CANCEL"></system-label></button> <button [disabled]="isDisabled" class="slds-button slds-button--brand" (click)="sendEmail()"><system-label label="LBL_SEND"></system-label></button></system-modal-footer></system-modal>',providers:[services_1.view,services_1.model]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.view,services_1.backend,services_1.userpreferences,services_1.modal,services_1.session,services_1.userpreferences])],EmailReplyModal)}();exports.EmailReplyModal=EmailReplyModal;var EmailSchedulesButton=function(){function EmailSchedulesButton(e,t,s,i,a,l,o){this.language=e,this.metadata=t,this.model=s,this.modellist=i,this.modal=a,this.injector=l,this.toast=o,this.disabled=!1,this.hidden=!0}return EmailSchedulesButton.prototype.ngOnInit=function(){this.findEmailsLink()},Object.defineProperty(EmailSchedulesButton.prototype,"exportcount",{get:function(){var e=this.modellist.getSelectedCount();return e||this.modellist.listData.totalcount},enumerable:!0,configurable:!0}),EmailSchedulesButton.prototype.findEmailsLink=function(){var e=this.metadata.getModuleFields(this.model.module);for(var t in e){var s=e[t];("emails"==t||"link"==s.type&&"Emails"==s.module)&&(this.hidden=!1)}},EmailSchedulesButton.prototype.execute=function(){this.model.fields.hasOwnProperty("emails")?this.modal.openModal("EmailSchedulesModal",!0,this.injector):this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error")},EmailSchedulesButton=__decorate([core_1.Component({selector:"email-schedules-button",template:'<span><system-label label="LBL_EMAIL_SCHEDULE"></system-label><span>({{exportcount}})</span></span>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.modellist,services_1.modal,core_1.Injector,services_1.toast])],EmailSchedulesButton)}();exports.EmailSchedulesButton=EmailSchedulesButton;var EmailSchedulesModal=function(){function EmailSchedulesModal(e,t,s,i,a,l,o,n,d){this.language=e,this.model=t,this.injector=s,this.view=i,this.modal=a,this.metadata=l,this.modellist=o,this.backend=n,this.toast=d,this.self={},this.view.isEditable=!0,this.view.setEditMode()}return EmailSchedulesModal.prototype.ngOnInit=function(){this.model.module="EmailSchedules",this.model.initialize()},EmailSchedulesModal.prototype.close=function(){this.self.destroy()},EmailSchedulesModal.prototype.saveSchedule=function(){var i=this;this.modal.openModal("SystemLoadingModal").subscribe(function(t){t.instance.messagelabel="LBL_LOADING";var e=i.modellist.getSelectedIDs(),s={module:i.modellist.module,ids:e,data:i.model.data,modulefilter:i.modellist.modulefilter,searchterm:i.modellist.searchTerm,aggregates:i.modellist.selectedAggregates};i.backend.postRequest("/modules/EmailSchedules/saveSchedule",{},s).subscribe(function(e){t.instance.self.destroy(),e.status?(i.toast.sendToast(i.language.getLabel("MSG_SUCCESSFULLY_EXECUTED"),"success"),i.close()):i.toast.sendToast(i.language.getLabel("LBL_ERROR"),"error")})})},EmailSchedulesModal=__decorate([core_1.Component({selector:"email-schedules-modal",template:'<system-modal title="LBL_EMAIL_SCHEDULES"><system-modal-header (close)="close()"><system-label label="LBL_EMAIL_SCHEDULE"></system-label></system-modal-header><system-modal-content><system-dynamic-component component="CampaignTaskEmailPanel"></system-dynamic-component></system-modal-content><system-modal-footer><button class="slds-button slds-button--brand" (click)="saveSchedule()"><system-label label="LBL_SAVE"></system-label></button></system-modal-footer></system-modal>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.model,core_1.Injector,services_1.view,services_1.modal,services_1.metadata,services_1.modellist,services_1.backend,services_1.toast])],EmailSchedulesModal)}();exports.EmailSchedulesModal=EmailSchedulesModal;var EmailSchedulesRelatedButton=function(){function EmailSchedulesRelatedButton(e,t,s,i,a,l,o){this.language=e,this.metadata=t,this.model=s,this.modal=i,this.injector=a,this.backend=l,this.toast=o,this.linkedBeans=[]}return EmailSchedulesRelatedButton.prototype.execute=function(){var t=this,s=this.modal.await(this.language.getLabel("LBL_LOADING"));this.checkEmailsLink().subscribe(function(e){s.emit(!0),e&&t.modal.openModal("EmailSchedulesRelatedModal",!0,t.injector).subscribe(function(e){e.instance.linkedBeans=t.linkedBeans,e.instance.modelId=t.modelId,e.instance.currentModule=t.model.module})})},EmailSchedulesRelatedButton.prototype.checkEmailsLink=function(){var i=this,a=new rxjs_1.Subject,l=[];Object.keys(this.model.fields).forEach(function(e){if("link"==i.model.fields[e].type&&i.model.fields[e].hasOwnProperty("vname")&&!i.model.fields[e].hasOwnProperty("link_type")){var t=i.model.fields[e].name;for(var s in i.metadata.fieldDefs)s.toLowerCase()==t&&l.push(s)}});function e(e){var t=l[e];Object.keys(o.metadata.fieldDefs).forEach(function(e){null!=i.metadata.fieldDefs[e]&&e==t&&i.metadata.fieldDefs[e].hasOwnProperty("email")&&i.metadata.fieldDefs[e].hasOwnProperty("email1")&&s.push(t)})}var s=[],o=this;for(var t in l)e(t);var n={modules:s};return this.backend.getRequest("/module/EmailSchedules/checkRelated/"+this.model.module+"/"+this.model.id,n).subscribe(function(e){for(var t in e.status?(i.linkedBeans=e.linkedBeans,i.modelId=e.beanId,a.next(e.status)):(a.next(!1),i.toast.sendToast(i.language.getLabel("LBL_ERROR"),"error")),i.linkedBeans){var s=i.linkedBeans[t];s.vname=i.model.fields[s.link].vname}a.complete()}),a.asObservable()},EmailSchedulesRelatedButton=__decorate([core_1.Component({selector:"email-schedules-related-button",template:'<span><system-label label="LBL_EMAIL_SCHEDULE"></system-label></span>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.modal,core_1.Injector,services_1.backend,services_1.toast])],EmailSchedulesRelatedButton)}();exports.EmailSchedulesRelatedButton=EmailSchedulesRelatedButton;var EmailSchedulesRelatedModal=function(){function EmailSchedulesRelatedModal(e,t,s,i,a,l,o,n){this.language=e,this.model=t,this.injector=s,this.view=i,this.modal=a,this.metadata=l,this.backend=o,this.toast=n,this.self={},this.activetab="recipients",this.linkedBeans=[],this.view.isEditable=!0,this.view.setEditMode()}return EmailSchedulesRelatedModal.prototype.ngOnInit=function(){this.model.module="EmailSchedules",this.model.initialize(),this.fiilterProspects()},EmailSchedulesRelatedModal.prototype.fiilterProspects=function(){this.linkedBeans=this.linkedBeans.map(function(e){return e.disabled=0==e.count,e.selected=!1,e})},EmailSchedulesRelatedModal.prototype.close=function(){this.self.destroy()},EmailSchedulesRelatedModal.prototype.saveSchedule=function(){var n=this;this.modal.openModal("SystemLoadingModal").subscribe(function(t){t.instance.messagelabel="LBL_LOADING";var e=n.linkedBeans.filter(function(e){return e.selected}).map(function(e){return e.module}),s={beanId:n.modelId,bean:n.currentModule,links:e,data:n.model.data},i=s.data.hasOwnProperty("mailbox_id"),a=s.data.hasOwnProperty("email_subject"),l=0<e.length;if(i&&a&&l)n.backend.postRequest("/modules/EmailSchedules/saveScheduleFromRelated",{},s).subscribe(function(e){t.instance.self.destroy(),e.status?(n.toast.sendToast(n.language.getLabel("MSG_SUCCESSFULLY_EXECUTED"),"success"),n.close()):n.toast.sendToast(n.language.getLabel("LBL_ERROR"),"error")});else{t.instance.self.destroy();var o="Following errors occured: ";i||(o+="Mailbox field is emtpy "),a||(o+="Email subject is missing "),l||(o+="No recipients selected "),n.toast.sendAlert(o,"warning")}})},EmailSchedulesRelatedModal=__decorate([core_1.Component({selector:"email-schedules-related-modal",template:'<system-modal title="LBL_EMAIL_SCHEDULES"><system-modal-header (close)="close()"><system-label label="LBL_EMAIL_SCHEDULE"></system-label></system-modal-header><system-modal-content><div class="slds-tabs_scoped"><ul class="slds-tabs_scoped__nav" role="tablist"><li class="slds-tabs_scoped__item" title="Emails" role="presentation" [ngClass]="{\'slds-is-active\': activetab==\'emails\'}"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab" (click)="activetab=\'emails\'" aria-controls="tab-scoped-1" id="tab-scoped-1__item">{{this.language.getLabel(\'LBL_EMAILS\')}}</a></li><li class="slds-tabs_scoped__item" title="Recipients" role="presentation" [ngClass]="{\'slds-is-active\': activetab==\'recipients\'}"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab" (click)="activetab=\'recipients\'" aria-controls="tab-scoped-2" id="tab-scoped-2__item">{{this.language.getLabel(\'LBL_RECIPIENTS\')}}</a></li></ul><div id="tab-scoped-1" *ngIf="activetab==\'emails\'" class="slds-tabs_scoped__content" role="tabpanel" aria-labelledby="tab-scoped-1__item"><system-dynamic-component component="CampaignTaskEmailPanel"></system-dynamic-component></div><div id="tab-scoped-2" *ngIf="activetab==\'recipients\'" class="slds-tabs_scoped__content" role="tabpanel" aria-labelledby="tab-scoped-2__item"><table class="slds-table slds-table_bordered slds-table_cell-buffer"><thead><tr class="slds-text-title_caps"><th scope="col" class="slds-resizable"><div class="slds-truncate"><system-label label="LBL_LINK"></system-label></div></th><th scope="col" class="slds-resizable"><div class="slds-truncate"><system-label label="LBL_COUNT"></system-label></div></th></tr></thead><tbody><tr *ngFor="let link of linkedBeans" [class.slds-disabled-text]="link.disabled"><td><div class="slds-grid slds-grid--vertical-align-center slds-p-around--xx-small"><system-checkbox [disabled]="link.disabled" [(ngModel)]="link.selected"></system-checkbox><div class="slds-truncate"><system-icon [addclasses]="link.disabled ? \'slds-icon_disabled\' : null" [size]="\'small\'" [module]="link.module"></system-icon></div><div class="slds-truncate"><system-label [label]="link.vname"></system-label></div></div></td><td><div class="slds-grid slds-grid--vertical-align-center slds-p-around--xx-small"><div class="slds-truncate">{{link.count}}</div></div></td></tr></tbody></table></div></div></system-modal-content><system-modal-footer><button (click)="saveSchedule()" class="slds-button slds-button--brand"><system-label label="LBL_SAVE"></system-label></button></system-modal-footer></system-modal>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.model,core_1.Injector,services_1.view,services_1.modal,services_1.metadata,services_1.backend,services_1.toast])],EmailSchedulesRelatedModal)}();exports.EmailSchedulesRelatedModal=EmailSchedulesRelatedModal;var EmailSchedulesView=function(){function EmailSchedulesView(e,t,s,i,a){this.language=e,this.model=t,this.view=s,this.metadata=i,this.backend=a,this.emailschedules=[],this.locked=!1,this.isLoading=!1,this.getData(this.model.id)}return EmailSchedulesView.prototype.getData=function(e){var t=this;this.isLoading=!0,this.backend.getRequest("/module/"+this.model.module+"/"+e+"/myOpenSchedules").subscribe(function(e){e.status?(t.isLoading=!1,t.emailschedules=e.openschedules):t.locked=!0})},EmailSchedulesView=__decorate([core_1.Component({selector:"email-schedules-view",template:'<div [system-overlay-loading-spinner]="isLoading" system-to-bottom><div class="slds-grid slds-p-around--small" style="align-items: center"><system-icon class="slds-col slds-grow-none" [module]="\'EmailSchedules\'" [title]="\'EmailSchedules\'"></system-icon><h2 class="slds-col">{{language.getModuleName(\'EmailSchedules\')}}</h2></div><table *ngIf="emailschedules.length > 0" width="100%" class="slds-table slds-table_cell-buffer slds-table_bordered"><thead><tr class="slds-line-height_reset"><th><div class="slds-truncate">Id</div></th><th><div class="slds-truncate"><system-label label="LBL_SUBJECT"></system-label></div></th><th><div class="slds-truncate"><system-label label="LBL_STATUS"></system-label></div></th></tr></thead><tbody><tr *ngFor="let schedule of emailschedules" class="slds-hint-parent"><td><div class="slds-truncate">{{schedule.id}}</div></td><td><div class="slds-truncate">{{schedule.subject}}</div></td><td><div class="slds-truncate">{{schedule.status}}</div></td></tr></tbody></table><div *ngIf="emailschedules.length == 0 && !isLoading" class="slds-align--absolute-center" style="height: calc(100% - 35px)"><system-illustration-no-records><system-label label="MSG_NO_RECORDS_FOUND"></system-label><</system-illustration-no-records></div><div *ngIf="!isLoading && locked" class="slds-align--absolute-center" style="height: calc(100% - 35px)"><system-illustration-no-access><system-label label="LBL_NO_ACCESS"></system-label></system-illustration-no-access></div></div>',providers:[services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.view,services_1.metadata,services_1.backend])],EmailSchedulesView)}();exports.EmailSchedulesView=EmailSchedulesView;var ModuleEmails=function(){function ModuleEmails(e){this.vms=e,this.version="1.0",this.build_date="2020-07-17 14:16:33",this.vms.registerModule(this)}return ModuleEmails=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[EmailToObjectButton,EmailToObjectEmailText,EmailToObjectModal,EmailPreviewModal,EmailMSGPreviewModal,EmailsPopoverBody,fieldEmailStatus,EmailReplyButton,EmailReplyModal,EmailSchedulesButton,EmailSchedulesModal,EmailSchedulesRelatedButton,EmailSchedulesRelatedModal,EmailSchedulesView]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleEmails)}();exports.ModuleEmails=ModuleEmails;