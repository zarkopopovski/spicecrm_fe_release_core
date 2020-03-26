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
"use strict";var __extends=this&&this.__extends||function(){var l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])})(e,t)};return function(e,t){function s(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),__decorate=this&&this.__decorate||function(e,t,s,l){var i,d=arguments.length,o=d<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;0<=n;n--)(i=e[n])&&(o=(d<3?i(o):3<d?i(t,s,o):i(t,s))||o);return 3<d&&o&&Object.defineProperty(t,s,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),router_1=require("@angular/router"),rxjs_1=require("rxjs"),FieldDunsNumber=function(a){function FieldDunsNumber(e,t,s,l,i,d,o,n){var r=a.call(this,e,t,s,l,i)||this;return r.model=e,r.view=t,r.language=s,r.metadata=l,r.router=i,r.backend=d,r.modal=o,r.ViewContainerRef=n,r.componentconfig={},r.fieldName="name",r.fieldStreet="billing_address_street",r.fieldCity="billing_address_city",r.fieldPostalCode="billing_address_postalcode",r.fieldCountry="billing_address_country",r.fieldHouseNumber="billing_address_hsnm",r.neverOverwriteAddress=!1,r.guessHouseNumber=!1,r}return __extends(FieldDunsNumber,a),FieldDunsNumber.prototype.ngOnInit=function(){a.prototype.ngOnInit.call(this),this.loadComponentConfig()},FieldDunsNumber.prototype.loadComponentConfig=function(){this.fieldconfig.never_overwrite_address&&(this.neverOverwriteAddress=!0),this.fieldconfig.guess_house_number&&(this.guessHouseNumber=!0),this.fieldconfig.field_name&&(this.fieldName=this.fieldconfig.field_name),this.fieldconfig.address_type&&0!=this.fieldconfig.address_type.length&&(this.fieldStreet=this.fieldconfig.address_type+"_address_street",this.fieldCity=this.fieldconfig.address_type+"_address_city",this.fieldPostalCode=this.fieldconfig.address_type+"_address_postalcode",this.fieldCountry=this.fieldconfig.address_type+"_address_country",this.fieldHouseNumber=this.fieldconfig.address_type+"_address_hsnm")},FieldDunsNumber.prototype.openDunsModal=function(){var t=this;this.modal.openModal("DunsNumberModal",!0,this.ViewContainerRef.injector).subscribe(function(e){t.getResults(e),e.instance.response.subscribe(function(e){t.value=e.duns,"none"!=e&&t.setAddressFields(e)})})},FieldDunsNumber.prototype.getResults=function(t){var e={name:this.model.data.name,street:this.model.getField(this.fieldStreet)?this.model.getField(this.fieldStreet)+(this.model.getField(this.fieldHouseNumber)?" "+this.model.getField(this.fieldHouseNumber):""):"",city:this.model.getField(this.fieldCity)?this.model.getField(this.fieldCity):"",postalcode:this.model.getField(this.fieldPostalCode)?this.model.getField(this.fieldPostalCode):"",country:this.model.getField(this.fieldCountry)?this.model.getField(this.fieldCountry):""};t.instance.isLoading=!0,this.backend.getRequest("/SpiceDuns",e).subscribe(function(e){e&&(t.instance.isLoading=!1,e.length&&(t.instance.results=e))})},FieldDunsNumber.prototype.setAddressFields=function(e){this.model.getField(this.fieldName)&&0!=this.model.getField(this.fieldName).length&&this.neverOverwriteAddress||0<e.name.length&&this.model.setField(this.fieldName,e.name||""),this.model.getField(this.fieldStreet)&&0!=this.model.getField(this.fieldStreet).length&&this.neverOverwriteAddress||0<e.street.length&&this.model.setField(this.fieldStreet,e.street||""),this.guessHouseNumber&&(this.model.getField(this.fieldStreet)&&0!=this.model.getField(this.fieldStreet).length&&this.neverOverwriteAddress||0<e.street_only.length&&this.model.setField(this.fieldStreet,e.street_only||""),this.model.getField(this.fieldHouseNumber)&&0!=this.model.getField(this.fieldHouseNumber).length&&this.neverOverwriteAddress||0<e.hsnm.length&&this.model.setField(this.fieldHouseNumber,e.hsnm||"")),this.model.getField(this.fieldCity)&&0!=this.model.getField(this.fieldCity).length&&this.neverOverwriteAddress||0<e.city.length&&this.model.setField(this.fieldCity,e.city||""),this.model.getField(this.fieldPostalCode)&&0!=this.model.getField(this.fieldPostalCode).length&&this.neverOverwriteAddress||0<e.postalcode.length&&this.model.setField(this.fieldPostalCode,e.postalcode||""),this.model.getField(this.fieldCountry)&&0!=this.model.getField(this.fieldCountry).length&&this.neverOverwriteAddress||0<e.country.length&&this.model.setField(this.fieldCountry,e.country||"")},FieldDunsNumber=__decorate([core_1.Component({selector:"field-duns-number",template:'<field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display *ngIf="!isEditMode()" [fielddisplayclass]="fielddisplayclass" [fieldconfig]="fieldconfig" [editable]="isEditable()">{{value}}</field-generic-display><div *ngIf="isEditable() && isEditMode()" class="slds-form-element__control slds-m-vertical--xx-small" [ngClass]="css_classes"><div class="slds-grid"><input type="text" class="slds-input" [(ngModel)]="value" [disabled]="true" style="cursor: initial;"> <button class="slds-button slds-button--icon-border slds-m-left--xx-small" (click)="openDunsModal()"><system-button-icon icon="search"></system-button-icon></button></div><field-messages [fieldname]="fieldname"></field-messages></div>'}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router,services_1.backend,services_1.modal,core_1.ViewContainerRef])],FieldDunsNumber)}(objectfields_1.fieldGeneric);exports.FieldDunsNumber=FieldDunsNumber;var DunsNumberModal=function(){function DunsNumberModal(e,t,s,l){this.language=e,this.backend=t,this.metadata=s,this.model=l,this.self={},this.isLoading=!1,this.componentconfig={},this.fieldsetFields=[],this.results=[],this.responseSubject=new rxjs_1.Subject,this.response=this.responseSubject.asObservable()}return DunsNumberModal.prototype.ngOnInit=function(){var e=this.metadata.getComponentConfig("DunsNumberModal",this.model.module);this.fieldsetFields=this.metadata.getFieldSetFields(e.fieldset)},DunsNumberModal.prototype.confirm=function(){this.responseSubject.next(this.selectedItem),this.responseSubject.complete(),this.self.destroy()},DunsNumberModal.prototype.notFound=function(){this.responseSubject.next("none"),this.responseSubject.complete(),this.self.destroy()},DunsNumberModal.prototype.selectItem=function(e){this.selectedItem=this.selectedItem==e?void 0:e},DunsNumberModal.prototype.rowClass=function(e){return this.selectedItem==e?"slds-is-selected":""},DunsNumberModal.prototype.cancel=function(){this.responseSubject.next(),this.responseSubject.complete(),this.self.destroy()},DunsNumberModal.prototype.trackByFn=function(e,t){return e},DunsNumberModal=__decorate([core_1.Component({selector:"duns-number-modal",template:'<system-modal><system-modal-header (close)="cancel()">{{language.getLabel(\'LBL_FIND_DUNS_NUMBER\')}}</system-modal-header><system-modal-content style="padding: 0"><div class="slds-p-around--x-small"><div *ngFor="let field of fieldsetFields" class="slds-cell-buffer--left"><div class="slds-truncate"><span class="slds-text-heading--label">{{language.getFieldDisplayName(model.module, field.field)}} :</span> <span>{{model.getFieldValue(field.field)}}</span></div></div></div><table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table--fixed-layout spice-table_header-fixed"><thead><tr class="slds-line-height_reset"><th class="slds-text-title_caps" scope="col"><div class="slds-truncate" [title]="language.getLabel(\'LBL_NUMBER\')">{{ language.getLabel(\'LBL_NUMBER\') }}</div></th><th class="slds-text-title_caps" scope="col"><div class="slds-truncate" [title]="language.getLabel(\'LBL_NAME\')">{{ language.getLabel(\'LBL_NAME\') }}</div></th><th class="slds-text-title_caps" scope="col"><div class="slds-truncate" [title]="language.getLabel(\'LBL_STREET\')">{{ language.getLabel(\'LBL_STREET\') }}</div></th><th class="slds-text-title_caps" scope="col"><div class="slds-truncate" [title]="language.getLabel(\'LBL_POSTALCODE\')">{{ language.getLabel(\'LBL_POSTALCODE\') }}</div></th><th class="slds-text-title_caps" scope="col"><div class="slds-truncate" [title]="language.getLabel(\'LBL_CITY\')">{{ language.getLabel(\'LBL_CITY\') }}</div></th><th class="slds-text-title_caps" scope="col"><div class="slds-truncate" [title]="language.getLabel(\'LBL_COUNTRY\')">{{ language.getLabel(\'LBL_COUNTRY\') }}</div></th><th class="slds-cell-shrink" scope="col"></th></tr></thead><tbody><tr *ngFor="let result of results; trackBy: trackByFn" class="slds-hint-parent" [ngClass]="rowClass(result)" (click)="selectItem(result)" style="cursor: pointer"><td><div class="slds-truncate" [title]="result.duns">{{result.duns}}</div></td><td><div class="slds-truncate" [title]="result.name">{{result.name}}</div></td><td><div class="slds-truncate" [title]="result.street">{{result.street}}</div></td><td><div class="slds-truncate" [title]="result.postalcode">{{result.postalcode}}</div></td><td><div class="slds-truncate" [title]="result.city">{{result.city}}</div></td><td><div class="slds-truncate" [title]="result.country">{{result.country}}</div></td><td class="slds-cell-shrink"><system-utility-icon *ngIf="selectedItem == result" icon="check" size="x-small" colorclass="slds-icon-text-success"></system-utility-icon></td></tr><tr *ngIf="!isLoading && results?.length == 0"><td colspan="7"><div class="slds-p-around--small slds-align--absolute-center">{{language.getLabel(\'LBL_NO_ENTRIES\')}}</div></td></tr><tr *ngIf="isLoading"><td colspan="7"><div class="slds-p-around--small slds-align--absolute-center"><system-spinner></system-spinner></div></td></tr></tbody></table></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="cancel()">{{language.getLabel(\'LBL_CANCEL\')}}</button> <button class="slds-button slds-button--neutral" (click)="notFound()">{{language.getLabel(\'LBL_NOT_FOUND\')}}</button> <button class="slds-button slds-button--brand" (click)="confirm()" [disabled]="!selectedItem">{{language.getLabel(\'LBL_CONFIRM\')}}</button></system-modal-footer></system-modal>'}),__metadata("design:paramtypes",[services_1.language,services_1.backend,services_1.metadata,services_1.model])],DunsNumberModal)}();exports.DunsNumberModal=DunsNumberModal;var ModuleDuns=function(){function ModuleDuns(e){this.vms=e,this.version="1.0",this.build_date="2020-03-26",this.vms.registerModule(this)}return ModuleDuns=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[FieldDunsNumber,DunsNumberModal]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleDuns)}();exports.ModuleDuns=ModuleDuns;