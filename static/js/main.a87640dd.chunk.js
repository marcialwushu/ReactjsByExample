(this["webpackJsonpcompare-react"]=this["webpackJsonpcompare-react"]||[]).push([[0],{32:function(e,a,t){e.exports=t(65)},37:function(e,a,t){},38:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(28),s=t.n(l),r=(t(37),t(9)),i=t(10),m=t(14),o=t(12),u=t(11),d=(t(38),t(5)),v=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).handleClick=n.handleClick.bind(Object(m.a)(n)),n.state={active:!1},n}return Object(i.a)(t,[{key:"handleClick",value:function(){var e=this.state.active;this.setState({active:!e})}},{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar is-transparent"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("a",{className:"navbar-item",href:"https://github.com/marcialwushu/ReactjsByExample"},"MyCompany"),c.a.createElement("div",{className:"navbar-burger burger ",active:this.state.active&&"active",onClick:this.handleClick},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))),c.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},c.a.createElement("div",{className:"navbar-start"},c.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"})),c.a.createElement("div",{className:"navbar-end ",onClick:this.handleClick},c.a.createElement(d.a,null,c.a.createElement(d.b,{to:"/",className:"navbar-item "},"Home"),c.a.createElement(d.b,{to:"/faq",className:"navbar-iem "},"Feature"),c.a.createElement(d.b,{to:"/faq",className:"navbar-item"},"About"),c.a.createElement(d.b,{to:"/faq",className:"navbar-item"},"FAQ")),c.a.createElement("div",{className:"navbar-item"},c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("p",{className:"control"},c.a.createElement("a",{className:"button is-primary is-outlined",href:"https://bulma.io"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-download"})),c.a.createElement("span",null,"Join Now"))))))))}}]),t}(n.Component),E=(t(44),function(){return c.a.createElement("div",{className:"App"},c.a.createElement("footer",{className:"footer is-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"column"},c.a.createElement("p",null,"And this rifht is a spiffy footer, where you can put stuff.")),c.a.createElement("div",{className:"column has-text-right"},c.a.createElement("a",{className:"icon",href:"/"},c.a.createElement("i",{className:"fab fa-facebook-square"})),c.a.createElement("a",{className:"icon",href:"/"},c.a.createElement("i",{className:"fab fa-twitter"}))))))}),h=(t(45),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("section",{className:"hero"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"}," ","Soaring to new heights"," "),c.a.createElement("div",{className:"is-two-thirds column is-paddingless"},c.a.createElement("h2",{className:"subtitle is-4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis eget maximus tincidunt.")),c.a.createElement("a",{className:"button is-large is-primary",id:"learn",href:"/"},"Learn More")))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns pd is-desktop"},c.a.createElement("div",{className:"column is-1 has-text-centered"},c.a.createElement("i",{className:"fa fa-cog is-primary"})),c.a.createElement("div",{className:"column is-one-third-desktop"},c.a.createElement("p",{className:"title"},c.a.createElement("strong",null,"We provide superiorlogistics so that your business can succeed in a crazy world."))),c.a.createElement("div",{className:"column "},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis eget maximus tincidunt.Phasellus vitae dolor nec neque vehicula luctus eu eu nisi.")))),c.a.createElement("div",{className:"columns pd"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title"},"I think it's an absolutely excellent tool for our business. I can't survive without this"),c.a.createElement("p",{className:"subtitle"},"- Gary Simon")))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title"},"I think it's an absolutely excellent tool for our business. I can't survive without this"),c.a.createElement("p",{className:"subtitle"},"- Gary Simon")))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title"},"I think it's an absolutely excellent tool for our business. I can't survive without this"),c.a.createElement("p",{className:"subtitle"},"- Gary Simon")))))))}}]),t}(n.Component)),p=(t(46),t(31)),N=t.n(p),f=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={faqs:[]},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://jsonplaceholder.typicode.com/posts").then((function(a){var t=a.data.slice(0,10);e.setState({faqs:t})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:"section"},c.a.createElement("h1",{className:"title"},"FAQ"),c.a.createElement("h2",{className:"subtitle is-4"},"Lorum ipsum and all of that jazz"),c.a.createElement("div",{className:"columns"},this.state.faqs.map((function(e){return c.a.createElement("div",{className:"column is-one-third"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title"},e.title),c.a.createElement("p",{className:"answer"},e.body))))}))))))}}]),t}(n.Component),b=t(7);var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(d.a,null,c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",component:h}),c.a.createElement(b.a,{path:"/faq",component:f}))),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(64);s.a.render(c.a.createElement(d.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.a87640dd.chunk.js.map