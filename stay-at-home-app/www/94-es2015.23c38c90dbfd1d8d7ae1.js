(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"Y/XH":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class i{}var t=u("pMnS"),e=u("MKJQ"),r=u("sZkV"),c=u("s7LF"),b=u("SVse"),a=u("mrSG"),s=u("vCEr"),h=u("mlpq"),d=u("abcn"),g=u("gcOT");const{Device:p,Browser:k}=g.b;class f{constructor(l,n,u,o){this.formBuilder=l,this.loadingCtrl=n,this.configService=u,this.gpsService=o,this.config=new d.a,this.prefillAndValidateForm(new d.a),this.loadFormData(),this.loadHistory()}loadFormData(){return a.a(this,void 0,void 0,(function*(){this.loader=yield this.loadingCtrl.create({message:"Loading configuration...",backdropDismiss:!0}),this.loader.present().then(()=>{this.configService.getConfiguration().then(l=>{this.config=l},()=>{this.config=new d.a}).finally(()=>{p.getInfo().then(l=>{l.uuid!=this.config.deviceId&&(this.config.deviceId=l.uuid),this.updateConfig()}).finally(()=>{this.prefillAndValidateForm(this.config),this.loader.dismiss()})})})}))}prefillAndValidateForm(l){this.configForm=this.formBuilder.group({geolocationEnabled:[l.geolocationEnabled]}),this.onChanges()}onChanges(){this.configForm.valueChanges.subscribe(l=>{console.log(l);let n=!1;for(let u in l)null!=this.config[u]&&this.config[u]!=l[u]&&null!=l[u]&&(this.config[u]=l[u],console.log("Updated this.config["+u+'] to "'+this.config[u]+'"'),n=!0);n&&this.updateConfig()})}loadHistory(){return a.a(this,void 0,void 0,(function*(){this.configService.getHistory().then(l=>{this.historyArray=l}).catch(l=>{console.log("Error fetching history: "+l)})}))}deleteHistory(){return a.a(this,void 0,void 0,(function*(){this.historyArray=[],this.configService.deleteHistory()}))}updateConfig(){this.config.geolocationEnabled?this.gpsService.start():this.gpsService.stop(),this.configService.setConfiguration(this.config)}setHome(){s.a.getCurrentPosition().then(l=>{!this.config||null!=this.config.home&&l.latitude==this.config.home.latitude&&l.longitude==this.config.home.longitude||(this.config.home=l,this.updateConfig())})}open(l){return a.a(this,void 0,void 0,(function*(){yield k.open({url:l})}))}}var m=o.pb({encapsulation:0,styles:[[""]],data:{}});function q(l){return o.Jb(0,[(l()(),o.rb(0,0,null,null,13,null,null,null,null,null,null,null)),(l()(),o.rb(1,0,null,null,12,"ion-item",[],null,null,null,e.Q,e.q)),o.qb(2,49152,null,0,r.G,[o.h,o.k,o.x],null,null),(l()(),o.rb(3,0,null,0,6,"ion-label",[],null,null,null,e.R,e.r)),o.qb(4,49152,null,0,r.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(5,0,["",""])),(l()(),o.rb(6,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.Ib(7,0,[" Latitude:",""])),(l()(),o.rb(8,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.Ib(9,0,[" Longitude:",""])),(l()(),o.rb(10,0,null,0,3,"ion-button",[["slot","end"],["target","_blank"]],null,null,null,e.B,e.b)),o.qb(11,49152,null,0,r.j,[o.h,o.k,o.x],{href:[0,"href"],target:[1,"target"]},null),(l()(),o.rb(12,0,null,0,1,"ion-icon",[["name","open-outline"]],null,null,null,e.P,e.p)),o.qb(13,49152,null,0,r.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,11,0,o.vb(2,"https://www.google.com.mx/maps/search/",n.context.$implicit.coords.latitude,",",n.context.$implicit.coords.longitude,""),"_blank"),l(n,13,0,"open-outline")}),(function(l,n){l(n,5,0,n.context.$implicit.time),l(n,7,0,n.context.$implicit.coords.latitude),l(n,9,0,n.context.$implicit.coords.longitude)}))}function x(l){return o.Jb(0,[(l()(),o.rb(0,0,null,null,6,"ion-header",[],null,null,null,e.O,e.o)),o.qb(1,49152,null,0,r.A,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.Z,e.z)),o.qb(3,49152,null,0,r.yb,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,2,"ion-title",[],null,null,null,e.Y,e.y)),o.qb(5,49152,null,0,r.wb,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,[" Settings "])),(l()(),o.rb(7,0,null,null,168,"ion-content",[["class","ion-padding"]],null,null,null,e.J,e.j)),o.qb(8,49152,null,0,r.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(9,0,null,0,166,"ion-grid",[],null,null,null,e.N,e.n)),o.qb(10,49152,null,0,r.z,[o.h,o.k,o.x],null,null),(l()(),o.rb(11,0,null,0,61,"ion-row",[],null,null,null,e.T,e.t)),o.qb(12,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(13,0,null,0,36,"ion-col",[["size-md","6"]],null,null,null,e.I,e.i)),o.qb(14,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.rb(15,0,null,0,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==o.Db(l,17).onSubmit(u)&&i),"reset"===n&&(i=!1!==o.Db(l,17).onReset()&&i),i}),null,null)),o.qb(16,16384,null,0,c.n,[],null,null),o.qb(17,540672,null,0,c.d,[[8,null],[8,null]],{form:[0,"form"]},null),o.Fb(2048,null,c.a,null,[c.d]),o.qb(19,16384,null,0,c.i,[[4,c.a]],null,null),(l()(),o.rb(20,0,null,null,29,"ion-card",[],null,null,null,e.G,e.d)),o.qb(21,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(22,0,null,0,4,"ion-card-header",[],null,null,null,e.E,e.f)),o.qb(23,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(l()(),o.rb(24,0,null,0,2,"ion-card-title",[],null,null,null,e.F,e.g)),o.qb(25,49152,null,0,r.p,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Settings"])),(l()(),o.rb(27,0,null,0,22,"ion-card-content",[],null,null,null,e.D,e.e)),o.qb(28,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(l()(),o.rb(29,0,null,0,11,"ion-item",[],null,null,null,e.Q,e.q)),o.qb(30,49152,null,0,r.G,[o.h,o.k,o.x],null,null),(l()(),o.rb(31,0,null,0,2,"ion-label",[],null,null,null,e.R,e.r)),o.qb(32,49152,null,0,r.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Geolocation enabled"])),(l()(),o.rb(34,0,null,0,6,"ion-checkbox",[["formControlName","geolocationEnabled"],["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==o.Db(l,36)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==o.Db(l,36)._handleIonChange(u.target)&&i),i}),e.H,e.h)),o.qb(35,49152,null,0,r.q,[o.h,o.k,o.x],null,null),o.qb(36,16384,null,0,r.c,[o.k],null,null),o.Fb(1024,null,c.f,(function(l){return[l]}),[r.c]),o.qb(38,671744,null,0,c.c,[[3,c.a],[8,null],[8,null],[6,c.f],[2,c.m]],{name:[0,"name"]},null),o.Fb(2048,null,c.g,null,[c.c]),o.qb(40,16384,null,0,c.h,[[4,c.g]],null,null),(l()(),o.rb(41,0,null,0,8,"ion-item",[],null,null,null,e.Q,e.q)),o.qb(42,49152,null,0,r.G,[o.h,o.k,o.x],null,null),(l()(),o.rb(43,0,null,0,2,"ion-label",[],null,null,null,e.R,e.r)),o.qb(44,49152,null,0,r.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Set current location as Home:"])),(l()(),o.rb(46,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.setHome()&&o),o}),e.B,e.b)),o.qb(47,49152,null,0,r.j,[o.h,o.k,o.x],{disabled:[0,"disabled"]},null),(l()(),o.rb(48,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,e.P,e.p)),o.qb(49,49152,null,0,r.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(50,0,null,0,22,"ion-col",[["size-md","6"]],null,null,null,e.I,e.i)),o.qb(51,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.rb(52,0,null,0,20,"ion-card",[],null,null,null,e.G,e.d)),o.qb(53,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(54,0,null,0,4,"ion-card-header",[],null,null,null,e.E,e.f)),o.qb(55,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(l()(),o.rb(56,0,null,0,2,"ion-card-title",[],null,null,null,e.F,e.g)),o.qb(57,49152,null,0,r.p,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["My Forest in time"])),(l()(),o.rb(59,0,null,0,13,"ion-card-content",[],null,null,null,e.D,e.e)),o.qb(60,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(l()(),o.rb(61,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.loadHistory()&&o),o}),e.B,e.b)),o.qb(62,49152,null,0,r.j,[o.h,o.k,o.x],null,null),(l()(),o.rb(63,0,null,0,1,"ion-icon",[["name","reload"]],null,null,null,e.P,e.p)),o.qb(64,49152,null,0,r.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(65,0,null,0,3,"ion-button",[["color","warning"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.deleteHistory()&&o),o}),e.B,e.b)),o.qb(66,49152,null,0,r.j,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.rb(67,0,null,0,1,"ion-icon",[["name","trash"]],null,null,null,e.P,e.p)),o.qb(68,49152,null,0,r.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(69,0,null,0,3,"ion-list",[],null,null,null,e.S,e.s)),o.qb(70,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,q)),o.qb(72,278528,null,0,b.h,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.rb(73,0,null,0,102,"ion-row",[],null,null,null,e.T,e.t)),o.qb(74,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(75,0,null,0,100,"ion-col",[],null,null,null,e.I,e.i)),o.qb(76,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.rb(77,0,null,0,32,"ion-card",[],null,null,null,e.G,e.d)),o.qb(78,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(79,0,null,0,4,"ion-card-header",[],null,null,null,e.E,e.f)),o.qb(80,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(l()(),o.rb(81,0,null,0,2,"ion-card-title",[],null,null,null,e.F,e.g)),o.qb(82,49152,null,0,r.p,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Images"])),(l()(),o.rb(84,0,null,0,25,"ion-card-content",[],null,null,null,e.D,e.e)),o.qb(85,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(l()(),o.rb(86,0,null,0,23,"ion-grid",[],null,null,null,e.N,e.n)),o.qb(87,49152,null,0,r.z,[o.h,o.k,o.x],null,null),(l()(),o.rb(88,0,null,0,10,"ion-row",[],null,null,null,e.T,e.t)),o.qb(89,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(90,0,null,0,2,"ion-col",[],null,null,null,e.I,e.i)),o.qb(91,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Name"])),(l()(),o.rb(93,0,null,0,2,"ion-col",[],null,null,null,e.I,e.i)),o.qb(94,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Author"])),(l()(),o.rb(96,0,null,0,2,"ion-col",[],null,null,null,e.I,e.i)),o.qb(97,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Licence"])),(l()(),o.rb(99,0,null,0,10,"ion-row",[],null,null,null,e.T,e.t)),o.qb(100,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(101,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://www.flaticon.com/free-icon/tree-black-silhouette-shape_41390")&&o),o}),e.I,e.i)),o.qb(102,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Tree Black Silhouette Shape"])),(l()(),o.rb(104,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://www.flaticon.com/authors/freepik")&&o),o}),e.I,e.i)),o.qb(105,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Freepik"])),(l()(),o.rb(107,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://www.freepikcompany.com/legal#nav-flaticon-agreement")&&o),o}),e.I,e.i)),o.qb(108,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Flaticon License "])),(l()(),o.rb(110,0,null,0,65,"ion-card",[],null,null,null,e.G,e.d)),o.qb(111,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(112,0,null,0,4,"ion-card-header",[],null,null,null,e.E,e.f)),o.qb(113,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(l()(),o.rb(114,0,null,0,2,"ion-card-title",[],null,null,null,e.F,e.g)),o.qb(115,49152,null,0,r.p,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Audio"])),(l()(),o.rb(117,0,null,0,58,"ion-card-content",[],null,null,null,e.D,e.e)),o.qb(118,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(l()(),o.rb(119,0,null,0,56,"ion-grid",[],null,null,null,e.N,e.n)),o.qb(120,49152,null,0,r.z,[o.h,o.k,o.x],null,null),(l()(),o.rb(121,0,null,0,10,"ion-row",[],null,null,null,e.T,e.t)),o.qb(122,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(123,0,null,0,2,"ion-col",[],null,null,null,e.I,e.i)),o.qb(124,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Name"])),(l()(),o.rb(126,0,null,0,2,"ion-col",[],null,null,null,e.I,e.i)),o.qb(127,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Author"])),(l()(),o.rb(129,0,null,0,2,"ion-col",[],null,null,null,e.I,e.i)),o.qb(130,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Licence"])),(l()(),o.rb(132,0,null,0,10,"ion-row",[],null,null,null,e.T,e.t)),o.qb(133,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(134,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://freesound.org/people/SgtPepperArc360/sounds/347732/")&&o),o}),e.I,e.i)),o.qb(135,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Samsung Galaxy S7 Startup"])),(l()(),o.rb(137,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://freesound.org/people/SgtPepperArc360/")&&o),o}),e.I,e.i)),o.qb(138,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["SgtPepperArc360"])),(l()(),o.rb(140,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("http://creativecommons.org/licenses/by/3.0/")&&o),o}),e.I,e.i)),o.qb(141,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Attribution 3.0 Unported (CC BY 3.0) "])),(l()(),o.rb(143,0,null,0,10,"ion-row",[],null,null,null,e.T,e.t)),o.qb(144,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(145,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://freesound.org/people/SkibkaMusic/sounds/478896/")&&o),o}),e.I,e.i)),o.qb(146,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Skibka Music - Logo Pn8.wav "])),(l()(),o.rb(148,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://freesound.org/people/SkibkaMusic/")&&o),o}),e.I,e.i)),o.qb(149,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["SkibkaMusic"])),(l()(),o.rb(151,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://creativecommons.org/publicdomain/zero/1.0/")&&o),o}),e.I,e.i)),o.qb(152,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["CC0 1.0 Universal (CC0 1.0) Public Domain Dedication"])),(l()(),o.rb(154,0,null,0,10,"ion-row",[],null,null,null,e.T,e.t)),o.qb(155,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(156,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://freesound.org/people/josepharaoh99/sounds/364929/")&&o),o}),e.I,e.i)),o.qb(157,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Game Die"])),(l()(),o.rb(159,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://freesound.org/people/josepharaoh99/")&&o),o}),e.I,e.i)),o.qb(160,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["josepharaoh99"])),(l()(),o.rb(162,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("http://creativecommons.org/publicdomain/zero/1.0/")&&o),o}),e.I,e.i)),o.qb(163,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["CC0 1.0 Universal (CC0 1.0) Public Domain Dedication"])),(l()(),o.rb(165,0,null,0,10,"ion-row",[],null,null,null,e.T,e.t)),o.qb(166,49152,null,0,r.fb,[o.h,o.k,o.x],null,null),(l()(),o.rb(167,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://freesound.org/people/Mativve/sounds/391539/")&&o),o}),e.I,e.i)),o.qb(168,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Electro win sound "])),(l()(),o.rb(170,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("https://freesound.org/people/Mativve/")&&o),o}),e.I,e.i)),o.qb(171,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Mativve"])),(l()(),o.rb(173,0,null,0,2,"ion-col",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.open("http://creativecommons.org/licenses/by/3.0/")&&o),o}),e.I,e.i)),o.qb(174,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Attribution 3.0 Unported (CC BY 3.0) "]))],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,17,0,u.configForm),l(n,38,0,"geolocationEnabled"),l(n,47,0,!u.config.geolocationEnabled),l(n,49,0,"home"),l(n,64,0,"reload"),l(n,66,0,"warning"),l(n,68,0,"trash"),l(n,72,0,u.historyArray)}),(function(l,n){l(n,15,0,o.Db(n,19).ngClassUntouched,o.Db(n,19).ngClassTouched,o.Db(n,19).ngClassPristine,o.Db(n,19).ngClassDirty,o.Db(n,19).ngClassValid,o.Db(n,19).ngClassInvalid,o.Db(n,19).ngClassPending),l(n,34,0,o.Db(n,40).ngClassUntouched,o.Db(n,40).ngClassTouched,o.Db(n,40).ngClassPristine,o.Db(n,40).ngClassDirty,o.Db(n,40).ngClassValid,o.Db(n,40).ngClassInvalid,o.Db(n,40).ngClassPending)}))}function v(l){return o.Jb(0,[(l()(),o.rb(0,0,null,null,1,"app-settings",[],null,null,null,x,m)),o.qb(1,49152,null,0,f,[c.b,r.Cb,h.a,s.a],null,null)],null,null)}var I=o.nb("app-settings",f,v,{},{},[]),C=u("iInd");u.d(n,"SettingsPageModuleNgFactory",(function(){return w}));var w=o.ob(i,[],(function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[t.a,I]],[3,o.j],o.v]),o.Bb(4608,b.k,b.j,[o.s,[2,b.t]]),o.Bb(4608,r.b,r.b,[o.x,o.g]),o.Bb(4608,r.Db,r.Db,[r.b,o.j,o.p]),o.Bb(4608,r.Gb,r.Gb,[r.b,o.j,o.p]),o.Bb(4608,c.l,c.l,[]),o.Bb(4608,c.b,c.b,[]),o.Bb(1073742336,b.b,b.b,[]),o.Bb(1073742336,r.Ab,r.Ab,[]),o.Bb(1073742336,c.k,c.k,[]),o.Bb(1073742336,c.e,c.e,[]),o.Bb(1073742336,c.j,c.j,[]),o.Bb(1073742336,C.o,C.o,[[2,C.t],[2,C.n]]),o.Bb(1073742336,i,i,[]),o.Bb(1024,C.l,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);