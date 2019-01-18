/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

"use strict";var __decorate=this&&this.__decorate||function(e,t,o,i){var s,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;0<=l;l--)(s=e[l])&&(a=(n<3?s(a):3<n?s(t,o,a):s(t,o))||a);return 3<n&&a&&Object.defineProperty(t,o,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),directives_1=require("../../directives/directives"),services_2=require("../../services/services"),services_3=require("../../services/services"),services_4=require("../../services/services"),services_5=require("../../services/services"),services_6=require("../../services/services"),services_7=require("../../services/services"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),EmailToObjectEmailText=function(){function e(e,t,o,i){this.elementRef=e,this.renderer=t,this.language=o,this.metadata=i,this.text="",this.html="",this.target_module_name="",this.target_module_fields=[],this.setfield=new core_1.EventEmitter,this.clickListener=null,this.displayContextMenu=!1,this.displayContextCoordinates={top:0,left:0}}return Object.defineProperty(e.prototype,"content",{get:function(){return this.html?this.html:this.text},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"striped_content",{get:function(){return this._striped_content||(this.html?this._striped_content=this.html.replace(/<!--.*?-->/gs,"").replace(/<[^>]+>/g,"").replace(/[ ]{2,}/g," ").replace(/[\n\r]{3,}/g,"\n"):this._striped_content=this.text),this._striped_content},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){if(!this.target_module_fields||0===this.target_module_fields.length){var e=["varchar","text"],t=this.metadata.getModuleFields(this.target_module_name);for(var o in t)0<=e.indexOf(t[o].type)&&t[o].vname&&"id"!==t[o].name&&this.target_module_fields.push(o)}},e.prototype.ngOnDestroy=function(){this.clickListener&&this.clickListener()},e.prototype.showContextMenu=function(e){var t=this;this.selectedText&&(e.preventDefault(),this.displayContextMenu=!0,this.displayContextCoordinates.top=e.clientY,this.displayContextCoordinates.left=e.clientX,this.clickListener=this.renderer.listen("document","click",function(e){return t.onClick(e)}))},Object.defineProperty(e.prototype,"selectedText",{get:function(){var e=window.getSelection().toString();return e?e.trim():""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contextMenuStyle",{get:function(){var e=this.elementRef.nativeElement.getBoundingClientRect();return{top:this.displayContextCoordinates.top-e.top+"px",left:this.displayContextCoordinates.left-e.left+"px"}},enumerable:!0,configurable:!0}),e.prototype.onClick=function(e){this.contextMenu.element.nativeElement.contains(e.target)||(this.displayContextMenu=!1,this.clickListener&&(this.clickListener(),this.clickListener=null))},e.prototype.setField=function(e){this.displayContextMenu=!1,this.clickListener&&(this.clickListener(),this.clickListener=null),this.setfield.emit({field:e,value:this.selectedText})},__decorate([core_1.ViewChild("contextMenu",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"contextMenu",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"text",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"html",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"target_module_name",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"target_module_fields",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"setfield",void 0),e=__decorate([core_1.Component({selector:"email-to-object-emailtext",template:'<div class="slds-form-element slds-is-relative" style="height: 100%;"><textarea class="slds-input" style="height: 100%; width: 100%; resize: none;" (contextmenu)="showContextMenu($event)">{{striped_content}}</textarea><div #contextMenu *ngIf="displayContextMenu" [ngStyle]="contextMenuStyle" class="slds-dropdown slds-dropdown_left slds-is-absolute"><ul class="slds-dropdown__list" role="menu"><li *ngFor="let field of target_module_fields" class="slds-dropdown__item" role="presentation"><a href="javascript:void(0);" role="menuitem" tabindex="0" (click)="setField(field)"><span class="slds-truncate">{{language.getFieldDisplayName(target_module_name, field)}}</span></a></li></ul></div></div>'}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer2,services_2.language,services_4.metadata])],e)}();exports.EmailToObjectEmailText=EmailToObjectEmailText;var EmailToObjectModal=function(){function EmailToObjectModal(e,t,o,i,s){this.language=e,this.metadata=t,this.view=o,this.model=i,this.backend=s,this.email_model=null,this.self=null,this.componentRefs=[],this.save$=new core_1.EventEmitter,this.object_fields=[]}return EmailToObjectModal.prototype.ngOnInit=function(){if(this.model.module=this.object_module_name,this.model.initializeModel(this.email_model),this.object_predefined_fields)for(var e in this.object_predefined_fields)this.model.data[e]=this.object_predefined_fields[e];this.view.isEditable=!0,this.view.setEditMode()},EmailToObjectModal.prototype.ngAfterViewInit=function(){this.buildContainer()},EmailToObjectModal.prototype.close=function(){this.self.destroy()},EmailToObjectModal.prototype.buildContainer=function(){for(var o=this,e=0,t=this.componentRefs;e<t.length;e++){t[e].destroy()}this.componentRefs=[];for(var i=this.metadata.getComponentConfig("ObjectRecordDetails",this.model.module),s=function(t){n.metadata.addComponent(t.component,n.detailcontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig,o.componentRefs.push(e)})},n=this,a=0,l=this.metadata.getComponentSetObjects(i.componentset);a<l.length;a++){s(l[a])}},EmailToObjectModal.prototype.setField=function(e){this.model.setFieldValue(e.field,e.value)},EmailToObjectModal.prototype.save=function(){var t=this;this.model.save().subscribe(function(e){t.object_relation_link_name?t.backend.postRequest("module/Emails/"+t.email_model.id+"/related/"+t.object_relation_link_name,[],[t.model.id]).subscribe(function(e){t.save$.emit(t.model.data),t.close()}):(t.save$.emit(t.model.data),t.close())})},__decorate([core_1.ViewChild("detailcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],EmailToObjectModal.prototype,"detailcontainer",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],EmailToObjectModal.prototype,"save$",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],EmailToObjectModal.prototype,"object_module_name",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EmailToObjectModal.prototype,"object_fields",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],EmailToObjectModal.prototype,"object_relation_link_name",void 0),__decorate([core_1.Input(),__metadata("design:type",Array)],EmailToObjectModal.prototype,"object_predefined_fields",void 0),EmailToObjectModal=__decorate([core_1.Component({selector:"email-to-object-modal",template:'<div role="dialog" tabindex="-1" class="slds-modal slds-modal_large slds-fade-in-open"><div class="slds-modal__container"><div class="slds-modal__header"><button class="slds-button slds-modal__close slds-button--icon-inverse" title="Close" (click)="close()"><system-button-icon [icon]="\'close\'"></system-button-icon></button><h2 class="slds-text-heading--medium">{{language.getModuleName(object_module_name,true)}}</h2></div><div class="slds-modal__content"><div class="slds-grid" style="height: 80vh;"><div class="slds-size--1-of-2 slds-p-around--small" style="height: 100%;"><email-to-object-emailtext [target_module_name]="object_module_name" [text]="email_model.data.body" [html]="email_model.data.body" [target_module_fields]="object_fields" (setfield)="setField($event)"></email-to-object-emailtext></div><div class="slds-size--1-of-2 slds-scrollable" style="height: 100%;"><div #detailcontainer></div></div></div></div><div class="slds-modal__footer"><button class="slds-button slds-button--neutral" (click)="close()">{{language.getLabel(\'LBL_CANCEL\')}}</button> <button class="slds-button slds-button--brand" (click)="save()">{{language.getLabel(\'LBL_SAVE\')}}</button></div></div></div><div class="slds-backdrop slds-backdrop--open"></div>',providers:[services_6.model,services_3.view]}),__metadata("design:paramtypes",[services_2.language,services_4.metadata,services_3.view,services_6.model,services_5.backend])],EmailToObjectModal)}();exports.EmailToObjectModal=EmailToObjectModal;var EmailToObjectButton=function(){function EmailToObjectButton(e,t,o){this.language=e,this.model=t,this.modal=o,this.actionemitter=new core_1.EventEmitter}return EmailToObjectButton.prototype.ngOnInit=function(){this.object_module_name=this.actionconfig.module},EmailToObjectButton.prototype.open=function(){var t=this;this.modal.openModal("EmailToObjectModal",!0).subscribe(function(e){e.instance.email_model=t.model,e.instance.object_module_name=t.object_module_name,e.instance.object_relation_link_name=t.actionconfig.relation_link_name,e.instance.object_predefined_fields=t.actionconfig.predefined_fields,e.instance.save$.subscribe(function(e){t.actionemitter.emit("save")})})},__decorate([core_1.Output(),__metadata("design:type",Object)],EmailToObjectButton.prototype,"actionemitter",void 0),EmailToObjectButton=__decorate([core_1.Component({selector:"email-to-object-button",template:"<span>{{language.getLabel('LBL_CONVERT_TO')}} {{language.getModuleName(object_module_name, true)}}</span>",host:{class:"slds-button slds-button--neutral","(click)":"open()"},styles:[":host {cursor:pointer;}"]}),__metadata("design:paramtypes",[services_2.language,services_6.model,services_7.modal])],EmailToObjectButton)}();exports.EmailToObjectButton=EmailToObjectButton;var ModuleEmails=function(){function ModuleEmails(e){this.vms=e,this.version="1.0",this.build_date="2019-01-18",this.vms.registerModule(this)}return ModuleEmails=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[EmailToObjectButton,EmailToObjectEmailText,EmailToObjectModal]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleEmails)}();exports.ModuleEmails=ModuleEmails;