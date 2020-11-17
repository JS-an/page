(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"git命令官网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git命令官网"}},[s._v("#")]),s._v(" Git命令官网")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档地址"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"github部署vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github部署vuepress"}},[s._v("#")]),s._v(" GitHub部署VuePress")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("引用VuePress官网"),a("OutboundLink")],1)])]),s._v(" "),a("ol",[a("li",[s._v("下述的指南基于以下条件：")])]),s._v(" "),a("ul",[a("li",[s._v("文档放置在项目的 docs 目录中；")]),s._v(" "),a("li",[s._v("使用的是默认的构建输出位置；")]),s._v(" "),a("li",[s._v("VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("在 "),a("code",[s._v("docs/.vuepress/config.js")]),s._v(" 中设置正确的 base。")]),s._v(" "),a("p",[s._v("如果你打算发布到 "),a("code",[s._v("https://<USERNAME>.github.io/")]),s._v("，则可以省略这一步，因为 "),a("code",[s._v("base")]),s._v(" 默认即是 "),a("code",[s._v('"/"')]),s._v("。")]),s._v(" "),a("p",[s._v("如果你打算发布到 "),a("code",[s._v("https://<USERNAME>.github.io/<REPO>/")]),s._v("（也就是说你的仓库在 "),a("code",[s._v("https://github.com/<USERNAME>/<REPO>")]),s._v("），则将 "),a("code",[s._v("base")]),s._v(" 设置为 "),a("code",[s._v('"/<REPO>/"')]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("在你的项目中，创建一个如下的 "),a("code",[s._v("deploy.sh")]),s._v(" 文件（请自行判断需要的注释）:")])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])])]),a("h2",{attrs:{id:"git报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git报错"}},[s._v("#")]),s._v(" Git报错")]),s._v(" "),a("h3",{attrs:{id:"setting-certificate-verify-locations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-certificate-verify-locations"}},[s._v("#")]),s._v(" setting certificate verify locations")]),s._v(" "),a("ul",[a("li",[s._v("修改正确路径")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system http.sslcainfo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files (x86)\\git'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v("in"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[s._v("\\c")]),s._v('url-ca-bundle.crt"')]),s._v("\n")])])]),a("p",[s._v("或")]),s._v(" "),a("ul",[a("li",[s._v("忽略SSL验证")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system http.sslverify "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])])]),a("h2",{attrs:{id:"git配置多个账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git配置多个账号"}},[s._v("#")]),s._v(" Git配置多个账号")]),s._v(" "),a("ul",[a("li",[s._v("配置多个Git账号的原因")])]),s._v(" "),a("p",[s._v("比如已经配置GitHub账号，在Gitee有另一个账号，将代码发布到Gitee上会报错，因此需要配置多个git账号。")]),s._v(" "),a("ul",[a("li",[s._v("配置多个Git账号的方法")])]),s._v(" "),a("ol",[a("li",[a("code",[s._v("git config --list")]),s._v(" 查看全局配置")]),s._v(" "),a("li",[s._v("移除Git全局配置")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除全局账户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset user.name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除全局邮箱")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset user.email\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除全局密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset user.password\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("生成SSH KEY："),a("code",[s._v('ssh-keygen -t rsa -C "邮箱地址"')])]),s._v(" "),a("li",[s._v("登录代码平台，进入Settings - SSH and GPG keys，将pub里的密钥配置进去")]),s._v(" "),a("li",[s._v("查看密钥是否生效: 例如git平台"),a("code",[s._v("ssh -T git@github.com")])])]),s._v(" "),a("blockquote",[a("p",[s._v("多个账号重复3，4，5步骤")])]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("在.ssh下新建config文件，进行配置")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置说明")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Host    　　主机别名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HostName　　服务器真实地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PreferredAuthentications　　认证方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IdentityFile　　私钥路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# User　　用户名")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置gitee")]),s._v("\n  Host gitee.com\n  HostName gitee.com\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/id_rsa_allen1\n  User allen1\n        \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置github")]),s._v("\n  Host github.com\n  HostName github.com\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/id_rsa_allen2\n  User allen2\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("为各仓库单独配置用户名和邮箱")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户名"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱"')]),s._v("\n")])])]),a("ul",[a("li",[s._v("ps:如果原来使用HTTPS，则需修改远程仓库地址")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" origin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@user.github.com:用户名/仓库名.git\n")])])]),a("h2",{attrs:{id:"git提交时不需要密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git提交时不需要密码"}},[s._v("#")]),s._v(" Git提交时不需要密码")]),s._v(" "),a("ul",[a("li",[s._v("情况一")])]),s._v(" "),a("ol",[a("li",[s._v("用SSH克隆(clone)下来的配置好无密码公钥则不需输入密码")]),s._v(" "),a("li",[s._v("命令行工具输入"),a("code",[s._v('ssh-keygen -t rsa -C "邮箱地址"')])]),s._v(" "),a("li")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ssh-keygen\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/home/schacon/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":（公钥文件名称）\nCreated directory "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/schacon/.ssh'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("不需密码则回车留空"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nEnter same passphrase again:（如上）\nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/schacon/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/schacon/.ssh/id_rsa.pub.\nThe key fingerprint is:\nd0:82:24:8e:d7:f1:bb:9b:33:53:96:93:49:da:9b:e3 schacon@mylaptop.local\n")])])]),a("ul",[a("li",[s._v("情况二")])]),s._v(" "),a("ol",[a("li",[s._v("用HTTPS克隆(clone)下来的需输入密码，但是可以缓存密码，自动输入")]),s._v(" "),a("li",[s._v("设置"),a("code",[s._v("credential helper")]),a("br"),s._v("\n凭据可以设置为全局，也可以设置当前项目下起作用。"),a("br"),s._v("\n如果设置全局，则："),a("br"),s._v(" "),a("code",[s._v("git config –global credential.helper store –file=git_credentails.")]),s._v("\n如果设置当前项目，则进入项目代码目录下，运行："),a("br"),s._v(" "),a("code",[s._v("git config credential.helper store –file=.git_credentails.")]),s._v("\n上面的–file=.git-credentials表示用户名密码存储的文件位置。")])]),s._v(" "),a("ul",[a("li",[s._v("情况三")])]),s._v(" "),a("ol",[a("li",[s._v("在本地git库目录终端下，输入以下代码，输出所匹配的远程库。")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n")])])]),a("p",[s._v("如果使用的是https替换为ssh方式即可")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin git@github.com:name/repo\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("在目标终端下，按照如下命令行重新添加私钥")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ssh-add ~/.ssh/id_rsa\n")])])]),a("p",[s._v("在执行"),a("code",[s._v("ssh-add ~/.ssh/id_rsa")]),s._v("时发生Could not open a connection to your authentication agent错误，\n执行如下命令"),a("code",[s._v("ssh-agent bash")]),s._v("\n然后再执行"),a("code",[s._v("ssh-add ~/.ssh/id_rsa")]),s._v("即可")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("添加成功后，重新尝试是否可以push和pull")])])])}),[],!1,null,null,null);t.default=n.exports}}]);