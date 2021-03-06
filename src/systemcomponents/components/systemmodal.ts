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
 * @module SystemComponents
 */
import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {metadata} from '../../services/metadata.service';
import {layout} from '../../services/layout.service';

/**
 * a component that is the base for a modal window. It can conatain a set of other components
 * - system-modal-header
 * - system-modal-content
 * - system-modal footer
 *
 * ```html
 * <system-modal size="large">
 * <system-modal-header (close)="closeModal()">
 * {{modalHeader}}
 * </system-modal-header>
 * <system-modal-content margin="none" #modalContent viewprovider>
 * </system-modal-content>
 * <system-modal-footer>
 * <button class="slds-button slds-button--neutral" (click)="closeModal()">{{language.getLabel('LBL_CANCEL')}}</button>
 * <button class="slds-button slds-button--brand" (click)="save()">{{language.getLabel('LBL_SAVE')}}</button>
 * </system-modal-footer>
 * </system-modal>
 * ``
 */
@Component({
    selector: 'system-modal',
    templateUrl: './src/systemcomponents/templates/systemmodal.html',
    animations: [
        trigger('modalanimation', [
            transition(':enter', [
                style({opacity: 0}),
                animate('.3s', style({opacity: 1}))
            ]),
            transition(':leave', [
                animate('.3s', style({opacity: 0}))
            ])
        ])
    ]
})
export class SystemModal {

    /**
     * the size of the modal tobe rendered
     */
    @Input() private size: 'prompt' | 'small' | 'medium' | 'large' = 'medium';

    /**
     * additonal classes that are put in and are rendered with the modal
     */
    @Input() private class: string = '';

    constructor(private metadata: metadata, private layout: layout) {

    }

    /**
     * @ignore
     *
     * helper function to get the classes for the template
     */
    get sizeClass() {
        if (this.size) {
            return this.class + ' slds-modal_' + this.size;
        }

        return this.class;
    }

    /**
     * make the modal full screen on small screens
     */
    get containerStyle() {
        if (this.layout.screenwidth == 'small') {
            return {
                'padding': '0px',
                'margin': '0px',
                'border-radius': '0px'
            };
        } else {
            return {};
        }
    }

}

