/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

import {Component, EventEmitter, OnInit, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {language} from '../../services/language.service';

@Component({
    templateUrl: './src/systemcomponents/templates/systemobjectpreviewmodal.html'
})
export class SystemObjectPreviewModal {

    private self: any = {};
    @Input() private type: string = '';
    @Input() private name: string = '';
    private blobUrl: any;

    constructor(private language: language, private sanitizer: DomSanitizer) {
    }

    private closeModal() {
        this.self.destroy();
    }

    set data(data) {
        let blob = this.datatoBlob(data, this.type);
        this.blobUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
    }

    get objecttype() {
        if (!this.type) return '';

        let typeArray = this.type.split("/");
        switch (typeArray[0]) {
            case 'audio':
            case 'video':
                return typeArray[0];
            default:
                return 'object';
        }
    }

    private download() {
        let a = document.createElement("a");
        a.href = this.blobUrl;
        a.download = this.name;
        a.click();
        a.remove();
    }

    private datatoBlob(byteCharacters, contentType = '', sliceSize = 512) {
        let byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);

            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            let byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        let blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }
}