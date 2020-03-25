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
 * @module ModuleReports
 */
import {
    Component, AfterViewInit, OnInit,
    OnDestroy, ElementRef, Renderer2
} from '@angular/core';
import {metadata} from '../../../services/metadata.service';
import {libloader} from '../../../services/libloader.service';

/**
 * @ignore
 */
declare var google: any;

@Component({
    selector: 'reporter-detail-visualization-googlecharts',
    templateUrl: './src/modules/reports/templates/reporterdetailvisualizationgooglecharts.html'
})
export class ReporterDetailVisualizationGooglecharts implements AfterViewInit, OnDestroy {

    private vizdata: any = {};
    private wrapper: any = undefined;
    private resizseHandler: any = {};

    constructor(private renderer: Renderer2, private elementRef: ElementRef, private metadata: metadata, private libloader: libloader) {
        this.resizseHandler = this.renderer.listen('window', 'resize', () => this.onResize());
    }


    public ngAfterViewInit() {

        if (!this.vizdata.data.options.height) {
            this.vizdata.data.options.height = this.elementRef.nativeElement.height;
        }

        this.libloader.loadLib('googlecharts').subscribe((next) => {
            google.charts.load('current', {packages: ['corechart']});
            google.charts.setOnLoadCallback(() => {
                this.drawchart();
            });
        });
    }

    private drawchart() {
        this.wrapper = new google.visualization.ChartWrapper(this.vizdata.data);
        this.wrapper.draw();
    }

    public ngOnDestroy() {
        this.resizseHandler();
    }

    private getVizStyle() {
        return this.vizdata.layout;
    }

    private onResize() {
        if (this.wrapper) {
            this.wrapper.draw();
        }
    }
}
