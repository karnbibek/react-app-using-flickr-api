(this.webpackJsonpflickrimageapp=this.webpackJsonpflickrimageapp||[]).push([[0],{199:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(0),n=a(26),s=a(2),o=a(68),i=a.n(o),u=(a(79),a(80),a(3)),l=a.n(u),j=a(7),d=a(5),p=a(16),b=a.n(p),h=b.a.create({baseURL:"https://api.flickr.com/services/rest/?method=flickr.tags.getRelated&api_key=".concat("9fcf53f6c8eb6e079277ce56743a77f0","&per_page=20&page=1&format=json&nojsoncallback=1")}),f=(a(99),function(e){var t=e.onFormSubmit,a=localStorage.getItem("term"),n=Object(r.useState)(a||""),s=Object(d.a)(n,2),o=s[0],i=s[1],u=Object(r.useState)([]),p=Object(d.a)(u,2),b=p[0],f=p[1],m=function(){var e=Object(j.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(t.target.value),e.next=3,h.get("/",{params:{tag:o}});case 3:(a=e.sent).data.tags&&f(a.data.tags.tag.slice(0,6));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=b.map((function(e){return Object(c.jsx)("ul",{children:Object(c.jsx)("li",{onClick:function(a){return function(e,a){e.preventDefault(),i(a),f([]),t(a)}(a,e._content)},children:e._content})},e._content)}));return Object(c.jsx)("div",{className:"search-bar ui segment",style:{marginBottom:"20px"},children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),i(o),f([]),t(o)},className:"ui form center",children:Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Search"}),Object(c.jsxs)("div",{className:"searched",children:[Object(c.jsx)("input",{className:"queryy",type:"text",value:o,onChange:m}),g]})]})})})}),m=function(){var e=Object(s.e)(),t=function(){var t=Object(j.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("term",a),e.push("/groups");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"ui container",children:Object(c.jsx)(f,{onFormSubmit:t})})},g=b.a.create({baseURL:"https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=".concat("9fcf53f6c8eb6e079277ce56743a77f0","&per_page=20&page=1&format=json&nojsoncallback=1")}),O=b.a.create({baseURL:"https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=".concat("9fcf53f6c8eb6e079277ce56743a77f0","&format=json&nojsoncallback=1")}),x=function(e){var t=e.group,a=Object(r.useState)([]),n=Object(d.a)(a,2),s=n[0],o=n[1],i=function(){var e=Object(j.a)(l.a.mark((function e(){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/",{params:{group_id:t.nsid,page:1}});case 2:if(!(a=e.sent).data.photos){e.next=9;break}if(!a.data.photos.photo[0]){e.next=9;break}return e.next=7,"https://farm".concat(a.data.photos.photo[0].farm,".staticflickr.com/").concat(a.data.photos.photo[0].server,"/").concat(a.data.photos.photo[0].id,"_").concat(a.data.photos.photo[0].secret,".jpg");case 7:c=e.sent,o(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){i()}),[]),s?Object(c.jsx)("img",{className:"right floated mini ui image",src:s,alt:"group"}):Object(c.jsx)("img",{className:"right floated mini ui image",alt:"group"})},v=a(70),k=function(e){var t=e.results,a=Object(r.useState)([]),n=Object(d.a)(a,2),s=n[0],o=n[1],i=Object(r.useState)([]),u=Object(d.a)(i,2),p=u[0],b=u[1],h=Object(r.useState)(0),f=Object(d.a)(h,2),m=f[0],g=f[1],x=[],k=[],N=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.groups.group.map((function(e){return function(){var t=Object(j.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/",{params:{group_id:e.nsid}});case 2:(a=t.sent).data.photos&&(x.push(a.data.photos.total),k.push(e.name),b([k]),o([x]),g(x.length));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){if(0===t.groups.group.length)return null;N()}),[t]);return 0===t.groups.group.length?Object(c.jsx)("h2",{children:"No data found. Please search with another keyword."}):s[0]&&s[0].length===m?Object(c.jsx)("div",{children:function(){if(s.length>0){var e={labels:p[0],datasets:[{label:"Number of photos in groups",data:s[0],backgroundColor:"rgb(255, 99, 132)",borderColor:"black",borderWidth:1,hoverBackgroundColor:"blue"}]};return Object(c.jsxs)("div",{className:"chart card",style:{margin:"20px"},children:[Object(c.jsx)("h2",{style:{textAlign:"center"},children:"No. of Photos in Groups vs Names"}),Object(c.jsx)(v.Bar,{data:e,options:{}})]})}return Object(c.jsx)("div",{children:"No items to show"})}()}):Object(c.jsx)("h3",{children:"Loading Charts..."})},N=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(!1),o=Object(d.a)(s,2),i=o[0],u=o[1],p=localStorage.getItem("term"),b=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/",{params:{text:p}});case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){u(!0),b(),h(),u(!1)}),[p]);var h=function(){return Object(c.jsx)(k,{results:a})};return Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{}),i||!a.groups?Object(c.jsx)("div",{className:"ui segment",children:Object(c.jsx)("div",{className:"ui active inverted dimmer",children:Object(c.jsx)("div",{className:"ui text loader",children:"Loading"})})}):null,!i&&a.groups?Object(c.jsxs)("div",{children:[a.groups.group.map((function(e){return Object(c.jsx)("div",{className:"ui cards",style:{marginLeft:"30%",marginRight:"30%"},children:Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(x,{group:e}),Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("a",{href:"/gallery/".concat(e.nsid),children:e.name})})]})})},e.nsid)})),h()]}):null]})},y=a(73),w=a(41),S=a(71),_=a.n(S),C=a(72),L=a.n(C),B=function(e){var t=e.farm,a=e.server,r=e.id,n=e.secret,s=e.ownername,o=e.title;return Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12 px-0",children:Object(c.jsxs)("div",{className:"card rounded-lg overflow-hidden",children:[Object(c.jsx)("h3",{style:{color:"black",background:"red",marginBottom:"0",textAlign:"center"},children:o}),Object(c.jsx)("img",{src:"https://farm".concat(t,".staticflickr.com/").concat(a,"/").concat(r,"_").concat(n,".jpg"),alt:"".concat(s)}),Object(c.jsxs)("h4",{style:{color:"antiquewhite",background:"grey",marginBottom:"0",textAlign:"center"},children:["Owner : ",s]})]})})})},E=1,R=function(e){var t=Object(s.e)(),a=Object(r.useState)([]),n=Object(d.a)(a,2),o=n[0],i=n[1],u=Object(r.useState)(0),p=Object(d.a)(u,2),b=p[0],h=p[1],f=Object(r.useState)(!1),m=Object(d.a)(f,2),g=m[0],x=m[1],v=function(){var t=Object(j.a)(l.a.mark((function t(a){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/",{params:{group_id:e.match.params.id,page:a}});case 2:(c=t.sent).data.photos&&(i([].concat(Object(w.a)(o),Object(w.a)(c.data.photos.photo))),h(c.data.photos.pages)),x(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){x(!0),v(E)}),[]);return Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsxs)("button",{className:"ui left labeled icon green button",onClick:function(){t.push("/groups")},style:{marginTop:"10px",marginLeft:"39%"},children:[Object(c.jsx)("i",{className:"left arrow icon"}),"Groups"]}),g?Object(c.jsx)("div",{className:"ui segment",children:Object(c.jsx)("div",{className:"ui active inverted dimmer",children:Object(c.jsx)("div",{className:"ui text loader",children:"Loading"})})}):null,g||0!==o.length?null:Object(c.jsx)("h1",{style:{textAlign:"center"},children:"No images found for selected group"}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)(_.a,{pageStart:0,loadMore:function(){return v(++E)},hasMore:E<b,children:Object(c.jsx)(L.a,{breakpointCols:{default:6,1200:4,992:3,768:2,576:1},className:"masonry-grid",columnClassName:"masonry-grid_column",children:o.map((function(e){return Object(c.jsx)(B,Object(y.a)({},e),e.id)}))})})})})]})};i.a.render(Object(c.jsxs)(n.a,{children:[Object(c.jsx)(s.a,{path:"/",exact:!0,component:m}),Object(c.jsx)(s.a,{path:"/groups",component:N}),Object(c.jsx)(s.a,{path:"/gallery/:id",component:R})]}),document.getElementById("root"))},80:function(e,t,a){},99:function(e,t,a){}},[[199,1,2]]]);
//# sourceMappingURL=main.db8bee29.chunk.js.map