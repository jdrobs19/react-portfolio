(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),a=c.n(n),s=c(6),i=c.n(s),l=(c(12),c(3)),o=(c(13),c.p+"static/media/profile.36f6c238.jpg");var j=function(){return Object(r.jsxs)("section",{className:"section",children:[Object(r.jsxs)("article",{id:"section",children:[Object(r.jsx)("div",{className:"section-title",children:Object(r.jsx)("h2",{children:"About Me"})}),Object(r.jsx)("div",{className:"section-info",children:Object(r.jsx)("p",{children:"I'm not good at talking about myself. I like to be outdoors, at times, but a majority of my time is spent with my wife and daughter. I play video games and watch movies. I'm working on bettering myself both physically and mentally. Currently, developing skills of a full-stack developer using the MERN stack. Enjoy front end work and database work."})})]}),Object(r.jsx)("img",{src:o,alt:"profile",className:"profile-img"})]})},d={backgroundImage:"url("+(c.p+"static/media/header_img.b542809a.jpg")+")"};var b=function(){return Object(r.jsx)("section",{className:"hero",style:d,children:Object(r.jsx)("div",{className:"subtext",children:Object(r.jsx)("h2",{children:"Always a work in progress"})})})};var u=function(){return Object(r.jsx)("footer",{children:Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/jdrobs19",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/jordan-roberts-a532791b1/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://twitter.com/Jdrob19",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})})]})})})},m=c(2);var h=function(e){return Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("div",{className:"work-item",style:e.bgStyle,children:Object(r.jsx)("div",{className:"work-label",children:Object(r.jsx)("h3",{children:e.name})})})})},O=c.p+"static/media/run-buddy.3abee149.png",x=c.p+"static/media/mood-music.8dd90bbb.png",f=c.p+"static/media/placeholder-2.56a6beef.jpg",g=c.p+"static/media/placeholder-3.1026a739.jpg";var p=function(){var e=[{name:"Run Buddy",url:"https://jdrobs19.github.io/run-buddy/",bgStyle:{backgroundImage:"url( "+O+")"},id:1},{name:"Mood Music",url:"https://jdrobs19.github.io/music-mood/",bgStyle:{backgroundImage:"url( "+x+")"},id:2},{name:"Casuals LFG",url:"https://casuals-lfg.herokuapp.com/",bgStyle:{backgroundImage:"url( "+f+")"},id:3},{name:"Dino Store",url:"https://limitless-refuge-02623.herokuapp.com/",bgStyle:{backgroundImage:"url( "+g+")"},id:4}];return Object(r.jsx)("section",{className:"section",children:Object(r.jsxs)("article",{id:"work",children:[Object(r.jsx)("div",{className:"section-title",children:Object(r.jsx)("h2",{children:"Portfolio"})}),Object(r.jsx)("div",{className:"section-info work",children:e.map((function(e){return Object(n.createElement)(h,Object(m.a)(Object(m.a)({},e),{},{key:e.id}))}))})]})})},v=c(4);var y=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),c=t[0],a=t[1],s=c.name,i=c.email,o=c.message,j=Object(n.useState)(""),d=Object(l.a)(j,2),b=d[0],u=d[1];function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));b||a(Object(m.a)(Object(m.a)({},c),{},Object(v.a)({},e.target.name,e.target.value)))}return Object(r.jsx)("section",{className:"section",children:Object(r.jsxs)("article",{id:"section",children:[Object(r.jsx)("div",{className:"section-title",children:Object(r.jsx)("h1",{children:"Contact me"})}),Object(r.jsx)("div",{className:"section-body",children:Object(r.jsxs)("form",{id:"contact-form",className:"form-fields",onSubmit:function(e){e.preventDefault(),console.log(c)},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(r.jsx)("input",{type:"text",name:"name",defaultValue:s,onBlur:h})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(r.jsx)("input",{type:"email",name:"email",defaultValue:i,onBlur:h})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(r.jsx)("textarea",{name:"message",rows:"5",defaultValue:o,onBlur:h})]}),b&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"error-text",children:b})}),Object(r.jsx)("button",{type:"submit","data-testid":"button",children:"Submit"})]})})]})})};var k=function(e){var t=e.categories,c=void 0===t?[]:t,a=e.setCurrentCategory,s=e.currentCategory;return Object(n.useEffect)((function(){document.title=s.name}),[s]),Object(r.jsxs)("header",{children:[Object(r.jsx)("div",{className:"header-name",children:Object(r.jsx)("h1",{children:"Jordan Roberts"})}),Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{children:c.map((function(e){return Object(r.jsx)("li",{className:" ".concat(s.name===e.name&&"selectedCategory"),onClick:function(){a(e)},children:e.name},e.id)}))})})]})},w=c.p+"static/media/resume.fb63692c.pdf";var N=function(){return Object(r.jsx)("section",{className:"section",children:Object(r.jsxs)("article",{id:"section",children:[Object(r.jsx)("div",{className:"section-title",children:Object(r.jsx)("h2",{children:"Resume"})}),Object(r.jsx)("div",{className:"section-info ",children:Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:w,download:"resume.pdf",target:"_blank",rel:"noopener noreferrer",children:"View my resume"})})})]})})};var C=function(){var e=Object(n.useState)([{name:"About",id:"about"},{name:"Portfolio",id:"portfolio"},{name:"Contact",id:"contact"},{name:"Resume",id:"resume"}]),t=Object(l.a)(e,1)[0],c=Object(n.useState)(t[0]),a=Object(l.a)(c,2),s=a[0],i=a[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(b,{}),Object(r.jsx)(k,{categories:t,setCurrentCategory:i,currentCategory:s}),Object(r.jsx)("main",{children:function(){switch(s.name){case"Portfolio":return Object(r.jsx)(p,{});case"Resume":return Object(r.jsx)(N,{});case"Contact":return Object(r.jsx)(y,{});default:return Object(r.jsx)(j,{})}}()}),Object(r.jsx)(u,{})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),S()}},[[14,1,2]]]);
//# sourceMappingURL=main.7886cf85.chunk.js.map