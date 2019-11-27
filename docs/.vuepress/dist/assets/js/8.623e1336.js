(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"github部署vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github部署vuepress"}},[t._v("#")]),t._v(" GitHub部署VuePress")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("引用VuePress官网"),a("OutboundLink")],1)])]),t._v(" "),a("ol",[a("li",[t._v("下述的指南基于以下条件：")])]),t._v(" "),a("ul",[a("li",[t._v("文档放置在项目的 docs 目录中；")]),t._v(" "),a("li",[t._v("使用的是默认的构建输出位置；")]),t._v(" "),a("li",[t._v("VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("在 "),a("code",[t._v("docs/.vuepress/config.js")]),t._v(" 中设置正确的 base。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME>.github.io/")]),t._v("，则可以省略这一步，因为 "),a("code",[t._v("base")]),t._v(" 默认即是 "),a("code",[t._v('"/"')]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME>.github.io/<REPO>/")]),t._v("（也就是说你的仓库在 "),a("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("），则将 "),a("code",[t._v("base")]),t._v(" 设置为 "),a("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在你的项目中，创建一个如下的 "),a("code",[t._v("deploy.sh")]),t._v(" 文件（请自行判断需要的注释）:")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),a("h2",{attrs:{id:"git-提示-error-setting-certificate-verify-locations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-提示-error-setting-certificate-verify-locations"}},[t._v("#")]),t._v(" git 提示 error setting certificate verify locations")]),t._v(" "),a("ul",[a("li",[t._v("修改正确路径")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --system http.sslcainfo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files (x86)\\git'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v("in"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v('url-ca-bundle.crt"')]),t._v("\n")])])]),a("p",[t._v("或")]),t._v(" "),a("ul",[a("li",[t._v("忽略SSL验证")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --system http.sslverify "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h2",{attrs:{id:"第三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三"}},[t._v("#")]),t._v(" 第三")]),t._v(" "),a("ol",[a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")])]),t._v(" "),a("h2",{attrs:{id:"第四"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四"}},[t._v("#")]),t._v(" 第四")]),t._v(" "),a("ol",[a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")]),t._v(" "),a("li",[t._v("1212")])])])}),[],!1,null,null,null);s.default=n.exports}}]);