/** 
 * © 2015 - 2020 aac services k.s. All rights reserved.
 * release: 2020.04.001
 * date: 2020-12-17 12:01:08
 * build: 2020.04.001.1608202868755
 **/
"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)};return function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__decorate=this&&this.__decorate||function(t,e,o,i){var n,l=arguments.length,s=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;0<=r;r--)(n=t[r])&&(s=(l<3?n(s):3<l?n(e,o,s):n(e,o))||s);return 3<l&&s&&Object.defineProperty(e,o,s),s},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},__param=this&&this.__param||function(o,i){return function(t,e){i(t,e,o)}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.QuillEditorModule=exports.fieldQuillRichText=exports.QuillSourceEditorModal=exports.QuillEditorContainer=exports.QuillViewContainer=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),objectfields_1=require("../../objectfields/objectfields"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),services_1=require("../../services/services"),platform_browser_1=require("@angular/platform-browser"),forms_1=require("@angular/forms"),router_1=require("@angular/router"),directives_1=require("../../directives/directives"),QuillViewContainer=function(){function t(t,e,o,i,n){this.platformId=t,this.renderer=e,this.elementRef=o,this.libLoader=i,this.zone=n,this.heightStyle="300px",this.fullHeight=!1,this.textarea=document.createElement("textarea")}return t.prototype.ngOnChanges=function(t){t.content&&this.setEditorContent()},t.prototype.ngAfterViewInit=function(){common_1.isPlatformServer(this.platformId)||this.renderQuillEditor()},t.prototype.renderQuillEditor=function(){var t=this;this.libLoader.loadLib("QuillEditor").subscribe(function(){t.zone.runOutsideAngular(function(){t.quillEditor=new Quill(t.editorContainer.element.nativeElement,{modules:{toolbar:!1},readOnly:!0,strict:!0,theme:"snow"}),t.setEditorContent()})})},t.prototype.setEditorContent=function(){this.quillEditor&&this.quillEditor.setContents(this.quillEditor.clipboard.convert(this.getCleanHtml()))},t.prototype.getCleanHtml=function(){if(!this.content)return"";var t=/(?<=<pre class="ql-syntax" spellcheck="false">)[\s\S]*?(?=<\/pre>)/g.exec(this.decodeHTMLEntities(this.content));return t?this.content.replace(t.toString(),this.encodeHTMLEntities(t.toString())):this.content},t.prototype.decodeHTMLEntities=function(t){return this.textarea.innerHTML=t,this.textarea.innerText},t.prototype.encodeHTMLEntities=function(t){return this.textarea.innerText=t,this.textarea.innerHTML},__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"content",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"heightStyle",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],t.prototype,"fullHeight",void 0),__decorate([core_1.ViewChild("editorContainer",{read:core_1.ViewContainerRef,static:!1}),__metadata("design:type",core_1.ViewContainerRef)],t.prototype,"editorContainer",void 0),__decorate([core_1.Component({encapsulation:core_1.ViewEncapsulation.None,selector:"quill-view",template:'<div class="quill-rich-text-editor-view-container slds-theme--default slds-grid slds-grid--vertical spice-quill-editor-container" [style.height]="heightStyle"><div #editorContainer></div></div>'}),__param(0,core_1.Inject(core_1.PLATFORM_ID)),__metadata("design:paramtypes",[Object,core_1.Renderer2,core_1.ElementRef,services_1.libloader,core_1.NgZone])],t)}();exports.QuillViewContainer=QuillViewContainer;var QuillEditorContainer=function(){function t(t,e,o,i,n,l,s,r){this.elementRef=t,this.domSanitizer=e,this.platformId=o,this.renderer=i,this.modal=n,this.libLoader=l,this.cdRef=s,this.zone=r,this.simpleMode=!1,this.disabled=!1,this.heightStyle="300px",this.isFullScreenOn=!1,this.textarea=document.createElement("textarea")}var e=t;return t.prototype.ngAfterViewInit=function(){var t=this;common_1.isPlatformServer(this.platformId)||this.zone.runOutsideAngular(function(){return t.renderQuillEditor()})},t.prototype.ngOnDestroy=function(){this.quillEditor&&this.quillEditor.off("text-change",this.textChangeHandler)},t.prototype.ngOnChanges=function(t){this.quillEditor&&t.disabled&&this.setDisabledState()},t.prototype.registerOnChange=function(e){this.onChange=function(t){e(t)}},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.writeValue=function(t){this.content=t,this.quillEditor&&(t?(this.content=this.getCleanHtml(),this.quillEditor.setContents(this.quillEditor.clipboard.convert(this.domSanitizer.sanitize(core_1.SecurityContext.HTML,this.content)))):this.quillEditor.setText(""))},t.prototype.setDisabledState=function(){this.quillEditor&&(this.disabled?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))},t.prototype.encodeHtml=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},t.prototype.getCleanHtml=function(){var t=/(?<=<pre class="ql-syntax" spellcheck="false">)[\s\S]*?(?=<\/pre>)/g.exec(this.decodeHTMLEntities(this.content));return t?this.content.replace(t.toString(),this.encodeHTMLEntities(t.toString())):this.content},t.prototype.decodeHTMLEntities=function(t){return this.textarea.innerHTML=t,this.textarea.innerText},t.prototype.encodeHTMLEntities=function(t){return this.textarea.innerText=t,this.textarea.innerHTML},t.prototype.registerTextChangeHandler=function(){var e=this;this.textChangeHandler=function(){e.typingTimeout&&window.clearTimeout(e.typingTimeout),e.typingTimeout=window.setTimeout(function(){e.zone.run(function(){var t=e.editorContainer.element.nativeElement.querySelector(".ql-editor").innerHTML,t="<p><br></p>"===t||"<div><br></div>"===t?null:t;e.content=t,e.onChange(t)})},1e3)}},t.prototype.renderQuillEditor=function(){var e=this,o={toolbar:this.editorToolbar.element.nativeElement,imageResize:{displaySize:!0}};this.libLoader.loadLib("QuillEditor").subscribe(function(){var t;e.quillEditor=new Quill(e.editorContainer.element.nativeElement,{bounds:e.editorContainer.element.nativeElement,modules:o,scrollingContainer:e.scrollingContainer,strict:!0,theme:"snow"}),e.content&&(e.content=e.domSanitizer.sanitize(core_1.SecurityContext.HTML,e.content),t=e.quillEditor.clipboard.convert(e.content),e.quillEditor.setContents(t,"silent"),e.quillEditor.history.clear()),e.setDisabledState(),e.registerTextChangeHandler(),e.quillEditor.on("text-change",e.textChangeHandler)})},t.prototype.openMediaFilePicker=function(){var i=this;this.modal.openModal("MediaFilePicker").subscribe(function(t){t.instance.answer.subscribe(function(t){var e,o;t&&(e=i.quillEditor.getSelection(),o=e?e.index:0,t.upload?i.modal.openModal("MediaFileUploader").subscribe(function(t){t.instance.answer.subscribe(function(t){t&&i.quillEditor.insertEmbed(o,"image","https://cdn.spicecrm.io/"+t)})}):t.id&&i.quillEditor.insertEmbed(o,"image","https://cdn.spicecrm.io/"+t.id))})})},t.prototype.openSourceEditor=function(){var e=this;this.modal.openModal("QuillSourceEditorModal").subscribe(function(t){t.instance._html=e.content,t.instance.html.subscribe(function(t){e.writeValue(t)})})},t.prototype.toggleFullScreen=function(e){var o=this;document.onfullscreenchange=function(){o.isFullScreenOn=!!document.fullscreenElement,o.cdRef.detectChanges()},this.zone.runOutsideAngular(function(){var t;o.isFullScreenOn?(t=document).exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullscreen?e.mozRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()})},__decorate([core_1.Input(),__metadata("design:type",Boolean)],t.prototype,"simpleMode",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],t.prototype,"disabled",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"heightStyle",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"scrollingContainer",void 0),__decorate([core_1.ViewChild("editorContainer",{read:core_1.ViewContainerRef,static:!1}),__metadata("design:type",core_1.ViewContainerRef)],t.prototype,"editorContainer",void 0),__decorate([core_1.ViewChild("editorToolbar",{read:core_1.ViewContainerRef,static:!1}),__metadata("design:type",core_1.ViewContainerRef)],t.prototype,"editorToolbar",void 0),e=__decorate([core_1.Component({encapsulation:core_1.ViewEncapsulation.None,changeDetection:core_1.ChangeDetectionStrategy.OnPush,providers:[{multi:!0,provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return e})}],selector:"quill-editor",template:'<div #mainContainer class="slds-theme--default slds-grid slds-grid--vertical spice-quill-editor-container" [style.height]="!isFullScreenOn ? heightStyle : \'100%\'"><div #editorToolbar class="slds-theme--shade"><ng-container *ngIf="!simpleMode; else editorSimpleToolbar"><span class="ql-formats"><select class="ql-header"><option></option><option value="1"></option><option value="2"></option><option value="3"></option><option value="4"></option><option value="5"></option><option value="6"></option></select><button class="ql-clean" system-title="LBL_REMOVE_FORMATTING"></button></span> <span class="ql-formats"><button class="ql-bold" system-title="LBL_BOLD"></button> <button class="ql-italic" system-title="LBL_ITALIC"></button> <button class="ql-underline" system-title="LBL_UNDERLINE"></button> <button class="ql-strike" system-title="LBL_STRIKETHROUGH"></button> <button class="ql-script" value="sub" system-title="LBL_SUB"></button> <button class="ql-script" value="super" system-title="LBL_SUPER"></button><select class="ql-color" system-title="LBL_COLOR"><option></option><option value="#e60000"></option><option value="#ff9900"></option><option value="#ffff00"></option><option value="#008a00"></option><option value="#0066cc"></option><option value="#9933ff"></option><option value="#ffffff"></option><option value="#facccc"></option><option value="#ffebcc"></option><option value="#ffffcc"></option><option value="#cce8cc"></option><option value="#cce0f5"></option><option value="#ebd6ff"></option><option value="#bbbbbb"></option><option value="#f06666"></option><option value="#ffc266"></option><option value="#ffff66"></option><option value="#66b966"></option><option value="#66a3e0"></option><option value="#c285ff"></option><option value="#888888"></option><option value="#a10000"></option><option value="#b26b00"></option><option value="#b2b200"></option><option value="#006100"></option><option value="#0047b2"></option><option value="#6b24b2"></option><option value="#444444"></option><option value="#5c0000"></option><option value="#663d00"></option><option value="#666600"></option><option value="#003700"></option><option value="#002966"></option><option value="#3d1466"></option></select><select class="ql-background" system-title="LBL_BACKGROUND_COLOR"><option></option><option value="#000000"></option><option value="#e60000"></option><option value="#ff9900"></option><option value="#ffff00"></option><option value="#008a00"></option><option value="#0066cc"></option><option value="#9933ff"></option><option value="#facccc"></option><option value="#ffebcc"></option><option value="#ffffcc"></option><option value="#cce8cc"></option><option value="#cce0f5"></option><option value="#ebd6ff"></option><option value="#bbbbbb"></option><option value="#f06666"></option><option value="#ffc266"></option><option value="#ffff66"></option><option value="#66b966"></option><option value="#66a3e0"></option><option value="#c285ff"></option><option value="#888888"></option><option value="#a10000"></option><option value="#b26b00"></option><option value="#b2b200"></option><option value="#006100"></option><option value="#0047b2"></option><option value="#6b24b2"></option><option value="#444444"></option><option value="#5c0000"></option><option value="#663d00"></option><option value="#666600"></option><option value="#003700"></option><option value="#002966"></option><option value="#3d1466"></option></select></span> <span class="ql-formats"><button class="ql-indent" value="-1" system-title="LBL_TEXT_INDENT"></button> <button class="ql-indent" value="+1" system-title="LBL_TEXT_OUTDENT"></button> <button class="ql-list" value="ordered" system-title="LBL_NUMBERED_LIST"></button> <button class="ql-list" value="bullet" system-title="LBL_BULLETED_LIST"></button> <button class="ql-blockquote" system-title="LBL_QUOTE"></button> <button class="ql-code-block" system-title="LBL_ADD_CODE_SNIPPET"></button></span> <span class="ql-formats"><select class="ql-align"><option></option><option value="center" system-title="LBL_CENTER_ALIGN"></option><option value="right" system-title="LBL_RIGHT_ALIGN"></option><option value="justify" system-title="LBL_ALIGN_TEXT"></option></select><button class="ql-direction" value="rtl" system-title="LBL_RTL_DIRECTION"></button></span> <span class="ql-formats"><button class="ql-link" system-title="LBL_LINK"></button> <button class="ql-image" system-title="LBL_NEW_IMAGE"></button> <button (click)="openMediaFilePicker()" system-title="LBL_MEDIAFILE_PICKER"><system-button-icon icon="ad_set" size="small"></system-button-icon></button> <button class="ql-video" system-title="LBL_ADD_VIDEO"></button></span> <span class="ql-formats"><button (click)="openSourceEditor()" system-title="LBL_SOURCE_EDITOR"><system-button-icon icon="apex"></system-button-icon></button> <button (click)="toggleFullScreen(mainContainer)" system-title="LBL_FULL_SCREEN" class="slds-button slds-button--neutral slds-button--icon-border slds-m-left--xx-small slds-m-right--xxx-small slds-col--bump-left"><system-button-icon [icon]="!isFullScreenOn ? \'expand\' : \'contract\'"></system-button-icon></button></span></ng-container><ng-template #editorSimpleToolbar><span class="ql-formats"><button class="ql-bold" system-title="LBL_BOLD"></button> <button class="ql-italic" system-title="LBL_ITALIC"></button> <button class="ql-underline" system-title="LBL_UNDERLINE"></button></span> <span class="ql-formats"><button class="ql-indent" value="-1" system-title="LBL_TEXT_INDENT"></button> <button class="ql-indent" value="+1" system-title="LBL_TEXT_OUTDENT"></button> <button class="ql-list" value="ordered" system-title="LBL_NUMBERED_LIST"></button> <button class="ql-list" value="bullet" system-title="LBL_BULLETED_LIST"></button></span> <span class="ql-formats"><select class="ql-align"><option></option><option value="center" system-title="LBL_CENTER_ALIGN"></option><option value="right" system-title="LBL_RIGHT_ALIGN"></option><option value="justify" system-title="LBL_ALIGN_TEXT"></option></select></span> <span class="ql-formats"><button class="ql-link" system-title="LBL_LINK"></button> <button class="ql-image" system-title="LBL_NEW_IMAGE"></button></span></ng-template></div><div #editorContainer></div></div>'}),__param(2,core_1.Inject(core_1.PLATFORM_ID)),__metadata("design:paramtypes",[core_1.ElementRef,platform_browser_1.DomSanitizer,Object,core_1.Renderer2,services_1.modal,services_1.libloader,core_1.ChangeDetectorRef,core_1.NgZone])],t)}();exports.QuillEditorContainer=QuillEditorContainer;var QuillSourceEditorModal=function(t){function QuillSourceEditorModal(){return null!==t&&t.apply(this,arguments)||this}return __extends(QuillSourceEditorModal,t),__decorate([core_1.Component({selector:"quill-source-editor-modal",template:'<system-modal size="large"><system-modal-header (close)="close()"><system-label label="LBL_SOURCE_EDITOR"></system-label></system-modal-header><system-modal-content><div class="slds-grid" style="height: 70vh;"><div class="slds-size--1-of-2 slds-p-right--xx-small"><quill-editor [(ngModel)]="_html" heightStyle="100%"></quill-editor></div><div class="slds-size--1-of-2 slds-p-left--x-small"><div class="slds-p-bottom--xx-small slds-grid"><div class="slds-grow slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right slds-global-search__form-element" role="none"><system-utility-icon icon="search" addclasses="slds-input__icon slds-input__icon--left"></system-utility-icon><input (keyup)="keyUp($event)" type="text" class="slds-input" [placeholder]="language.getLabel(\'LBL_SEARCH\')" [(ngModel)]="searchText"><div *ngIf="foundIndices.length > 1" class="slds-grid slds-grid--align-spread slds-input__icon_right slds-is-absolute__top" style="height: 100%"><button (click)="nextResult()" [disabled]="nextDisabled" class="slds-button slds-button_icon slds-input__icon" style="position:relative;" [title]="language.getLabel(\'LBL_NEXT\')"><system-button-icon icon="arrowdown"></system-button-icon></button> <button (click)="previewResult()" [disabled]="previewDisabled" class="slds-button slds-button_icon slds-input__icon" style="position:relative;" [title]="language.getLabel(\'LBL_PREVIEW\')"><system-button-icon icon="arrowup"></system-button-icon></button></div></div><button [disabled]="!beautifyenabled" class="slds-m-left--xx-small slds-button slds-button--icon-border slds-button--neutral" (click)="beautify()"><system-button-icon icon="right_align_text"></system-button-icon></button></div><pre #sourceeditor [attr.contenteditable]="true" (input)="onContentChange($event.target[\'innerText\'])" style="height: calc(100% - 36px);" class="slds-box slds-theme--default slds-scrollable_y"></pre></div></div></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="close()"><system-label label="LBL_OK"></system-label></button></system-modal-footer></system-modal>'})],QuillSourceEditorModal)}(systemcomponents_1.SystemRichTextSourceModal);exports.QuillSourceEditorModal=QuillSourceEditorModal;var fieldQuillRichText=function(r){function fieldQuillRichText(t,e,o,i,n,l){var s=r.call(this,t,e,o,n,l)||this;return s.model=t,s.view=e,s.language=o,s.zone=i,s.metadata=n,s.router=l,s.heightStyle="300px",s}return __extends(fieldQuillRichText,r),fieldQuillRichText.prototype.ngOnInit=function(){this.setHeightStyle()},fieldQuillRichText.prototype.setHeightStyle=function(){this.heightStyle=isNaN(parseInt(this.fieldconfig.height,10))?"300px":parseInt(this.fieldconfig.height,10)+"px"},__decorate([core_1.Component({selector:"field-quill-rich-text",template:'<div class="slds-grid slds-grid--vertical-align-center slds-grid--align-spread"><field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><button *ngIf="!isEditMode() && isEditable()" class="slds-button slds-button--icon slds-m-left--xx-small spice-hover-button" (click)="setEditMode()"><system-button-icon [icon]="\'edit\'"></system-button-icon></button></div><field-generic-display *ngIf="!isEditMode()" [fielddisplayclass]="fielddisplayclass" [editable]="false" [fieldconfig]="fieldconfig"><quill-view [content]="value" [heightStyle]="heightStyle"></quill-view></field-generic-display><div *ngIf="isEditable() && isEditMode()" class="slds-form-element__control" [ngClass]="getFieldClass()"><quill-editor [(ngModel)]="value" [simpleMode]="fieldconfig.simpleMode" [heightStyle]="heightStyle"></quill-editor><field-messages [fieldname]="fieldname"></field-messages></div>'}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,core_1.NgZone,services_1.metadata,router_1.Router])],fieldQuillRichText)}(objectfields_1.fieldGeneric);exports.fieldQuillRichText=fieldQuillRichText;var QuillEditorModule=function(){function QuillEditorModule(){}return __decorate([core_1.NgModule({declarations:[QuillEditorContainer,QuillViewContainer,fieldQuillRichText,QuillSourceEditorModal],exports:[QuillEditorContainer,QuillViewContainer],imports:[common_1.CommonModule,objectfields_1.ObjectFields,systemcomponents_1.SystemComponents,forms_1.FormsModule,directives_1.DirectivesModule]})],QuillEditorModule)}();exports.QuillEditorModule=QuillEditorModule;