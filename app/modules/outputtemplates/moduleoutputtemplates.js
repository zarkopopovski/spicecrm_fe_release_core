/** 
 * © 2015 - 2020 aac services k.s. All rights reserved.
 * release: 2020.04.001
 * date: 2020-12-17 12:49:07
 * build: 2020.04.001.1608205747102
 **/
"use strict";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])})(e,t)};return function(e,t){function s(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),__decorate=this&&this.__decorate||function(e,t,s,o){var l,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,o);else for(var n=e.length-1;0<=n;n--)(l=e[n])&&(a=(i<3?l(a):3<i?l(t,s,a):l(t,s))||a);return 3<i&&a&&Object.defineProperty(t,s,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModuleOutputTemplates=exports.fieldOutputTemplates=exports.ObjectActionOutputBeanModal=exports.ObjectActionOutputBeanModalEmailContent=exports.ObjectActionOutputBeanButton=exports.OutputTemplatesPreviewSelector=exports.OutputTemplatesPreview=exports.OutputTemplatesEditor=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),services_1=require("../../services/services"),platform_browser_1=require("@angular/platform-browser"),rxjs_1=require("rxjs"),animations_1=require("@angular/animations"),router_1=require("@angular/router"),OutputTemplatesEditor=function(){function OutputTemplatesEditor(e,t,s){this.language=e,this.metadata=t,this.model=s,this.selectedTab="body",this.componentconfig={}}return Object.defineProperty(OutputTemplatesEditor.prototype,"bodyfieldset",{get:function(){return this.componentconfig.body},enumerable:!1,configurable:!0}),Object.defineProperty(OutputTemplatesEditor.prototype,"headerfieldset",{get:function(){return this.componentconfig.header},enumerable:!1,configurable:!0}),Object.defineProperty(OutputTemplatesEditor.prototype,"footerfieldset",{get:function(){return this.componentconfig.footer},enumerable:!1,configurable:!0}),__decorate([core_1.Component({template:'<system-collapsable-tab tabtitle="LBL_CONTENT"><div class="slds-tabs_scoped slds-p-around--x-small"><ul class="slds-tabs_scoped__nav" role="tablist"><li class="slds-tabs_scoped__item" [ngClass]="{\'slds-is-active\': selectedTab == \'body\'}" [title]="language.getLabel(\'LBL_CONTENT\')" (click)="selectedTab=\'body\'" role="presentation"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab"><system-label label="LBL_CONTENT"></system-label></a></li><li class="slds-tabs_scoped__item" [ngClass]="{\'slds-is-active\': selectedTab == \'header\'}" [title]="language.getLabel(\'LBL_HEADER\')" (click)="selectedTab=\'header\'" role="presentation"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab"><system-label label="LBL_HEADER"></system-label></a></li><li class="slds-tabs_scoped__item" [ngClass]="{\'slds-is-active\': selectedTab == \'footer\'}" [title]="language.getLabel(\'LBL_FOOTER\')" (click)="selectedTab=\'footer\'" role="presentation"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab"><system-label label="LBL_FOOTER"></system-label></a></li><li class="slds-tabs_scoped__item" [ngClass]="{\'slds-is-active\': selectedTab == \'preview\'}" [title]="language.getLabel(\'LBL_PREVIEW\')" (click)="selectedTab=\'preview\'" role="presentation"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab"><system-label label="LBL_PREVIEW"></system-label></a></li></ul><div class="slds-tabs_scoped__content" [ngClass]="{\'slds-show\': selectedTab == \'body\', \'slds-hide\': selectedTab != \'body\'}" role="tabpanel"><object-record-fieldset [fieldset]="bodyfieldset" direction="vertical"></object-record-fieldset></div><div class="slds-tabs_scoped__content" [ngClass]="{\'slds-show\': selectedTab == \'header\', \'slds-hide\': selectedTab != \'header\'}" role="tabpanel"><object-record-fieldset [fieldset]="headerfieldset" direction="vertical"></object-record-fieldset></div><div class="slds-tabs_scoped__content" [ngClass]="{\'slds-show\': selectedTab == \'footer\', \'slds-hide\': selectedTab != \'footer\'}" role="tabpanel"><object-record-fieldset [fieldset]="footerfieldset" direction="vertical"></object-record-fieldset></div><div class="slds-tabs_scoped__content" [ngClass]="{\'slds-show\': selectedTab == \'preview\', \'slds-hide\': selectedTab != \'preview\'}" role="tabpanel"><output-templates-preview></output-templates-preview></div></div></system-collapsable-tab>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model])],OutputTemplatesEditor)}();exports.OutputTemplatesEditor=OutputTemplatesEditor;var OutputTemplatesPreview=function(){function e(e,t,s,o,l,i,a){var n=this;this.language=e,this.backend=t,this.metadata=s,this.model=o,this.modal=l,this.sanitizer=i,this.cdRef=a,this._outputformat="pdf",this.loading_output=!1,this.subscriptions=new rxjs_1.Subscription,this.compiled_selected_template="",this.model.data$.subscribe(function(e){n.checkModelChanges()})}return e.prototype.ngOnDestroy=function(){this.subscriptions.unsubscribe()},Object.defineProperty(e.prototype,"sanitizedTemplated",{get:function(){return this.sanitizer.bypassSecurityTrustHtml(this.compiled_selected_template)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outputformat",{get:function(){return this._outputformat},set:function(e){this._outputformat=e,this.rendertemplate()},enumerable:!1,configurable:!0}),e.prototype.checkModelChanges=function(){this.selectedItem&&this.selectedItem.module!=this.module&&this.clearField()},Object.defineProperty(e.prototype,"module",{get:function(){return this.model.getField("module_name")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"placeholder",{get:function(){return this.module?this.language.getModuleCombinedLabel("LBL_SEARCH",this.module):this.language.getLabel("LBL_SEARCH")},enumerable:!1,configurable:!0}),e.prototype.searchWithModal=function(){var t=this;this.modal.openModal("ObjectModalModuleLookup").subscribe(function(e){e.instance.module=t.module,e.instance.multiselect=!1,t.subscriptions.add(e.instance.selectedItems.subscribe(function(e){e.length&&(t.selectedItem={id:e[0].id,summary_text:e[0].summary_text,module:t.module,data:e[0]},t.blobUrl=null,t.compiled_selected_template=null,t.rendertemplate())}))})},e.prototype.clearField=function(){this.selectedItem=void 0,this.blobUrl=null,this.compiled_selected_template=null,this.cdRef.detectChanges()},e.prototype.rendertemplate=function(){var t=this;this.loading_output=!0,this.blobUrl=null,this.compiled_selected_template=null,this.cdRef.detectChanges();var e={parentype:this.module,parentid:this.selectedItem.id,body:this.model.getField("body"),header:this.model.getField("header"),footer:this.model.getField("footer"),stylesheet_id:this.model.getField("stylesheet_id"),page_orientation:this.model.getField("page_orientation"),page_size:this.model.getField("page_size"),margin_left:this.model.getField("margin_left"),margin_top:this.model.getField("margin_top"),margin_right:this.model.getField("margin_right"),margin_bottom:this.model.getField("margin_bottom")};switch(this.outputformat){case"pdf":this.backend.postRequest("OutputTemplates/previewpdf",{},e).subscribe(function(e){e=t.datatoBlob(atob(e.content));t.blobUrl=t.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(e)),t.loading_output=!1,t.cdRef.detectChanges()},function(e){t.loading_output=!1,t.cdRef.detectChanges()});break;case"html":this.backend.postRequest("OutputTemplates/previewhtml",{},e).subscribe(function(e){t.compiled_selected_template=e.content,t.loading_output=!1,t.cdRef.detectChanges()},function(e){t.loading_output=!1,t.cdRef.detectChanges()})}},e.prototype.datatoBlob=function(e,t,s){void 0===t&&(t=""),void 0===s&&(s=512);for(var o=[],l=0;l<e.length;l+=s){for(var i=e.slice(l,l+s),a=new Array(i.length),n=0;n<i.length;n++)a[n]=i.charCodeAt(n);var d=new Uint8Array(a);o.push(d)}return new Blob(o,{type:t})},__decorate([core_1.Component({selector:"output-templates-preview",template:'<div class="slds-grid slds-grid--vertical-align-end slds-gutters_direct-xx-small"><div class="slds-col slds-grow slds-form-element"><label class="slds-form-element__label">Bean</label><div class="slds-form-element__control"><div class="slds-combobox_container"><div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" role="combobox"><div class="slds-form-element__control slds-box--border"><div *ngIf="selectedItem" class="slds-form-element__control"><div class="slds-pill_container"><span class="slds-pill slds-size--1-of-1"><span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container"><system-icon [module]="module" [size]="\'small\'"></system-icon></span> <span class="slds-pill__label">{{selectedItem.summary_text}}</span> <button class="slds-button slds-button--icon slds-pill__remove" (click)="clearField()"><system-button-icon [icon]="\'close\'"></system-button-icon></button></span></div></div><div *ngIf="!selectedItem" class="slds-input-has-icon slds-input-has-icon--right slds-grow"><input [disabled]="module" type="text" class="slds-lookup__search-input slds-input--bare" (focus)="searchWithModal()" [placeholder]="placeholder" role="combobox"> <button (click)="searchWithModal()" class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"><system-button-icon [icon]="\'search\'"></system-button-icon></button></div></div></div></div></div></div><div class="slds-col slds-form-element slds-size--1-of-4"><label class="slds-form-element__labe"><system-label label="LBL_DISPLAY"></system-label></label><div class="slds-form-element__control slds-p-top--xx-small"><div class="slds-select_container"><select [disabled]="!selectedItem" class="slds-col slds-select" [(ngModel)]="outputformat"><option value="html">HTML</option><option value="pdf">PDF</option></select></div></div></div><div><button [disabled]="!selectedItem || loading_output" class="slds-button slds-button--icon slds-button--icon-border" (click)="rendertemplate()"><system-button-icon icon="refresh"></system-button-icon></button></div></div><div class="slds-m-top--small slds-border--top slds-border--right slds-border--left slds-border--bottom" style="height: calc(100vh - 300px);"><iframe *ngIf="outputformat === \'html\' && !loading_output && compiled_selected_template" frameBorder="0" style="width: 100%;height: 100%;" [srcdoc]="sanitizedTemplated"></iframe><object *ngIf="outputformat === \'pdf\' && !loading_output && blobUrl" [data]="blobUrl" type="application/pdf" width="100%" height="100%"></object><div *ngIf="loading_output" class="slds-align--absolute-center" style="height: 100%;"><system-spinner></system-spinner></div><div *ngIf="!selectedItem && !loading_output" class="slds-align--absolute-center" style="height: 100%;"><system-label label="MSG_NO_RECORD_SELECTED"></system-label></div></div>',changeDetection:core_1.ChangeDetectionStrategy.OnPush}),__metadata("design:paramtypes",[services_1.language,services_1.backend,services_1.metadata,services_1.model,services_1.modal,platform_browser_1.DomSanitizer,core_1.ChangeDetectorRef])],e)}();exports.OutputTemplatesPreview=OutputTemplatesPreview;var OutputTemplatesPreviewSelector=function(){function e(e,t,s,o){this.language=e,this.metadata=t,this.model=s,this.modal=o,this.subscriptions=new rxjs_1.Subscription}return e.prototype.ngOnDestroy=function(){this.subscriptions.unsubscribe()},Object.defineProperty(e.prototype,"module",{get:function(){return this.model.getField("module_name")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"placeholder",{get:function(){return this.language.getModuleCombinedLabel("LBL_SEARCH",this.module)},enumerable:!1,configurable:!0}),e.prototype.searchWithModal=function(){var t=this;this.modal.openModal("ObjectModalModuleLookup").subscribe(function(e){e.instance.module=t.module,e.instance.multiselect=!1,t.subscriptions.add(e.instance.selectedItems.subscribe(function(e){e.length&&(t.selectedItem=e[0])}))})},e.prototype.clearField=function(){this.selectedItem=void 0},__decorate([core_1.Component({selector:"output-templates-preview-selector",template:'<div class="slds-form-element"><label class="slds-form-element__label">Bean</label><div class="slds-form-element__control"><div class="slds-combobox_container"><div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" role="combobox"><div class="slds-form-element__control slds-box--border"><div *ngIf="selectedItem" class="slds-form-element__control"><div class="slds-pill_container"><span class="slds-pill slds-size--1-of-1"><span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container"><system-icon [module]="module" [size]="\'small\'"></system-icon></span> <span class="slds-pill__label">{{selectedItem.summary_text}}</span> <button class="slds-button slds-button--icon slds-pill__remove" (click)="clearField()"><system-button-icon [icon]="\'close\'"></system-button-icon></button></span></div></div><div *ngIf="!selectedItem" class="slds-input-has-icon slds-input-has-icon--right slds-grow"><input [disabled]="module" type="text" class="slds-lookup__search-input slds-input--bare" (focus)="searchWithModal()" [placeholder]="placeholder" role="combobox"> <button (click)="searchWithModal()" class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"><system-button-icon [icon]="\'search\'"></system-button-icon></button></div></div></div></div></div></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.modal])],e)}();exports.OutputTemplatesPreviewSelector=OutputTemplatesPreviewSelector;var ObjectActionOutputBeanButton=function(){function ObjectActionOutputBeanButton(e,t,s,o,l,i){this.language=e,this.model=t,this.modal=s,this.backend=o,this.configuration=l,this.viewContainerRef=i,this.templates=[]}return ObjectActionOutputBeanButton.prototype.execute=function(){var s=this,e=this.configuration.getData("OutputTemplates");e&&e[this.model.module]?(this.templates=e[this.model.module],this.openOutput()):(e={},this.modal.openModal("SystemLoadingModal",!1).subscribe(function(t){t.instance.messagelabel="Loading Templates",s.backend.getRequest("module/OutputTemplates/formodule/"+s.model.module,{}).subscribe(function(e){t.instance.self.destroy(),s.configuration.setData("OutputTemplates",e),s.templates=e,s.openOutput()},function(e){t.instance.self.destroy()})}))},ObjectActionOutputBeanButton.prototype.openOutput=function(){var t=this;0<this.templates.length?(this.templates.sort(function(e,t){return e.name>t.name?1:-1}),this.modal.openModal("ObjectActionOutputBeanModal",!0,this.viewContainerRef.injector).subscribe(function(e){e.instance.templates=t.templates,e.instance.modalTitle=t.modalTitle,e.instance.noDownload=t.noDownload,e.instance.handBack=t.handBack,e.instance.buttonText=t.buttonText})):this.modal.info("No Templates Found","there are no Output templates defined for the Module")},__decorate([core_1.Component({selector:"object-action-output-bean-button",template:'<span><system-label label="LBL_PDF"></system-label></span>'}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.modal,services_1.backend,services_1.configurationService,core_1.ViewContainerRef])],ObjectActionOutputBeanButton)}();exports.ObjectActionOutputBeanButton=ObjectActionOutputBeanButton;var ObjectActionOutputBeanModalEmailContent=function(){function ObjectActionOutputBeanModalEmailContent(e,t,s,o,l,i){this.language=e,this.model=t,this.metadata=s,this.modal=o,this.view=l,this.session=i,this.fieldset=null,this.filelist={},this.parent={},this.email_sent=new core_1.EventEmitter,this.sending=!1}return ObjectActionOutputBeanModalEmailContent.prototype.ngOnInit=function(){this.setModelData(),this.setViewData()},ObjectActionOutputBeanModalEmailContent.prototype.setModelData=function(){this.model.module="Emails",this.model.initialize(this.parent),this.model.data.parent_type=this.parent.module,this.model.data.parent_id=this.parent.data.id,this.model.data.parent_name=this.parent.data.name,this.model.isNew=!0,this.model.data.assigned_user_id=this.session.authData.userId,this.model.data.assigned_user_name=this.session.authData.userName,this.model.data.modified_by_id=this.session.authData.userId,this.model.data.modified_by_name=this.session.authData.userName,this.model.data.date_entered=new Date,this.model.data.date_modified=new Date,this.model.startEdit()},ObjectActionOutputBeanModalEmailContent.prototype.setViewData=function(){this.view.setEditMode(),this.view.isEditable=!0},ObjectActionOutputBeanModalEmailContent.prototype.sendEmail=function(){var s=this;this.modal.openModal("SystemLoadingModal",!1).subscribe(function(t){t.instance.messagelabel="LBL_SENDING",s.sending=!0,s.model.setField("type","out"),s.model.setField("to_be_sent","1"),s.model.setField("from_addr",s.model.data.from_addr_name),s.model.setField("to_addrs",s.model.data.to_addrs_names),s.model.save().subscribe(function(e){t.instance.self.destroy(),s.email_sent.emit()},function(e){t.instance.self.destroy(),s.sending=!1})})},__decorate([core_1.Input(),__metadata("design:type",Object)],ObjectActionOutputBeanModalEmailContent.prototype,"fieldset",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],ObjectActionOutputBeanModalEmailContent.prototype,"filelist",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],ObjectActionOutputBeanModalEmailContent.prototype,"parent",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],ObjectActionOutputBeanModalEmailContent.prototype,"email_sent",void 0),__decorate([core_1.Component({selector:"object-action-output-bean-modal-email-content",template:'<object-record-fieldset [fieldset]="fieldset" direction="vertical"></object-record-fieldset><system-dynamic-component [componentattributes]="{uploadfiles: filelist}" component="SpiceAttachmentsPanel"></system-dynamic-component>',providers:[services_1.view,services_1.model]}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.metadata,services_1.modal,services_1.view,services_1.session])],ObjectActionOutputBeanModalEmailContent)}();exports.ObjectActionOutputBeanModalEmailContent=ObjectActionOutputBeanModalEmailContent;var ObjectActionOutputBeanModal=function(){function ObjectActionOutputBeanModal(e,t,s,o,l,i,a,n){this.language=e,this.model=t,this.metadata=s,this.modal=o,this.view=l,this.backend=i,this.sanitizer=a,this.viewContainerRef=n,this.noDownload=!1,this.self=void 0,this.templates=[],this._selected_template=null,this._selected_format="pdf",this.compiled_selected_template="",this.loading_output=!1,this.fieldset_email="",this.filelist=[],this.showsendemail=!0,this.expanded=!1;n=this.metadata.getComponentConfig("ObjectActionOutputBeanModal");this.fieldset_email=n.fieldset_email}return ObjectActionOutputBeanModal.prototype.ngOnInit=function(){this.setModalData(),this.setSelectedTemplate(),this.selected_template||1!=this.templates.length||(this.selected_template=this.templates[0],this.rendertemplate())},ObjectActionOutputBeanModal.prototype.setModalData=function(){this.modalTitle||(this.modalTitle=this.language.getLabel(this.language.getLabel("LBL_OUTPUT_TEMPLATE"))),this.buttonText||(this.buttonText=this.language.getLabel(this.noDownload?"LBL_OK":"LBL_DOWNLOAD")),this.forcedFormat&&(this._selected_format=this.forcedFormat)},ObjectActionOutputBeanModal.prototype.setSelectedTemplate=function(){var e,s=this,o=this.metadata.getModuleFields(this.model.module),l=this;for(e in o)if("break"===function(t){if("relate"==o[t].type&&"OutputTemplates"==o[t].module){var e=l.templates.find(function(e){return e.id==s.model.getFieldValue(o[t].id_name)});return e&&(l.selected_template=e),"break"}}(e))break},Object.defineProperty(ObjectActionOutputBeanModal.prototype,"selected_template",{get:function(){return this._selected_template},set:function(e){this._selected_template=e,this.rendertemplate()},enumerable:!1,configurable:!0}),Object.defineProperty(ObjectActionOutputBeanModal.prototype,"selected_format",{get:function(){return this._selected_format},set:function(e){this._selected_format=e,this.expanded=!1,this.rendertemplate()},enumerable:!1,configurable:!0}),Object.defineProperty(ObjectActionOutputBeanModal.prototype,"sanitizedTemplated",{get:function(){return this.sanitizer.bypassSecurityTrustHtml(this.compiled_selected_template)},enumerable:!1,configurable:!0}),ObjectActionOutputBeanModal.prototype.rendertemplate=function(){var s=this;switch(this.loading_output=!0,this.blobUrl=null,this.compiled_selected_template=null,this.selected_format){case"pdf":this.backend.getRequest("OutputTemplates/"+this.selected_template.id+"/convert/"+this.model.id+"/to/pdf/base64").subscribe(function(e){var t=s.datatoBlob(atob(e.content));s.blobUrl=s.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(t)),s.contentForHandBack=e.content,s.setEmailAttachmentData(),s.loading_output=!1},function(e){s.loading_output=!1});break;case"html":this.backend.getRequest("OutputTemplates/"+this.selected_template.id+"/compile/"+this.model.id).subscribe(function(e){s.compiled_selected_template=e.content,s.contentForHandBack=e.content,s.setEmailAttachmentData(),s.loading_output=!1},function(e){s.loading_output=!1})}},ObjectActionOutputBeanModal.prototype.reload=function(){this.rendertemplate()},ObjectActionOutputBeanModal.prototype.close=function(){this.self.destroy()},ObjectActionOutputBeanModal.prototype.create=function(){var e,s=this;this.handBack&&this.handBack.emit({name:this.selected_template.name,content:this.contentForHandBack}),this.noDownload?this.close():(e=this.model.module+"_"+this.model.data.summary_text+".pdf",this.modal.openModal("SystemLoadingModal").subscribe(function(t){t.instance.messagelabel="MSG_GENERATING_PDF",s.backend.downloadFile({route:"OutputTemplates/"+s.selected_template.id+"/convert/"+s.model.id+"/to/pdf"},e,"application/pdf").subscribe(function(e){t.instance.self.destroy(),s.close()},function(e){t.instance.self.destroy()})}))},Object.defineProperty(ObjectActionOutputBeanModal.prototype,"data",{set:function(e){e=this.datatoBlob(e);this.blobUrl=this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(e))},enumerable:!1,configurable:!0}),ObjectActionOutputBeanModal.prototype.datatoBlob=function(e,t,s){void 0===t&&(t=""),void 0===s&&(s=512);for(var o=[],l=0;l<e.length;l+=s){for(var i=e.slice(l,l+s),a=new Array(i.length),n=0;n<i.length;n++)a[n]=i.charCodeAt(n);var d=new Uint8Array(a);o.push(d)}return new Blob(o,{type:t})},ObjectActionOutputBeanModal.prototype.openEmailArea=function(){this.expanded=!this.expanded},ObjectActionOutputBeanModal.prototype.setEmailAttachmentData=function(){this.filelist=[{size:this.contentForHandBack.length,name:this.model.module+"_"+this.model.data.summary_text+"."+this.selected_format,type:"application/"+this.selected_format,filecontent:this.contentForHandBack}],this.resetEmailComponent()},ObjectActionOutputBeanModal.prototype.resetEmailComponent=function(){var e=this;this.showsendemail=!1,setTimeout(function(){e.showsendemail=!0},100)},ObjectActionOutputBeanModal.prototype.emailSent=function(){this.close()},ObjectActionOutputBeanModal.prototype.sendEmail=function(){this.emailContent.sendEmail()},__decorate([core_1.ViewChild(ObjectActionOutputBeanModalEmailContent),__metadata("design:type",ObjectActionOutputBeanModalEmailContent)],ObjectActionOutputBeanModal.prototype,"emailContent",void 0),__decorate([core_1.Component({selector:"object-action-output-bean-modal",template:'<system-modal size="large"><system-modal-header (close)="close()">{{modalTitle}}</system-modal-header><system-modal-content margin="none"><div class="slds-modal__content"><div class="slds-form-element__control slds-grid slds-grid--vertical-align-center slds-p-around--small"><label class="slds-col slds-p-right--x-small"><system-label label="LBL_TEMPLATE"></system-label></label><select class="slds-col slds-select slds-grow" [(ngModel)]="selected_template" [disabled]="templates.length == 0"><option *ngFor="let templ of templates" [ngValue]="templ">{{templ.name}} ({{templ.language}})</option></select><ng-container *ngIf="!forcedFormat"><label class="slds-p-left--small slds-col slds-p-right--x-small"><system-label label="LBL_DISPLAY"></system-label></label><select class="slds-col slds-select slds-size--1-of-4" [(ngModel)]="selected_format" [disabled]="templates.length == 0"><option value="html">HTML</option><option value="pdf">PDF</option></select></ng-container><button *ngIf="this.metadata.checkModuleAcl(\'Emails\', \'create\')" [disabled]="!selected_template || loading_output || selected_format === \'html\'" class="slds-button slds-button--icon slds-button--icon-border slds-m-left--small" [ngClass]="{\'slds-is-selected\' : expanded}" (click)="openEmailArea()"><system-button-icon icon="email"></system-button-icon></button></div><div class="slds-grid" style="height: 70vh;"><div class="slds-p-around--small" style="height: 100%; width: 200%" [@slideInOut]="expanded? \'open\': \'closed\'"><div class="slds-m-top--small slds-border--top slds-border--right slds-border--left slds-border--bottom" style="width: 100%; height: calc(100% - 50px);"><iframe *ngIf="selected_format === \'html\' && !loading_output && selected_template" frameBorder="0" style="width: 100%;height: 100%;" [srcdoc]="sanitizedTemplated"></iframe><object *ngIf="selected_format === \'pdf\' && !loading_output && blobUrl" [data]="blobUrl" type="application/pdf" width="100%" height="100%"></object><div *ngIf="loading_output" class="slds-align--absolute-center" style="height: 100%;"><system-spinner></system-spinner></div><div *ngIf="!selected_template && !loading_output" class="slds-align--absolute-center" style="height: 100%;"><system-label label="LBL_SELECT_TEMPLATE"></system-label></div></div></div><div class="slds-scrollable" style="height: 100%;" [@slideInOut2]="expanded? \'open\': \'closed\'"><object-action-output-bean-modal-email-content #emailcontent *ngIf="showsendemail && contentForHandBack" [fieldset]="fieldset_email" [filelist]="filelist" [parent]="model" (email_sent)="emailSent()"></object-action-output-bean-modal-email-content></div></div></div></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="close()"><system-label label="LBL_CANCEL"></system-label></button> <button [disabled]="!selected_template || loading_output" class="slds-button slds-button--neutral" (click)="reload()"><system-label label="LBL_RELOAD"></system-label></button> <button *ngIf="!expanded" [disabled]="!selected_template || loading_output" class="slds-button slds-button--brand" (click)="create()">{{buttonText}}</button> <button *ngIf="expanded" [disabled]="!selected_template || loading_output" class="slds-button slds-button--brand" (click)="sendEmail()">{{language.getLabel(\'LBL_SENDEMAIL\')}}</button></system-modal-footer></system-modal>',providers:[services_1.view],animations:[animations_1.trigger("slideInOut",[animations_1.state("open",animations_1.style({width:"50%"})),animations_1.state("closed",animations_1.style({width:"100%"})),animations_1.transition("open <=> closed",[animations_1.animate("200ms")])]),animations_1.trigger("slideInOut2",[animations_1.state("open",animations_1.style({width:"50%"})),animations_1.state("closed",animations_1.style({width:"0%"})),animations_1.transition("open <=> closed",[animations_1.animate("200ms")])])]}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.metadata,services_1.modal,services_1.view,services_1.backend,platform_browser_1.DomSanitizer,core_1.ViewContainerRef])],ObjectActionOutputBeanModal)}();exports.ObjectActionOutputBeanModal=ObjectActionOutputBeanModal;var fieldOutputTemplates=function(d){function fieldOutputTemplates(e,t,s,o,l,i,a){var n=d.call(this,e,t,s,o,l)||this;return n.model=e,n.view=t,n.language=s,n.metadata=o,n.router=l,n.backend=i,n.configuration=a,n.isLoaded=!1,n.items=[],n}return __extends(fieldOutputTemplates,d),Object.defineProperty(fieldOutputTemplates.prototype,"isDisabled",{get:function(){return!this.isLoaded||!this.items},enumerable:!1,configurable:!0}),Object.defineProperty(fieldOutputTemplates.prototype,"selected_item",{get:function(){var t=this;return this.items.find(function(e){return e.id==t.value})},enumerable:!1,configurable:!0}),fieldOutputTemplates.prototype.ngOnInit=function(){var t=this,e=this.configuration.getData("OutputTemplates");e&&e[this.model.module]?(this.items=e[this.model.module],this.isLoaded=!0):this.backend.getRequest("module/OutputTemplates/formodule/"+this.model.module,{}).subscribe(function(e){t.configuration.setData("OutputTemplates",e),t.items=e,t.isLoaded=!0})},__decorate([core_1.Component({selector:"field-output-templates",template:'<field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display *ngIf="!isEditMode()" [fielddisplayclass]="fielddisplayclass" [editable]="isEditable()" [fieldconfig]="fieldconfig"><ng-container *ngIf="value">{{selected_item?.name}} ({{selected_item?.language}})</ng-container></field-generic-display><div *ngIf="isEditMode()" class="slds-form-element"><div class="slds-form-element__control" [ngClass]="getFieldClass()"><div class="slds-select_container slds-m-vertical--xx-small"><select class="slds-select" [disabled]="isDisabled" [(ngModel)]="value"><option *ngFor="let item of items" [ngValue]="item.id">{{item.name}} ({{item.language}})</option></select></div><field-messages [fieldname]="fieldname"></field-messages></div></div>'}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router,services_1.backend,services_1.configurationService])],fieldOutputTemplates)}(objectfields_1.fieldGeneric);exports.fieldOutputTemplates=fieldOutputTemplates;var ModuleOutputTemplates=function(){function ModuleOutputTemplates(){}return __decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[OutputTemplatesEditor,OutputTemplatesPreview,OutputTemplatesPreviewSelector,ObjectActionOutputBeanButton,ObjectActionOutputBeanModalEmailContent,ObjectActionOutputBeanModal,fieldOutputTemplates]})],ModuleOutputTemplates)}();exports.ModuleOutputTemplates=ModuleOutputTemplates;