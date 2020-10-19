/*! For license information please see b5962b3a.3fd46eee.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),a=(n(191),n(190)),i={id:"quickstart-rich-styling",title:"Rich Styling"},c={id:"quickstart-rich-styling",title:"Rich Styling",description:"Now that we have established the basics of the top-level API, we can go a step",source:"@site/../docs/QuickStart-Rich-Styling.md",permalink:"/docs/quickstart-rich-styling",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/QuickStart-Rich-Styling.md",lastUpdatedBy:"Kevin Chavez",lastUpdatedAt:1595982337,sidebar:"docs",previous:{title:"API Basics",permalink:"/docs/quickstart-api-basics"},next:{title:"Entities",permalink:"/docs/advanced-topics-entities"}},l=[{value:"EditorState: Yours to Command",id:"editorstate-yours-to-command",children:[]},{value:"RichUtils and Key Commands",id:"richutils-and-key-commands",children:[]},{value:"Styling Controls in UI",id:"styling-controls-in-ui",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that we have established the basics of the top-level API, we can go a step\nfurther and examine how basic rich styling can be added to a ",Object(a.b)("inlineCode",{parentName:"p"},"Draft")," editor."),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/rich"}),"rich text example"),"\nis also available to follow along."),Object(a.b)("h2",{id:"editorstate-yours-to-command"},"EditorState: Yours to Command"),Object(a.b)("p",null,"The previous article introduced the ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object as a snapshot of the full state of the editor, as provided by the ",Object(a.b)("inlineCode",{parentName:"p"},"Editor")," core via the ",Object(a.b)("inlineCode",{parentName:"p"},"onChange")," prop."),Object(a.b)("p",null,"However, since your top-level React component is responsible for maintaining the state, you also have the freedom to apply changes to that ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object in any way you see fit."),Object(a.b)("p",null,"For inline and block style behavior, for example, the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-rich-utils"}),Object(a.b)("inlineCode",{parentName:"a"},"RichUtils"))," module provides a number of useful functions to help manipulate state."),Object(a.b)("p",null,"Similarly, the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-modifier"}),Object(a.b)("inlineCode",{parentName:"a"},"Modifier"))," module also provides a\nnumber of common operations that allow you to apply edits, including changes\nto text, styles, and more. This module is a suite of edit functions that\ncompose simpler, smaller edit functions to return the desired ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState"),"\nobject."),Object(a.b)("p",null,"For this example, we'll stick with ",Object(a.b)("inlineCode",{parentName:"p"},"RichUtils")," to demonstrate how to apply basic\nrich styling within the top-level component."),Object(a.b)("h2",{id:"richutils-and-key-commands"},"RichUtils and Key Commands"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"RichUtils")," has information about the core key commands available to web editors,\nsuch as Cmd+B (bold), Cmd+I (italic), and so on."),Object(a.b)("p",null,"We can observe and handle key commands via the ",Object(a.b)("inlineCode",{parentName:"p"},"handleKeyCommand")," prop, and\nhook these into ",Object(a.b)("inlineCode",{parentName:"p"},"RichUtils")," to apply or remove the desired style."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {Editor, EditorState, RichUtils} from 'draft-js';\n\nclass MyEditor extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {editorState: EditorState.createEmpty()};\n    this.onChange = editorState => this.setState({editorState});\n    this.handleKeyCommand = this.handleKeyCommand.bind(this);\n  }\n\n  handleKeyCommand(command, editorState) {\n    const newState = RichUtils.handleKeyCommand(editorState, command);\n\n    if (newState) {\n      this.onChange(newState);\n      return 'handled';\n    }\n\n    return 'not-handled';\n  }\n\n  render() {\n    return (\n      <Editor\n        editorState={this.state.editorState}\n        handleKeyCommand={this.handleKeyCommand}\n        onChange={this.onChange}\n      />\n    );\n  }\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"handleKeyCommand")),Object(a.b)("p",{parentName:"blockquote"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"command")," argument supplied to ",Object(a.b)("inlineCode",{parentName:"p"},"handleKeyCommand")," is a string value, the\nname of the command to be executed. This is mapped from a DOM key event. The\n",Object(a.b)("inlineCode",{parentName:"p"},"editorState")," argument represents the latest editor state as it might be\nchanged internally by draft when handling the key. Use this instance of the\neditor state inside ",Object(a.b)("inlineCode",{parentName:"p"},"handleKeyCommand"),". See\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/advanced-topics-key-bindings"}),"Advanced Topics - Key Binding")," for more\non this, as well as details on why the function returns ",Object(a.b)("inlineCode",{parentName:"p"},"handled")," or ",Object(a.b)("inlineCode",{parentName:"p"},"not-handled"),".")),Object(a.b)("h2",{id:"styling-controls-in-ui"},"Styling Controls in UI"),Object(a.b)("p",null,"Within your React component, you can add buttons or other controls to allow\nthe user to modify styles within the editor. In the example above, we are using\nknown key commands, but we can add more complex UI to provide these rich\nfeatures."),Object(a.b)("p",null,'Here\'s a super-basic example with a "Bold" button to toggle the ',Object(a.b)("inlineCode",{parentName:"p"},"BOLD")," style."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class MyEditor extends React.Component {\n  // ...\n\n  _onBoldClick() {\n    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={this._onBoldClick.bind(this)}>Bold</button>\n        <Editor\n          editorState={this.state.editorState}\n          handleKeyCommand={this.handleKeyCommand}\n          onChange={this.onChange}\n        />\n      </div>\n    );\n  }\n}\n")))}s.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||v}function g(){}function C(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var w=C.prototype=new g;w.constructor=C,r(w,j.prototype),w.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:S.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,P=[];function _(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function U(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return r(o,t,""===n?"."+T(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+T(c=t[u],u);l+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(c=t.next()).done;)l+=e(c=c.value,s=n+T(c,u++),r,o);else if("object"===c)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?K(e,r,n,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function K(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),$(e,A,t=_(t,a,r,o)),U(t)}var D={current:null};function q(){var e=D.current;if(null===e)throw Error(y(321));return e}var B={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return K(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,I,t=_(null,null,t,n)),U(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return K(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw Error(y(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=u,t.PureComponent=C,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)k.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}}}]);