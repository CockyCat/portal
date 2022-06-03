"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[9435],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4676:function(e,t,r){r.r(t),r.d(t,{default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},s={unversionedId:"quick-start/micro-service",id:"quick-start/micro-service",isDocsHomePage:!1,title:"Microservices",description:"In the previous article we have shown how to quickly create a single service, next we will show how to quickly create a microservice.",source:"@site/docs/quick-start/micro-service.md",sourceDirName:"quick-start",slug:"/quick-start/micro-service",permalink:"/docs/quick-start/micro-service",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/quick-start/micro-service.md",version:"current",lastUpdatedAt:1654248485,formattedLastUpdatedAt:"6/3/2022",frontMatter:{},sidebar:"docs",previous:{title:"Monolithic Service",permalink:"/docs/quick-start/monolithic-service"},next:{title:"Index",permalink:"/docs/advance/advance"}},l=[{value:"Preface",id:"preface",children:[]},{value:"Scenario Summary",id:"scenario-summary",children:[]},{value:"Demonstrate functional goals",id:"demonstrate-functional-goals",children:[]},{value:"Service Design Analysis",id:"service-design-analysis",children:[]},{value:"Create mall project",id:"create-mall-project",children:[]},{value:"Create user rpc service",id:"create-user-rpc-service",children:[]},{value:"Create order api service",id:"create-order-api-service",children:[]},{value:"Start the service and verify",id:"start-the-service-and-verify",children:[]}],p={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous article we have shown how to quickly create a single service, next we will show how to quickly create a microservice.\nIn this section, the api part is actually the same logic as the monolithic service, except that there is no communication between services in the monolithic service, and the api service in the microservice will have more configuration for rpc calls."),(0,o.kt)("h2",{id:"preface"},"Preface"),(0,o.kt)("p",null,"This section will be a simple demonstration of an ",(0,o.kt)("inlineCode",{parentName:"p"},"order service")," to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"user service"),", the demo code only to pass the idea, some of the links will not be enumerated."),(0,o.kt)("h2",{id:"scenario-summary"},"Scenario Summary"),(0,o.kt)("p",null,"Suppose we are developing a mall project, and the developer Xiaoming is responsible for the development of the user module (user) and the order module (order), let's split these two modules into two microservices \u2460"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u2460: The splitting of microservices is also a learning curve, so we won't discuss the details of how to split microservices here."))),(0,o.kt)("h2",{id:"demonstrate-functional-goals"},"Demonstrate functional goals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Order service(order) provides a query interface"),(0,o.kt)("li",{parentName:"ul"},"user service (user) provides a method for the order service to obtain user information")),(0,o.kt)("h2",{id:"service-design-analysis"},"Service Design Analysis"),(0,o.kt)("p",null,"According to the scenario synopsis we can learn that the order is directly user-oriented, accessing data through the http protocol, and the order internal need to obtain some basic data about the user, since our service is designed using the microservices architecture.\nThen the two services (user,order) must exchange data, the data exchange between services that is, the communication between services, to here, the use of a reasonable communication protocol is also a developer needs to\nHere we choose rpc to realize the communication between services, and I believe I have already made a better scenario of \"What is the role of rpc service? I believe I have already described a good scenario here.\nOf course, there is much more to a service than just design analysis before development, so we won't go into detail here. From the above, we know that we need a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"user rpc"),(0,o.kt)("li",{parentName:"ul"},"order api")),(0,o.kt)("p",null,"two services to initially implement this little demo."),(0,o.kt)("h2",{id:"create-mall-project"},"Create mall project"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you run the monolithic example, which is also called ",(0,o.kt)("inlineCode",{parentName:"p"},"go-zero-demo"),", you may need to change the parent directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir go-zero-demo\n$ cd go-zero-demo\n$ go mod init go-zero-demo\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," operation to change the directory, all operations are performed in the `",(0,o.kt)("inlineCode",{parentName:"p"},"go-zero-demo")," directory"))),(0,o.kt)("h2",{id:"create-user-rpc-service"},"Create user rpc service"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create the user rpc service"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir -p mall/user/rpc\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"user.proto")," file, add ",(0,o.kt)("inlineCode",{parentName:"p"},"getUser")," method"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim mall/user/rpc/user.proto\n")),(0,o.kt)("p",{parentName:"li"},"Add the following code."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage user;\n  \n// protoc-gen-go version is greater than 1.4.0, proto file needs to add go_package, otherwise it can\'t be generated\noption go_package = "./user";\n\nmessage IdRequest {\n    string id = 1;\n}\n  \nmessage UserResponse {\n    // user id\n    string id = 1;\n    // user name\n    string name = 2;\n    // user gender\n    string gender = 3;\n}\n  \nservice User {\n    rpc getUser(IdRequest) returns(UserResponse);\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generate the code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd mall/user/rpc\n$ goctl rpc protoc user.proto --go_out=./types --go-grpc_out=./types --zrpc_out=.\nDone.\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"grpc directive details refer to ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/go/quickstart/"},"https://grpc.io/docs/languages/go/quickstart/")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Padding business logic"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/logic/getuserlogic.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package logic\n\nimport (\n    "context"\n\n    "go-zero-demo/mall/user/rpc/internal/svc"\n    "go-zero-demo/mall/user/rpc/types/user"\n\n    "github.com/zeromicro/go-zero/core/logx"\n)\n\ntype GetUserLogic struct {\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n    logx.Logger\n}\n\nfunc NewGetUserLogic(ctx context.Context, svcCtx *svc.ServiceContext) *GetUserLogic {\n    return &GetUserLogic{\n        ctx:    ctx,\n        svcCtx: svcCtx,\n        Logger: logx.WithContext(ctx),\n    }\n}\n\nfunc (l *GetUserLogic) GetUser(in *user.IdRequest) (*user.UserResponse, error) {\n    return &user.UserResponse{\n            Id:   "1",\n            Name: "test",\n    }, nil\n}\n')))),(0,o.kt)("h2",{id:"create-order-api-service"},"Create order api service"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"order api")," service"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# in dir go-zero-demo/mall\n$ mkdir -p order/api && cd order/api\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add api file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim order.api\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type(\n    OrderReq {\n        Id string `path:"id"`\n    }\n  \n    OrderReply {\n        Id   string `json:"id"`\n        Name string `json:"name"`\n    }\n)\n\nservice order {\n    @handler getOrder\n    get /api/order/get/:id (OrderReq) returns (OrderReply)\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generate the order service"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api go -api order.api -dir .\nDone.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add user rpc configuration"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/config/config.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package config\n\nimport (\n    "github.com/zeromicro/go-zero/zrpc"\n    "github.com/zeromicro/go-zero/rest"\n)\n\ntype Config struct {\n    rest.RestConf\n    UserRpc zrpc.RpcClientConf\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add yaml configuration"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim etc/order.yaml\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: order\nHost: 0.0.0.0\nPort: 8888\nUserRpc:\n  Etcd:\n    Hosts:\n    - 127.0.0.1:2379\n    Key: user.rpc\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"refine the service dependencies"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/svc/servicecontext.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package svc\n\nimport (\n    "go-zero-demo/mall/order/api/internal/config"\n    "go-zero-demo/mall/user/rpc/user"\n\n    "github.com/zeromicro/go-zero/zrpc"\n)\n\ntype ServiceContext struct {\n    Config  config.Config\n    UserRpc user.User\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        Config:  c,\n        UserRpc: user.NewUser(zrpc.MustNewClient(c.UserRpc)),\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adding order demo logic"),(0,o.kt)("p",{parentName:"li"},"Add business logic to ",(0,o.kt)("inlineCode",{parentName:"p"},"getorderlogic")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/logic/getorderlogic.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package logic\n\nimport (\n    "context"\n    "errors"\n\n    "go-zero-demo/mall/order/api/internal/svc"\n    "go-zero-demo/mall/order/api/internal/types"\n    "go-zero-demo/mall/user/rpc/types/user"\n\n    "github.com/zeromicro/go-zero/core/logx"\n)\n\ntype GetOrderLogic struct {\n    logx.Logger\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n}\n\nfunc NewGetOrderLogic(ctx context.Context, svcCtx *svc.ServiceContext) GetOrderLogic {\n    return GetOrderLogic{\n        Logger: logx.WithContext(ctx),\n        ctx:    ctx,\n        svcCtx: svcCtx,\n    }\n}\n\nfunc (l *GetOrderLogic) GetOrder(req types.OrderReq) (*types.OrderReply, error) {\n    user, err := l.svcCtx.UserRpc.GetUser(l.ctx, &user.IdRequest{\n        Id: "1",\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    if user.Name != "test" {\n        return nil, errors.New("\u7528\u6237\u4e0d\u5b58\u5728")\n    }\n\n    return &types.OrderReply{\n        Id:   req.Id,\n        Name: "test order",\n    }, nil\n}\n')))),(0,o.kt)("h2",{id:"start-the-service-and-verify"},"Start the service and verify"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"start etcd"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ etcd\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"download dependencies"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# in dir go-zero-demo\n$ go mod tidy\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"start user rpc"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# in dir mall/user/rpc\n$ go run user.go -f etc/user.yaml\nStarting rpc server at 127.0.0.1:8080...\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"start order api"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# in dir mall/order/api\n$ go run order.go -f etc/order.yaml\nStarting server at 0.0.0.0:8888...\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Accessing the order api"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X GET http://localhost:8888/api/order/get/1\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 07 Feb 2021 03:45:05 GMT\nContent-Length: 30\n\n{"id": "1", "name": "test order"}\n')))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The api syntax mentioned in the demo, rpc generation, goctl, goctl environment, etc. how to use and install, the quick start does not provide a detailed overview, we will have a detailed description of the subsequent documentation, you can also click the following ","[guess what you want to see]"," quick jump to see the corresponding documentation."))),(0,o.kt)("h1",{id:"source-code"},"Source Code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero-demo/tree/master/mall"},"mall source code")))}d.isMDXComponent=!0}}]);