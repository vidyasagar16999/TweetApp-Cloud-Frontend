(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{YrDZ:function(e,r,t){"use strict";t.r(r),t.d(r,"UserRegistrationModule",function(){return P});var n=t("ofXK"),l=t("tyNb"),s=t("3Pt+"),i=t("sXOO"),o=t("fXoL"),a=t("ka8i");function b(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1," First Name is mandatory"),o.Kb())}function u(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1,"First Name cannot have special characters or digits"),o.Kb())}function c(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1," Last Name is mandatory"),o.Kb())}function d(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1,"Last Name cannot have special characters or digits"),o.Kb())}function g(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1," Email is mandatory"),o.Kb())}function m(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1,"Invalid Email Address"),o.Kb())}function f(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1," username is mandatory"),o.Kb())}function p(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1," Password is mandatory"),o.Kb())}function h(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1,"Minimun 6 characters required"),o.Kb())}function v(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1," Confirm Password is mandatory "),o.Kb())}function L(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1,"Minimun 6 characters required"),o.Kb())}function K(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1," Confirm Password does not match "),o.Kb())}function y(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1," Contact Number is mandatory"),o.Kb())}function x(e,r){1&e&&(o.Lb(0,"small",28),o.gc(1,"Invalid Contact Number"),o.Kb())}const w=[{path:"",component:(()=>{class e{constructor(e,r,t){this.fb=e,this.router=r,this.registerService=t,this.submitted=!1}ngOnInit(){this.UserRegister=this.fb.group({firstName:["",[s.l.required,s.l.pattern("[a-zA-Z ]*")]],lastName:["",[s.l.required,s.l.pattern("[a-zA-Z ]*")]],username:["",s.l.required],email:["",[s.l.required,s.l.email,s.l.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],contactNumber:["",[s.l.required,s.l.pattern("^([6-9]{1})([0-9]{9})$")]],password:["",[s.l.required,s.l.minLength(6)]],confirmPassword:["",[s.l.required,s.l.minLength(6)]]},{validator:Object(i.a)("password","confirmPassword")})}onSubmit(){this.submitted=!0,this.UserRegister.invalid||this.registerService.register({firstName:this.UserRegister.value.firstName,lastName:this.UserRegister.value.lastName,userName:this.UserRegister.value.username,email:this.UserRegister.value.email,contactNumber:this.UserRegister.value.contactNumber,password:this.UserRegister.value.password,confirmPassword:this.UserRegister.value.confirmPassword}).subscribe(e=>{void 0!==e.userName?(console.log("User registered successfully"),this.router.navigateByUrl("login")):"User Already exists"==e?console.log("User already exists"):console.log("Error")})}}return e.\u0275fac=function(r){return new(r||e)(o.Ib(s.b),o.Ib(l.b),o.Ib(a.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-register"]],decls:74,vars:16,consts:[[1,"main"],[1,"logo","text-center"],[1,"clearfix"],[1,"container"],[1,"middle","text-center"],["id","login",1,"my-2"],["autocomplete","off",1,"form-signin",3,"formGroup","submit"],[1,"row"],[1,"col-md-2"],[1,"fa","fa-user","fa-2x"],[1,"col-md-10"],["type","text","formControlName","firstName","Placeholder","First Name",1,"form-control"],[1,"validationMsg"],["class","text-danger",4,"ngIf"],["type","text","formControlName","lastName","Placeholder","Last Name",1,"form-control"],[1,"fa","fa-at","fa-2x"],["type","text","formControlName","email","Placeholder","Email Address",1,"form-control"],[1,"fa","fa-id-badge","fa-2x"],["type","text","formControlName","username","Placeholder","user Name",1,"form-control"],[1,"fa","fa-lock","fa-2x"],["type","password","formControlName","password","Placeholder","Password",1,"form-control"],["type","password","formControlName","confirmPassword","Placeholder","Confirm Password",1,"form-control"],[1,"fa","fa-mobile","fa-2x"],["type","text","formControlName","contactNumber","Placeholder","Contact Number",1,"form-control"],[1,"col-md-7","my-2",2,"font-size","18px"],["routerLink","/login"],[1,"col-md-5"],[1,"btn","btn-lg","my-2",3,"disabled"],[1,"text-danger"]],template:function(e,r){if(1&e&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.gc(2," Tweet App Register "),o.Jb(3,"div",2),o.Kb(),o.Lb(4,"div",3),o.Lb(5,"div",4),o.Lb(6,"div",5),o.Lb(7,"form",6),o.Sb("submit",function(){return r.onSubmit()}),o.Lb(8,"fieldset",2),o.Lb(9,"div",7),o.Lb(10,"div",8),o.Jb(11,"i",9),o.Kb(),o.Lb(12,"div",10),o.Jb(13,"input",11),o.Lb(14,"div",12),o.fc(15,b,2,0,"small",13),o.fc(16,u,2,0,"small",13),o.Kb(),o.Kb(),o.Kb(),o.Lb(17,"div",7),o.Lb(18,"div",8),o.Jb(19,"i",9),o.Kb(),o.Lb(20,"div",10),o.Jb(21,"input",14),o.Lb(22,"div",12),o.fc(23,c,2,0,"small",13),o.fc(24,d,2,0,"small",13),o.Kb(),o.Kb(),o.Kb(),o.Lb(25,"div",7),o.Lb(26,"div",8),o.Jb(27,"i",15),o.Kb(),o.Lb(28,"div",10),o.Jb(29,"input",16),o.Lb(30,"div",12),o.fc(31,g,2,0,"small",13),o.fc(32,m,2,0,"small",13),o.Kb(),o.Kb(),o.Kb(),o.Lb(33,"div",7),o.Lb(34,"div",8),o.Jb(35,"i",17),o.Kb(),o.Lb(36,"div",10),o.Jb(37,"input",18),o.Lb(38,"div",12),o.fc(39,f,2,0,"small",13),o.Kb(),o.Kb(),o.Kb(),o.Lb(40,"div",7),o.Lb(41,"div",8),o.Jb(42,"i",19),o.Kb(),o.Lb(43,"div",10),o.Jb(44,"input",20),o.Lb(45,"div",12),o.fc(46,p,2,0,"small",13),o.fc(47,h,2,0,"small",13),o.Kb(),o.Kb(),o.Kb(),o.Lb(48,"div",7),o.Lb(49,"div",8),o.Jb(50,"i",19),o.Kb(),o.Lb(51,"div",10),o.Jb(52,"input",21),o.Lb(53,"div",12),o.fc(54,v,2,0,"small",13),o.fc(55,L,2,0,"small",13),o.fc(56,K,2,0,"small",13),o.Kb(),o.Kb(),o.Kb(),o.Lb(57,"div",7),o.Lb(58,"div",8),o.Jb(59,"i",22),o.Kb(),o.Lb(60,"div",10),o.Jb(61,"input",23),o.Lb(62,"div",12),o.fc(63,y,2,0,"small",13),o.fc(64,x,2,0,"small",13),o.Kb(),o.Kb(),o.Kb(),o.Lb(65,"div",7),o.Lb(66,"div",24),o.Lb(67,"a",25),o.gc(68,"Exisitng user?"),o.Kb(),o.Kb(),o.Lb(69,"div",26),o.Lb(70,"button",27),o.gc(71,"Register"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Jb(72,"div",2),o.Kb(),o.Jb(73,"div",2),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&e){let e=null,t=null,n=null,l=null,s=null,i=null,a=null,b=null,u=null,c=null,d=null,g=null,m=null,f=null;o.yb(7),o.Xb("formGroup",r.UserRegister),o.yb(8),o.Xb("ngIf",(null==(e=r.UserRegister.get("firstName"))?null:e.touched)&&(null==(e=r.UserRegister.get("firstName"))||null==e.errors?null:e.errors.required)),o.yb(1),o.Xb("ngIf",(null==(t=r.UserRegister.get("firstName"))?null:t.touched)&&(null==(t=r.UserRegister.get("firstName"))||null==t.errors?null:t.errors.pattern)),o.yb(7),o.Xb("ngIf",(null==(n=r.UserRegister.get("lastName"))?null:n.touched)&&(null==(n=r.UserRegister.get("lastName"))||null==n.errors?null:n.errors.required)),o.yb(1),o.Xb("ngIf",(null==(l=r.UserRegister.get("lastName"))?null:l.touched)&&(null==(l=r.UserRegister.get("lastName"))||null==l.errors?null:l.errors.pattern)),o.yb(7),o.Xb("ngIf",(null==(s=r.UserRegister.get("email"))?null:s.touched)&&(null==(s=r.UserRegister.get("email"))||null==s.errors?null:s.errors.required)),o.yb(1),o.Xb("ngIf",(null==(i=r.UserRegister.get("email"))?null:i.touched)&&(null==(i=r.UserRegister.get("email"))||null==i.errors?null:i.errors.pattern)),o.yb(7),o.Xb("ngIf",(null==(a=r.UserRegister.get("username"))?null:a.touched)&&(null==(a=r.UserRegister.get("username"))||null==a.errors?null:a.errors.required)),o.yb(7),o.Xb("ngIf",(null==(b=r.UserRegister.get("password"))?null:b.touched)&&(null==(b=r.UserRegister.get("password"))||null==b.errors?null:b.errors.required)),o.yb(1),o.Xb("ngIf",(null==(u=r.UserRegister.get("password"))?null:u.touched)&&(null==(u=r.UserRegister.get("password"))||null==u.errors?null:u.errors.minlength)),o.yb(7),o.Xb("ngIf",(null==(c=r.UserRegister.get("confirmPassword"))?null:c.touched)&&(null==(c=r.UserRegister.get("confirmPassword"))||null==c.errors?null:c.errors.required)),o.yb(1),o.Xb("ngIf",(null==(d=r.UserRegister.get("confirmPassword"))?null:d.touched)&&(null==(d=r.UserRegister.get("confirmPassword"))||null==d.errors?null:d.errors.minlength)),o.yb(1),o.Xb("ngIf",null==(g=r.UserRegister.get("confirmPassword"))||null==g.errors?null:g.errors.confirmedValidator),o.yb(7),o.Xb("ngIf",(null==(m=r.UserRegister.get("contactNumber"))?null:m.touched)&&(null==(m=r.UserRegister.get("contactNumber"))||null==m.errors?null:m.errors.required)),o.yb(1),o.Xb("ngIf",(null==(f=r.UserRegister.get("contactNumber"))?null:f.touched)&&(null==(f=r.UserRegister.get("contactNumber"))||null==f.errors?null:f.errors.pattern)),o.yb(6),o.Xb("disabled",!r.UserRegister.valid)}},directives:[s.m,s.i,s.f,s.a,s.h,s.d,n.j,l.d],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0 auto}p[_ngcontent-%COMP%]{line-height:1.5em}.container[_ngcontent-%COMP%]{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%)}#login[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]{display:inline-block;width:60%}#login[_ngcontent-%COMP%]{padding:0 22px;width:80%}.logo[_ngcontent-%COMP%]{color:#fff;font-size:40px;line-height:40px;margin-top:18px;margin-left:450px}#login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span.fa[_ngcontent-%COMP%]{background-color:#fff;border-radius:3px 0 0 3px;color:#000;display:block;float:left;height:50px;font-size:24px;line-height:50px;text-align:center;width:50px}.text-danger[_ngcontent-%COMP%]{font-weight:700;font-size:16px;float:right}.validationMsg[_ngcontent-%COMP%]{width:208px;text-align:left;height:20px}#login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{background-color:#fff;border-radius:0 3px 3px 0;color:#000;margin-bottom:.5em;margin-top:.25em;padding:0 16px;width:250px}#login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px;width:250px;font-size:18px}"]}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({imports:[[l.e.forChild(w)],l.e]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({imports:[[n.b,s.g,s.k,N]]}),e})()}}]);