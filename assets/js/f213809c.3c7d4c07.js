"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1431],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(f,s(s({ref:n},p),{},{components:r})):t.createElement(f,s({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8005:function(e,n,r){r.r(n),r.d(n,{default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={},l={unversionedId:"advance/error-handle",id:"advance/error-handle",isDocsHomePage:!1,title:"Error Handling",description:"Error handling is an indispensable part of service. In normal business development, we can think that the http status code is not in the 2xx series, it can be regarded as an http request error.",source:"@site/docs/advance/error-handle.md",sourceDirName:"advance",slug:"/advance/error-handle",permalink:"/docs/advance/error-handle",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/error-handle.md",version:"current",lastUpdatedAt:1654248485,formattedLastUpdatedAt:"6/3/2022",frontMatter:{},sidebar:"docs",previous:{title:"RPC Implement & Call",permalink:"/docs/advance/rpc-call"},next:{title:"Template Modification",permalink:"/docs/advance/template"}},c=[{value:"Business error response format",id:"business-error-response-format",children:[]},{value:"Login of user api",id:"login-of-user-api",children:[]},{value:"Custom error",id:"custom-error",children:[]}],p={toc:c};function u(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Error handling is an indispensable part of service. In normal business development, we can think that the http status code is not in the ",(0,o.kt)("inlineCode",{parentName:"p"},"2xx")," series, it can be regarded as an http request error.\nIt is accompanied by error messages in response, but these error messages are all returned in plain text. In addition, I will define some business errors in the business, and the common practice is to pass\nThe two fields ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," are used to describe the business processing results, and it is hoped that the response can be made with the json response body."),(0,o.kt)("h2",{id:"business-error-response-format"},"Business error response format"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Business processing is normal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "successful",\n  "data": {\n    ....\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Business processing exception"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 10001,\n  "msg": "something wrong"\n}\n')))),(0,o.kt)("h2",{id:"login-of-user-api"},"Login of user api"),(0,o.kt)("p",null,"Previously, when we handled the login logic when the username did not exist, an error was directly returned. Let's log in and pass a username that does not exist to see the effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST \\\n  http://127.0.0.1:8888/user/login \\\n  -H \'content-type: application/json\' \\\n  -d \'{\n    "username":"1",\n    "password":"123456"\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 400 Bad Request\nContent-Type: text/plain; charset=utf-8\nX-Content-Type-Options: nosniff\nDate: Tue, 09 Feb 2021 06:38:42 GMT\nContent-Length: 19\n\nUsername does not exist\n")),(0,o.kt)("p",null,"Next we will return it in json format"),(0,o.kt)("h2",{id:"custom-error"},"Custom error"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First add a ",(0,o.kt)("inlineCode",{parentName:"p"},"baseerror.go")," file in common and fill in the code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd common\n$ mkdir errorx&&cd errorx\n$ vim baseerror.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-goalng"},'package errorx\n\nconst defaultCode = 1001\n\ntype CodeError struct {\n    Code int    `json:"code"`\n    Msg  string `json:"msg"`\n}\n\ntype CodeErrorResponse struct {\n    Code int    `json:"code"`\n    Msg  string `json:"msg"`\n}\n\nfunc NewCodeError(code int, msg string) error {\n    return &CodeError{Code: code, Msg: msg}\n}\n\nfunc NewDefaultError(msg string) error {\n    return NewCodeError(defaultCode, msg)\n}\n\nfunc (e *CodeError) Error() string {\n    return e.Msg\n}\n\nfunc (e *CodeError) Data() *CodeErrorResponse {\n    return &CodeErrorResponse{\n        Code: e.Code,\n        Msg:  e.Msg,\n    }\n}\n\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Replace errors in login logic with CodeError custom errors"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'if len(strings.TrimSpace(req.Username)) == 0 || len(strings.TrimSpace(req.Password)) == 0 {\n        return nil, errorx.NewDefaultError("Invalid parameter")\n    }\n\n    userInfo, err := l.svcCtx.UserModel.FindOneByNumber(req.Username)\n    switch err {\n    case nil:\n    case model.ErrNotFound:\n        return nil, errorx.NewDefaultError("Username does not exist")\n    default:\n        return nil, err\n    }\n\n    if userInfo.Password != req.Password {\n        return nil, errorx.NewDefaultError("User password is incorrect")\n    }\n\n    now := time.Now().Unix()\n    accessExpire := l.svcCtx.Config.Auth.AccessExpire\n    jwtToken, err := l.getJwtToken(l.svcCtx.Config.Auth.AccessSecret, now, l.svcCtx.Config.Auth.AccessExpire, userInfo.Id)\n    if err != nil {\n        return nil, err\n    }\n\n    return &types.LoginReply{\n        Id:           userInfo.Id,\n        Name:         userInfo.Name,\n        Gender:       userInfo.Gender,\n        AccessToken:  jwtToken,\n        AccessExpire: now + accessExpire,\n        RefreshAfter: now + accessExpire/2,\n    }, nil\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use custom errors"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/user.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    flag.Parse()\n\n    var c config.Config\n    conf.MustLoad(*configFile, &c)\n\n    ctx := svc.NewServiceContext(c)\n    server := rest.MustNewServer(c.RestConf)\n    defer server.Stop()\n\n    handler.RegisterHandlers(server, ctx)\n\n    // Custom error\n    httpx.SetErrorHandler(func(err error) (int, interface{}) {\n        switch e := err.(type) {\n        case *errorx.CodeError:\n            return http.StatusOK, e.Data()\n        default:\n            return http.StatusInternalServerError, nil\n        }\n    })\n\n    fmt.Printf("Starting server at %s:%d...\\n", c.Host, c.Port)\n    server.Start()\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Restart service verification"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -X POST \\\n  http://127.0.0.1:8888/user/login \\\n  -H \'content-type: application/json\' \\\n  -d \'{\n        "username":"1",\n        "password":"123456"\n}\'\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Tue, 09 Feb 2021 06:47:29 GMT\nContent-Length: 40\n\n{"code":1001,"msg":"Username does not exist"}\n')))))}u.isMDXComponent=!0}}]);