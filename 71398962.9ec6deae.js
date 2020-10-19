/*! For license information please see 71398962.9ec6deae.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),c=(n(191),n(190)),l={id:"api-reference-content-block",title:"ContentBlock"},o={id:"api-reference-content-block",title:"ContentBlock",description:"ContentBlock is an Immutable",source:"@site/../docs/APIReference-ContentBlock.md",permalink:"/docs/api-reference-content-block",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-ContentBlock.md",lastUpdatedBy:"Kevin Chavez",lastUpdatedAt:1595982337,sidebar:"docs",previous:{title:"ContentState",permalink:"/docs/api-reference-content-state"},next:{title:"CharacterMetadata",permalink:"/docs/api-reference-character-metadata"}},i=[{value:"Representing styles and entities",id:"representing-styles-and-entities",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>getKey()</code>",id:"getkey",children:[]},{value:"<code>getType()</code>",id:"gettype",children:[]},{value:"<code>getText()</code>",id:"gettext",children:[]},{value:"<code>getCharacterList()</code>",id:"getcharacterlist",children:[]},{value:"<code>getLength()</code>",id:"getlength",children:[]},{value:"<code>getDepth()</code>",id:"getdepth",children:[]},{value:"<code>getInlineStyleAt()</code>",id:"getinlinestyleat",children:[]},{value:"<code>getEntityAt()</code>",id:"getentityat",children:[]},{value:"<code>getData()</code>",id:"getdata",children:[]},{value:"<code>findStyleRanges()</code>",id:"findstyleranges",children:[]},{value:"<code>findEntityRanges()</code>",id:"findentityranges",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>key</code>",id:"key",children:[]},{value:"<code>text</code>",id:"text",children:[]},{value:"<code>type</code>",id:"type",children:[]},{value:"<code>characterList</code>",id:"characterlist",children:[]},{value:"<code>depth</code>",id:"depth",children:[]},{value:"<code>data</code>",id:"data",children:[]}]}],b={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," is an Immutable\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Record"}),"Record"),"\nthat represents the full state of a single block of editor content, including:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Plain text contents of the block"),Object(c.b)("li",{parentName:"ul"},"Type, e.g. paragraph, header, list item"),Object(c.b)("li",{parentName:"ul"},"Entity, inline style, and depth information")),Object(c.b)("p",null,"A ",Object(c.b)("inlineCode",{parentName:"p"},"ContentState")," object contains an ",Object(c.b)("inlineCode",{parentName:"p"},"OrderedMap")," of these ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects,\nwhich together comprise the full contents of the editor."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects are largely analogous to block-level HTML elements like\nparagraphs and list items. The available types are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"unstyled"),Object(c.b)("li",{parentName:"ul"},"paragraph"),Object(c.b)("li",{parentName:"ul"},"header-one"),Object(c.b)("li",{parentName:"ul"},"header-two"),Object(c.b)("li",{parentName:"ul"},"header-three"),Object(c.b)("li",{parentName:"ul"},"header-four"),Object(c.b)("li",{parentName:"ul"},"header-five"),Object(c.b)("li",{parentName:"ul"},"header-six"),Object(c.b)("li",{parentName:"ul"},"unordered-list-item"),Object(c.b)("li",{parentName:"ul"},"ordered-list-item"),Object(c.b)("li",{parentName:"ul"},"blockquote"),Object(c.b)("li",{parentName:"ul"},"code-block"),Object(c.b)("li",{parentName:"ul"},"atomic")),Object(c.b)("p",null,"New ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects may be created directly using the constructor.\nExpected Record values are detailed below."),Object(c.b)("h3",{id:"representing-styles-and-entities"},"Representing styles and entities"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"characterList")," field is an immutable ",Object(c.b)("inlineCode",{parentName:"p"},"List")," containing a ",Object(c.b)("inlineCode",{parentName:"p"},"CharacterMetadata"),"\nobject for every character in the block. This is how we encode styles and\nentities for a given block."),Object(c.b)("p",null,"By making heavy use of immutability and data persistence for these lists and\n",Object(c.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," objects, edits to the content generally have little impact\non the memory footprint of the editor."),Object(c.b)("p",null,"By encoding inline styles and entities together in this way, a function that\nperforms edits on a ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," can perform slices, concats, and other List\nmethods on a single ",Object(c.b)("inlineCode",{parentName:"p"},"List")," object."),Object(c.b)("p",null,"When creating a new ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," containing ",Object(c.b)("inlineCode",{parentName:"p"},"text")," and without ",Object(c.b)("inlineCode",{parentName:"p"},"characterList"),"\nit then will default to a ",Object(c.b)("inlineCode",{parentName:"p"},"characterList")," with empty ",Object(c.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," for the\nsupplied text."),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Methods")),Object(c.b)("ul",{class:"apiIndex"},Object(c.b)("li",null,Object(c.b)("a",{href:"#getkey"},Object(c.b)("pre",null,"getKey(): string"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#gettype"},Object(c.b)("pre",null,"getType(): DraftBlockType"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#gettext"},Object(c.b)("pre",null,"getText(): string"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getcharacterlist"},Object(c.b)("pre",null,"getCharacterList(): List<CharacterMetadata>"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getlength"},Object(c.b)("pre",null,"getLength(): number"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getdepth"},Object(c.b)("pre",null,"getDepth(): number"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getinlinestyleat"},Object(c.b)("pre",null,"getInlineStyleAt(offset: number): DraftInlineStyle"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getentityat"},Object(c.b)("pre",null,"getEntityAt(offset: number): ?string"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getdata"},Object(c.b)("pre",null,"getData(): Map<any, any>"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#findstyleranges"},Object(c.b)("pre",null,"findStyleRanges(filterFn: Function, callback: Function): void"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#findentityranges"},Object(c.b)("pre",null,"findEntityRanges(filterFn: Function, callback: Function): void")))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Properties")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note"),Object(c.b)("p",{parentName:"blockquote"},"Use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Map"}),"Immutable Map API"),"\nfor the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," constructor or to set properties.")),Object(c.b)("ul",{class:"apiIndex"},Object(c.b)("li",null,Object(c.b)("a",{href:"#key"},Object(c.b)("pre",null,"key: string"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#type"},Object(c.b)("pre",null,"type: DraftBlockType"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#text"},Object(c.b)("pre",null,"text: string"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#characterlist"},Object(c.b)("pre",null,"characterList: List<CharacterMetadata>"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#depth"},Object(c.b)("pre",null,"depth: number"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#data"},Object(c.b)("pre",null,"data: Map<any, any>")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"getkey"},Object(c.b)("inlineCode",{parentName:"h3"},"getKey()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getKey(): string\n")),Object(c.b)("p",null,"Returns the string key for this ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),". Block keys are alphanumeric string. It is recommended to use ",Object(c.b)("inlineCode",{parentName:"p"},"generateRandomKey")," to generate block keys."),Object(c.b)("h3",{id:"gettype"},Object(c.b)("inlineCode",{parentName:"h3"},"getType()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getType(): DraftBlockType\n")),Object(c.b)("p",null,"Returns the type for this ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),". Type values are largely analogous to\nblock-level HTML elements."),Object(c.b)("h3",{id:"gettext"},Object(c.b)("inlineCode",{parentName:"h3"},"getText()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getText(): string\n")),Object(c.b)("p",null,"Returns the full plaintext for this ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),". This value does not contain\nany styling, decoration, or HTML information."),Object(c.b)("h3",{id:"getcharacterlist"},Object(c.b)("inlineCode",{parentName:"h3"},"getCharacterList()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getCharacterList(): List<CharacterMetadata>\n")),Object(c.b)("p",null,"Returns an immutable ",Object(c.b)("inlineCode",{parentName:"p"},"List")," of ",Object(c.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," objects, one for each character in the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),". (See ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-character-metadata"}),"CharacterMetadata")," for details.)"),Object(c.b)("p",null,"This ",Object(c.b)("inlineCode",{parentName:"p"},"List")," contains all styling and entity information for the block."),Object(c.b)("h3",{id:"getlength"},Object(c.b)("inlineCode",{parentName:"h3"},"getLength()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getLength(): number\n")),Object(c.b)("p",null,"Returns the length of the plaintext for the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(c.b)("p",null,"This value uses the standard JavaScript ",Object(c.b)("inlineCode",{parentName:"p"},"length")," property for the string, and is therefore not Unicode-aware -- surrogate pairs will be counted as two characters."),Object(c.b)("h3",{id:"getdepth"},Object(c.b)("inlineCode",{parentName:"h3"},"getDepth()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getDepth(): number\n")),Object(c.b)("p",null,"Returns the depth value for this block, if any. This is currently used only for list items."),Object(c.b)("h3",{id:"getinlinestyleat"},Object(c.b)("inlineCode",{parentName:"h3"},"getInlineStyleAt()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getInlineStyleAt(offset: number): DraftInlineStyle\n")),Object(c.b)("p",null,"Returns the ",Object(c.b)("inlineCode",{parentName:"p"},"DraftInlineStyle")," value (an ",Object(c.b)("inlineCode",{parentName:"p"},"OrderedSet<string>"),") at a given offset within this ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(c.b)("h3",{id:"getentityat"},Object(c.b)("inlineCode",{parentName:"h3"},"getEntityAt()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getEntityAt(offset: number): ?string\n")),Object(c.b)("p",null,"Returns the entity key value (or ",Object(c.b)("inlineCode",{parentName:"p"},"null")," if none) at a given offset within this ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(c.b)("h3",{id:"getdata"},Object(c.b)("inlineCode",{parentName:"h3"},"getData()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getData(): Map<any, any>\n")),Object(c.b)("p",null,"Returns block-level metadata."),Object(c.b)("h3",{id:"findstyleranges"},Object(c.b)("inlineCode",{parentName:"h3"},"findStyleRanges()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"findStyleRanges(\n  filterFn: (value: CharacterMetadata) => boolean,\n  callback: (start: number, end: number) => void\n): void\n")),Object(c.b)("p",null,"Executes a callback for each contiguous range of styles within this ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(c.b)("h3",{id:"findentityranges"},Object(c.b)("inlineCode",{parentName:"h3"},"findEntityRanges()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"findEntityRanges(\n  filterFn: (value: CharacterMetadata) => boolean,\n  callback: (start: number, end: number) => void\n): void\n")),Object(c.b)("p",null,"Executes a callback for each contiguous range of entities within this ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note"),Object(c.b)("p",{parentName:"blockquote"},"Use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Map"}),"Immutable Map API"),"\nfor the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," constructor or to set properties.")),Object(c.b)("h3",{id:"key"},Object(c.b)("inlineCode",{parentName:"h3"},"key")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getKey()"),"."),Object(c.b)("h3",{id:"text"},Object(c.b)("inlineCode",{parentName:"h3"},"text")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getText()"),"."),Object(c.b)("h3",{id:"type"},Object(c.b)("inlineCode",{parentName:"h3"},"type")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getType()"),"."),Object(c.b)("h3",{id:"characterlist"},Object(c.b)("inlineCode",{parentName:"h3"},"characterList")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getCharacterList()"),"."),Object(c.b)("h3",{id:"depth"},Object(c.b)("inlineCode",{parentName:"h3"},"depth")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getDepth()"),"."),Object(c.b)("h3",{id:"data"},Object(c.b)("inlineCode",{parentName:"h3"},"data")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getData()"),"."))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||s[d]||c;return n?a.a.createElement(f,o(o({ref:t},b),{},{components:n})):a.a.createElement(f,o({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,o=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,b=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function v(){}function C(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var N=C.prototype=new v;N.constructor=C,r(N,g.prototype),N.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},l=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var b=Array(i),u=0;u<i;u++)b[u]=arguments[u+2];a.children=b}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:c,type:e,key:l,ref:o,props:a,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,P=[];function T(e,t,n,r){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function B(e,t,n){return null==e?0:function e(t,n,r,a){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var i=!1;if(null===t)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case c:case l:i=!0}}if(i)return r(a,t,""===n?"."+L(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var b=0;b<t.length;b++){var u=n+L(o=t[b],b);i+=e(o,u,r,a)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=j&&t[j]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),b=0;!(o=t.next()).done;)i+=e(o=o.value,u=n+L(o,b++),r,a);else if("object"===o)throw r=""+t,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function _(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,a){var c="";null!=n&&(c=(""+n).replace(E,"$&/")+"/"),B(e,D,t=T(t,c,r,a)),M(t)}var A={current:null};function $(){var e=A.current;if(null===e)throw Error(O(321));return e}var q={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;B(e,_,t=T(null,null,t,n)),M(t)},count:function(e){return B(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw Error(O(143));return e}},t.Component=g,t.Fragment=o,t.Profiler=b,t.PureComponent=C,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(O(267,e));var a=r({},e.props),l=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=k.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(u in t)w.call(t,u)&&!S.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==b?b[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){b=Array(u);for(var p=0;p<u;p++)b[p]=arguments[p+2];a.children=b}return{$$typeof:c,type:e.type,key:l,ref:o,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,o,i=l(e),b=1;b<arguments.length;b++){for(var u in n=Object(arguments[b]))a.call(n,u)&&(i[u]=n[u]);if(r){o=r(n);for(var p=0;p<o.length;p++)c.call(n,o[p])&&(i[o[p]]=n[o[p]])}}return i}}}]);