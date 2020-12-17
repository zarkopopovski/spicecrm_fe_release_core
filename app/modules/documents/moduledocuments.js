/** 
 * © 2015 - 2020 aac services k.s. All rights reserved.
 * release: 2020.04.001
 * date: 2020-12-17 12:49:07
 * build: 2020.04.001.1608205747102
 **/
"use strict";var __extends=this&&this.__extends||function(){var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)};return function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),__decorate=this&&this.__decorate||function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;0<=c;c--)(n=e[c])&&(r=(s<3?n(r):3<s?n(t,o,r):n(t,o))||r);return 3<s&&r&&Object.defineProperty(t,o,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModuleDocuments=exports.fieldDocumentRevisionStatus=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),directives_1=require("../../directives/directives"),services_1=require("../../services/services"),forms_1=require("@angular/forms"),router_1=require("@angular/router"),fieldDocumentRevisionStatus=function(r){function fieldDocumentRevisionStatus(e,t,o,i,n){var s=r.call(this,e,t,o,i,n)||this;return s.model=e,s.view=t,s.language=o,s.metadata=i,s.router=n,s}return __extends(fieldDocumentRevisionStatus,r),fieldDocumentRevisionStatus.prototype.getValue=function(){return this.language.getFieldDisplayOptionValue(this.model.module,this.fieldname,this.value)},Object.defineProperty(fieldDocumentRevisionStatus.prototype,"canActivate",{get:function(){return!this.model.isEditing&&"c"==this.value&&this.model.checkAccess("edit")},enumerable:!1,configurable:!0}),fieldDocumentRevisionStatus.prototype.activateRevision=function(){this.model.startEdit(),this.value="r",this.model.save()},__decorate([core_1.Component({template:'<field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display [fielddisplayclass]="fielddisplayclass" [editable]="isEditable()" [fieldconfig]="fieldconfig" [fieldid]="fieldid"><div class="slds-grid slds-grid--vertical-align-center"><span>{{getValue()}}</span> <button *ngIf="canActivate" class="slds-button slds-button--icon slds-theme--warning slds-m-left--x-small" (click)="activateRevision()"><system-button-icon icon="light_bulb"></system-button-icon></button></div></field-generic-display>'}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router])],fieldDocumentRevisionStatus)}(objectfields_1.fieldGeneric);exports.fieldDocumentRevisionStatus=fieldDocumentRevisionStatus;var ModuleDocuments=function(){function ModuleDocuments(){}return __decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[fieldDocumentRevisionStatus]})],ModuleDocuments)}();exports.ModuleDocuments=ModuleDocuments;