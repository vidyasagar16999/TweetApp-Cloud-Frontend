(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{eCbg:function(t,e,n){"use strict";n.r(e),n.d(e,"UserTweetModule",function(){return g});var i=n("ofXK"),o=n("tyNb"),b=n("3Pt+"),s=n("fXoL"),d=n("P/jH");function c(t,e){if(1&t&&(s.Lb(0,"div",24),s.gc(1),s.Kb()),2&t){const t=e.$implicit;s.yb(1),s.ic(" ",t," ")}}function r(t,e){if(1&t&&(s.Lb(0,"div"),s.Lb(1,"div",21),s.Lb(2,"div",22),s.Lb(3,"b"),s.gc(4,"Tweet Comments/Replies"),s.Kb(),s.Kb(),s.Jb(5,"br"),s.fc(6,c,2,1,"div",23),s.Kb(),s.Kb()),2&t){const t=s.Ub(2);s.yb(6),s.Xb("ngForOf",t.tweet.tweetReply)}}function a(t,e){1&t&&(s.Lb(0,"div",22),s.Lb(1,"p"),s.gc(2," No Comments"),s.Kb(),s.Kb())}function m(t,e){if(1&t){const t=s.Mb();s.Lb(0,"div",1),s.Lb(1,"div",2),s.Lb(2,"div",3),s.Lb(3,"h5"),s.gc(4),s.Vb(5,"titlecase"),s.Kb(),s.Kb(),s.Kb(),s.Lb(6,"div",4),s.Lb(7,"h5",5),s.gc(8),s.Kb(),s.Lb(9,"p",6),s.Jb(10,"i",7),s.gc(11),s.Kb(),s.Lb(12,"div",8),s.Lb(13,"div",9),s.Lb(14,"div"),s.Lb(15,"button",10),s.Jb(16,"i",11),s.Kb(),s.gc(17),s.Kb(),s.Lb(18,"div",12),s.Jb(19,"i",13),s.gc(20),s.Kb(),s.Kb(),s.Lb(21,"div",14),s.Lb(22,"form",15),s.Sb("ngSubmit",function(){s.cc(t);const e=s.Ub();return e.addComments(e.tweet.tweetId)}),s.Lb(23,"div",3),s.Lb(24,"div",16),s.Jb(25,"textarea",17),s.Kb(),s.Lb(26,"div",12),s.Lb(27,"button",18),s.gc(28,"Submit"),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.fc(29,r,7,1,"div",19),s.fc(30,a,3,0,"div",20),s.Kb(),s.Kb(),s.Kb()}if(2&t){const t=s.Ub();s.yb(4),s.hc(s.Wb(5,10,t.tweet.userName)),s.yb(4),s.ic("#",t.tweet.tweetTag,""),s.yb(3),s.ic(" \xa0 ",t.tweet.tweet,""),s.yb(1),s.Yb("id",t.tweet.tweetId),s.yb(5),s.ic(" ",t.tweet.like," "),s.yb(3),s.ic("",t.tweet.tweetReply.length," "),s.yb(2),s.Xb("formGroup",t.addCommentForm),s.yb(5),s.Xb("disabled",!t.addCommentForm.valid),s.yb(2),s.Xb("ngIf","true"==t.displayNoCommentsData),s.yb(1),s.Xb("ngIf","false"==t.displayNoCommentsData)}}const l=[{path:"",component:(()=>{class t{constructor(t,e,n){this.authorizedService=t,this.route=e,this.fb=n,this.comments=[],this.submitted=!1}ngOnInit(){this.addCommentForm=this.fb.group({comments:["",b.l.required]}),this.addLikeForm=this.fb.group({like:[""]}),this.route.params.subscribe(t=>{this.tweetId=t.tweetId,this.getTweetById(this.tweetId)}),this.liked=!1}getTweetById(t){localStorage.getItem("loginId"),this.authorizedService.getTweetById(t).subscribe(t=>{this.tweet=t,console.log(this.tweet),console.log(this.tweet.tweetReply.length),this.displayNoCommentsData=this.tweet.tweetReply.length>0?"true":"false"})}addComments(t){const e=null==localStorage.getItem("loginId")?"":localStorage.getItem("loginId");this.submitted=!0,console.log(this.addCommentForm.invalid),this.addCommentForm.invalid||this.authorizedService.addComment({tweetId:t,tweetReply:this.addCommentForm.value.comments},e).subscribe(t=>{console.log(t),this.ngOnInit()})}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(d.a),s.Ib(o.a),s.Ib(b.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-tweet"]],decls:1,vars:1,consts:[["class","card","style","margin: 20px;",4,"ngIf"],[1,"card",2,"margin","20px"],[1,"card-header"],[1,"d-flex"],[1,"card-body"],[1,"card-title"],[1,"card-text",2,"font-size","20px"],[1,"fas","fa-2x","fa-quote-left"],[1,"form",3,"id"],[1,"d-flex",2,"font-size","20px"],["id","liked",1,"btn","btn-primary"],[1,"fas","fa-heart"],[1,"ml-auto"],[1,"far","fa-comment"],[1,"my-4"],[1,"d-inline",3,"formGroup","ngSubmit"],[1,"messageComment"],["rows","1","formControlName","comments",1,"form-control","task-textarea"],[1,"btn",3,"disabled"],[4,"ngIf"],["class","d-flex styling",4,"ngIf"],[1,"data"],[1,"d-flex","styling"],["class","d-flex pb-4 stylingReply fa-comment",4,"ngFor","ngForOf"],[1,"d-flex","pb-4","stylingReply","fa-comment"]],template:function(t,e){1&t&&s.fc(0,m,31,12,"div",0),2&t&&s.Xb("ngIf",e.tweet)},directives:[i.j,b.m,b.i,b.f,b.a,b.h,b.d,i.i],pipes:[i.m],styles:[".messageComment[_ngcontent-%COMP%]{width:88%}.no-bg[_ngcontent-%COMP%]{background-color:none!important}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#007bff!important}.styling[_ngcontent-%COMP%]{color:#00f;font-size:18px}.stylingReply[_ngcontent-%COMP%]{color:#141213;font-size:22px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({imports:[[o.e.forChild(l)],o.e]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({imports:[[i.b,b.g,b.k,f]]}),t})()}}]);