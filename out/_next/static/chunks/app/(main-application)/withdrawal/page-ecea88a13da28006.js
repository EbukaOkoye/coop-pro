(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4002],{95318:function(e,t,n){Promise.resolve().then(n.bind(n,92532))},70279:function(e){var t;t=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=3)}([function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";e.exports=n(8)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=r&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),l=n(2),a=i(l),s=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.values=Array(e.length).fill("").map(function(t,n){return e.initialValue.toString()[n]||""}),n.elements=[],n.currentIndex=0,n.onPaste=n.onPaste.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.focus&&this.props.length&&this.elements[0].focus()}},{key:"clear",value:function(){this.elements.forEach(function(e){return e.clear()}),this.values=this.values.map(function(){}),this.elements[0].focus()}},{key:"focus",value:function(){this.props.length&&this.elements[0].focus()}},{key:"onItemChange",value:function(e,t,n){var r=this.props,o=r.length,l=r.onComplete,a=r.onChange,s=n;this.values[n]=e,1===e.length&&n<o-1&&(s+=1,this.elements[s].focus());var i=this.values.join("");if(t||a(i,s),i.length===o){if(t&&n<o-1)return;l(i,s)}}},{key:"onBackspace",value:function(e){e>0&&this.elements[e-1].focus()}},{key:"onPaste",value:function(e){var t=this.props.length;e.length===t&&this.elements.forEach(function(t,n){return t.update(e[n],!0)})}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{style:this.props.style,className:"pincode-input-container"},this.values.map(function(t,n){return a.default.createElement(s.default,{initialValue:t,ref:function(t){return e.elements[n]=t},key:n,disabled:e.props.disabled,onBackspace:function(){return e.onBackspace(n)},secret:e.props.secret||!1,onChange:function(t,r){return e.onItemChange(t,r,n)},type:e.props.type,inputMode:e.props.inputMode,validate:e.props.validate,inputStyle:e.props.inputStyle,inputFocusStyle:e.props.inputFocusStyle,autoSelect:e.props.autoSelect,onPaste:0===n?e.onPaste:null,regexCriteria:e.props.regexCriteria,ariaLabel:e.props.ariaLabel,placeholder:e.props.placeholder,secretDelay:e.props.secretDelay})}))}}]),t}(l.Component);u.propTypes={initialValue:o.default.oneOfType([o.default.string,o.default.number]),length:o.default.number.isRequired,type:o.default.string,onComplete:o.default.func,validate:o.default.func,secret:o.default.bool,disabled:o.default.bool,focus:o.default.bool,onChange:o.default.func,inputMode:o.default.string,style:o.default.object,inputStyle:o.default.object,inputFocusStyle:o.default.object,autoSelect:o.default.bool,regexCriteria:o.default.any,ariaLabel:o.default.string,placeholder:o.default.string},u.defaultProps={initialValue:"",type:"numeric",secret:!1,validate:null,focus:!1,disabled:!1,onChange:function(){},onComplete:function(){},inputMode:void 0,style:{},inputStyle:{},inputFocusStyle:{},autoSelect:!0,regexCriteria:/^[a-zA-Z0-9]+$/,ariaLabel:"",placeholder:""},t.default=u},function(e,t,n){"use strict";var r=n(1),o=n(6),l=n(7);e.exports=function(){function e(e,t,n,r,a,s){s!==l&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,l,a,s){if(!e){var i;if(void 0===t)i=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,l,a,s],c=0;(i=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(9),o=n(10),l=n(1),a="function"==typeof Symbol&&Symbol.for,s=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.call"):60104,u=a?Symbol.for("react.return"):60105,c=a?Symbol.for("react.portal"):60106,d=a?Symbol.for("react.fragment"):60107,f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function m(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}function y(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}function x(){}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&p("85"),this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var b=y.prototype=new x;function g(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}b.constructor=y,r(b,m.prototype),b.isPureReactComponent=!0;var v=g.prototype=new x;v.constructor=g,r(v,m.prototype),v.unstable_isAsyncReactComponent=!0,v.render=function(){return this.props.children};var j={current:null},_=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,o={},l=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(l=""+t.key),t)_.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:j.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var k=/\/+/g,C=[];function O(e,t,n,r){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case s:case i:case u:case c:l=!0}}if(l)return n(r,e,""===t?"."+A(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var d=t+A(o=e[a],a);l+=T(o,d,n,r)}else if("function"==typeof(d=null==e?null:"function"==typeof(d=f&&e[f]||e["@@iterator"])?d:null))for(e=d.call(e),a=0;!(o=e.next()).done;)l+=T(o=o.value,d=t+A(o,a++),n,r);else"object"===o&&p("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return l}function A(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function E(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var r=e.result,o=e.keyPrefix;Array.isArray(e=e.func.call(e.context,t,e.count++))?M(e,r,n,l.thatReturnsArgument):null!=e&&(N(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+n,e={$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function M(e,t,n,r,o){var l="";null!=n&&(l=(""+n).replace(k,"$&/")+"/"),t=O(t,l,r,o),null==e||T(e,"",R,t),P(t)}var I={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=O(null,null,t,n),null==e||T(e,"",E,t),P(t)},count:function(e){return null==e?0:T(e,"",l.thatReturnsNull,null)},toArray:function(e){var t=[];return M(e,t,null,l.thatReturnsArgument),t},only:function(e){return N(e)||p("143"),e}},Component:m,PureComponent:y,unstable_AsyncComponent:g,Fragment:d,createElement:S,cloneElement:function(e,t,n){var o=r({},e.props),l=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=j.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)_.call(t,c)&&!w.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:s,type:e.type,key:l,ref:a,props:o,_owner:i}},createFactory:function(e){var t=S.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:j,assign:r}},D=Object.freeze({default:I}),F=D&&I||D;e.exports=F.default?F.default:F},function(e,t,n){"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?function(e,t){for(var n,a,s=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var u in n=Object(arguments[i]))o.call(n,u)&&(s[u]=n[u]);if(r){a=r(n);for(var c=0;c<a.length;c++)l.call(n,a[c])&&(s[a[c]]=n[a[c]])}}return s}:Object.assign},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(0)),l=n(2),a=s(l);function s(e){return e&&e.__esModule?e:{default:e}}var i={padding:0,margin:"0 2px",textAlign:"center",border:"1px solid",background:"transparent",width:"50px",height:"50px"},u={outline:"none",boxShadow:"none"},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:n.validate(e.initialValue),showSecret:n.props.secret,focus:!1},n.onChange=n.onChange.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.onFocus=n.onFocus.bind(n),n.onBlur=n.onBlur.bind(n),n.onPaste=n.onPaste.bind(n),n.secretTimeout=null,n.inputTimeout=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.secretTimeout),clearTimeout(this.inputTimeout)}},{key:"onKeyDown",value:function(e){8!==e.keyCode||this.state.value&&this.state.value.length||this.props.onBackspace()}},{key:"clear",value:function(){this.setState({value:""})}},{key:"setSecretDelayed",value:function(e){var t=this;this.setState({showSecret:!1}),this.secretTimeout=setTimeout(function(){t.setState({showSecret:!!e})},this.props.secretDelay)}},{key:"update",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.validate(e);(this.state.value!==r||n)&&r.length<2&&(this.setState({value:r}),this.inputTimeout=setTimeout(function(){t.props.onChange(r,n)},0))}},{key:"onChange",value:function(e){this.update(e.target.value)}},{key:"focus",value:function(){this.input.focus()}},{key:"onFocus",value:function(e){this.props.autoSelect&&e.target.select(),this.setState({focus:!0})}},{key:"onBlur",value:function(){this.setState({focus:!1})}},{key:"onPaste",value:function(e){if(this.props.onPaste){var t=e.clipboardData.getData("text");this.props.onPaste(t)}}},{key:"validate",value:function(e){if(this.props.secretDelay&&this.setSecretDelayed(e),this.props.validate)return this.props.validate(e);if("numeric"===this.props.type){var t=e.charCodeAt(0);return t>=48&&t<=57?e:""}return this.props.regexCriteria.test(e)?e.toUpperCase():""}},{key:"render",value:function(){var e=this,t=this.state,n=t.focus,r=t.value,o=this.props,l=o.type,s=o.inputMode,c=o.inputStyle,d=o.inputFocusStyle;return a.default.createElement("input",{disabled:this.props.disabled?"disabled":void 0,className:"pincode-input-text",onChange:this.onChange,onKeyDown:this.onKeyDown,placeholder:this.props.placeholder?this.props.placeholder:r,"aria-label":this.props.ariaLabel?this.props.ariaLabel:r,maxLength:"1",autoComplete:"off",type:this.state.showSecret?"password":"numeric"===l?"tel":l||"text",inputMode:s||"text",pattern:"numeric"===this.props.type?"[0-9]*":"^[a-zA-Z0-9]+$",ref:function(t){return e.input=t},onFocus:this.onFocus,onBlur:this.onBlur,onPaste:this.onPaste,style:Object.assign({},i,c,n?Object.assign({},u,d):{}),value:r})}}]),t}(l.Component);c.propTypes={initialValue:o.default.string,onChange:o.default.func.isRequired,onBackspace:o.default.func.isRequired,onPaste:o.default.func,secret:o.default.bool,secretDelay:o.default.number,disabled:o.default.bool,type:o.default.string,inputMode:o.default.string,validate:o.default.func,inputStyle:o.default.object.isRequired,inputFocusStyle:o.default.object.isRequired,autoSelect:o.default.bool,regexCriteria:o.default.any,ariaLabel:o.default.string,placeholder:o.default.string},c.defaultProps={secret:!1,type:"numeric",inputMode:void 0,disabled:!1,validate:void 0,autoSelect:!1,onPaste:void 0,regexCriteria:/^[a-zA-Z0-9]+$/,ariaLabel:"",placeholder:""},t.default=c}])},e.exports=t()},92532:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(57437),o=n(2265),l=n(56062),a=n(66648),s=n(9731),i=n(87108),u=n(88064),c=function(e){let{placeholder:t,customStyle:n,isShowLabel:o,labelText:l,onChange:a,className:s,name:i,value:u,errors:c,defaultValue:d,labelClass:f,...p}=e;return(0,r.jsxs)("div",{className:"w-full",children:[o&&(0,r.jsx)("label",{className:"font-monty font-normal leading-4 text-grey_82 mb-2 ".concat(f),children:l}),(0,r.jsx)("textarea",{onChange:a,className:"resize-none relative w-full rounded-[0.5625rem] ".concat(s),placeholder:t,name:i,defaultValue:d,style:{...n},...p}),null==c?void 0:c.map((e,t)=>(0,r.jsx)("small",{className:"text-red-600 mt-2",children:e},t))]})},d=n(41942),f=n(11554),p=function(e){let{next:t}=e;return(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsxs)("div",{className:"lg:w-[45.5625rem] mx-auto bg-white p-3",children:[(0,r.jsx)("div",{className:"flex justify-center mt-8 w-full p-2",children:(0,r.jsx)("div",{className:"bg-white w-full p-4 rounded-tl-[0.625rem] rounded-tr-[0.625rem] shadow-sm",children:(0,r.jsx)("h1",{className:"font-monty font-semibold text-lg leading-5 text-btn_blue underline underline-offset-8",children:"Withdrawal"})})}),(0,r.jsxs)("div",{className:"flex items-center justify-between mt-3 p-3",children:[(0,r.jsx)("h5",{className:"",children:"Enter beneficiary details (2)"}),(0,r.jsx)(a.default,{src:s.d.delete_blue,width:16,height:19.51,alt:""})]}),(0,r.jsxs)("form",{className:"grid gap-3 md:grid-cols-2",children:[(0,r.jsx)("div",{className:"my-3",children:(0,r.jsx)(i.Z,{type:"text",isShowIcon:!0,ImageIcon:(0,r.jsx)(a.default,{src:s.d.hash,style:h,width:14,height:18,alt:""}),isShowLabel:!0,labelText:"Account Number",placeholder:"012 2619 677",customClass:"!rounded-[0.3125rem] h-[3rem] border-[1.5px]",labelClass:"!font-monty !font-normal !text-sm !leading-5 !text-grey_82"})}),(0,r.jsx)("div",{className:"my-3",children:(0,r.jsxs)(u.Z,{isShowLabel:!0,labelText:"Beneficiary type",isShowIcon:!0,placeholder:"Mr",selectClass:"w-[200px]",customClass:"!rounded-[0.3125rem] h-[3rem] border-[1.5px]",labelClass:"!font-monty !font-normal !text-sm !leading-5 !text-grey_82",icon:(0,r.jsx)(a.default,{src:s.d.user,width:16,height:16.94,alt:""}),children:[(0,r.jsx)("option",{children:"New Account"}),(0,r.jsx)("option",{children:"Old Account"})]})}),(0,r.jsxs)("div",{className:"my-3",children:[(0,r.jsx)("p",{className:"text-btn_blue font-monty font-semibold text-sm leading-4",children:"Mushpa Adul"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("input",{type:"checkbox",className:"checked:bg-red-700"}),(0,r.jsx)("p",{className:"font-monty font-normal text-[0.625rem] text-grey_82",children:"Save as a beneficiary"})]})]}),(0,r.jsx)("div",{className:"my-3",children:(0,r.jsxs)(u.Z,{isShowLabel:!0,labelText:"Bank",isShowIcon:!0,placeholder:"United Bank For Africa",customClass:"!rounded-[0.3125rem] h-[3rem] border-[1.5px]",labelClass:"!font-monty !font-normal !text-sm !leading-5 !text-grey_82",selectClass:"w-[200px]",icon:(0,r.jsx)(a.default,{src:s.d.bank_grey,width:16.17,height:15.31,alt:""}),children:[(0,r.jsx)("option",{children:"UBA"}),(0,r.jsx)("option",{children:"Fidelity"})]})}),(0,r.jsx)("div",{className:"my-3",children:(0,r.jsx)(i.Z,{type:"text",isShowLabel:!0,isShowIcon:!0,ImageIcon:(0,r.jsx)(a.default,{src:s.d.money,style:m,width:14,height:18,alt:""}),labelText:"Amount",customClass:"!rounded-[0.3125rem] h-[3rem] !border-[1.5px] !focus:outline-[1.5px]",labelClass:"!font-monty !font-normal !text-sm !leading-5 !text-grey_82",placeholder:"₦ 10,000.00"})}),(0,r.jsx)("div",{className:"my-3",children:(0,r.jsxs)(u.Z,{isShowLabel:!0,labelText:"Category",isShowIcon:!0,placeholder:"Food",selectClass:"w-[200px]",customClass:"!rounded-[0.3125rem] h-[3rem] border-[1.5px]",labelClass:"!font-monty !font-normal !text-sm !leading-5 !text-grey_82",icon:(0,r.jsx)(a.default,{src:s.d.food,width:20,height:20,alt:""}),children:[(0,r.jsx)("option",{children:"New Account"}),(0,r.jsx)("option",{children:"Old Account"})]})}),(0,r.jsx)("div",{className:"my-3",children:(0,r.jsx)(c,{isShowLabel:!0,labelText:"Narration",placeholder:"Breakfast regular",className:"!rounded-[0.3125rem] h-[5.4375rem] !border-[1.5px] p-2 border-grey_text",labelClass:"!font-monty !font-normal !text-sm !leading-5 !text-grey_82"})}),(0,r.jsxs)("div",{className:"mt-6 md:ml-8 col-span-2 flex flex-col items-center gap-3",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 ",children:[(0,r.jsx)("p",{className:"font-monty font-normal text-sm leading-4 text-grey_82",children:"Add a new transaction"}),(0,r.jsx)(d.ymq,{size:16,color:"#109CF1"})]}),(0,r.jsx)(f.Z,{text:"Continue",onClick:t,className:"bg-btn_blue text-white px-6 py-2 rounded-[0.3125rem] mt-3 md:w-[15.625rem]"})]})]})]})})};let h={position:"absolute",left:"0.5rem",bottom:"0.875rem",color:"#7E87A1",zIndex:"1"},m={position:"absolute",left:"0.5rem",bottom:"1.5rem",color:"#7E87A1",zIndex:"1"};var y=n(53780),x=n(69824),b=n(84307),g=function(){let[e,t]=(0,o.useState)(!1),n=()=>t(!e);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsxs)("div",{className:"md:w-[33.5625rem] mt-12 rounded-[0.3125rem] bg-white shadow-sm p-3",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h4",{className:"font-monty font-bold text-base leading-5",children:"Send Money (1)"}),(0,r.jsx)(a.default,{src:s.d.delete_blue,width:16,height:19.51,alt:""})]}),(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("p",{className:"font-monty font-semibold text-sm leading-4 text-light_black",children:"Source Account (0283006144):"}),(0,r.jsx)("p",{className:"font-monty font-semibold text-sm leading-4 text-light_black",children:"Moses philps"})]}),(0,r.jsxs)("div",{className:"my-4",children:[(0,r.jsx)("p",{className:"font-monty font-semibold text-sm leading-4 text-light_black",children:"Beneficiary (0122619677):"}),(0,r.jsxs)("p",{className:"font-monty font-semibold text-sm leading-4 text-light_black",children:[(0,r.jsx)("span",{className:"text-red_emphasis",children:"Musa Abdul"})," - ALT BANK"]})]}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("p",{className:"font-monty font-semibold text-sm leading-4 text-light_black",children:["Amount:"," "]}),(0,r.jsxs)("p",{className:"font-monty font-semibold text-sm leading-4 text-red_emphasis",children:[" ","₦10,000"]})]})]}),(0,r.jsx)(f.Z,{text:"Continue",onClick:n,className:"bg-btn_blue text-white px-6 py-2 rounded-[0.3125rem] mt-24 md:w-[15.625rem]"})]}),(0,r.jsxs)(y.Dialog,{open:e,handler:n,className:"p-4",children:[(0,r.jsx)(y.DialogHeader,{children:(0,r.jsx)("div",{className:"flex justify-end w-full",children:(0,r.jsx)(x.j7p,{className:"cursor-pointer",onClick:n})})}),(0,r.jsxs)(y.DialogBody,{children:[(0,r.jsx)("h3",{className:"font-monty font-bold text-[1.25rem] mt-5 leading-6 text-btn_blue text-center",children:"Review Pay"}),(0,r.jsxs)("p",{className:"font-monty text-lg leading-5 text-center text-light_black mt-4",children:["Please confirm the transaction details. ",(0,r.jsx)("br",{})," Submitted transactions cannot be recalled."]}),(0,r.jsxs)("form",{className:"p-3 mt-6 lg:w-[75%] mx-auto",children:[(0,r.jsx)("p",{className:"font-monty text-lg leading-5 text-center text-light_black",children:"Enter your pin:"}),(0,r.jsx)("div",{className:"mt-3",children:(0,r.jsx)(b.Z,{length:4})}),(0,r.jsx)(f.Z,{text:"Send",className:"bg-btn_blue mt-6 text-white px-6 py-2 rounded-[0.3125rem] ml-12 md:w-[15.625rem]"})]})]})]})]})},v=function(){let[e,t]=(0,o.useState)(0);return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.default,{}),(0,r.jsx)("div",{className:"",children:((t,n)=>{switch(e){case 0:default:return(0,r.jsx)(p,{next:t});case 1:return(0,r.jsx)(g,{})}})(()=>{t(e+1)},()=>{t(e-1)})})]})}},11554:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(57437);n(2265);var o=n(18554),l=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(o.IDg,{className:"animate-spin text-center mx-auto"})})},a=function(e){let{type:t,className:n,customStyle:o,text:a,onClick:s,isShowIcon:i,ImageIcon:u,disabled:c,isLoading:d}=e;return(0,r.jsxs)("button",{className:"".concat(n),onClick:s,disabled:c,type:t,children:[(0,r.jsx)("span",{children:i&&u}),(0,r.jsx)("span",{children:d?(0,r.jsx)(l,{}):a})]})}},87108:function(e,t,n){"use strict";var r=n(57437);n(2265),t.Z=function(e){let{type:t,placeholder:n,isShowLabel:o,labelText:l,errors:a,isShowIcon:s,ImageIcon:i,defaultValue:u,onBlur:c,onFocus:d,disabled:f,customClass:p,required:h,isShowEndIcon:m,EndImageIcon:y,labelClass:x,onChange:b,value:g,name:v,...j}=e;return(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("div",{className:"mb-3",children:o&&(0,r.jsx)("label",{className:"font-normal text-[1rem] leading-6 text-pitch_black ".concat(x),children:l})}),(0,r.jsxs)("div",{className:"input_and_icon relative w-full",children:[s&&i,(0,r.jsx)("input",{className:"\n                        w-full focus:border focus:border-none focus:outline-none border border-grey_text rounded-[0.5625rem] p-2\n                        font-light text-[0.875rem] leading-[1.3125rem] text-grey_80 ".concat(s?"pl-10":""," ").concat(p),type:t,placeholder:n,defaultValue:u,onBlur:c,onFocus:d,disabled:f,value:g,name:v,autoComplete:"off","aria-autocomplete":"none",onChange:b,...j})]}),null==a?void 0:a.map((e,t)=>(0,r.jsx)("small",{className:"block text-red-600 mt-1",children:e},t))]})}},84307:function(e,t,n){"use strict";var r=n(57437),o=n(70279),l=n.n(o);n(66362),t.Z=e=>{let{onChange:t,onComplete:n,customStyle:o,length:a=6}=e;return(0,r.jsx)(l(),{length:a,initialValue:"",secret:!0,secretDelay:100,onChange:t,type:"custom",inputMode:"number",onComplete:n,autoSelect:!0,style:o,regexCriteria:/^[ A-Za-z0-9_@./#&+-]*$/})}},88064:function(e,t,n){"use strict";var r=n(57437);let o=(0,n(2265).forwardRef)((e,t)=>{let{customStyle:n,isShowLabel:o,labelText:l,placeholder:a,errors:s,children:i,multiple:u,selectClass:c,customClass:d,isShowIcon:f,icon:p,name:h,labelClass:m,onChange:y,...x}=e;return(0,r.jsxs)("div",{className:"",children:[o&&(0,r.jsx)("label",{className:"block mb-4 font-work_sans font-medium text-[1.125rem] leading-[1.8125rem] ".concat(m),children:l}),(0,r.jsxs)("div",{className:"flex items-end gap-2 px-3 py-3 border bg-white rounded-2xl border-grey_text relative ".concat(d),children:[(0,r.jsx)("span",{className:"",children:f&&p}),(0,r.jsx)("select",{className:"w-full my-auto",placeholder:a,style:{...n},multiple:u,onChange:y,ref:t,name:h,...x,children:i})]})]})});o.displayName="CustomSelect",t.Z=o},66362:function(){}},function(e){e.O(0,[6962,5280,6950,6384,7699,5452,8173,900,6062,2971,7023,1744],function(){return e(e.s=95318)}),_N_E=e.O()}]);