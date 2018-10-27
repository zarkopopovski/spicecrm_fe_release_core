/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

import {
    AfterViewInit,
    ComponentFactoryResolver,
    Component,
    ElementRef,
    NgModule,
    ViewChild,
    ViewContainerRef,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnChanges
} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {model} from '../../../services/model.service';
import {language} from '../../../services/language.service';
import {broadcast} from '../../../services/broadcast.service';
import {navigation} from '../../../services/navigation.service';
import {calendar} from '../services/calendar.service';

declare var moment: any;

@Component({
    selector: 'calendar-sheet-drop-target',
    template: '',
    // templateUrl: './src/modules/calendar/templates/calendarsheetdroptarget.html',
    providers:[model],
    host: {
        '(dragover)': 'this.dragOver($event)',
        '(dragenter)': 'this.dragEnter($event)',
        '(dragleave)': 'this.dragLeave($event)',
        '(drop)': 'this.drop($event)',
        '[class]': 'this.getClass()'
    }
})
export class CalendarSheetDropTarget {

    @Input() hour: any = '';
    @Input() day: any = undefined;
    @Output() rearrange: EventEmitter<any> = new EventEmitter<any>()

    isActive: boolean = false;
    isDropTarget: boolean = false;

    constructor(private calendar: calendar, private model: model) {
    }

    get content() {
        return this.hour + ' ' + this.day;
    }

    getClass() {
        if (this.isDropTarget)
            return 'slds-is-absolute slds-theme--shade';
        else
            return 'slds-is-absolute';
    }

    dragOver(event) {
        event.preventDefault();
    }

    dragEnter(event) {

        this.isDropTarget = true;
        /*
         let dragEvent = {};
         this.calendar.getEvents().some(event => {
         if(event.dragging){
         dragEvent = event;
         return true;
         }
         });
         */

    }

    dragLeave(event) {
        this.isDropTarget = false;
    }

    drop(event) {

        let dragEvent: any = null;
        this.calendar.getEvents().some(event => {
            if (event.dragging) {
                dragEvent = event;

                return true;
            }
        });
        if (dragEvent) {
            dragEvent.dragging = false;

            let utcOffset = moment().utcOffset() / 60;
            if(this.day) {
                dragEvent.data.date_start.date(this.day.date.date());
                dragEvent.data.date_start.month(this.day.date.month());
                dragEvent.data.date_start.year(this.day.date.year());
            }
            dragEvent.data.date_start.hour(this.hour);
            dragEvent.data.date_start.minutes(0);

            // calculate the end date
            dragEvent.data.date_end = new moment(dragEvent.data.date_start).add(dragEvent.data.duration_minutes + 60 * dragEvent.data.duration_hours, 'm');

            if(this.day) {
                dragEvent.start.date(this.day.date.date());
                dragEvent.start.month(this.day.date.month());
                dragEvent.start.year(this.day.date.year());
            }
            dragEvent.start.hour(this.hour);
            dragEvent.start.minutes(0);

            // calculate the end date
            dragEvent.end = new moment(dragEvent.start).add(dragEvent.data.duration_minutes + 60 * dragEvent.data.duration_hours, 'm');

            // save the event
            this.saveEvent(dragEvent);

            // emit to rearrange
            this.rearrange.emit();
        }

        this.isDropTarget = false;
        event.preventDefault();
    }


    saveEvent(event){
        this.model.module = event.module
        this.model.id = event.id;
        this.model.data = event.data;
        event.saving = true;
        this.model.save().subscribe(data => {
            event.saving = false; 
        });
    }
}