(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),o=n.n(i),r=(n(16),n(9)),s=n(5),u=n(6),b=n(7),d=n(11),l=n(10),j=n(2),f=n.n(j),h=n(0),_=function(e){var t=e.options;return Object(h.jsx)("ul",{className:f.a.List,children:t.map((function(e,t){return Object(h.jsxs)("li",{className:f.a.list_item,children:[Object(h.jsxs)("p",{children:[e[0],":"]}),Object(h.jsx)("p",{children:e[1]})]},t)}))})},p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:f.a.button_container,children:t.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{type:"button",onClick:function(){return n(e)},children:e})},t)}))})},k=n(8),O=n.n(k);function v(e){var t=e.children,n=e.title;return Object(h.jsxs)("section",{className:O.a.container,children:[n&&Object(h.jsx)("h2",{children:n}),t]})}function x(){return Object(h.jsx)("div",{children:"There is no feedback"})}var F=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.handleFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e.getStatisticsOptions=function(){return[].concat(Object(r.a)(Object.entries(e.state)),[["total",e.countTotalFeedback()],["positive feedback",e.countPositiveFeedbackPercentage()+"%"]])},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(v,{title:"Please leave Feedback",children:[Object(h.jsx)(p,{options:Object.keys(this.state),onLeaveFeedback:this.handleFeedback}),0===this.countTotalFeedback()||isNaN(this.countPositiveFeedbackPercentage())?Object(h.jsx)(x,{}):Object(h.jsx)(_,{options:this.getStatisticsOptions()})]})}}]),n}(a.a.Component);F.defaultProps={good:0,neutral:0,bad:0};var g=F;o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={Fb_container:"feedback_Fb_container__119XG",button_container:"feedback_button_container__GjdkY",statistics_container:"feedback_statistics_container__3Y5cY",results_container:"feedback_results_container__1IfUq",list_item:"feedback_list_item__34HZd"}},8:function(e,t,n){e.exports={container:"container_container__2BrAB"}}},[[18,1,2]]]);
//# sourceMappingURL=main.cac82071.chunk.js.map