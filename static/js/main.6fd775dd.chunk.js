(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(31)},23:function(e,a,t){},28:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),i=t(33),m=(t(23),t(3)),s=t(4),u=t(6),o=t(5),E=t(7),p=t(32),d=t(34),h=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing"},l.a.createElement("div",{className:"main-img-div"},l.a.createElement("picture",null,l.a.createElement("source",{media:"(min-width: 650px)",srcSet:"./img/main.jpg"}),l.a.createElement("img",{className:"main-img",src:"./img/main-small.jpg",alt:"main"}))),l.a.createElement("p",{className:"desc"},"Hi I am Sara, a Front-end Developer, Educator and a Life-long Learner. I have a Masters degree in Computer Science and a nanodegree in Front-end Web Development."))}}]),a}(n.Component),f=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"SKILLS"),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-container-item"},l.a.createElement("h2",null,"Languages"),l.a.createElement("ul",{className:"skill-list"},l.a.createElement("li",null,"JavaScript (ES6)"),l.a.createElement("li",null,"HTML5"),l.a.createElement("li",null,"CSS3/Sass"),l.a.createElement("li",null,"C/C++"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"MySql"))),l.a.createElement("div",{className:"skills-container-item"},l.a.createElement("h2",null,"Frameworks/Libraries"),l.a.createElement("ul",{className:"skill-list"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Jasmine"),l.a.createElement("li",null,"Gulp"),l.a.createElement("li",null,"Grunt"),l.a.createElement("li",null,"jQuery"),l.a.createElement("li",null,"Bootstrap"))),l.a.createElement("div",{className:"skills-container-item"},l.a.createElement("h2",null,"Miscellaneous"),l.a.createElement("ul",{className:"skill-list"},l.a.createElement("li",null,"Git/Github"),l.a.createElement("li",null,"Responsive web design"),l.a.createElement("li",null,"AJAX")))))}}]),a}(n.Component),b=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"CERTIFICATIONS"),l.a.createElement("div",{className:"certificates-container"},l.a.createElement("div",{className:"certificate"},l.a.createElement("a",{href:"https://confirm.udacity.com/K4XCVCLN",target:"_blank"},l.a.createElement("picture",null,l.a.createElement("source",{media:"(min-width: 650px)",srcSet:"./img/ud.jpg"}),l.a.createElement("img",{className:"certificate-img",src:"./img/ud.jpg",alt:"Udacity Nanodegree Screenshot"}))),l.a.createElement("h2",null,"Udacity"),l.a.createElement("p",null,"Front End Web Developer Nanodegree")),l.a.createElement("div",{className:"certificate"},l.a.createElement("a",{href:"https://www.freecodecamp.org/certification/fccdcd7f3f6-e082-442c-9920-b1baad42d633/javascript-algorithms-and-data-structures",target:"_blank"},l.a.createElement("picture",null,l.a.createElement("source",{media:"(min-width: 650px)",srcSet:"./img/fcc.png"}),l.a.createElement("img",{className:"certificate-img",src:"./img/fcc.png",alt:"freecodecamp certification Screenshot"}))),l.a.createElement("h2",null,"freeCodeCamp"),l.a.createElement("p",null,"JavaScript Algorithms and Data Structures"))))}}]),a}(n.Component),g=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"featured"},l.a.createElement("picture",null,l.a.createElement("source",{media:"(min-width: 650px)",srcSet:"./img/titb.jpg"}),l.a.createElement("img",{className:"featured-img",src:"./img/titb-medium.jpg",alt:"Map App Screenshot"})),l.a.createElement("div",{className:"featured-text"},l.a.createElement("div",{className:"featured-head"},l.a.createElement("h2",null,"TRENDING IN TAMPA BAY"),l.a.createElement("button",{className:"featured-link"},l.a.createElement("a",{href:"https://ssaleem.github.io/Trending-in-Tampa-Bay/",target:"_blank"},"DEMO")),l.a.createElement("button",{className:"featured-link"},l.a.createElement("a",{href:"https://github.com/ssaleem/Trending-in-Tampa-Bay",target:"_blank"},"CODE"))),l.a.createElement("p",null,"A single-page responsive Google Maps web application displaying top trending places at Foursquare in Tampa Bay area. The site also lists the places in a sidebar with the option to select/filter based on their type/catgeory."),l.a.createElement("button",{className:"featured-skill"},"REACT.JS"),l.a.createElement("button",{className:"featured-skill"},"GOOGLE MAPS API"),l.a.createElement("button",{className:"featured-skill"},"FOURSQUARE API"))))}}]),a}(n.Component),v=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},this.props.projects.map(function(e){return l.a.createElement("div",{className:"flex-project",key:e.title},l.a.createElement("a",{href:e.demoUrl,target:"_blank"},l.a.createElement("picture",null,l.a.createElement("source",{media:"(min-width: 650px)",srcSet:e.medImage}),l.a.createElement("img",{className:"proj-img",src:e.smallImage,alt:"".concat(e.title," Screenshot")}))),l.a.createElement("h2",{className:"proj-title"},e.title),l.a.createElement("p",{className:"proj-links"},l.a.createElement("a",{href:e.demoUrl,target:"_blank"},"DEMO")," | ",l.a.createElement("a",{href:e.codeUrl,target:"_blank"},"CODE")),l.a.createElement("p",null,e.description))}))}}]),a}(n.Component),j=t(10),N=t(12),k=t(13);t(28);j.b.add(k.b,k.a);var O=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={projects:[]},t}return Object(E.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ssaleem.github.io/data/projects.json").then(function(e){return e.json()}).then(function(a){return e.setState({projects:a})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"landing-page"},l.a.createElement("header",{className:"app-header"},l.a.createElement("h1",null,"SARA SALEEM"),l.a.createElement("nav",null,l.a.createElement(d.a,{className:"nav-link",activeClassName:"active-navlink",exact:!0,to:"/"},"Home"),l.a.createElement(d.a,{className:"nav-link",activeClassName:"active-navlink",to:"/portfolio"},"Portfolio"))),l.a.createElement(p.a,{exact:!0,path:"/",render:function(){return l.a.createElement(h,null)}}),l.a.createElement(p.a,{path:"/portfolio",render:function(){return l.a.createElement(g,null)}})),l.a.createElement(p.a,{exact:!0,path:"/",render:function(){return l.a.createElement(f,null)}}),l.a.createElement(p.a,{exact:!0,path:"/",render:function(){return l.a.createElement(b,null)}}),l.a.createElement(p.a,{path:"/portfolio",render:function(){return l.a.createElement(v,{projects:e.state.projects})}}),l.a.createElement("footer",null,l.a.createElement("a",{href:"https://github.com/ssaleem",target:"_blank"},l.a.createElement(N.a,{className:"social",icon:["fab","github"]})),l.a.createElement("a",{href:"https://www.linkedin.com/in/saraasaleem/",target:"_blank"},l.a.createElement(N.a,{className:"social",icon:["fab","linkedin"]}))))}}]),a}(n.Component);c.a.render(l.a.createElement(i.a,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.6fd775dd.chunk.js.map