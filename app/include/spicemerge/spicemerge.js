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
 * date: 2020-07-17 12:49:47
 * build: 2020.02.001.1594982988005
 **/
"use strict";var __decorate=this&&this.__decorate||function(e,t,s,l){var r,o=arguments.length,d=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,s,l);else for(var a=e.length-1;0<=a;a--)(r=e[a])&&(d=(o<3?r(d):3<o?r(t,s,d):r(t,s))||d);return 3<o&&d&&Object.defineProperty(t,s,d),d},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),services_1=require("../../services/services"),objectmerge=function(){function e(e){this.metadata=e,this.masterId="",this.masterModule="",this.mergeFields=[],this.mergeSource={}}return e.prototype.setModule=function(e){this.masterModule=e,this.getMergeFields()},e.prototype.getMergeFields=function(){this.mergeFields=[];var e=this.metadata.getModuleFields(this.masterModule);for(var t in e)e.hasOwnProperty(t)&&"disabled"!==e[t].duplicate_merge&&"non-db"!=e[t].source&&"id"!=e[t].type&&this.mergeFields.push(e[t])},e.prototype.setAllfieldSources=function(e){this.mergeSource={};for(var t=0,s=this.mergeFields;t<s.length;t++){var l=s[t];this.mergeSource[l.name]=e}},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[services_1.metadata])],e)}();exports.objectmerge=objectmerge;var ObjectMergeModal=function(){function ObjectMergeModal(e,t,s,l,r,o,d){this.language=e,this.metadata=t,this.objectmerge=s,this.model=l,this.modellist=r,this.backend=o,this.modal=d,this.mergemodels=[],this.merged$=new core_1.EventEmitter,this.currentMergeStep=0,this.mergeSteps=["records","fields","execute"],this.parentmodel={},this.self={}}return ObjectMergeModal.prototype.ngOnInit=function(){this.model.id=this.parentmodel.id,this.model.module=this.parentmodel.module,this.model.data=this.parentmodel.data,this.modellist.module=this.model.module,this.objectmerge.setModule(this.model.module),this.objectmerge.masterId=this.model.id,this.objectmerge.setAllfieldSources(this.model.id),this.model.data.selected=!0,this.model.data.id=this.model.id,this.modellist.listData.list.push(this.model.data);for(var e=0,t=this.mergemodels;e<t.length;e++){var s=t[e];this.modellist.listData.list.push(s)}},ObjectMergeModal.prototype.closeModal=function(){this.self.destroy()},ObjectMergeModal.prototype.getCurrentStep=function(){return this.mergeSteps[this.currentMergeStep]},ObjectMergeModal.prototype.getStepClass=function(e){var t=this.mergeSteps.indexOf(e);return t==this.currentMergeStep?"slds-is-active":t<this.currentMergeStep?"slds-is-completed":void 0},ObjectMergeModal.prototype.getStepComplete=function(e){return this.mergeSteps.indexOf(e)<this.currentMergeStep},ObjectMergeModal.prototype.getProgressBarWidth=function(){return{width:this.currentMergeStep/(this.mergeSteps.length-1)*100+"%"}},ObjectMergeModal.prototype.nextStep=function(){var s=this;if(this.currentMergeStep<this.mergeSteps.length-1)this.currentMergeStep,this.currentMergeStep++;else{for(var e={},t=0,l=this.objectmerge.mergeFields;t<l.length;t++){var r=l[t];this.objectmerge.mergeSource[r.name]!=this.objectmerge.masterId&&(e[r.name]=this.objectmerge.mergeSource[r.name])}for(var o=[],d=0,a=this.modellist.listData.list;d<a.length;d++){var i=a[d];i.id!=this.objectmerge.masterId&&o.push(i.id)}this.modal.openModal("SystemLoadingModal").subscribe(function(t){t.instance.messagelabel="LBL_MERGING",s.backend.postRequest("module/"+s.model.module+"/"+s.objectmerge.masterId+"/merge_bean",{},{fields:e,toDeleteBeanIds:o}).subscribe(function(e){t.instance.self.destroy(),s.model.id!=s.objectmerge.masterId?(s.model.id=s.objectmerge.masterId,s.model.goDetail()):(s.merged$.emit(!0),s.merged$.complete()),s.closeModal()})})}},ObjectMergeModal.prototype.prevDisabled=function(){return 0===this.currentMergeStep},ObjectMergeModal.prototype.nextDisabled=function(){switch(this.currentMergeStep){case 0:return!(1<this.modellist.getSelectedCount());default:return!1}},ObjectMergeModal.prototype.prevStep=function(){0<this.currentMergeStep&&this.currentMergeStep--},__decorate([core_1.Input(),__metadata("design:type",Array)],ObjectMergeModal.prototype,"mergemodels",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],ObjectMergeModal.prototype,"merged$",void 0),ObjectMergeModal=__decorate([core_1.Component({selector:"object-merge-modal",template:'<system-modal size="large"><system-modal-header (close)="closeModal()"><system-label label="LBL_MERGE_RECORD"></system-label> - {{model.data.summary_text}}</system-modal-header><system-modal-content margin="none" [grow]="true"><object-merge-modal-records [hidden]="currentMergeStep!==0"></object-merge-modal-records><object-merge-modal-data [hidden]="currentMergeStep!==1"></object-merge-modal-data><object-merge-modal-execute [hidden]="currentMergeStep!==2"></object-merge-modal-execute></system-modal-content><system-modal-footer><div class="slds-grid slds-grid--align-spread"><div class="slds-progress slds-progress--shade slds-order--2"><ol class="slds-progress__list"><li *ngFor="let mergeStep of mergeSteps" class="slds-progress__item" [ngClass]="getStepClass(mergeStep)"><button class="slds-button slds-progress__marker" [ngClass]="{\'slds-button--icon slds-progress__marker--icon\': getStepComplete(mergeStep)}"><system-button-icon *ngIf="getStepComplete(mergeStep)" [icon]="\'success\'"></system-button-icon></button></li></ol><div class="slds-progress-bar slds-progress-bar_x-small"><div class="slds-progress-bar__value" [ngStyle]="getProgressBarWidth()"></div></div></div><button class="slds-button slds-button--neutral slds-order--1" (click)="prevStep()" [disabled]="prevDisabled()"><system-label label="LBL_PREVIOUS"></system-label></button> <button class="slds-button slds-button--brand slds-order--3" (click)="nextStep()" [disabled]="nextDisabled()"><system-label label="LBL_NEXT"></system-label></button></div></system-modal-footer></system-modal>',providers:[services_1.model,services_1.modellist,objectmerge],styles:[":host >>> .slds-progress__marker global-button-icon svg {fill:#CA1B1F}",":host >>> .slds-progress__marker:hover global-button-icon svg {fill:#FD595D}",":host >>> .slds-progress__marker:active global-button-icon svg {fill:#FD595D}",":host >>> .slds-progress__marker:focus global-button-icon svg {fill:#FD595D}"]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,objectmerge,services_1.model,services_1.modellist,services_1.backend,services_1.modal])],ObjectMergeModal)}();exports.ObjectMergeModal=ObjectMergeModal;var ObjectMergeModalRecords=function(){function e(e,t,s,l){this.language=e,this.metadata=t,this.model=s,this.modellist=l,this.listFields=[];for(var r=this.metadata.getComponentConfig("ObjectMergeModalRecords",this.model.module),o=0,d=this.metadata.getFieldSetFields(r.fieldset);o<d.length;o++){var a=d[o];!1!==a.fieldconfig.default&&this.listFields.push(a)}}return e.prototype.disableSelect=function(e){return e.id==this.model.id},e=__decorate([core_1.Component({selector:"object-merge-modal-records",template:'<table class="slds-table slds-table--bordered slds-table--cell-buffer"><thead><tr class="slds-text-title--caps"><th scope="col" style="width:3.25rem;" class="slds-text-align--right"></th><th scope="col" *ngFor="let listField of listFields"><div class="slds-truncate"><system-label-fieldname [module]="model.module" [field]="listField.field"></system-label-fieldname></div></th></tr></thead><tbody><tr object-list-item *ngFor="let listItem of modellist.listData.list" [rowselect]="true" [rowselectdisabled]="disableSelect(listItem)" [listItem]="listItem" [showActionMenu]="false" class="slds-hint-parent"></tr></tbody></table>',providers:[services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.modellist])],e)}();exports.ObjectMergeModalRecords=ObjectMergeModalRecords;var ObjectMergeModalData=function(){function e(e,t,s,l){this.language=e,this.metadata=t,this.modellist=s,this.objectmerge=l,this.modelFields={}}return e.prototype.getSelected=function(){for(var e=[],t=0,s=this.modellist.listData.list;t<s.length;t++){var l=s[t];l.selected&&e.push(l)}return e},e.prototype.selectAllFields=function(e){this.objectmerge.setAllfieldSources(e)},e.prototype.showField=function(e){for(var t=0,s=this.getSelected();t<s.length;t++){if(""!=s[t][e.name])return!0}return!1},e=__decorate([core_1.Component({selector:"object-merge-modal-data",template:'<table class="slds-table slds-table--bordered slds-table--cell-buffer"><thead><tr class="slds-text-title--caps"><th scope="col"></th><th scope="col" *ngFor="let item of getSelected()"><div class="slds-truncate">{{item.summary_text}}</div></th></tr></thead><tbody><tr><td></td><td class="slds-truncate" *ngFor="let item of getSelected()"><a href="javascript:void(0)" (click)="selectAllFields(item.id)"><system-label label="LBL_SELECT_ALL_FIELDS"></system-label></a></td></tr><tr><td></td><td class="slds-truncate" *ngFor="let item of getSelected()"><div class="slds-form-element"><div class="slds-form-element__control"><div class="slds-radio"><input type="radio" [id]="\'master\'+item.id" name="master" [value]="item.id" [(ngModel)]="objectmerge.masterId"> <label class="slds-radio__label" [attr.for]="\'master\'+item.id"><span class="slds-radio--faux"></span> <span class="slds-form-element__label"><system-label label="LBL_USE_AS_MASTER"></system-label></span></label></div></div></div></td></tr><tr *ngFor="let mergeField of objectmerge.mergeFields"><ng-container *ngIf="showField(mergeField)"><td class="slds-truncate"><system-label-fieldname [module]="modellist.module" [field]="mergeField.name"></system-label-fieldname></td><td class="slds-truncate" *ngFor="let item of getSelected()"><div class="slds-grid"><div class="slds-form-element"><div class="slds-form-element__control"><div class="slds-radio"><input type="radio" [id]="\'master\'+mergeField.name+item.id" [name]="mergeField.name" [value]="item.id" [(ngModel)]="objectmerge.mergeSource[mergeField.name]"> <label class="slds-radio__label" [attr.for]="\'master\'+mergeField.name+item.id"><span class="slds-radio--faux"></span></label></div></div></div><object-merge-modal-data-field [fieldname]="mergeField.name" [fielddata]="item"></object-merge-modal-data-field></div></td></ng-container></tr></tbody></table>',providers:[services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.modellist,objectmerge])],e)}();exports.ObjectMergeModalData=ObjectMergeModalData;var ObjectMergeModalDataField=function(){function e(e,t){this.model=e,this.modellist=t,this.fieldname="",this.fielddata={},this.model.module=this.modellist.module}return e.prototype.ngOnInit=function(){this.model.data=this.fielddata},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"fieldname",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"fielddata",void 0),e=__decorate([core_1.Component({selector:"object-merge-modal-data-field",template:'<field-container [field]="fieldname" [fielddisplayclass]="\'slds-truncate\'"></field-container>',providers:[services_1.model]}),__metadata("design:paramtypes",[services_1.model,services_1.modellist])],e)}();exports.ObjectMergeModalDataField=ObjectMergeModalDataField;var ObjectMergeModalExecute=function(){function e(e,t,s){this.language=e,this.metadata=t,this.model=s}return e=__decorate([core_1.Component({selector:"object-merge-modal-execute",template:'<div class="slds-p-around--medium"><div class="slds-grid slds-grid--align-center slds-text-heading--medium slds-p-vertical--medium"><system-label label="MSG_CONFIRM_MERGE"></system-label></div><div class="slds-grid slds-grid--align-center slds-p-vertical--medium"><system-label label="MSG_CONFIRM_MERGE" length="long"></system-label></div></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model])],e)}();exports.ObjectMergeModalExecute=ObjectMergeModalExecute;var ModuleSpiceMerge=function(){function ModuleSpiceMerge(){}return ModuleSpiceMerge=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[ObjectMergeModal,ObjectMergeModalRecords,ObjectMergeModalData,ObjectMergeModalDataField,ObjectMergeModalExecute]})],ModuleSpiceMerge)}();exports.ModuleSpiceMerge=ModuleSpiceMerge;