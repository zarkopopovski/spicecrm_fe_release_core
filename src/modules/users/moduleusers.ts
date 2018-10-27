/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

import {CommonModule} from "@angular/common";
import {NgModule, Renderer2, AfterViewChecked, ChangeDetectorRef, Output, Component, Injectable, EventEmitter, OnInit, AfterViewInit, OnDestroy, OnChanges, ViewChild, ViewContainerRef, Input} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {Observable, Subject} from "rxjs";

import {VersionManagerService} from "../../services/versionmanager.service";
import {DirectivesModule} from "../../directives/directives";

import {language} from "../../services/language.service";
import {view} from "../../services/view.service";
import {metadata} from "../../services/metadata.service";
import {backend} from "../../services/backend.service";
import {model} from "../../services/model.service";
import {toast} from "../../services/toast.service";
import {relatedmodels} from "../../services/relatedmodels.service";
import {modal} from "../../services/modal.service";
import {session} from "../../services/session.service";
import {broadcast} from "../../services/broadcast.service";
import {userpreferences} from "../../services/userpreferences.service";
import {modelutilities} from "../../services/modelutilities.service";
import {currency} from '../../services/currency.service';

import {ObjectFields} from "../../objectfields/objectfields";
import {GlobalComponents} from "../../globalcomponents/globalcomponents";
import {ObjectComponents} from "../../objectcomponents/objectcomponents";
import {SystemComponents} from "../../systemcomponents/systemcomponents";

import /*embed*/ {UserChangePasswordButton} from "./components/userchangepasswordbutton";
import /*embed*/ {UserChangePasswordModal} from "./components/userchangepasswordmodal";
import /*embed*/ {UserPreferences} from "./components/userpreferences";
import /*embed*/ {UserRoles} from "./components/userroles";
import /*embed*/ {UserRolesAddModal} from "./components/userrolesaddmodal";
import /*embed*/ {UserAddButton} from "./components/useraddbutton";
import /*embed*/ {UserAddModal} from "./components/useraddmodal";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ObjectFields,
        GlobalComponents,
        ObjectComponents,
        SystemComponents,
        DirectivesModule,
    ],
    declarations: [
        UserChangePasswordButton,
        UserChangePasswordModal,
        UserPreferences,
        UserRoles,
        UserRolesAddModal,
        UserAddButton,
        UserAddModal,
    ]
})
export class ModuleUsers {
    public readonly version = "1.0";
    public readonly build_date = "/*build_date*/";

    constructor(
        private vms: VersionManagerService,
    ) {
        this.vms.registerModule(this);
    }
}