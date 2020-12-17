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
 * release: 2020.04.001
 * date: 2020-12-17 10:42:52
 * build: 2020.04.001.1608198172998
 **/
"use strict";var __extends=this&&this.__extends||function(){var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])})(e,t)};return function(e,t){function s(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),__decorate=this&&this.__decorate||function(e,t,s,a){var i,l=arguments.length,n=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,a);else for(var o=e.length-1;0<=o;o--)(i=e[o])&&(n=(l<3?i(n):3<l?i(t,s,n):i(t,s))||n);return 3<l&&n&&Object.defineProperty(t,s,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(s,a){return function(e,t){a(e,t,s)}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModuleSpiceAttachments=exports.fieldModelAttachment=exports.SpiceAttachmentStats=exports.SpiceAttachmentsEditModal=exports.fieldSpiceAttachmentsCount=exports.SpiceAttachmentsCount=exports.SpiceAttachmentAddImageModal=exports.SpiceAttachmentFile=exports.SpiceAttachmentsPopupList=exports.SpiceAttachmentsList=exports.SpiceAttachmentsPanelHeader=exports.SpiceAttachmentsPanel=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),services_1=require("../../services/services"),rxjs_1=require("rxjs"),router_1=require("@angular/router"),SpiceAttachmentsPanel=function(){function SpiceAttachmentsPanel(e,t,s,a,i,l,n,o,c,d){this._modelattachments=e,this.parentmodelattachments=t,this.language=s,this.modal=a,this.model=i,this.renderer=l,this.toast=n,this.metadata=o,this.modalservice=c,this.injector=d,this.uploadfiles=[],this.attachmentsLoaded=new core_1.EventEmitter,this.componentconfig={},this._modelattachments.module=this.model.module,this._modelattachments.id=this.model.id}return Object.defineProperty(SpiceAttachmentsPanel.prototype,"modelattachments",{get:function(){return this.parentmodelattachments&&this.parentmodelattachments.module==this.model.module&&this.parentmodelattachments.id==this.model.id?this.parentmodelattachments:this._modelattachments},enumerable:!1,configurable:!0}),Object.defineProperty(SpiceAttachmentsPanel.prototype,"editing",{get:function(){return this.model.isEditing},enumerable:!1,configurable:!0}),SpiceAttachmentsPanel.prototype.loadFiles=function(){var t=this;this.modelattachments.getAttachments().subscribe(function(e){t.attachmentsLoaded.emit(!0),t.loadInputFiles()})},SpiceAttachmentsPanel.prototype.loadInputFiles=function(){this.modelattachments.uploadAttachmentsBase64FromArray(this.uploadfiles)},SpiceAttachmentsPanel.prototype.ngAfterViewInit=function(){var e=this;this.parentmodelattachments||setTimeout(function(){return e.loadFiles()},10)},SpiceAttachmentsPanel.prototype.preventdefault=function(e){(1<=e.dataTransfer.items.length&&this.hasOneItemsFile(e.dataTransfer.items)||0<e.dataTransfer.files.length)&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy")},SpiceAttachmentsPanel.prototype.hasOneItemsFile=function(e){for(var t=0,s=e;t<s.length;t++){if("file"==s[t].kind)return!0}return!1},SpiceAttachmentsPanel.prototype.onDrop=function(e){this.preventdefault(e);var t=e.dataTransfer.files;t&&1<=t.length&&this.doupload(t)},SpiceAttachmentsPanel.prototype.fileDrop=function(e){e&&1<=e.length&&this.doupload(e)},SpiceAttachmentsPanel.prototype.selectFile=function(){var e=new MouseEvent("click",{bubbles:!0});this.fileupload.element.nativeElement.dispatchEvent(e)},SpiceAttachmentsPanel.prototype.uploadFile=function(){var e=this.fileupload.element.nativeElement.files;this.doupload(e)},SpiceAttachmentsPanel.prototype.doupload=function(e){this.modelattachments.uploadAttachmentsBase64(e)},SpiceAttachmentsPanel.prototype.addImage=function(){this.modal.openModal("SpiceAttachmentAddImageModal",!0,this.injector)},__decorate([core_1.ViewChild("fileupload",{read:core_1.ViewContainerRef,static:!1}),__metadata("design:type",core_1.ViewContainerRef)],SpiceAttachmentsPanel.prototype,"fileupload",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],SpiceAttachmentsPanel.prototype,"attachmentsLoaded",void 0),SpiceAttachmentsPanel=__decorate([core_1.Component({template:'<div class="slds-box slds-m-around--xx-small" (system-drop-file)="fileDrop($event)"><div><div class="slds-card__body--inner slds-grid slds-wrap slds-grid--pull-padded"><spice-attachment-file *ngFor="let file of modelattachments.files" [modelattachments]="modelattachments" [file]="file" class="slds-media slds-size--1-of-1"></spice-attachment-file></div><div *ngIf="modelattachments.loading" class="slds-p-around--x-small slds-align--absolute-center"><div class="slds-grid slds-grid--vertical-align-center"><system-spinner size="14"></system-spinner><system-label class="slds-p-left--x-small" label="LBL_INITIALIZING"></system-label></div></div></div><div *ngIf="editing && !componentconfig.disableupload && !modelattachments.loading" class="slds-grid slds-grid--align-center slds-grid--vertical-align-center slds-gutters_direct-xx-small"><div class="slds-col"><system-label label="LBL_DROP_FILES"></system-label></div><div class="slds-col"><system-label label="LBL_OR"></system-label></div><button *ngIf="!componentconfig.disableupload" class="slds-col slds-button slds-button--neutral" (click)="selectFile()"><system-label label="LBL_UPLOAD_FILES"></system-label></button><div class="slds-col"><system-label label="LBL_OR"></system-label></div><button *ngIf="!componentconfig.disableupload" class="slds-col slds-button slds-button--neutral" (click)="addImage()"><system-label label="LBL_ADD_IMAGE"></system-label></button> <input #fileupload style="display:none" type="file" multiple (click)="fileupload.value = null" (change)="uploadFile()"></div></div>',providers:[services_1.modelattachments]}),__param(1,core_1.Optional()),__param(1,core_1.SkipSelf()),__metadata("design:paramtypes",[services_1.modelattachments,services_1.modelattachments,services_1.language,services_1.modal,services_1.model,core_1.Renderer2,services_1.toast,services_1.metadata,services_1.modal,core_1.Injector])],SpiceAttachmentsPanel)}();exports.SpiceAttachmentsPanel=SpiceAttachmentsPanel;var SpiceAttachmentsPanelHeader=function(){function SpiceAttachmentsPanelHeader(e,t,s,a){var i=this;this.model=e,this.modelattachments=t,this.language=s,this.broadcast=a,this.broadcastSubscription={},this.attachmentcount=0,this.broadcastSubscription=this.broadcast.message$.subscribe(function(e){i.handleMessage(e)})}return SpiceAttachmentsPanelHeader.prototype.ngOnInit=function(){var t=this;this.modelattachments.module=this.model.module,this.modelattachments.id=this.model.id,this.modelattachments.getCount().subscribe(function(e){t.attachmentcount=e})},Object.defineProperty(SpiceAttachmentsPanelHeader.prototype,"hasAttachments",{get:function(){return 0<this.attachmentcount},enumerable:!1,configurable:!0}),SpiceAttachmentsPanelHeader.prototype.handleMessage=function(e){if(e.messagedata.module===this.model.module||e.messagedata.id===this.model.id)switch(e.messagetype){case"attachments.loaded":this.attachmentcount=e.messagedata.attachmentcount}},SpiceAttachmentsPanelHeader.prototype.ngOnDestroy=function(){this.broadcastSubscription.unsubscribe()},SpiceAttachmentsPanelHeader=__decorate([core_1.Component({template:'<div class="slds-grid slds-grid--vertical-align-center"><span><system-label label="LBL_FILES"></system-label></span><span *ngIf="hasAttachments" class="slds-badge slds-theme_warning slds-m-horizontal--xx-small">{{attachmentcount}}</span></div>',providers:[services_1.modelattachments]}),__metadata("design:paramtypes",[services_1.model,services_1.modelattachments,services_1.language,services_1.broadcast])],SpiceAttachmentsPanelHeader)}();exports.SpiceAttachmentsPanelHeader=SpiceAttachmentsPanelHeader;var SpiceAttachmentsList=function(){function SpiceAttachmentsList(e,t,s,a){this.modelattachments=e,this.language=t,this.model=s,this.cdRef=a,this.componentconfig={},this.modelattachments.module=this.model.module,this.modelattachments.id=this.model.id}return SpiceAttachmentsList.prototype.loadFiles=function(){var t=this;this.modelattachments.getAttachments().subscribe(function(e){t.cdRef.detectChanges()})},SpiceAttachmentsList.prototype.ngAfterViewInit=function(){var e=this;setTimeout(function(){return e.loadFiles()},10)},SpiceAttachmentsList=__decorate([core_1.Component({template:'<div *ngIf="modelattachments.files.length > 0" class="slds-m-vertical--xx-small slds-card__body--inner slds-grid slds-wrap slds-grid--pull-padded"><spice-attachment-file *ngFor="let file of modelattachments.files" [modelattachments]="modelattachments" [file]="file" [editmode]="false" class="slds-media slds-size--1-of-1"></spice-attachment-file></div>',providers:[services_1.modelattachments],changeDetection:core_1.ChangeDetectionStrategy.OnPush}),__metadata("design:paramtypes",[services_1.modelattachments,services_1.language,services_1.model,core_1.ChangeDetectorRef])],SpiceAttachmentsList)}();exports.SpiceAttachmentsList=SpiceAttachmentsList;var SpiceAttachmentsPopupList=function(){function SpiceAttachmentsPopupList(e,t,s){this.modelattachments=e,this.language=t,this.model=s,this.componentconfig={},this.modelattachments.module=this.model.module,this.modelattachments.id=this.model.id}return SpiceAttachmentsPopupList.prototype.ngOnInit=function(){this.modelattachments.getAttachments()},SpiceAttachmentsPopupList=__decorate([core_1.Component({template:'<div class="slds-p-around--x-small"><div *ngFor="let file of modelattachments.files" class="slds-p-vertical--x-small"><spice-attachment-file [file]="file" [modelattachments]="modelattachments" [editmode]="false" class="slds-media slds-size--1-of-1"></spice-attachment-file></div></div>',providers:[services_1.modelattachments]}),__metadata("design:paramtypes",[services_1.modelattachments,services_1.language,services_1.model])],SpiceAttachmentsPopupList)}();exports.SpiceAttachmentsPopupList=SpiceAttachmentsPopupList;var SpiceAttachmentFile=function(){function e(e,t,s,a,i){this.userpreferences=e,this.modal=t,this.toast=s,this.helper=a,this.injector=i,this.file={},this.editmode=!0}return Object.defineProperty(e.prototype,"humanFileSize",{get:function(){return this.modelattachments.humanFileSize(this.file.filesize)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"filedate",{get:function(){return this.file.date?this.file.date.format(this.userpreferences.getDateFormat()):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uploading",{get:function(){return this.file.hasOwnProperty("uploadprogress")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progressbarstyle",{get:function(){return{width:this.file.uploadprogress+"%"}},enumerable:!1,configurable:!0}),e.prototype.downloadFile=function(){this.uploading||this.modelattachments.downloadAttachment(this.file.id,this.file.filename)},e.prototype.previewFile=function(e){var s=this;if(e.preventDefault(),e.stopPropagation(),this.uploading)this.toast.sendToast("upload still in progress","info");else if(this.file.file_mime_type){var t=this.file.file_mime_type.toLowerCase().split("/");switch(t[0].trim()){case"image":this.modal.openModal("SystemImagePreviewModal").subscribe(function(t){t.instance.imgname=s.file.filename,t.instance.imgtype=s.file.file_mime_type.toLowerCase(),s.modelattachments.getAttachment(s.file.id).subscribe(function(e){t.instance.imgsrc="data:"+s.file.file_mime_type.toLowerCase()+";base64,"+e},function(e){t.instance.loadingerror=!0})});break;case"text":case"audio":case"video":this.modal.openModal("SystemObjectPreviewModal").subscribe(function(t){t.instance.name=s.file.filename,t.instance.type=s.file.file_mime_type.toLowerCase(),s.modelattachments.getAttachment(s.file.id).subscribe(function(e){t.instance.data=atob(e)},function(e){t.instance.loadingerror=!0})});break;case"application":switch(t[1]){case"pdf":this.modal.openModal("SystemObjectPreviewModal").subscribe(function(t){t.instance.name=s.file.filename,t.instance.type=s.file.file_mime_type.toLowerCase(),s.modelattachments.getAttachment(s.file.id).subscribe(function(e){t.instance.data=atob(e)},function(e){t.instance.loadingerror=!0})});break;default:switch(this.file.filename.split(".").splice(-1,1)[0].toLowerCase()){case"msg":this.modal.openModal("EmailPreviewModal",!0,this.injector).subscribe(function(e){e.instance.name=s.file.filename,e.instance.type=s.file.file_mime_type.toLowerCase(),e.instance.file=s.file});break;default:this.downloadFile()}}break;default:this.downloadFile()}}},e.prototype.deleteFile=function(){this.editmode&&this.modelattachments.deleteAttachment(this.file.id)},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"file",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],e.prototype,"editmode",void 0),__decorate([core_1.Input(),__metadata("design:type",services_1.modelattachments)],e.prototype,"modelattachments",void 0),e=__decorate([core_1.Component({selector:"spice-attachment-file",template:'<div style="width: 30px; height: 30px;" class="slds-m-right--x-small slds-align--absolute-center"><system-file-icon *ngIf="!file.thumbnail" [filename]="file.filename" divClass [filemimetype]="file.file_mime_type" size="small"></system-file-icon><div *ngIf="file.thumbnail"><img [src]="\'data:image/jpg;base64,\' + file.thumbnail"></div></div><div class="slds-media__body"><div class="slds-grid slds-grid_vertical-align-center slds-grid--align-spread slds-has-flexi-truncate"><h3 class="slds-truncate slds-text-heading--x-small slds-p-right--xxx-small" (click)="previewFile($event)"><a href="javascript:void(0);">{{file.filename}}</a></h3><div *ngIf="!uploading && editmode" class="slds-shrink-none"><button class="slds-button slds-button--icon" (click)="deleteFile()"><system-button-icon icon="clear"></system-button-icon></button></div></div><div *ngIf="!uploading" class="slds-tile__detail slds-text-body--small"><ul class="slds-list--horizontal slds-has-dividers--left"><li class="slds-item">{{filedate}}</li><li class="slds-item">{{humanFileSize}}</li></ul></div><div *ngIf="uploading" class="slds-grid slds-grid_vertical-align-center slds-grid--align-spread slds-has-flexi-truncate"><div class="slds-progress-bar"><span class="slds-progress-bar__value" [ngStyle]="progressbarstyle"><span class="slds-assistive-text">Progress: 25%</span></span></div><div class="slds-text-align--right" style="width: 50px;">{{file.uploadprogress}} %</div></div></div>'}),__metadata("design:paramtypes",[services_1.userpreferences,services_1.modal,services_1.toast,services_1.helper,core_1.Injector])],e)}();exports.SpiceAttachmentFile=SpiceAttachmentFile;var SpiceAttachmentAddImageModal=function(){function SpiceAttachmentAddImageModal(e,t){this.language=e,this.modelattachments=t,this.filecontent="",this.imagedata=new core_1.EventEmitter}return SpiceAttachmentAddImageModal.prototype.close=function(){this.self.destroy()},SpiceAttachmentAddImageModal.prototype.add=function(){var e=this.inputMedia.mediaMetaData;this.modelattachments.uploadFileBase64(this.filecontent.substring(this.filecontent.indexOf("base64,")+7),e.filename,e.mimetype),this.self.destroy()},__decorate([core_1.ViewChild(systemcomponents_1.SystemInputMedia,{static:!1}),__metadata("design:type",Object)],SpiceAttachmentAddImageModal.prototype,"inputMedia",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],SpiceAttachmentAddImageModal.prototype,"imagedata",void 0),SpiceAttachmentAddImageModal=__decorate([core_1.Component({template:'<system-modal><system-modal-header (close)="close()">Add Image</system-modal-header><system-modal-content margin="xx-small"><system-input-media [(ngModel)]="filecontent"></system-input-media></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="close()"><system-label label="LBL_CANCEL"></system-label></button> <button class="slds-button slds-button--brand" [disabled]="!filecontent" (click)="add()"><system-label label="LBL_ADD"></system-label></button></system-modal-footer></system-modal>'}),__metadata("design:paramtypes",[services_1.language,services_1.modelattachments])],SpiceAttachmentAddImageModal)}();exports.SpiceAttachmentAddImageModal=SpiceAttachmentAddImageModal;var SpiceAttachmentsCount=function(){function SpiceAttachmentsCount(e,t,s,a,i,l){this.metadata=e,this.modelattachments=t,this.parentmodelattachments=s,this.language=a,this.model=i,this.cdRef=l,this.subscriptions=new rxjs_1.Subscription,this.modelattachments.module=this.model.module,this.modelattachments.id=this.model.id}return SpiceAttachmentsCount.prototype.ngAfterViewInit=function(){var t=this;this.modelHasAttachmentcount()||(this.parentmodelattachments?this.subscriptions.add(this.parentmodelattachments.getCount().subscribe(function(e){t.cdRef.detectChanges()})):this.subscriptions.add(this.modelattachments.getCount().subscribe(function(e){t.cdRef.detectChanges()})))},SpiceAttachmentsCount.prototype.modelHasAttachmentcount=function(){return!!this.metadata.getModuleFields(this.model.module).attachments_count},SpiceAttachmentsCount.prototype.ngOnDestroy=function(){this.subscriptions.unsubscribe()},Object.defineProperty(SpiceAttachmentsCount.prototype,"count",{get:function(){return this.modelHasAttachmentcount()?this.model.getField("attachments_count"):this.parentmodelattachments?this.parentmodelattachments.count:this.modelattachments.count},enumerable:!1,configurable:!0}),SpiceAttachmentsCount=__decorate([core_1.Component({selector:"spice-attachments-count",template:'<system-utility-icon *ngIf="count > 0" icon="attach" size="xx-small"></system-utility-icon>',providers:[services_1.modelattachments],changeDetection:core_1.ChangeDetectionStrategy.OnPush}),__param(2,core_1.Optional()),__param(2,core_1.SkipSelf()),__metadata("design:paramtypes",[services_1.metadata,services_1.modelattachments,services_1.modelattachments,services_1.language,services_1.model,core_1.ChangeDetectorRef])],SpiceAttachmentsCount)}();exports.SpiceAttachmentsCount=SpiceAttachmentsCount;var fieldSpiceAttachmentsCount=function(o){function fieldSpiceAttachmentsCount(e,t,s,a,i,l){var n=o.call(this,e,t,s,a,i)||this;return n.model=e,n.view=t,n.language=s,n.metadata=a,n.router=i,n.injector=l,n}return __extends(fieldSpiceAttachmentsCount,o),Object.defineProperty(fieldSpiceAttachmentsCount.prototype,"popovercomponentset",{get:function(){return this.fieldconfig.popovercomponentset},enumerable:!1,configurable:!0}),fieldSpiceAttachmentsCount=__decorate([core_1.Component({template:'<field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display [fielddisplayclass]="fielddisplayclass" [fieldconfig]="fieldconfig" [editable]="false"><div [system-pop-over]="{injector: injector, componentset: popovercomponentset}"><spice-attachments-count></spice-attachments-count></div></field-generic-display>'}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router,core_1.Injector])],fieldSpiceAttachmentsCount)}(objectfields_1.fieldGeneric);exports.fieldSpiceAttachmentsCount=fieldSpiceAttachmentsCount;var SpiceAttachmentsEditModal=function(){function SpiceAttachmentsEditModal(e,t,s,a,i){this.configurationService=e,this.toast=t,this.language=s,this.model=a,this.backend=i,this.attachment={},this.inputData={},this.categories=[],this.self={}}return SpiceAttachmentsEditModal.prototype.ngOnInit=function(){var t=this;if(this.configurationService.getData("spiceattachments_categories"))return this.categories=this.configurationService.getData("spiceattachments_categories");this.backend.getRequest("spiceAttachments/categories/"+this.model.module).subscribe(function(e){e&&Array.isArray(e)&&(t.categories=e,t.configurationService.setData("spiceattachments_categories",e))})},SpiceAttachmentsEditModal.prototype.close=function(){this.self.destroy()},SpiceAttachmentsEditModal.prototype.save=function(){var t=this,e={category_ids:this.inputData.category_ids.join(","),text:this.inputData.text,display_name:this.inputData.display_name};this.backend.postRequest("spiceAttachments/"+this.attachment.id,{},e).subscribe(function(e){e&&e.success?(t.inputData.category_ids&&t.inputData.category_ids.join(",")!=t.attachment.category_ids&&(t.attachment.category_ids=t.inputData.category_ids.join(",")),t.inputData.text!=t.attachment.text&&(t.attachment.text=t.inputData.text),t.inputData.display_name!=t.attachment.display_name&&(t.attachment.display_name=t.inputData.display_name),t.toast.sendToast(t.language.getLabel("LBL_DATA_SAVED"),"success")):t.toast.sendToast(t.language.getLabel("ERR_FAILED_TO_EXECUTE"),"error"),t.self.destroy()},function(){t.toast.sendToast(t.language.getLabel("ERR_NETWORK"),"error"),t.self.destroy()})},SpiceAttachmentsEditModal=__decorate([core_1.Component({template:'<system-modal><system-modal-header (close)="close()"><system-label label="LBL_EDIT"></system-label></system-modal-header><system-modal-content><div class="slds-form-element"><label class="slds-form-element__label"><system-label label="LBL_FILE_NAME"></system-label></label><div class="slds-form-element__control"><input type="text" class="slds-input" [(ngModel)]="attachment.filename" disabled></div></div><div class="slds-form-element"><label class="slds-form-element__label"><system-label label="LBL_DISPLAY_NAME"></system-label></label><div class="slds-form-element__control"><input type="text" class="slds-input" [(ngModel)]="inputData.display_name"></div></div><div class="slds-form-element slds-p-horizontal--xx-small"><label class="slds-form-element__label"><system-label label="LBL_CATEGORIES"></system-label></label><system-checkbox-group [(ngModel)]="inputData.category_ids"><div *ngFor="let category of categories" [system-title]="category.label" class="slds-large-size--1-of-3 slds-medium-size--1-of-1 slds-truncate"><system-checkbox-group-checkbox [value]="category.id"><system-label [label]="category.label" class="slds-m-left--xx-small"></system-label></system-checkbox-group-checkbox></div></system-checkbox-group></div><div class="slds-form-element slds-p-horizontal--xx-small"><label class="slds-form-element__label"><system-label label="LBL_TEXT"></system-label></label><div class="slds-form-element__control"><textarea style="height:250px" class="slds-textarea slds-scrollable--y slds-m-vertical--xx-small" [(ngModel)]="inputData.text"></textarea></div></div></system-modal-content><system-modal-footer><div class="slds-grid"><button class="slds-button slds-button--neutral" (click)="close()"><system-label label="LBL_CANCEL"></system-label></button> <button class="slds-button slds-button--brand" (click)="save()"><system-label label="LBL_SAVE"></system-label></button></div></system-modal-footer></system-modal>',changeDetection:core_1.ChangeDetectionStrategy.OnPush}),__metadata("design:paramtypes",[services_1.configurationService,services_1.toast,services_1.language,services_1.model,services_1.backend])],SpiceAttachmentsEditModal)}();exports.SpiceAttachmentsEditModal=SpiceAttachmentsEditModal;var SpiceAttachmentStats=function(){function SpiceAttachmentStats(e){this.backend=e,this.analysisresults=[],this.analyze()}return SpiceAttachmentStats.prototype.analyze=function(){var s=this;this.analysisresults=[],this.backend.getRequest("spiceAttachments/admin").subscribe(function(e){for(var t in e)s.analysisresults.push({module:t,count:e[t]})})},Object.defineProperty(SpiceAttachmentStats.prototype,"totalcount",{get:function(){for(var e=0,t=0,s=this.analysisresults;t<s.length;t++){var a=s[t];e+=parseInt(a.count,10)}return e},enumerable:!1,configurable:!0}),SpiceAttachmentStats.prototype.delete=function(){var t=this;this.backend.postRequest("spiceAttachments/admin/cleanup").subscribe(function(e){t.analyze()})},SpiceAttachmentStats=__decorate([core_1.Component({template:'<div class="slds-grid slds-grid_vertical-align-center slds-p-around--small"><h2 class="slds-text-heading_medium"><system-label label="LBL_SPICEATTACHMENTS_ERRONEOUS"></system-label></h2><button class="slds-col--bump-left slds-button slds-button_icon slds-button_icon-border-filled" (click)="delete()"><system-button-icon icon="delete"></system-button-icon></button> <button class="slds-button slds-button_icon slds-button_icon-border-filled" (click)="analyze()"><system-button-icon icon="refresh"></system-button-icon></button></div><div class="slds-border--top" system-to-bottom><table class="slds-table slds-table_bordered slds-table_cell-buffer slds-table--header-fixed"><thead><tr class="slds-text-title_caps"><th scope="col"><div class="slds-truncate">Module</div></th><th scope="col"><div class="slds-truncate">Records</div></th></tr></thead><tbody><tr *ngFor="let statrecord of analysisresults"><td><div class="slds-truncate">{{statrecord.module}}</div></td><td><div class="slds-truncate">{{statrecord.count}}</div></td></tr><tr class="slds-theme--alt-inverse"><td><div class="slds-truncate"><system-label label="LBL_TOTAL"></system-label></div></td><td><div class="slds-truncate">{{totalcount}}</div></td></tr></tbody></table></div>'}),__metadata("design:paramtypes",[services_1.backend])],SpiceAttachmentStats)}();exports.SpiceAttachmentStats=SpiceAttachmentStats;var fieldModelAttachment=function(m){function fieldModelAttachment(e,t,s,a,i,l,n,o,c,d){var r=m.call(this,e,t,s,a,i)||this;return r.model=e,r.view=t,r.language=s,r.metadata=a,r.router=i,r.injector=l,r.modelattachments=n,r.modal=o,r.helper=c,r.backend=d,r}return __extends(fieldModelAttachment,m),Object.defineProperty(fieldModelAttachment.prototype,"file",{get:function(){return this.modelattachments.files[0]},enumerable:!1,configurable:!0}),Object.defineProperty(fieldModelAttachment.prototype,"uploading",{get:function(){var e;return null===(e=this.file)||void 0===e?void 0:e.hasOwnProperty("uploadprogress")},enumerable:!1,configurable:!0}),Object.defineProperty(fieldModelAttachment.prototype,"progressbarstyle",{get:function(){return{width:this.file.uploadprogress+"%"}},enumerable:!1,configurable:!0}),Object.defineProperty(fieldModelAttachment.prototype,"mime_type",{get:function(){return this.model.getFieldValue(this.prefix+"_mime_type")},enumerable:!1,configurable:!0}),Object.defineProperty(fieldModelAttachment.prototype,"prefix",{get:function(){return"filename"==this.fieldname?"file":this.fieldname.substring(0,this.fieldname.length-5)},enumerable:!1,configurable:!0}),fieldModelAttachment.prototype.getAttachment=function(){var t=new rxjs_1.Subject;return this.backend.getRequest("spiceAttachments/module/"+this.model.module+"/"+this.model.id+"/byfield/"+this.prefix).subscribe(function(e){t.next(e.file),t.complete()},function(e){t.error(e),t.complete()}),t.asObservable()},fieldModelAttachment.prototype.previewFile=function(e){var s=this;if(e.preventDefault(),e.stopPropagation(),this.mime_type){var t=this.mime_type.toLowerCase().split("/");switch(t[0].trim()){case"image":this.modal.openModal("SystemImagePreviewModal").subscribe(function(t){t.instance.imgname=s.value,t.instance.imgtype=s.mime_type.toLowerCase(),s.getAttachment().subscribe(function(e){t.instance.imgsrc="data:"+s.mime_type.toLowerCase()+";base64,"+e},function(e){t.instance.loadingerror=!0})});break;case"text":case"audio":case"video":this.modal.openModal("SystemObjectPreviewModal").subscribe(function(t){t.instance.name=s.value,t.instance.type=s.mime_type.toLowerCase(),s.getAttachment().subscribe(function(e){t.instance.data=atob(e)},function(e){t.instance.loadingerror=!0})});break;case"application":switch(t[1]){case"pdf":this.modal.openModal("SystemObjectPreviewModal").subscribe(function(t){t.instance.name=s.value,t.instance.type=s.mime_type.toLowerCase(),s.getAttachment().subscribe(function(e){t.instance.data=atob(e)},function(e){t.instance.loadingerror=!0})});break;default:this.downloadFile()}break;default:this.downloadFile()}}},fieldModelAttachment.prototype.removeFile=function(){0<this.modelattachments.files.length&&(this.modelattachments.files=[]);var e={};e[this.fieldname]=void 0,e[this.prefix+"_size"]=void 0,e[this.prefix+"_mime_type"]=void 0,e[this.prefix+"_md5"]=void 0,this.model.setFields(e)},fieldModelAttachment.prototype.onDrop=function(e){e&&1<=e.length&&this.doupload(e)},fieldModelAttachment.prototype.uploadFile=function(){var e=this.fileupload.element.nativeElement.files;this.doupload(e)},fieldModelAttachment.prototype.downloadFile=function(){this.modelattachments.downloadAttachmentForField(this.model.module,this.model.id,this.prefix,this.value)},fieldModelAttachment.prototype.doupload=function(e){var s=this;this.modelattachments.uploadAttachmentsBase64(e).subscribe(function(e){},function(e){},function(){var e=s.modelattachments.files[0],t={};t[s.fieldname]=e.filename,t[s.prefix+"_size"]=e.filesize,t[s.prefix+"_mime_type"]=e.file_mime_type,t[s.prefix+"_md5"]=e.filemd5,s.model.setFields(t)})},__decorate([core_1.ViewChild("fileupload",{read:core_1.ViewContainerRef,static:!1}),__metadata("design:type",core_1.ViewContainerRef)],fieldModelAttachment.prototype,"fileupload",void 0),fieldModelAttachment=__decorate([core_1.Component({template:'<field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display *ngIf="!isEditMode()" [fielddisplayclass]="fielddisplayclass" [editable]="isEditable()" [fieldconfig]="fieldconfig" [title]="value" [fieldid]="fieldid"><div class="slds-grid slds-grid--vertical-align-center"><system-file-icon *ngIf="value" [filemimetype]="model.getField(\'file_mime_type\')" [filename]="value" divClass="slds-p-right--xx-small" size="x-small"></system-file-icon><div class="slds-truncate slds-grow"><a href="javascript:void(0);" (click)="previewFile($event)">{{value}}</a></div></div></field-generic-display><div *ngIf="isEditable() && isEditMode()" class="slds-form-element__control slds-p-vertical--xxx-small" [ngClass]="getFieldClass()"><div *ngIf="value" class="slds-pill_container slds-size--1-of-1 slds-m-vertical--xxx-small"><div class="slds-pill slds-pill_link slds-size--1-of-1"><span class="slds-pill__icon_container"><span class="slds-icon_container slds-icon-standard-account" title="Account"><system-icon [icon]="helper.determineFileIcon(mime_type)" divClass sprite="doctype" size="x-small"></system-icon></span></span> <a href="javascript:void(0);" class="slds-pill__action"><span class="slds-pill__label">{{value}}</span></a> <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove" (click)="removeFile()"><system-button-icon icon="close"></system-button-icon></button></div></div><div *ngIf="uploading" class="slds-p-around--x-small slds-grid slds-grid_vertical-align-center slds-grid--align-spread slds-has-flexi-truncate"><div class="slds-progress-bar"><span class="slds-progress-bar__value" [ngStyle]="progressbarstyle"></span></div><div class="slds-text-align--right" style="width: 50px;">{{file.uploadprogress}} %</div></div><div *ngIf="!value && !uploading" class="slds-file-selector slds-file-selector_files"><div class="slds-file-selector__dropzone" (system-drop-file)="onDrop($event)"><input #fileupload type="file" (click)="fileupload.value = null" class="slds-file-selector__input slds-assistive-text" [id]="fieldid" (change)="uploadFile()"> <label class="slds-file-selector__body" [attr.for]="fieldid"><span class="slds-file-selector__button slds-button slds-button_neutral"><system-button-icon [icon]="\'upload\'"></system-button-icon><system-label label="LBL_UPLOAD_FILES"></system-label></span> <span class="slds-file-selector__text slds-medium-show"><system-label label="LBL_OR"></system-label> <system-label label="LBL_DROP_FILES"></system-label></span></label></div></div><field-messages [fieldname]="fieldname"></field-messages></div>',providers:[services_1.modelattachments]}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router,core_1.Injector,services_1.modelattachments,services_1.modal,services_1.helper,services_1.backend])],fieldModelAttachment)}(objectfields_1.fieldGeneric);exports.fieldModelAttachment=fieldModelAttachment;var ModuleSpiceAttachments=function(){function ModuleSpiceAttachments(){}return ModuleSpiceAttachments=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[SpiceAttachmentsPanel,SpiceAttachmentsPanelHeader,SpiceAttachmentFile,SpiceAttachmentAddImageModal,SpiceAttachmentsList,SpiceAttachmentsPopupList,SpiceAttachmentsCount,fieldSpiceAttachmentsCount,SpiceAttachmentsEditModal,SpiceAttachmentStats,fieldModelAttachment]})],ModuleSpiceAttachments)}();exports.ModuleSpiceAttachments=ModuleSpiceAttachments;