"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6093],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1247:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},c={unversionedId:"deployment/ci-cd",id:"deployment/ci-cd",isDocsHomePage:!1,title:"CI/CD",description:"\u5728\u8f6f\u4ef6\u5de5\u7a0b\u4e2d\uff0cCI/CD\u6216CICD\u901a\u5e38\u6307\u7684\u662f\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u4ea4\u4ed8\u6216\u6301\u7eed\u90e8\u7f72\u7684\u7ec4\u5408\u5b9e\u8df5\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/deployment/ci-cd.md",sourceDirName:"deployment",slug:"/deployment/ci-cd",permalink:"/cn/docs/deployment/ci-cd",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/deployment/ci-cd.md",version:"current",lastUpdatedAt:1654248485,formattedLastUpdatedAt:"6/3/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u6a21\u677f\u4fee\u6539",permalink:"/cn/docs/advance/template"},next:{title:"\u65e5\u5fd7\u6536\u96c6",permalink:"/cn/docs/deployment/log-collection"}},p=[{value:"CI\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1f",id:"ci\u53ef\u4ee5\u505a\u4ec0\u4e48",children:[]},{value:"gitlab CI",id:"gitlab-ci",children:[]},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u5f00\u542fgitlab CI",id:"\u5f00\u542fgitlab-ci",children:[]}],u={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5728\u8f6f\u4ef6\u5de5\u7a0b\u4e2d\uff0cCI/CD\u6216CICD\u901a\u5e38\u6307\u7684\u662f\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u4ea4\u4ed8\u6216\u6301\u7eed\u90e8\u7f72\u7684\u7ec4\u5408\u5b9e\u8df5\u3002\n\u2014\u2014\u5f15\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/CI/CD"},"\u7ef4\u57fa\u767e\u79d1"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cd-cd",src:n(3461).Z})),(0,i.kt)("h2",{id:"ci\u53ef\u4ee5\u505a\u4ec0\u4e48"},"CI\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u73b0\u4ee3\u5e94\u7528\u5f00\u53d1\u7684\u76ee\u6807\u662f\u8ba9\u591a\u4f4d\u5f00\u53d1\u4eba\u5458\u540c\u65f6\u5904\u7406\u540c\u4e00\u5e94\u7528\u7684\u4e0d\u540c\u529f\u80fd\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f01\u4e1a\u5b89\u6392\u5728\u4e00\u5929\u5185\u5c06\u6240\u6709\u5206\u652f\u6e90\u4ee3\u7801\u5408\u5e76\u5728\u4e00\u8d77\uff08\u79f0\u4e3a\u201c\u5408\u5e76\u65e5\u201d\uff09\uff0c\u6700\u7ec8\u53ef\u80fd\u9020\u6210\u5de5\u4f5c\u7e41\u7410\u3001\u8017\u65f6\uff0c\u800c\u4e14\u9700\u8981\u624b\u52a8\u5b8c\u6210\u3002\u8fd9\u662f\u56e0\u4e3a\u5f53\u4e00\u4f4d\u72ec\u7acb\u5de5\u4f5c\u7684\u5f00\u53d1\u4eba\u5458\u5bf9\u5e94\u7528\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u6709\u53ef\u80fd\u4f1a\u4e0e\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u540c\u65f6\u8fdb\u884c\u7684\u66f4\u6539\u53d1\u751f\u51b2\u7a81\u3002\u5982\u679c\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u90fd\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u672c\u5730\u96c6\u6210\u5f00\u53d1\u73af\u5883\uff08IDE\uff09\uff0c\u800c\u4e0d\u662f\u8ba9\u56e2\u961f\u5c31\u4e00\u4e2a\u57fa\u4e8e\u4e91\u7684 IDE \u8fbe\u6210\u4e00\u81f4\uff0c\u90a3\u4e48\u5c31\u4f1a\u8ba9\u95ee\u9898\u66f4\u52a0\u96ea\u4e0a\u52a0\u971c\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6301\u7eed\u96c6\u6210\uff08CI\uff09\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u66f4\u52a0\u9891\u7e41\u5730\uff08\u6709\u65f6\u751a\u81f3\u6bcf\u5929\uff09\u5c06\u4ee3\u7801\u66f4\u6539\u5408\u5e76\u5230\u5171\u4eab\u5206\u652f\u6216\u201c\u4e3b\u5e72\u201d\u4e2d\u3002\u4e00\u65e6\u5f00\u53d1\u4eba\u5458\u5bf9\u5e94\u7528\u6240\u505a\u7684\u66f4\u6539\u88ab\u5408\u5e76\uff0c\u7cfb\u7edf\u5c31\u4f1a\u901a\u8fc7\u81ea\u52a8\u6784\u5efa\u5e94\u7528\u5e76\u8fd0\u884c\u4e0d\u540c\u7ea7\u522b\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\uff08\u901a\u5e38\u662f\u5355\u5143\u6d4b\u8bd5\u548c\u96c6\u6210\u6d4b\u8bd5\uff09\u6765\u9a8c\u8bc1\u8fd9\u4e9b\u66f4\u6539\uff0c\u786e\u4fdd\u8fd9\u4e9b\u66f4\u6539\u6ca1\u6709\u5bf9\u5e94\u7528\u9020\u6210\u7834\u574f\u3002\u8fd9\u610f\u5473\u7740\u6d4b\u8bd5\u5185\u5bb9\u6db5\u76d6\u4e86\u4ece\u7c7b\u548c\u51fd\u6570\u5230\u6784\u6210\u6574\u4e2a\u5e94\u7528\u7684\u4e0d\u540c\u6a21\u5757\u3002\u5982\u679c\u81ea\u52a8\u5316\u6d4b\u8bd5\u53d1\u73b0\u65b0\u4ee3\u7801\u548c\u73b0\u6709\u4ee3\u7801\u4e4b\u95f4\u5b58\u5728\u51b2\u7a81\uff0cCI \u53ef\u4ee5\u66f4\u52a0\u8f7b\u677e\u5730\u5feb\u901f\u4fee\u590d\u8fd9\u4e9b\u9519\u8bef\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2014\u2014\u5f15\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://www.redhat.com/zh/topics/devops/what-is-ci-cd"},"\u300aCI/CD\u662f\u4ec0\u4e48\uff1f\u5982\u4f55\u7406\u89e3\u6301\u7eed\u96c6\u6210\u3001\u6301\u7eed\u4ea4\u4ed8\u548c\u6301\u7eed\u90e8\u7f72\u300b"))),(0,i.kt)("p",null,"\u4ece\u6982\u5ff5\u4e0a\u6765\u770b\uff0cCI/CD\u5305\u542b\u90e8\u7f72\u8fc7\u7a0b\uff0c\u6211\u4eec\u8fd9\u91cc\u5c06\u90e8\u7f72(CD)\u5355\u72ec\u653e\u5728\u4e00\u8282",(0,i.kt)("a",{parentName:"p",href:"service-deployment"},"\u670d\u52a1\u90e8\u7f72"),"\uff0c\n\u672c\u8282\u5c31\u4ee5gitlab\u6765\u505a\u7b80\u5355\u7684CI\uff08Run Unit Test\uff09\u6f14\u793a\u3002"),(0,i.kt)("h2",{id:"gitlab-ci"},"gitlab CI"),(0,i.kt)("p",null,"Gitlab CI/CD\u662fGitlab\u5185\u7f6e\u7684\u8f6f\u4ef6\u5f00\u53d1\u5de5\u5177\uff0c\u63d0\u4f9b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6301\u7eed\u96c6\u6210(CI)"),(0,i.kt)("li",{parentName:"ul"},"\u6301\u7eed\u4ea4\u4ed8(CD)"),(0,i.kt)("li",{parentName:"ul"},"\u6301\u7eed\u90e8\u7f72(CD)")),(0,i.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gitlab\u5b89\u88c5"),(0,i.kt)("li",{parentName:"ul"},"git\u5b89\u88c5"),(0,i.kt)("li",{parentName:"ul"},"gitlab runner\u5b89\u88c5")),(0,i.kt)("h2",{id:"\u5f00\u542fgitlab-ci"},"\u5f00\u542fgitlab CI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e0a\u4f20\u4ee3\u7801"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728gitlab\u65b0\u5efa\u4e00\u4e2a\u4ed3\u5e93",(0,i.kt)("inlineCode",{parentName:"li"},"go-zero-demo")),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u672c\u5730\u4ee3\u7801\u4e0a\u4f20\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"go-zero-demo"),"\u4ed3\u5e93"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yaml"),"\u6587\u4ef6\uff0c\u901a\u8fc7\u6b64\u6587\u4ef6\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2apipeline\uff0c\u5176\u4f1a\u5728\u4ee3\u7801\u4ed3\u5e93\u4e2d\u6709\u5185\u5bb9\u53d8\u66f4\u65f6\u8fd0\u884c\uff0cpipeline\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u6309\u7167\u987a\u5e8f\u8fd0\u884c\uff0c\n\u6bcf\u4e2a\u9636\u6bb5\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5e76\u884c\u8fd0\u884c\u7684job\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0CI\u5185\u5bb9(\u4ec5\u4f9b\u53c2\u8003)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n- analysis\n\nanalysis:\nstage: analysis\nimage: golang\nscript:\n- go version && go env\n- go test -short $(go list ./...) | grep -v "no test"\n')))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5\u4e0aCI\u4e3a\u7b80\u5355\u7684\u6f14\u793a\uff0c\u8be6\u7ec6\u7684gitlab CI\u8bf7\u53c2\u8003gitlab\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u66f4\u4e30\u5bcc\u7684CI\u96c6\u6210\u3002"))),(0,i.kt)("h1",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/CI/CD"},"CI/CD \u7ef4\u57fa\u767e\u79d1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/zh/topics/devops/what-is-ci-cd"},"CI/CD\u662f\u4ec0\u4e48\uff1f\u5982\u4f55\u7406\u89e3\u6301\u7eed\u96c6\u6210\u3001\u6301\u7eed\u4ea4\u4ed8\u548c\u6301\u7eed\u90e8\u7f72")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/"},"Gitlab CI"))))}m.isMDXComponent=!0},3461:function(e,t,n){t.Z=n.p+"assets/images/ci-cd-48038878ac99130ea22cde0b021fb3b7.png"}}]);