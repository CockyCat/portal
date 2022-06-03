"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[996],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2882:function(e,t,r){r.r(t),r.d(t,{default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},u={unversionedId:"community/contribute",id:"community/contribute",isDocsHomePage:!1,title:"Contributing",description:"Summary",source:"@site/docs/community/contribute.md",sourceDirName:"community",slug:"/community/contribute",permalink:"/docs/community/contribute",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/community/contribute.md",version:"current",lastUpdatedAt:1654248485,formattedLastUpdatedAt:"6/3/2022",frontMatter:{},sidebar:"community",previous:{title:"About Us",permalink:"/docs/community/about-us"},next:{title:"Contributor",permalink:"/docs/community/contributor"}},l=[{value:"Summary",id:"summary",children:[]},{value:"Contribution form",id:"contribution-form",children:[]},{value:"Contribution notes",id:"contribution-notes",children:[]},{value:"Pull Requests\uff08PRs\uff09",id:"pull-requestsprs",children:[]},{value:"Issues",id:"issues",children:[{value:"How to create a new issue",id:"how-to-create-a-new-issue",children:[]}]},{value:"Reference",id:"reference",children:[]}],c={toc:l};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("img",{src:"../resource/go-zero-logo.png",alt:"go-zero",width:"100px",height:"100px",align:"right"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},"go-zero")," is an open-source project based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/LICENSE"},"MIT License"),". If you find bugs, have questions, or want to introduce new features, your contributions to the project are encouraged! We welcome your active participation and will respond to various questions, issues, and PRs as soon as possible."),(0,i.kt)("h2",{id:"contribution-form"},"Contribution form"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero/pulls"},"Pull Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero/issues"},"Issue"))),(0,i.kt)("h2",{id:"contribution-notes"},"Contribution notes"),(0,i.kt)("p",null,"The code in go-zero's Pull request needs to meet certain specifications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For naming conventions, please read the ",(0,i.kt)("a",{parentName:"li",href:"../develop/naming-spec"},"naming conventions doc"),"."),(0,i.kt)("li",{parentName:"ul"},"Code annotations should be in English where possible"),(0,i.kt)("li",{parentName:"ul"},"Pull Requests should describe the functional needs clearly and concisely"),(0,i.kt)("li",{parentName:"ul"},"Unit test coverage should be 80% at a minimum")),(0,i.kt)("h2",{id:"pull-requestsprs"},"Pull Requests\uff08PRs\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},"go-zero")," project, and fork it to a new GitHub repository under your account")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go back to your GitHub homepage and find the ",(0,i.kt)("inlineCode",{parentName:"p"},"xx/go-zero")," project, where xx is your username. (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"anqiansong/go-zero"),")"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"fork",src:r(7007).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clone the code to your local machine"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"clone",src:r(8270).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Develop your changes locally and then push them back to your GitHub repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"From your account's go-zero project, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Pull request")," in the branch info box"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"pr",src:r(8954).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"base repository"),", choose ",(0,i.kt)("inlineCode",{parentName:"p"},"zeromicro/go-zero")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"base:master"),". For the ",(0,i.kt)("inlineCode",{parentName:"p"},"head repository")," choose your go-zero project (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"xx/go-zero"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"compare:$branch")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"$branch")," being the new feature branch in your repository that you want merged back into the upstream project"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"pr",src:r(4790).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"[Create pull request]"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To confirm whether the PR submitted successfully, enter the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/pulls"},"go-zero Pull requests page")," and look for your submission with your branch name"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"pr record",src:r(366).Z})))),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"Our community will make every effort to actively provide feedback and support for problems encountered while using go-zero.\nHowever, due to the large number of people in the community both asking and answering questions, we make no guarantees about the order in which questions will be answered.\nAdditionally, while our team is working on issues raised by the community, time constraints could cause some questions to go unanswered.\nOne way to mitigate this is to post all feedback, be it regarding new features or discovered bugs, as a github issue for easier tracking.\nThe go-zero team will also ensure that new features have their own issue created for easy reference by the community.\nThe issues page is also where you can keep track of the latest go-zero news.\nWe welcome everyone to actively participate in the issues page and community discussions."),(0,i.kt)("h3",{id:"how-to-create-a-new-issue"},"How to create a new issue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero/issues"},"go-zero issues page")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"[New issue]")," in the upper right corner"),(0,i.kt)("li",{parentName:"ul"},"Choose the issue category from ",(0,i.kt)("inlineCode",{parentName:"li"},"[Bug report]"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"[Feature request]"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"[Question]")),(0,i.kt)("li",{parentName:"ul"},"Fill in the issue title and content"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"[Submit new issue]"))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests"},"Github Pull request"))))}p.isMDXComponent=!0},8270:function(e,t,r){t.Z=r.p+"assets/images/clone-475c5a521d4c4b3d5c7055c707277478.png"},4790:function(e,t,r){t.Z=r.p+"assets/images/compare-e0a4b7c1fa8683d41089ac130b39c3a9.png"},7007:function(e,t,r){t.Z=r.p+"assets/images/fork-462aa29455e85a93627417992174d354.png"},8954:function(e,t,r){t.Z=r.p+"assets/images/new_pr-b472088998ee001741d3a14a0cdd3b8d.png"},366:function(e,t,r){t.Z=r.p+"assets/images/pr_record-03f732cd36644dfa4e4c69fe1cdc2d4d.png"}}]);