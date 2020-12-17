/** 
 * © 2015 - 2020 aac services k.s. All rights reserved.
 * release: 2020.04.001
 * date: 2020-12-17 12:01:08
 * build: 2020.04.001.1608202868755
 **/
"use strict";var __extends=this&&this.__extends||function(){var s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)};return function(e,t){function i(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__decorate=this&&this.__decorate||function(e,t,i,s){var a,l=arguments.length,n=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;0<=o;o--)(a=e[o])&&(n=(l<3?a(n):3<l?a(t,i,n):a(t,i))||n);return 3<l&&n&&Object.defineProperty(t,i,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModuleMediaFiles=exports.fieldMediaFileImage=exports.fieldMediaFile=exports.fieldMediaFilesImage=exports.MediaFilesTile=exports.MediaFilesList=exports.MediaFileUploader=exports.MediaFilePicker=exports.MediaFileImage=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),directives_1=require("../../directives/directives"),services_1=require("../../services/services"),rxjs_1=require("rxjs"),router_1=require("@angular/router"),platform_browser_1=require("@angular/platform-browser"),MediaFileImage=function(){function MediaFileImage(e,t,i){this.mediafiles=e,this.elRef=t,this.modal=i,this.size=null,this.width=null,this.height=null,this.classImage="",this.classOuter="",this.align="",this.frameWidth=null,this.frameHeight=null,this.frameSize=null,this.displayInline=!1,this.title="",this.alttext="",this.dimensions={width:void 0,height:void 0},this.isFirstChange=!0,this.lastMediaId="",this.withFrameHeight=!0}return MediaFileImage.prototype.ngOnChanges=function(){this.isFirstChange&&(this.isFirstChange=!1,this.variantStatic=this.variant),"mw"===this.variantStatic||"mwh"===this.variantStatic?(null!=this.width&&(this.dimensions.width=this.width),null!=this.height&&(this.dimensions.height=this.height),null===this.frameWidth&&(this.frameWidth=this.determineMaxWidthOfImage()),"mwh"===this.variantStatic&&null===this.frameHeight&&(this.frameHeight=this.determineMaxHeightOfImage()),"mw"===this.variantStatic&&(this.withFrameHeight=!1)):(null!=this.size&&(this.dimensions.height=this.dimensions.width=this.size),null===this.frameSize&&(this.frameSize=this.determineMaxWidthOfImage())),this.media_id&&(this.lastMediaId!==this.media_id?this.showImage():this.imageUrl="")},MediaFileImage.prototype.showImage=function(){var e,t=this;switch(this.variantStatic){case"mw":e=this.frameWidth;break;case"mwh":e=this.frameWidth+"/"+this.frameHeight;break;case"th":e=this.frameSize}this.mediafiles.getImageVariant(this.media_id,this.variantStatic+"/"+e).subscribe(function(e){t.imageUrl=e})},Object.defineProperty(MediaFileImage.prototype,"styleDisplay",{get:function(){return this.displayInline?"inline-block":"block"},enumerable:!1,configurable:!0}),Object.defineProperty(MediaFileImage.prototype,"styleOuter",{get:function(){switch(this.align){case"left":return{"margin-left":0,"margin-right":"auto"};case"right":return{"margin-left":"auto","margin-right":0};case"center":return{"margin-left":"auto","margin-right":"auto"};default:return{}}},enumerable:!1,configurable:!0}),Object.defineProperty(MediaFileImage.prototype,"styleImg",{get:function(){var e=__assign({},this.dimensions);return this.withFrameHeight&&(e.position="absolute",e.top=e.left=e.bottom=e.right=0,e.margin="auto"),e},enumerable:!1,configurable:!0}),MediaFileImage.prototype.getWidthOfParent=function(){return Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).width.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).paddingLeft.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).paddingRight.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).borderLeftWidth.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).borderRightWidth.replace(/px$/,""))},MediaFileImage.prototype.determineMaxWidthOfImage=function(){return Math.round(this.getWidthOfParent())},MediaFileImage.prototype.getHeightOfParent=function(){return Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).height.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).paddingTop.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).paddingBottom.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).borderTopWidth.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).borderBottomWidth.replace(/px$/,""))},MediaFileImage.prototype.determineMaxHeightOfImage=function(){return Math.round(this.getHeightOfParent())},MediaFileImage.prototype.openImagePreview=function(){var e=this;this.modal.openModal("SystemImagePreviewModal").subscribe(function(t){e.mediafiles.getImageBase64(e.media_id).subscribe(function(e){t.instance.imgtype=e.filetype,t.instance.imgsrc="data:"+e.filetype+";base64,"+e.img})})},__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"media_id",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"variant",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"size",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"width",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"height",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MediaFileImage.prototype,"classImage",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MediaFileImage.prototype,"classOuter",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MediaFileImage.prototype,"align",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"frameWidth",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"frameHeight",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"frameSize",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MediaFileImage.prototype,"displayInline",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MediaFileImage.prototype,"title",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],MediaFileImage.prototype,"alttext",void 0),__decorate([core_1.Component({selector:"media-file-image",template:'<span class="slds-is-relative" [ngClass]="classOuter" [ngStyle]="styleOuter" [style.maxwidth]="frameWidth" [style.height]="frameHeight" [style.display]="styleDisplay"><img *ngIf="imageUrl" [src]="imageUrl" [title]="title" [alt]="alttext" [ngStyle]="styleImg" class="{{classImage}}" style="max-width:100%;max-height:100%" (click)="openImagePreview()"></span>',providers:[services_1.mediafiles],styles:["img:hover { cursor: pointer; }"]}),__metadata("design:paramtypes",[services_1.mediafiles,core_1.ElementRef,services_1.modal])],MediaFileImage)}();exports.MediaFileImage=MediaFileImage;var MediaFilePicker=function(r){function MediaFilePicker(e,t,i,s,a,l,n){var o=r.call(this,e,t,i,s,a,l)||this;return o.language=e,o.modellist=t,o.metadata=i,o.modelutilities=s,o.model=a,o.layout=l,o.elementRef=n,o.module="MediaFiles",o.answer=new core_1.EventEmitter,o}return __extends(MediaFilePicker,r),Object.defineProperty(MediaFilePicker.prototype,"containerStyle",{get:function(){var e=this.elementRef.nativeElement.getBoundingClientRect(),t=Math.floor((e.width-10)/320),t=Math.floor((e.width-10-320*t)/2);return{"padding-left":t+"px","padding-right":t+"px"}},enumerable:!1,configurable:!0}),MediaFilePicker.prototype.pick=function(e){this.answer.emit({id:e}),this.self.destroy()},MediaFilePicker.prototype.upload=function(){var t=this;this.model.module="MediaFiles",this.model.id=void 0,this.model.initialize(),this.model.addModel().subscribe(function(e){t.answer.emit({id:t.model.id}),t.self.destroy()})},__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],MediaFilePicker.prototype,"answer",void 0),__decorate([core_1.Component({selector:"media-file-picker",template:'<system-modal size="large"><system-modal-header (close)="closePopup()">{{language.getModuleCombinedLabel(\'LBL_SEARCH\', modellist.module)}}</system-modal-header><system-modal-content margin="none" [grow]="true"><div class="slds-height_full"><object-modal-module-lookup-header></object-modal-module-lookup-header><div class="slds-is-relative" [ngStyle]="contentStyle()"><div class="slds-grid slds-wrap" [ngStyle]="containerStyle"><media-files-tile *ngFor="let listItem of modellist.listData.list" [data]="listItem" [selectbox]="true" (click)="pick(listItem.id)"></media-files-tile></div><div *ngIf="!modellist.isLoading && modellist.listData.totalcount == 0" class="slds-align--absolute-center" style="height: calc(100% - 35px)"><system-illustration-no-records><system-label label="MSG_NO_RECORDS_FOUND"></system-label></system-illustration-no-records></div><object-modal-module-lookup-aggregates></object-modal-module-lookup-aggregates></div></div></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="closePopup()"><system-label label="LBL_CANCEL"></system-label></button> <button class="slds-button slds-button--brand" (click)="upload()"><system-label label="LBL_UPLOAD_NEW_FILE"></system-label> …</button></system-modal-footer></system-modal>',providers:[services_1.view,services_1.modellist,services_1.model]}),__metadata("design:paramtypes",[services_1.language,services_1.modellist,services_1.metadata,services_1.modelutilities,services_1.model,services_1.layout,core_1.ElementRef])],MediaFilePicker)}(objectcomponents_1.ObjectModalModuleLookup);exports.MediaFilePicker=MediaFilePicker;var MediaFileUploader=function(){function MediaFileUploader(e,t,i,s,a,l,n){this.mediafiles=e,this.metadata=t,this.backend=i,this.lang=s,this.toast=a,this.model=l,this.view=n,this.theProgress=0,this.noMetaData=!1,this.answer=null,this.answerSubject=null,this.isSaving=!1,this.isEditing=!0,this.answerSubject=new rxjs_1.Subject,this.answer=this.answerSubject.asObservable(),this.model.module="MediaFiles",this.model.id=this.model.generateGuid(),this.model.initialize(),this.model.setField("id",this.model.id),this.view.isEditable=!0,this.view.setEditMode();n=this.metadata.getComponentConfig("MediaFileUploader","MediaFiles");this.fieldsetId=n.fieldset}return MediaFileUploader.prototype.cancel=function(){this.model.cancelEdit(),this.answerSubject.next(!1),this.answerSubject.complete(),this.self.destroy()},Object.defineProperty(MediaFileUploader.prototype,"canSave",{get:function(){return this.mediaMetaData&&!this.isSaving},enumerable:!1,configurable:!0}),Object.defineProperty(MediaFileUploader.prototype,"image",{get:function(){var e=this.model.getField("file");return e?this.model.getField("filetype")+"|"+e:void 0},set:function(e){var t=e.indexOf("|");this.model.setField("file",e.substring(t+1)),this.mediaMetaData=this.inputMedia.mediaMetaData,this.model.getField("name")||this.model.setField("name",this.mediaMetaData.filename.replace(/\.[^\.]+$/,"").replace(/_/," ")),this.model.setField("filetype",e.substring(0,t))},enumerable:!1,configurable:!0}),MediaFileUploader.prototype.save=function(){var t=this;this.canSave&&(this.isSaving=!0,this.model.savingProgress.subscribe(function(e){return t.theProgress=e}),this.model.validate()?(this.view.setViewMode(),this.isEditing=!1,this.model.save().subscribe(function(){t.answerSubject.next(t.model.id),t.answerSubject.complete(),window.setTimeout(function(){return t.self.destroy()},2e3)})):this.isSaving=!1)},MediaFileUploader.prototype.onModalEscX=function(){return this.isSaving||this.cancel(),!1},__decorate([core_1.ViewChild(systemcomponents_1.SystemInputMedia,{static:!1}),__metadata("design:type",Object)],MediaFileUploader.prototype,"inputMedia",void 0),__decorate([core_1.Component({selector:"media-file-uploader",template:'<system-modal size="large"><system-modal-header (close)="cancel()"><system-label label="LBL_NEW_IMAGE"></system-label></system-modal-header><system-modal-content><div class="slds-grid"><div class="slds-box slds-box_x-small slds-size--1-of-2" [ngClass]="{\'slds-size--1-of-1\':noMetaData,\'slds-size--1-of-2\':!noMetaData}"><system-input-media [(ngModel)]="image" class="slds-height_full"></system-input-media></div><div *ngIf="!noMetaData" class="slds-p-left--medium slds-size--1-of-2"><object-record-fieldset [fieldset]="fieldsetId" direction="vertical"></object-record-fieldset></div></div></system-modal-content><system-modal-footer><div *ngIf="!isSaving"><button class="slds-button slds-button--brand" (click)="save()" [disabled]="!canSave"><system-label label="LBL_SAVE"></system-label></button> <button class="slds-button slds-button--neutral" (click)="cancel()"><system-label label="LBL_CANCEL"></system-label></button></div><div *ngIf="isSaving"><system-progress-bar [progress]="theProgress"><system-label label="LBL_UPLOADING_MEDIA_FILE"></system-label></system-progress-bar></div></system-modal-footer></system-modal>',providers:[services_1.mediafiles,services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.mediafiles,services_1.metadata,services_1.backend,services_1.language,services_1.toast,services_1.model,services_1.view])],MediaFileUploader)}();exports.MediaFileUploader=MediaFileUploader;var MediaFilesList=function(d){function MediaFilesList(e,t,i,s,a,l,n,o){var r=d.call(this,e,t,i,s,a,l)||this;return r.router=e,r.cdRef=t,r.metadata=i,r.modellist=s,r.language=a,r.layout=l,r.renderer=n,r.elementRef=o,r.resizeHandler=r.renderer.listen("window","resize",function(){return r.onResize()}),r}return __extends(MediaFilesList,d),MediaFilesList.prototype.ngOnDestroy=function(){d.prototype.ngOnDestroy.call(this),this.resizeHandler()},MediaFilesList.prototype.onResize=function(){this.cdRef.detectChanges()},Object.defineProperty(MediaFilesList.prototype,"containerStyle",{get:function(){var e=this.elementRef.nativeElement.getBoundingClientRect(),t=Math.floor((e.width-10)/320),t=Math.floor((e.width-10-320*t)/2);return{"padding-left":t+"px","padding-right":t+"px"}},enumerable:!1,configurable:!0}),__decorate([core_1.Component({selector:"media-files-list",template:'<div (system-to-bottom)="onScroll()" style="min-height: 250px"><div class="slds-grid slds-wrap" [ngStyle]="containerStyle"><media-files-tile *ngFor="let listItem of modellist.listData.list" [data]="listItem"></media-files-tile></div><div *ngIf="!modellist.isLoading && modellist.listData.totalcount == 0" class="slds-align--absolute-center" style="height: calc(100% - 35px)"><system-illustration-no-records><system-label label="MSG_NO_RECORDS_FOUND"></system-label></system-illustration-no-records></div></div>',changeDetection:core_1.ChangeDetectionStrategy.OnPush}),__metadata("design:paramtypes",[router_1.Router,core_1.ChangeDetectorRef,services_1.metadata,services_1.modellist,services_1.language,services_1.layout,core_1.Renderer2,core_1.ElementRef])],MediaFilesList)}(objectcomponents_1.ObjectList);exports.MediaFilesList=MediaFilesList;var MediaFilesTile=function(){function MediaFilesTile(e,t,i,s,a,l){this.metadata=e,this.model=t,this.view=i,this.sanitizer=s,this.modal=a,this.mediafiles=l,this.selectbox=!1,this.getConfig()}return MediaFilesTile.prototype.ngOnInit=function(){this.initializeView(),this.initializeModel()},MediaFilesTile.prototype.initializeView=function(){this.view.isEditable=!1,this.view.displayLabels=!1,1==this.selectbox&&(this.view.displayLinks=!1)},MediaFilesTile.prototype.getConfig=function(){var e=this.metadata.getComponentConfig("MediaFilesTile","MediaFiles");this.fieldset=e.fieldset,this.actionset=e.actionset},MediaFilesTile.prototype.initializeModel=function(){this.model.module="MediaFiles",this.model.id=this.data.id,this.model.data=this.model.utils.backendModel2spice("MediaFiles",this.data)},Object.defineProperty(MediaFilesTile.prototype,"thumbnail",{get:function(){var e=this.model.getField("thumbnail");return!!e&&this.sanitizer.bypassSecurityTrustResourceUrl("data:"+this.model.getField("filetype")+";base64,"+e)},enumerable:!1,configurable:!0}),MediaFilesTile.prototype.expand=function(){var i=this;this.modal.openModal("SystemImagePreviewModal").subscribe(function(t){t.instance.imgname=i.model.getFieldValue("name"),t.instance.imgtype=i.model.getFieldValue("filetype"),i.mediafiles.getImageBase64(i.model.id).subscribe(function(e){t.instance.imgsrc="data:"+i.model.getFieldValue("filetype")+";base64,"+e.img})})},__decorate([core_1.Input(),__metadata("design:type",Object)],MediaFilesTile.prototype,"data",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MediaFilesTile.prototype,"selectbox",void 0),__decorate([core_1.Component({selector:"media-files-tile",template:'<div class="slds-p-around--small" style="width:20rem"><div class="slds-file slds-file_card slds-has-title"><figure><div style="height: 165px; width: 294px;" class="slds-align--absolute-center"><img *ngIf="!thumbnail" src="./vendor/sldassets/images/placeholder-img@16x9.jpg"> <img style="max-height: 100%;max-width: 100%;" *ngIf="thumbnail" [src]="thumbnail" alt="Description of the image"></div><figcaption class="slds-file__title slds-is-relative slds-file__title_card"><div class="slds-grid slds-grid--vertical-align-center slds-size--1-of-1"><div class="slds-p-right--xx-small"><system-file-icon size="x-small" [filename]="model.getField(\'name\')" divClass [filemimetype]="model.getField(\'filetype\')"></system-file-icon></div><div class="slds-media__body slds-grow slds-truncate"><object-record-fieldset-horizontal-list [fieldset]="fieldset"></object-record-fieldset-horizontal-list></div><button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-small slds-m-horizontal--xx-small" (click)="expand()"><system-button-icon icon="expand" size="small"></system-button-icon></button><object-action-menu *ngIf="!selectbox" buttonsize="small"></object-action-menu></div></figcaption></figure></div></div>',changeDetection:core_1.ChangeDetectionStrategy.OnPush,providers:[services_1.mediafiles,services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.metadata,services_1.model,services_1.view,platform_browser_1.DomSanitizer,services_1.modal,services_1.mediafiles])],MediaFilesTile)}();exports.MediaFilesTile=MediaFilesTile;var fieldMediaFilesImage=function(r){function fieldMediaFilesImage(e,t,i,s,a,l,n){var o=r.call(this,e,i,s,a,l)||this;return o.model=e,o.modal=t,o.view=i,o.language=s,o.metadata=a,o.router=l,o.mediafiles=n,o.initialize(),o}return __extends(fieldMediaFilesImage,r),Object.defineProperty(fieldMediaFilesImage.prototype,"value",{get:function(){return this._value},set:function(e){var t=this,i={};i.file=e,i.filetype=this.systemInputMedia.mediaMetaData.mimetype,this.model.getField("name")?this._value||this.modal.prompt("confirm",this.language.getLabel("MSG_OVERWRITE_FILENAME","","long"),this.language.getLabel("MSG_OVERWRITE_FILENAME")).subscribe(function(e){e&&(i.name=t.systemInputMedia.mediaMetaData.filename),t.model.setFields(i)}):(i.name=this.systemInputMedia.mediaMetaData.filename,this.model.setFields(i)),this._value=e},enumerable:!1,configurable:!0}),fieldMediaFilesImage.prototype.initialize=function(){var t=this;this.model.isNew||(this.loadImage(),this.subscriptions.add(this.model.canceledit$.subscribe(function(e){t._value=null,t.loadImage()})))},fieldMediaFilesImage.prototype.loadImage=function(){var t=this;this.mediafiles.getImageBase64(this.model.id).subscribe(function(e){t._value=e.img})},__decorate([core_1.ViewChild(systemcomponents_1.SystemInputMedia),__metadata("design:type",systemcomponents_1.SystemInputMedia)],fieldMediaFilesImage.prototype,"systemInputMedia",void 0),__decorate([core_1.Component({template:'<field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display *ngIf="!isEditMode()" [fielddisplayclass]="fielddisplayclass" [editable]="isEditable()" [fieldconfig]="fieldconfig" [title]="value" [fieldid]="fieldid"><img *ngIf="value" [src]="\'data:image/jpg;base64,\'+value"></field-generic-display><div *ngIf="isEditable() && isEditMode()" class="slds-form-element__control slds-m-vertical--xx-small" [ngClass]="css_classes"><system-input-media [(ngModel)]="value" class="slds-height_full" [mimetype]="\'image/jpeg\'"></system-input-media></div>',providers:[services_1.mediafiles]}),__metadata("design:paramtypes",[services_1.model,services_1.modal,services_1.view,services_1.language,services_1.metadata,router_1.Router,services_1.mediafiles])],fieldMediaFilesImage)}(objectfields_1.fieldGeneric);exports.fieldMediaFilesImage=fieldMediaFilesImage;var fieldMediaFile=function(u){function fieldMediaFile(e,t,i,s,a,l,n,o,r,d,m){var c=u.call(this,e,t,i,s,a)||this;return c.model=e,c.view=t,c.language=i,c.metadata=s,c.router=a,c.elementRef=l,c.renderer=n,c.mediafiles=o,c.backend=r,c.elRef=d,c.modalservice=m,c.isLoadingVariant=!1,c.isLoadingOriginal=!1,c}return __extends(fieldMediaFile,u),fieldMediaFile.prototype.ngAfterViewInit=function(){var t=this;this.widthOfImgFrame=this.getWidthOfImgFrame(),this.heightOfImgFrame=this.getHeightOfImgFrame(),this.view.mode$.subscribe(function(e){t.currentViewMode!==e&&("view"===e&&t.loadImageVariant(),"edit"===e&&t.loadImageOriginal(),t.currentViewMode=e)})},fieldMediaFile.prototype.loadImageVariant=function(){var t=this;this.imageUrlVariant="",this.model.isNew||(this.isLoadingVariant=!0,this.mediafiles.getImageVariant(this.model.id,"mwh/"+this.widthOfImgFrame+"/"+this.heightOfImgFrame).subscribe(function(e){t.imageUrlVariant=e,t.isLoadingVariant=!1}))},fieldMediaFile.prototype.loadImageOriginal=function(){var t=this;this.imageUrlOriginal="",this.model.isNew||(this.isLoadingOriginal=!0,this.mediafiles.getImage(this.model.id).subscribe(function(e){t.imageUrlOriginal=e,t.isLoadingOriginal=!1},function(e){t.isLoadingOriginal=!1}))},fieldMediaFile.prototype.getWidthOfImgFrame=function(){return this.imgFrame?Math.ceil(Number(getComputedStyle(this.imgFrame.nativeElement,null).width.replace(/px$/,""))):0},fieldMediaFile.prototype.getHeightOfImgFrame=function(){return this.imgFrame?Math.ceil(Number(getComputedStyle(this.imgFrame.nativeElement,null).height.replace(/px$/,""))):0},fieldMediaFile.prototype.openLightbox=function(){var e=this;this.modalservice.openModal("SystemImagePreviewModal",!0).subscribe(function(t){t.instance.imgname=e.model.getField("name"),t.instance.imgtype=e.model.getField("filetype"),e.mediafiles.getImage(e.model.data.id).subscribe(function(e){t.instance.imgsrc=e})})},fieldMediaFile.prototype.mediaChange=function(e){e.isDirty&&(this.model.setField(this.fieldname,e.image),this.fileformat=e.metaData.fileformat,e.isImported&&this.fieldconfig.copyFilenameToFieldName&&e.metaData.filename&&!this.model.getField(this.fieldForName)&&this.model.setField(this.fieldForName,e.metaData.filename.replace(/\.[^\.]+$/,"").replace(/_/," ")))},Object.defineProperty(fieldMediaFile.prototype,"fieldForFileformat",{get:function(){return this.fieldconfig.fieldForFileformat||"filetype"},enumerable:!1,configurable:!0}),Object.defineProperty(fieldMediaFile.prototype,"fieldForName",{get:function(){return this.fieldconfig.fieldForName||"name"},enumerable:!1,configurable:!0}),Object.defineProperty(fieldMediaFile.prototype,"fileformat",{get:function(){return this.model.getField(this.fieldForFileformat)},set:function(e){this.model.setField(this.fieldForFileformat,e)},enumerable:!1,configurable:!0}),__decorate([core_1.ViewChild("imgFrame",{static:!1}),__metadata("design:type",core_1.ElementRef)],fieldMediaFile.prototype,"imgFrame",void 0),__decorate([core_1.Component({selector:"field-media-file",template:'<div [ngClass]="fielddisplayclass+\' format-\'+fieldconfig.format" style="margin-right:-0.75rem;text-align:center;height:400px"><ng-container *ngIf="isEditMode()"><system-spinner *ngIf="isLoadingOriginal" size="large" class="spice-vertically-centered"></system-spinner><system-input-media *ngIf="!isLoadingOriginal" [(ngModel)]="imageUrlOriginal" style="height:100%"></system-input-media></ng-container><div #imgFrame *ngIf="!isEditMode()" class="slds-grid slds-grid--vertical" style="height:100%"><div class="spice-vertically-centered" style="max-height:100%;margin-right:auto;margin-left:auto"><ng-container *ngIf="!isLoadingVariant"><img *ngIf="imageUrlVariant" [src]="imageUrlVariant" style="max-width:100%;max-height:100%"> <button class="slds-button slds-button_icon slds-button_icon-container slds-button_icon-border-filled toLightbox" (click)="openLightbox()" style="position:absolute;top:0.25rem;right:0.25rem;margin:0"><system-button-icon [icon]="\'expand\'"></system-button-icon></button> <button class="slds-button slds-button_icon slds-button_icon-container slds-button_icon-border-filled toLightbox" (click)="setEditMode()" style="position:absolute;bottom:0.25rem;right:0.25rem;margin:0"><system-button-icon [icon]="\'edit\'"></system-button-icon></button></ng-container><system-spinner *ngIf="isLoadingVariant" size="large" class="spice-vertically-centered"></system-spinner></div></div></div>',providers:[services_1.mediafiles]}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router,core_1.ElementRef,core_1.Renderer2,services_1.mediafiles,services_1.backend,core_1.ElementRef,services_1.modal])],fieldMediaFile)}(objectfields_1.fieldGeneric);exports.fieldMediaFile=fieldMediaFile;var fieldMediaFileImage=function(c){function fieldMediaFileImage(e,t,i,s,a,l,n,o,r,d){var m=c.call(this,e,t,i,s,a)||this;return m.model=e,m.view=t,m.language=i,m.metadata=s,m.router=a,m.elementRef=l,m.renderer=n,m.mediafiles=o,m.backend=r,m.elRef=d,m.enlarged=!1,m.fieldIsEmpty=!0,m.lastValue="",m.height="",m}return __extends(fieldMediaFileImage,c),fieldMediaFileImage.prototype.ngOnInit=function(){"image"!==this.fieldconfig.format&&(this.fieldconfig.format="button")},fieldMediaFileImage.prototype.ngAfterViewInit=function(){var e=this;this.size1rem=this.getSize1rem(),this.thumbSize=2*this.size1rem-2,this.widthOfParent=this.getWidthOfParent(),this.fieldconfig.height&&(this.height="calc("+this.fieldconfig.height+" - 2px - 0.5rem )"),this.model.data$.subscribe(function(){e.afterLoadingModel()})},fieldMediaFileImage.prototype.afterLoadingModel=function(){var e=this;this.lastValue=this.model.data[this.fieldname],this.loadImages(),this.model.data$.subscribe(function(){e.model.data[e.fieldname]!==e.lastValue&&(e.lastValue=e.model.data[e.fieldname],e.loadImages())})},fieldMediaFileImage.prototype.onClick=function(e){this.elementRef.nativeElement.contains(e.target)||(this.enlarged=!1)},fieldMediaFileImage.prototype.openEnlarged=function(){var t=this;this.unsubscribeClickListener=this.renderer.listen("document","click",function(e){return t.onClick(e)}),this.enlarged=!0},fieldMediaFileImage.prototype.closeEnlarged=function(){this.enlarged=!1,this.buttonToEnlargement&&this.buttonToEnlargement.nativeElement.focus(),this.unsubscribeClickListener()},fieldMediaFileImage.prototype.loadImages=function(){var t=this;this.model.data[this.fieldname]?(this.fieldIsEmpty=!1,"button"===this.fieldconfig.format?(this.mediafiles.getImageVariant(this.model.data[this.fieldname],"th/"+this.thumbSize).subscribe(function(e){t.imageUrl=e}),this.mediafiles.getImageVariant(this.model.data[this.fieldname],"th/200").subscribe(function(e){t.imageUrlEnlarged=e})):this.mediafiles.getImageVariant(this.model.data[this.fieldname],"mw/"+this.determineWidthOfImage()).subscribe(function(e){t.imageUrl=e})):this.fieldIsEmpty=!0},fieldMediaFileImage.prototype.clearField4button=function(){this.imageUrl=this.imageUrlEnlarged=this.value="",this.enlarged=!1,this.buttonToPicker&&this.buttonToPicker.nativeElement.focus(),this.fieldIsEmpty=!0},fieldMediaFileImage.prototype.clearField4image=function(){this.imageUrl=this.model.data[this.fieldname]="",this.fieldIsEmpty=!0},fieldMediaFileImage.prototype.getImage=function(){var t=this;this.mediafiles.getMediaFile(this.fieldconfig.noImagePicker||!1,this.fieldconfig.noMetaData||!1,this.fieldconfig.category).subscribe(function(e){e&&(t.value=e,t.loadImages())})},fieldMediaFileImage.prototype.editImage=function(){},fieldMediaFileImage.prototype.getSize1rem=function(){return Math.ceil(Number(getComputedStyle(document.documentElement,null).fontSize.replace(/px$/,"")))},fieldMediaFileImage.prototype.getWidthOfParent=function(){return Number(getComputedStyle(this.elRef.nativeElement.parentElement.parentElement,null).width.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement.parentElement,null).paddingLeft.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement.parentElement,null).paddingRight.replace(/px$/,""))},fieldMediaFileImage.prototype.determineWidthOfImage=function(){return Math.round(this.widthOfParent)},Object.defineProperty(fieldMediaFileImage.prototype,"imageStyle",{get:function(){return{height:this.height}},enumerable:!1,configurable:!0}),fieldMediaFileImage.prototype.setEditMode=function(){this.isEditable()&&(this.model.startEdit(),this.view.setEditMode(this.fieldid))},fieldMediaFileImage.prototype.isEditable=function(){return this.getStati(this.fieldname).editable&&!this.getStati(this.fieldname).readonly&&!this.getStati(this.fieldname).disabled&&!this.getStati(this.fieldname).hidden},fieldMediaFileImage.prototype.ngOnDestroy=function(){this.unsubscribeClickListener&&this.unsubscribeClickListener(),c.prototype.ngOnDestroy.call(this)},__decorate([core_1.ViewChild("buttonToEnlargement",{static:!0}),__metadata("design:type",core_1.ElementRef)],fieldMediaFileImage.prototype,"buttonToEnlargement",void 0),__decorate([core_1.ViewChild("buttonToPicker",{static:!0}),__metadata("design:type",core_1.ElementRef)],fieldMediaFileImage.prototype,"buttonToPicker",void 0),__decorate([core_1.Component({selector:"field-media-file-image",template:'<div [ngClass]="fielddisplayclass" class="slds-is-relative"><ng-container *ngIf="fieldconfig.format === \'button\'"><button #buttonToPicker *ngIf="fieldIsEmpty" class="slds-button slds-button_icon slds-button_icon-container slds-button_icon-border-filled" [disabled]="!isEditMode()" (click)="getImage()"><system-button-icon [icon]="\'image\'"></system-button-icon></button> <button #buttonToEnlargement *ngIf="!fieldIsEmpty" class="slds-button slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-container" (click)="openEnlarged()" style="width:4rem"><img *ngIf="imageUrl" [src]="imageUrl" class="imgInButton" style="border-radius: 0.25rem 0 0 0.25rem; padding: 1px 0 1px 1px; height: calc(2rem - 2px); width: calc(2rem - 1px)"><span class="slds-text-align_center"><system-button-icon [icon]="\'threedots\'" style="width: calc(2rem - 2px)"></system-button-icon></span></button><div *ngIf="enlarged" class="slds-is-absolute" style="width:160px; height:160px; left: calc(50% - 80px); top: calc(50% - 80px); z-index: 1; background-color: #ccc; border-radius:0.25rem; background-color: #fdfdfd; box-shadow: 0 2px 3px 0 rgba(0,0,0,.16); border: 1px solid #d8dde6"><img *ngIf="imageUrlEnlarged" [src]="imageUrlEnlarged" class="slds-image" style="border: 1px solid #999" width="160" height="160"> <button #closebutton class="slds-button slds-button_icon slds-is-absolute" style="top:0.25rem; right:0.25rem; cursor:pointer; margin:0; filter: drop-shadow( 0px 0px 3px #fff)" (click)="closeEnlarged()" title="Close"><system-button-icon [icon]="\'close\'" [size]="\'small\'"></system-button-icon></button> <button *ngIf="isEditMode()" class="slds-button slds-button_icon slds-button_icon-container slds-button_icon-border-filled slds-is-absolute" title="Delete" style="bottom: 0.25rem; left: 0.25rem; margin: 0;" (click)="clearField4button()"><system-button-icon [icon]="\'delete\'"></system-button-icon></button> {{closebutton.focus()}}</div></ng-container><ng-container *ngIf="fieldconfig.format !== \'button\'"><div class="slds-box--border slds-align_absolute-center" [ngStyle]="imageStyle"><img *ngIf="!fieldIsEmpty && imageUrl" [src]="imageUrl" style="max-height:100%;padding:0.25rem"><ng-container *ngIf="!model.isLoading"><ng-container *ngIf="isEditMode()"><button #buttonToPicker *ngIf="fieldIsEmpty" class="slds-button slds-button_icon slds-button_icon-container slds-button_icon-border-filled slds-align--absolute-center" [disabled]="!isEditMode()" (click)="getImage()"><system-button-icon [icon]="\'image\'"></system-button-icon></button><div *ngIf="!fieldIsEmpty" class="slds-is-absolute spice-button-group-vertical slds-is-absolute" style="bottom:1.25rem; right:0.75rem"><button class="slds-button slds-button_icon slds-button_icon-container slds-button_icon-border-filled" title="Delete" (click)="clearField4image()"><system-button-icon [icon]="\'delete\'"></system-button-icon></button></div></ng-container><ng-container *ngIf="!isEditMode()"><button class="slds-button slds-button_icon slds-is-absolute" style="bottom:1.25rem; right:0.75rem" (click)="setEditMode()"><system-button-icon [icon]="\'edit\'"></system-button-icon></button></ng-container></ng-container></div></ng-container></div>',providers:[services_1.mediafiles]}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router,core_1.ElementRef,core_1.Renderer2,services_1.mediafiles,services_1.backend,core_1.ElementRef])],fieldMediaFileImage)}(objectfields_1.fieldGeneric);exports.fieldMediaFileImage=fieldMediaFileImage;var ModuleMediaFiles=function(){function ModuleMediaFiles(){}return __decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[MediaFileImage,MediaFilePicker,MediaFileUploader,MediaFilesList,MediaFilesTile,fieldMediaFilesImage,fieldMediaFile,fieldMediaFileImage],exports:[MediaFileImage,MediaFilePicker,MediaFileUploader]})],ModuleMediaFiles)}();exports.ModuleMediaFiles=ModuleMediaFiles;