(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{YQMk:function(t,e,a){"use strict";a.r(e);var i=a("1OyB"),n=a("vuIU"),s=a("Ji7U"),r=a("md7G"),c=a("foSv"),l=a("q1tI"),o=a.n(l),u=a("JX7q"),p=a("rePB"),m=a("BMrR"),f=a("kPKH"),v=a("2/Rp"),d=a("bx4M"),h=a("YFqc"),y=a.n(h),D=a("2U8R"),g=a("/MKj"),O={name:"plus",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]}},b=a("6VBw"),I=function(t,e){return l.createElement(b.a,Object.assign({},t,{ref:e,icon:O}))};I.displayName="PlusOutlined";var P=l.forwardRef(I),C={name:"minus",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]}},_=function(t,e){return l.createElement(b.a,Object.assign({},t,{ref:e,icon:C}))};_.displayName="MinusOutlined";var j=l.forwardRef(_),N=o.a.createElement;function R(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var k=D.a.getItemsinCart,w=function(t){Object(s.a)(l,t);var e,a=(e=l,function(){var t,a=Object(c.a)(e);if(R()){var i=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return Object(r.a)(this,t)});function l(t){var e;return Object(i.a)(this,l),e=a.call(this,t),Object(p.a)(Object(u.a)(e),"calculatePriceSum",(function(){var t=0,a=0;e.state.cartDisplayItems.map((function(e){t+=e.item.price.actual,a+=e.item.price.display}));var i=a-t;return e.setState({totalPriceOfItems:t,totalPriceDisplay:a,totalDiscountedPrice:i}),t})),Object(p.a)(Object(u.a)(e),"increment",(function(t,a){var i=e.state.totalPriceOfItems,n=e.state.totalDiscountedPrice,s=e.state.totalPriceDisplay;i+=t.price.actual,n=(s+=t.price.display)-i,e.setState(Object(p.a)({totalPriceOfItems:i,totalPriceDisplay:s,totalDiscountedPrice:n},a+t.name,e.state[a+t.name]?e.state[a+t.name]+1:e.state.initialItems+1))})),Object(p.a)(Object(u.a)(e),"decrement",(function(t,a){var i=e.state.totalPriceOfItems,n=e.state.totalDiscountedPrice,s=e.state.totalPriceDisplay;void 0!=e.state[a+t.name]&&(i-=t.price.actual,n=(s-=t.price.display)-i),e.setState(Object(p.a)({totalPriceOfItems:i,totalPriceDisplay:s,totalDiscountedPrice:n},a+t.name,e.state[a+t.name]?e.state[a+t.name]-1:e.state.initialItems-1))})),Object(p.a)(Object(u.a)(e),"removeItems",(function(t,a){var i=e.state.cartDisplayItems,n=Object(u.a)(e),s=i.map((function(t){return t.key})).indexOf(t.key);i.splice(s,1),e.setState({cartDisplayItems:i},(function(){n.state.cartDisplayItems.length>0&&n.calculatePriceSum()}))})),e.state={cartDisplayItems:[],initialItems:1,totalPriceOfItems:0,totalDiscountedPrice:0,totalPriceDisplay:0},e}return Object(n.a)(l,[{key:"componentDidMount",value:function(){var t=this;this.setState({cartDisplayItems:this.props.itemsInCart},(function(){t.props.itemsInCart&&t.props.itemsInCart.length>0&&t.calculatePriceSum()})),console.log(" this.props.itemsInCart did mount",this.props.itemsInCart)}},{key:"componentWillReceiveProps",value:function(t){console.log("NExt props in cartjs",t)}},{key:"render",value:function(){var t=this;this.props.itemsInCart;return N(o.a.Fragment,null,N("div",{className:"cartContainerDiv"},this.state.cartDisplayItems&&this.state.cartDisplayItems.length>0?N("div",null,N("div",{className:"cartContainerDiv__cartLeftNav"},N("div",null,this.state.cartDisplayItems.map((function(e,a){return N(m.a,{gutter:16,key:a,className:"cartContainerDiv__cartLeftNav--Row"},N(f.a,{span:6},N("div",{className:"cartContainerDiv__cartLeftNav--cartListDiv"},N("img",{alt:"example",src:"https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg"}))),N(f.a,{span:6},N("div",{className:"cartContainerDiv__cartLeftNav--cartListText"},N("span",null,e.item.name),N("p",null,N("span",null,N("strong",null,"\u20b9 ",e.item.price.actual)," "),N("span",{className:"shoppingListWrap__listCols--cardprice"},e.item.price.display),N("span",{className:"shoppingListWrap__listCols--carddiscount"},e.item.discount," % off")))),N(f.a,{span:6},N("div",{className:"cartContainerDiv__cartLeftNav--cartListText"},N(v.a,{type:"primary",shape:"circle",icon:N(P,null),size:"middle",onClick:function(){return t.increment(e.item,a)}}),N(v.a,{type:"dashed",style:{margin:"5px"}},t.state[a+e.item.name]>0?t.state[a+e.item.name]:t.state.initialItems),N(v.a,{type:"primary",shape:"circle",icon:N(j,null),size:"middle",disabled:1==t.state[a+e.item.name],onClick:function(){return t.decrement(e.item,a)}}))),N(f.a,{span:6},N("div",{className:"cartContainerDiv__cartLeftNav--cartListText"},N(v.a,{type:"link",danger:!0,onClick:function(){return t.removeItems(e.item,a)}},N("strong",null," Remove ")))))})))),N("div",{className:"cartContainerDiv__cartRightNav"},N(d.a,{title:"Price Details",className:"cartContainerDiv__cartRightNav--card"},N(m.a,{gutter:16,className:"cartContainerDiv__cartRightNav--row"},N(f.a,{span:16},"Price"),N(f.a,{span:8},this.state.totalPriceDisplay)),N(m.a,{gutter:16,className:"cartContainerDiv__cartRightNav--row"},N(f.a,{span:16},"Discount"),N(f.a,{span:8},this.state.totalDiscountedPrice)),N("hr",null),N(m.a,{gutter:16,className:"cartContainerDiv__cartRightNav--row"},N(f.a,{span:16},"Total"),N(f.a,{span:8},this.state.totalPriceOfItems))))):N("div",null,"Cart is Empty To add items into cart click",N(y.a,{href:"/"},N("a",null," Home")))))}}]),l}(l.Component),x=Object(g.b)((function(t){return{itemsInCart:t.itemsInCart}}),{getItemsinCart:k})(w),L=a("b0oO"),M=a("8lYe"),q=a("5Yp1"),S=o.a.createElement;function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var T=D.a.getItemsinCart,B=function(t){Object(s.a)(l,t);var e,a=(e=l,function(){var t,a=Object(c.a)(e);if(E()){var i=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return Object(r.a)(this,t)});function l(t){return Object(i.a)(this,l),a.call(this,t)}return Object(n.a)(l,[{key:"componentDidMount",value:function(){console.log("Propsssssssssssssssssss",this.props),this.props.getItemsinCart()}},{key:"render",value:function(){return S("div",null,S(L.a,null),S(q.a,null,S(x,this.props)),S(M.a,null))}}]),l}(l.Component);e.default=Object(g.b)((function(t){return{}}),{getItemsinCart:T})(B)},ahkM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return a("YQMk")}])}},[["ahkM",0,1,3,2,4,5]]]);