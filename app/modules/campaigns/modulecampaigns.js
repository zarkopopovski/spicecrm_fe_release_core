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
"use strict";var __decorate=this&&this.__decorate||function(e,t,s,i){var a,n=arguments.length,d=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,s,i);else for(var o=e.length-1;0<=o;o--)(a=e[o])&&(d=(n<3?a(d):3<n?a(t,s,d):a(t,s))||d);return 3<n&&d&&Object.defineProperty(t,s,d),d},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),services_1=require("../../services/services"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),CampaignTaskActivateButton=function(){function CampaignTaskActivateButton(e,t,s,i,a){var n=this;this.language=e,this.metadata=t,this.model=s,this.toast=i,this.backend=a,this.activating=!1,this.disabled=!0,this.model.mode$.subscribe(function(e){n.handleDisabled()}),this.model.data$.subscribe(function(e){n.handleDisabled()})}return CampaignTaskActivateButton.prototype.handleDisabled=function(){"Email"!=this.model.getFieldValue("campaigntask_type")?this.model.getFieldValue("activated")?this.disabled=!0:this.disabled=!(!this.model.isEditing&&!0!==this.model.data.activated):this.disabled=!0},CampaignTaskActivateButton.prototype.execute=function(){var t=this;this.activating||(this.activating=!0,this.backend.postRequest("/module/CampaignTasks/"+this.model.id+"/activate").subscribe(function(e){t.activating=!1,e.success?(t.toast.sendToast("Activated"),t.model.setField("activated",!0)):t.toast.sendToast("Error")}))},CampaignTaskActivateButton=__decorate([core_1.Component({template:'<div class="slds-grid slds-grid--vertical-align-center"><div *ngIf="activating" class="slds-p-right--x-small"><system-spinner [size]="12"></system-spinner></div><span (click)="activate()">{{language.getLabel(\'LBL_ACTIVATE\')}}</span></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.toast,services_1.backend])],CampaignTaskActivateButton)}();exports.CampaignTaskActivateButton=CampaignTaskActivateButton;var CampaignSendMailButton=function(){function CampaignSendMailButton(e,t,s,i){var a=this;this.language=e,this.model=t,this.backend=s,this.toast=i,this.sending=!1,this.disabled=!0,this.model.mode$.subscribe(function(e){a.handleDisabled()}),this.model.data$.subscribe(function(e){a.handleDisabled()})}return CampaignSendMailButton.prototype.execute=function(){var t=this;this.sending||(this.sending=!0,this.backend.postRequest("module/CampaignTasks/"+this.model.id+"/queuemail").subscribe(function(e){t.sending=!1,t.toast.sendToast("Mails queued"),t.model.setField("activated",!0)}))},CampaignSendMailButton.prototype.handleDisabled=function(){this.model.getField("activated")?this.disabled=!0:(!this.model.data.acl||this.model.data.acl.edit)&&"Email"===this.model.data.campaigntask_type&&this.model.data.mailbox_id&&this.model.data.email_template_id?this.disabled=!!this.model.isEditing:this.disabled=!0},CampaignSendMailButton=__decorate([core_1.Component({selector:"campaign-send-mail-button",template:'<div class="slds-grid slds-grid--vertical-align-center"><div style="min-width: 26px;"><system-icon *ngIf="!sending" [sprite]="\'utility\'" [icon]="\'email\'" [size]="\'xx-small\'" [addclasses]="\'\'"></system-icon><system-spinner *ngIf="sending" [size]="10" [border]="1"></system-spinner></div><span>{{language.getLabel(\'LBL_QUEUE\', \'Campaigns\')}}</span></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.backend,services_1.toast])],CampaignSendMailButton)}();exports.CampaignSendMailButton=CampaignSendMailButton;var CampaignSendTestMailButton=function(){function CampaignSendTestMailButton(e,t,s,i){var a=this;this.language=e,this.model=t,this.backend=s,this.toast=i,this.sending=!1,this.disabled=!0,this.model.mode$.subscribe(function(e){a.handleDisabled()}),this.model.data$.subscribe(function(e){a.handleDisabled()})}return CampaignSendTestMailButton.prototype.execute=function(){var t=this;this.sending||(this.sending=!0,this.backend.postRequest("module/CampaignTasks/"+this.model.id+"/sendtestmail").subscribe(function(e){t.sending=!1,t.toast.sendToast("Mails sent")}))},CampaignSendTestMailButton.prototype.handleDisabled=function(){this.model.getField("activated")?this.disabled=!0:(!this.model.data.acl||this.model.data.acl.edit)&&"Email"===this.model.data.campaigntask_type&&this.model.data.mailbox_id&&this.model.data.email_template_id?this.disabled=!!this.model.isEditing:this.disabled=!0},CampaignSendTestMailButton=__decorate([core_1.Component({selector:"campaign-send-test-mail-button",template:'<div class="slds-grid slds-grid--vertical-align-center"><div style="min-width: 26px;"><system-icon *ngIf="!sending" [sprite]="\'utility\'" [icon]="\'email\'" [size]="\'xx-small\'" [addclasses]="\'\'"></system-icon><system-spinner *ngIf="sending" [size]="10" [border]="1"></system-spinner></div><span>{{language.getLabel(\'LBL_TEST\', \'Campaigns\')}}</span></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.backend,services_1.toast])],CampaignSendTestMailButton)}();exports.CampaignSendTestMailButton=CampaignSendTestMailButton;var ModuleCampaigns=function(){function ModuleCampaigns(e){this.vms=e,this.version="1.0",this.build_date="2019-10-04",this.vms.registerModule(this)}return ModuleCampaigns=__decorate([core_1.NgModule({imports:[common_1.CommonModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents],declarations:[CampaignTaskActivateButton,CampaignSendMailButton,CampaignSendTestMailButton]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleCampaigns)}();exports.ModuleCampaigns=ModuleCampaigns;