"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1638],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5985:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},c={unversionedId:"deployment/ci-cd",id:"deployment/ci-cd",isDocsHomePage:!1,title:"CI/CD",description:"In software engineering, CI/CD or CICD generally refers to the combined practices of continuous integration and either continuous delivery or continuous deployment.",source:"@site/docs/deployment/ci-cd.md",sourceDirName:"deployment",slug:"/deployment/ci-cd",permalink:"/docs/deployment/ci-cd",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/deployment/ci-cd.md",version:"current",lastUpdatedAt:1654248485,formattedLastUpdatedAt:"6/3/2022",frontMatter:{},sidebar:"docs",previous:{title:"Template Modification",permalink:"/docs/advance/template"},next:{title:"Log Collection",permalink:"/docs/deployment/log-collection"}},p=[{value:"What can CI do?",id:"what-can-ci-do",children:[]},{value:"Gitlab CI",id:"gitlab-ci",children:[]},{value:"Prepare",id:"prepare",children:[]},{value:"Enable Gitlab CI",id:"enable-gitlab-ci",children:[]}],s={toc:p};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In software engineering, CI/CD or CICD generally refers to the combined practices of continuous integration and either continuous delivery or continuous deployment."),(0,r.kt)("p",{parentName:"blockquote"},"\u2014\u2014",(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/CI/CD"},"Wikipedia"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cd-cd",src:n(2131).Z})),(0,r.kt)("h2",{id:"what-can-ci-do"},"What can CI do?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In modern application development, the goal is to have multiple developers working simultaneously on different features of the same app. However, if an organization is set up to merge all branching source code together on one day (known as \u201cmerge day\u201d), the resulting work can be tedious, manual, and time-intensive. That\u2019s because when a developer working in isolation makes a change to an application, there\u2019s a chance it will conflict with different changes being simultaneously made by other developers. This problem can be further compounded if each developer has customized their own local integrated development environment (IDE), rather than the team agreeing on one cloud-based IDE.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2014\u2014",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/topics/devops/what-is-ci-cd"},"Continuous integration"))),(0,r.kt)("p",null,"From a conceptual point of view, CI/CD includes the deployment process. Here, we will put the deployment (CD) in a separate section ",(0,r.kt)("a",{parentName:"p",href:"service-deployment"},"Service Deployment"),",\nThis section uses gitlab to do a simple CI (Run Unit Test) demonstration."),(0,r.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,r.kt)("p",null,"Gitlab CI/CD is a built-in software development tool of Gitlab, providing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Continuous Integration (CI)"),(0,r.kt)("li",{parentName:"ul"},"Continuous Delivery (CD)"),(0,r.kt)("li",{parentName:"ul"},"Continuous deployment (CD)")),(0,r.kt)("h2",{id:"prepare"},"Prepare"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gitlab installation"),(0,r.kt)("li",{parentName:"ul"},"git installation"),(0,r.kt)("li",{parentName:"ul"},"gitlab runner installation")),(0,r.kt)("h2",{id:"enable-gitlab-ci"},"Enable Gitlab CI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload code"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a new warehouse ",(0,r.kt)("inlineCode",{parentName:"li"},"go-zero-demo")," in gitlab"),(0,r.kt)("li",{parentName:"ul"},"Upload the local code to the ",(0,r.kt)("inlineCode",{parentName:"li"},"go-zero-demo")," warehouse"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yaml")," file in the project root directory. Through this file, a pipeline can be created, which will be run when there is a content change in the code repository. The pipeline is run in sequence by one or more.\nEach stage can contain one or more jobs running in parallel.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add CI content (for reference only)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n- analysis\n\nanalysis:\nstage: analysis\nimage: golang\nscript:\n- go version && go env\n- go test -short $(go list ./...) | grep -v "no test"\n')))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The above CI is a simple demonstration. For detailed gitlab CI, please refer to the official gitlab documentation for richer CI integration."))),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/CI/CD"},"CI/CD Wikipedia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.redhat.com/en/topics/devops/what-is-ci-cd"},"Continuous integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/"},"Gitlab CI"))))}u.isMDXComponent=!0},2131:function(e,t,n){t.Z=n.p+"assets/images/ci-cd-48038878ac99130ea22cde0b021fb3b7.png"}}]);