(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"flutter-开发问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-开发问题"}},[t._v("#")]),t._v(" Flutter 开发问题")]),t._v(" "),s("h3",{attrs:{id:"软键盘弹起导致布局-overflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软键盘弹起导致布局-overflow"}},[t._v("#")]),t._v(" 软键盘弹起导致布局 overflow")]),t._v(" "),s("blockquote",[s("p",[t._v("原因：在 flutter 中，键盘弹起时会缩小 Scaffold 的高度并重建")]),t._v(" "),s("blockquote",[s("p",[t._v("1.当布局高度固定时，例如设置为屏幕高度，这时候键盘弹起页面上会出现布局 overflow 的提示 2.软键盘弹起后遮挡输入框")])])]),t._v(" "),s("ul",[s("li",[t._v("方法一")])]),t._v(" "),s("ol",[s("li",[t._v("将"),s("code",[t._v("Scaffold")]),t._v("组件的"),s("code",[t._v("resizeToAvoidBottomInset")]),t._v("属性设置为"),s("code",[t._v("false")]),t._v("，这样在键盘弹出时布局将不会重建")]),t._v(" "),s("li",[t._v("把固定的高度改为 "),s("code",[t._v("原高度 - MediaQuery.of(context).viewInsets.bottom")]),t._v("，键盘弹出时布局将重建，而这个"),s("code",[t._v("MediaQuery.of(context).viewInsets.bottom")]),t._v("变量在键盘弹出前是 0，键盘弹起后的就是键盘的高度")])]),t._v(" "),s("ul",[s("li",[t._v("方法二")])]),t._v(" "),s("ol",[s("li",[t._v("布局放入可滚动的"),s("code",[t._v("Widget")]),t._v("中即可，当输入框获取焦点后，系统会自动将它滑动到可视区域")])]),t._v(" "),s("h3",{attrs:{id:"国际化问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#国际化问题"}},[t._v("#")]),t._v(" 国际化问题")]),t._v(" "),s("ol",[s("li",[t._v('文件名"l10n"为小写的 L\n'),s("blockquote",[s("blockquote",[s("p",[t._v("我使用的是 I10n（带有大写字母 I）而不是 l10n（带有小写字母 l）。它发生在我得知 l10n 代表本地化时。\n所以我将 I10n.yaml 和 I10n 文件夹的名称从大写的“i”更改为小写的“L”，然后代码生成器就可以工作了。我觉得自己好傻 xD\n我还想指出，我现在什至不需要在任何地方进行导入，只需添加对 pubspec.yaml 的依赖和 'generate: true' 标志，并定义 l10n.yaml 和 l10n 文件夹，足以让代码生成器正常工作。\n谢谢您的帮助。我只是希望有一个注释可以帮助解决这个问题，因为现在到处都是，大写 I 的写法与小写 L 完全相同。")])])])])]),t._v(" "),s("h3",{attrs:{id:"页面缓存-keeplive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面缓存-keeplive"}},[t._v("#")]),t._v(" 页面缓存（keeplive）")]),t._v(" "),s("blockquote",[s("blockquote",[s("p",[t._v("必须实现以下注释")])])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该 MePage 组件必须用特定控件包裹，例如：PageView，TabBarView")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.必须是 StatefulWidget 组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MePage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatefulWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  State"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MePage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_MePageState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.混入 AutomaticKeepAliveClientMixin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_MePageState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MePage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" AutomaticKeepAliveClientMixin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.重写 wantKeepAlive")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  bool "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" wantKeepAlive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  Widget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.调用父类 build")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);