(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(v,_,t){"use strict";t.r(_);var l=t(0),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"flutter开发问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flutter开发问题"}},[v._v("#")]),v._v(" Flutter开发问题")]),v._v(" "),t("h3",{attrs:{id:"软键盘弹起导致布局overflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软键盘弹起导致布局overflow"}},[v._v("#")]),v._v(" 软键盘弹起导致布局overflow")]),v._v(" "),t("blockquote",[t("p",[v._v("原因：在flutter中，键盘弹起时会缩小Scaffold的高度并重建")]),v._v(" "),t("blockquote",[t("p",[v._v("1.当布局高度固定时，例如设置为屏幕高度，这时候键盘弹起页面上会出现布局overflow的提示\n2.软键盘弹起后遮挡输入框")])])]),v._v(" "),t("ul",[t("li",[v._v("方法一")])]),v._v(" "),t("ol",[t("li",[v._v("将"),t("code",[v._v("Scaffold")]),v._v("组件的"),t("code",[v._v("resizeToAvoidBottomInset")]),v._v("属性设置为"),t("code",[v._v("false")]),v._v("，这样在键盘弹出时布局将不会重建")]),v._v(" "),t("li",[v._v("把固定的高度改为 "),t("code",[v._v("原高度 - MediaQuery.of(context).viewInsets.bottom")]),v._v("，键盘弹出时布局将重建，而这个"),t("code",[v._v("MediaQuery.of(context).viewInsets.bottom")]),v._v("变量在键盘弹出前是0，键盘弹起后的就是键盘的高度")])]),v._v(" "),t("ul",[t("li",[v._v("方法二")])]),v._v(" "),t("ol",[t("li",[v._v("布局放入可滚动的"),t("code",[v._v("Widget")]),v._v("中即可，当输入框获取焦点后，系统会自动将它滑动到可视区域")])]),v._v(" "),t("h2",{attrs:{id:"第二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二"}},[v._v("#")]),v._v(" 第二")]),v._v(" "),t("ol",[t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")])]),v._v(" "),t("h2",{attrs:{id:"第三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三"}},[v._v("#")]),v._v(" 第三")]),v._v(" "),t("ol",[t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")])]),v._v(" "),t("h2",{attrs:{id:"第四"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四"}},[v._v("#")]),v._v(" 第四")]),v._v(" "),t("ol",[t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")]),v._v(" "),t("li",[v._v("1212")])])])}),[],!1,null,null,null);_.default=e.exports}}]);