(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),s=a.n(i),c=a(25),r=a.n(c),l=(a(52),a(9)),o=a(12),d=a(11),j=a(10),b=a(27),h=a(6),m=a(16),u=a(28),O=a(46),f=(a(53),a(20)),p=a(18);var x=function(){return Object(n.jsx)("footer",{className:"mt-5",children:Object(n.jsx)(m.a,{fluid:!0,children:Object(n.jsxs)(f.a,{className:"border-top justify-content-between p-3",children:[Object(n.jsx)(p.a,{className:"p-0",md:3,sm:12,children:"Elisha E Badio"}),Object(n.jsx)(p.a,{className:"p-0 d flex justify-content-end",md:3,children:"This React Portfolio was made by Elisha Badio"})]})})})},g=a(43);var v=function(e){return Object(n.jsx)(g.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(n.jsx)(m.a,{fluid:!0,children:Object(n.jsx)(f.a,{className:"justify-content-center py-5",children:Object(n.jsxs)(p.a,{md:8,sm:12,children:[e.title&&Object(n.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(n.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(n.jsx)("h3",{className:" lead font-weight-light",children:e.text})]})})})})},y=a(24),k=a(41);var C=function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}});return Object(n.jsxs)(k.a.div,{className:"e-card-info",style:t,children:[Object(n.jsxs)("p",{className:"e-card-title",children:[e.title," "]}),Object(n.jsxs)("p",{className:"e-card-sub-title",children:[e.subTitle," "]}),Object(n.jsx)("a",{href:e.link,target:"blank",rel:"noopener noreferrer",children:" view "})]})};var N=function(e){return Object(n.jsxs)("div",{className:"d-inline-block e-card",onClick:function(t){return e.click(e.item)},children:[Object(n.jsx)("img",{className:"e-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(n.jsx)(C,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},S=a.p+"static/media/tvshows.d419424c.jpg",w=a.p+"static/media/EntSolutions.3f4ba549.jpg",T=a.p+"static/media/weatherApp.91b09f9b.png",E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).handleCardClick=function(e,t){var a=Object(y.a)(i.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),i.setState({items:a})},i.makeItems=function(e){return e.map((function(e){return Object(n.jsx)(N,{item:e,click:function(t){return i.handleCardClick(e.id,t)}},e.id)}))},i.state={items:[{id:0,title:"BoxOffice Movies Project",subTitle:"Bring all fans in one Site",imgSrc:S,link:"https://0216johnsoneric.github.io/Boxoffice-Movies/",selected:!1},{id:1,title:"Enterprise Solutions Project",subTitle:"Small Business Inventory Management",imgSrc:w,link:"https://gentle-retreat-04355.herokuapp.com/ ",selected:!1},{id:2,title:"Weather Dashboard",subTitle:" View the current weather near your City",imgSrc:T,link:"https://elibadio.github.io/Weather-Dashboard.HW6.io/",selected:!1}]},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)(m.a,{fluid:!0,children:Object(n.jsx)(f.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(s.a.Component);var I=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(v,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(n.jsx)(E,{})]})};var F=function(e){return Object(n.jsx)(m.a,{fluid:!0,children:Object(n.jsx)(f.a,{className:"justify-content-center",children:Object(n.jsx)(p.a,{md:8,children:e.children})})})};var B=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(v,{title:e.title}),Object(n.jsx)(F,{children:" Hello!! my name is Elisha Badio and I\u2019m very excited for the opportunity to share my experience, education background and my career aspiration. I have been a Financial Analyst the las t six to seven years. As far I can remember, I started investing in my education and leadership skills during my undergrade at Quinnipiac University. During that time, I had the opportunity to take few investments, accounting classes and joined the investment club that gave me the skill sets to successfully manage my first financial portfolio of ETF\u2019s, Mutual funds, stocks and other financial instruments. In fact, I\u2019m currently managing my family members saving and investment at no cost.   During my senior year at Quinnipiac University, I accepted a Coop  for a Financial Analyst Position at United Technologies Corporation (UTC), currently known as Raytheon Technologies. One of the key roles was to create financial reports that are tailored to UTC\u2019s partners based on their investments level in our major Commercial Engine products or platforms. Also, I successfully collaborated in various projects with our partners and led some of these projects as well. After 9 months or so, I accepted a full time offer at UTC as a Senior Associate Financial Analyst for the Military Development Programs. I was fortunate to manage a $12M dollar portfolio that grew up to become a $40M after 3 years, we had successfully negotiated and received some major Government awards."})]})},A=a(7),M=a(15),P=a(44),D=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log(e);var t=e.target,a="checkbox"===t.type?t.checked:t.value,i=t.name;n.setState(Object(A.a)({},i,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0})},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a;return Object(n.jsxs)("div",{children:[Object(n.jsx)(v,{title:this.props.title}),Object(n.jsx)(F,{children:Object(n.jsxs)(M.a,{onSubmit:this.handleSubmit,children:[Object(n.jsxs)(M.a.Group,{children:[Object(n.jsx)(M.a.Label,{htmlFor:"full-name",children:" Full Name "}),Object(n.jsx)(M.a.Control,(e={id:"full-name",name:"name"},Object(A.a)(e,"name","name"),Object(A.a)(e,"type","text"),Object(A.a)(e,"value",this.state.name),Object(A.a)(e,"onChange",this.handleChange),e))]}),Object(n.jsxs)(M.a.Group,{children:[Object(n.jsx)(M.a.Label,{htmlFor:"email",children:" Email "}),Object(n.jsx)(M.a.Control,(t={id:"email",name:"email"},Object(A.a)(t,"name","email"),Object(A.a)(t,"type","email"),Object(A.a)(t,"value",this.state.email),Object(A.a)(t,"onChange",this.handleChange),t))]}),Object(n.jsxs)(M.a.Group,{children:[Object(n.jsx)(M.a.Label,{htmlFor:"message",children:" Message "}),Object(n.jsx)(M.a.Control,(a={id:"message",name:"message"},Object(A.a)(a,"name","message"),Object(A.a)(a,"as","textarea"),Object(A.a)(a,"rows","4"),Object(A.a)(a,"value",this.state.message),Object(A.a)(a,"onChange",this.handleChange),a))]}),Object(n.jsx)(P.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(n.jsx)("p",{className:"d-inline success-msg",children:" Email Sent"}),!1===this.state.emailSent&&Object(n.jsx)("p",{className:"d-inline err-msg",children:" Email Not Sent"})]})})]})}}]),a}(s.a.Component),L=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={title:"Elisha E Badio",headerLinks:[{title:"home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:" Have Courage & Faith",subTitle:"Projects I enjoyed",text:" Checkout my porfolio below"},about:{title:" About Me"},contact:{title:" Let's Chat"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(b.a,{children:Object(n.jsxs)(m.a,{className:"p-0",fluid:!0,children:[Object(n.jsxs)(u.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(n.jsx)(u.a.Brand,{children:" Elisha E Badio "}),Object(n.jsx)(u.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(n.jsx)(u.a.Collapse,{id:"navbar-toggle",children:Object(n.jsxs)(O.a,{className:"ml-auto",children:[Object(n.jsx)(b.b,{className:"nav-link",to:"/",children:"Home"}),Object(n.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"}),Object(n.jsx)(b.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(n.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(n.jsx)(I,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(n.jsx)(h.a,{path:"/about",exact:!0,render:function(){return Object(n.jsx)(B,{title:e.state.about.title})}}),Object(n.jsx)(h.a,{path:"/contact",exact:!0,render:function(){return Object(n.jsx)(D,{title:e.state.contact.title})}}),Object(n.jsx)(x,{})]})})}}]),a}(s.a.Component),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};a(60);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),U()}},[[61,1,2]]]);
//# sourceMappingURL=main.e9b11612.chunk.js.map