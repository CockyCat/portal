"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[3096],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=s(r),d=o,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6324:function(e,t,r){r.r(t),r.d(t,{default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},p={unversionedId:"goctl/zrpc",id:"goctl/zrpc",isDocsHomePage:!1,title:"RPC Commands",description:"Goctl Rpc is an rpc service code generation module under goctl scaffolding, supporting proto template generation and rpc service code generation, through this tool to generate code you only need to focus on business logic writing instead of writing some repetitive code. This allows us to focus on the business, thus speeding up the development efficiency and reducing the error rate of the code.",source:"@site/docs/goctl/zrpc.md",sourceDirName:"goctl",slug:"/goctl/zrpc",permalink:"/docs/goctl/zrpc",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/goctl/zrpc.md",version:"current",lastUpdatedAt:1654248485,formattedLastUpdatedAt:"6/3/2022",frontMatter:{},sidebar:"goctl",previous:{title:"API Commands",permalink:"/docs/goctl/api"},next:{title:"Model Commands",permalink:"/docs/goctl/model"}},s=[{value:"Features",id:"features",children:[]},{value:"Quick start",id:"quick-start",children:[{value:"Way 1: Quickly generate greet services",id:"way-1-quickly-generate-greet-services",children:[]},{value:"Way 2: Generate rpc service by specifying proto",id:"way-2-generate-rpc-service-by-specifying-proto",children:[]}]},{value:"Preparing",id:"preparing",children:[]},{value:"Usage",id:"usage",children:[{value:"rpc service generation usage",id:"rpc-service-generation-usage",children:[]},{value:"What developers need to do",id:"what-developers-need-to-do",children:[]},{value:"Caution",id:"caution",children:[]}]},{value:"proto import",id:"proto-import",children:[{value:"errorimport",id:"errorimport",children:[]},{value:"Correct import",id:"correct-import",children:[]}]}],l={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Goctl Rpc is an rpc service code generation module under ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl")," scaffolding, supporting proto template generation and rpc service code generation, through this tool to generate code you only need to focus on business logic writing instead of writing some repetitive code. This allows us to focus on the business, thus speeding up the development efficiency and reducing the error rate of the code."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easy to use"),(0,a.kt)("li",{parentName:"ul"},"Fast and efficient development"),(0,a.kt)("li",{parentName:"ul"},"Low error rate"),(0,a.kt)("li",{parentName:"ul"},"Close to protoc")),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("h3",{id:"way-1-quickly-generate-greet-services"},"Way 1: Quickly generate greet services"),(0,a.kt)("p",null,"Generated by the command ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl rpc new ${servieName}")),(0,a.kt)("p",null,"If you generate the greet rpc service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"$ goctl rpc new greet\n")),(0,a.kt)("p",null,"The code structure after execution is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},".\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet.yaml\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 greet\n\u2502\xa0\xa0 \u251c\u2500\u2500 greet.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 greet.pb.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet_grpc.pb.go\n\u251c\u2500\u2500 greet.go\n\u251c\u2500\u2500 greet.proto\n\u2514\u2500\u2500 internal\n    \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n    \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2514\u2500\u2500 pinglogic.go\n    \u251c\u2500\u2500 server\n    \u2502\xa0\xa0 \u2514\u2500\u2500 greetserver.go\n    \u2514\u2500\u2500 svc\n        \u2514\u2500\u2500 servicecontext.go\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"See ",(0,a.kt)("a",{parentName:"p",href:"../design/rpc-dir"},"rpc directory")," for details of the new version of the directory."))),(0,a.kt)("h3",{id:"way-2-generate-rpc-service-by-specifying-proto"},"Way 2: Generate rpc service by specifying proto"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u751f\u6210proto\u6a21\u677f"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"$ goctl rpc template -o=user.proto\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'syntax = "proto3";\n\npackage user;\noption go_package=". /user";\n\nmessage Request {\n  string ping = 1;\n}\n\nmessage Response {\n  string pong = 1;\n}\n\nservice User {\n  rpc Ping(Request) returns(Response);\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Generate rpc service code"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.\n")))),(0,a.kt)("h2",{id:"preparing"},"Preparing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installed the go environment"),(0,a.kt)("li",{parentName:"ul"},"protoc & protoc-gen-go are installed, and environment variables have been set"),(0,a.kt)("li",{parentName:"ul"},"For more questions, see ",(0,a.kt)("a",{href:"#Notes"},"Notes"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"rpc-service-generation-usage"},"rpc service generation usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"$ goctl rpc protoc -h\nNAME:\n   goctl rpc protoc - generate grpc code\n\nUSAGE:\n   example: goctl rpc protoc xx.proto --go_out=./pb --go-grpc_out=./pb --zrpc_out=.\n\nDESCRIPTION:\n   for details, see https://go-zero.dev/cn/goctl-rpc.html\n\nOPTIONS:\n   --zrpc_out value  the zrpc output directory\n   --style value     the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --home value      the goctl home path of the template\n   --remote value    the remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n                     The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure\n   --branch value    the branch of the remote repo, it does work with --remote\n   --verbose, -v     enable log output\n")),(0,a.kt)("p",null,"You can understand that zrpc code generation is done with ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl rpc $protoc_command --zrpc_out=${output}")," templates, as in the original command to generate grpc code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoc user.proto --go_out=. --go-grpc_out=.\n")),(0,a.kt)("p",null,"then the zrpc code command would be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"--go_out and --go-grpc_out must generate the same final directory"),(0,a.kt)("li",{parentName:"ol"},"The final directories generated by --go_out & --go-grpc_out and --zrpc_out must not be the same directory, otherwise pb.go and _grpc.pb.go are at the same level as the main function, which is not allowed.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The directories produced by --go_out and --go-grpc_out are affected by the go_package values in the --go_opt and --grpc-go_opt and proto source files. To understand the generation logic here, it is recommended to read the\nOfficial documentation: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/reference/go-generated"},"Go Generated Code"))))))),(0,a.kt)("h3",{id:"what-developers-need-to-do"},"What developers need to do"),(0,a.kt)("p",null,"Focus on business code writing, leave the repetitive, non-business related work to goctl, after generating the rpc service code, developers only need to modify"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"write configuration files in the service (etc/xx.json, internal/config/config.go)"),(0,a.kt)("li",{parentName:"ul"},"Business logic writing in the service (internal/logic/xxlogic.go)"),(0,a.kt)("li",{parentName:"ul"},"Writing of resource contexts in services (internal/svc/servicecontext.go)")),(0,a.kt)("h3",{id:"caution"},"Caution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"proto does not support simultaneous generation of multiple files at the moment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"proto does not support external dependency package introduction, message does not support inline")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Currently main file, shared file, handler file will be forced to overwrite, and developers need to write manually will not overwrite the generation, this kind of code in the header are"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"    // Code generated by goctl. do not EDIT!\n    // Source: xxx.proto\n")),(0,a.kt)("p",{parentName:"li"},"Please be careful not to write business code in it; and do not write it inside business code."))),(0,a.kt)("h2",{id:"proto-import"},"proto import"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For requestType and returnType in rpc must be defined in main proto file, for message in proto you can import other proto files like protoc.")),(0,a.kt)("p",null,"proto example:"),(0,a.kt)("h3",{id:"errorimport"},"errorimport"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage greet;\n\noption go_package = "./greet";\n\nimport "base/common.proto";\n\nmessage Request {\n  string ping = 1;\n}\n\nmessage Response {\n  string pong = 1;\n}\n\nservice Greet {\n  rpc Ping(base.In) returns(base.Out);// request and return do not support import\n}\n\n')),(0,a.kt)("h3",{id:"correct-import"},"Correct import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage greet;\n\noption go_package = "./greet";\n\nimport "base/common.proto";\n\nmessage Request {\n  base.In in = 1;// support import\n}\n\nmessage Response {\n base.Out out = 2;// support import\n}\n\nservice Greet {\n  rpc Ping(Request) returns(Response);\n}\n')))}u.isMDXComponent=!0}}]);