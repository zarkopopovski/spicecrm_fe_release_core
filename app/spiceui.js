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
"use strict";var __decorate=this&&this.__decorate||function(e,r,s,i){var o,t=arguments.length,c=t<3?r:null===i?i=Object.getOwnPropertyDescriptor(r,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,r,s,i);else for(var n=e.length-1;0<=n;n--)(o=e[n])&&(c=(t<3?o(c):3<t?o(r,s,c):o(r,s))||c);return 3<t&&c&&Object.defineProperty(r,s,c),c},__metadata=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_dynamic_1=require("@angular/platform-browser-dynamic"),platform_browser_1=require("@angular/platform-browser"),animations_1=require("@angular/platform-browser/animations"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),router_1=require("@angular/router"),http_1=require("@angular/common/http"),common_1=require("@angular/common"),systemcomponents_1=require("./systemcomponents/systemcomponents"),globalcomponents_1=require("./globalcomponents/globalcomponents"),objectcomponents_1=require("./objectcomponents/objectcomponents"),services_1=require("./services/services"),services_2=require("./services/services"),services_3=require("./services/services"),services_4=require("./services/services"),services_5=require("./services/services"),services_6=require("./services/services"),services_7=require("./services/services"),services_8=require("./services/services"),services_9=require("./services/services"),services_10=require("./services/services"),services_11=require("./services/services"),services_12=require("./services/services"),services_13=require("./services/services"),services_14=require("./services/services"),services_15=require("./services/services"),services_16=require("./services/services"),services_17=require("./services/services"),services_18=require("./services/services"),services_19=require("./services/services"),services_20=require("./services/services"),services_21=require("./services/services"),services_22=require("./services/services"),services_23=require("./services/services"),services_24=require("./services/services"),services_25=require("./services/services"),services_26=require("./services/services"),services_27=require("./services/services"),services_28=require("./services/services"),services_29=require("./services/services"),globalcomponents_2=require("./globalcomponents/globalcomponents"),systemcomponents_2=require("./systemcomponents/systemcomponents");moment.defaultFormat="YYYY-MM-DD HH:mm:ss";var SpiceUI=function(){function e(e,r){this.layout=e,this.render=r,this.render.listen("window","dragover",function(e){e.preventDefault(),e.dataTransfer.effectAllowed="none",e.dataTransfer.dropEffect="none"}),this.render.listen("window","drop",function(e){e.preventDefault()})}return Object.defineProperty(e.prototype,"outletstyle",{get:function(){return{"margin-top":this.layout.headerheight+"px"}},enumerable:!0,configurable:!0}),e=__decorate([core_1.Component({selector:"spicecrm",template:"<global-header></global-header><div [ngStyle]='outletstyle'><router-outlet></router-outlet></div><global-footer></global-footer>"}),__metadata("design:paramtypes",[services_28.layout,core_1.Renderer2])],e)}();exports.SpiceUI=SpiceUI;var SpiceUIModule=function(){function e(e,r){this.metadata=e,this.vms=r,this.version="1.0",this.build_date="2020-03-26",this.vms.registerModule(this)}return e=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,animations_1.BrowserAnimationsModule,http_1.HttpClientModule,forms_1.FormsModule,systemcomponents_1.SystemComponents,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,router_1.RouterModule.forRoot([{path:"login",component:globalcomponents_2.GlobalLogin},{path:"",redirectTo:"/module/Home",pathMatch:"full"},{path:"**",component:systemcomponents_2.SystemDynamicRouteInterceptor,canActivate:[services_4.loginCheck]}])],declarations:[SpiceUI],entryComponents:[],bootstrap:[SpiceUI],providers:[{provide:common_1.LocationStrategy,useClass:common_1.HashLocationStrategy},services_15.backend,services_13.broadcast,services_28.layout,services_16.navigation,services_16.canNavigateAway,services_5.session,services_6.metadata,services_6.aclCheck,services_4.loginCheck,services_3.helper,services_4.loginService,services_12.loader,services_2.configurationService,services_8.language,services_14.dockedComposer,services_11.fts,services_9.recent,core_1.SystemJsNgModuleLoader,services_17.modelutilities,services_18.toast,services_19.favorite,services_20.reminder,services_21.territories,services_22.currency,services_23.footer,services_10.userpreferences,services_24.cookie,services_7.MathExpressionCompilerService,services_25.assistant,services_26.VersionManagerService,services_27.modal,platform_browser_1.Title,services_1.loggerService,services_29.libloader]}),__metadata("design:paramtypes",[services_6.metadata,services_26.VersionManagerService])],e)}();exports.SpiceUIModule=SpiceUIModule,core_1.enableProdMode(),document.documentMode?(document.getElementsByClassName("loaderspinner")[0].setAttribute("style","display:none"),document.getElementById("loadstatus").innerHTML="",document.getElementById("loadermessage").innerHTML="Internet Explorer is not supported. Please use a supported Browser like Chrome, Safari, Edge, etc."):(document.getElementById("loadstatus").innerHTML="...preparing..",platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(SpiceUIModule)),window.name="SpiceCRM",function(){if(window.hasOwnProperty("BroadcastChannel")){var r=new BroadcastChannel("spiceCRM_channel");r.onmessage=function(e){e.data.url&&e.data.url.startsWith(window.location.origin+window.location.pathname)&&(window.location=e.data.url,r.postMessage({urlReceived:!0}))}}}();