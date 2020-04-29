(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("但是我们却又不得不去面对它。在实际应用以及面试当中，闭包无处不在，甚至可以说它们是衡量js工程师实力的一个重要指标。")]),t._v(" "),n("p",[t._v("正式开始之前，先来两盘开胃菜：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("每个函数也都有自己的执行环境，当执行流进入一个函数时，函数的执行环境就会被推入一个环境栈中，而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。")]),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("整个过程大概就先下面这样：\n"),n("Picture",{attrs:{src:"stack.jpg"}})],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),n("p",[t._v("让我们举下面一个例子：")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),n("p",[t._v("这么说可能有点模糊，请看下面的示例代码:")]),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),n("p",[t._v("两个函数的执行上下文可如下表示：")]),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),n("p",[t._v("了解了执行环境以及作用域，让我们来重新认识一下闭包：")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),n("p",[t._v("创建闭包的常见方式，就是在一个函数内部返回另一个函数。让我们通过例子来了解一下：")]),t._v(" "),t._m(45),n("p",[t._v("在这个例子中，突出的那行代码是内部函数(一个匿名函数)中的代码。")]),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),n("p",[t._v("当 getProperty 被调用时，它的执行环境以及作用域链被创建，可以如下表示:")]),t._v(" "),t._m(51),t._m(52),t._v(" "),t._m(53),t._v(" "),n("p",[t._v("因此，在 getProperty 函数内部定义的匿名函数的作用域链中，实际上将会包含外部函数 getProperty 的活动对象:")]),t._v(" "),t._m(54),n("p",[t._v("这样，匿名函数就可以访问在 getProperty 中定义的所有变量。")]),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),n("p",[t._v("下图展示了调用 getProperty 过程中产生的作用域之间的关系。\n"),n("Picture",{attrs:{src:"chain.jpg"}})],1),t._v(" "),n("p",[t._v("看到这里，我想我们对闭包已经有了自己的认知。")]),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),n("p",[t._v("下面这个例子可以清晰地说 明这个问题，而且这种题目我们在一些经典面试题中也经常见到。")]),t._v(" "),t._m(62),n("p",[t._v("这个函数会返回一个函数数组，表面上看，每个函数都有自己的索引，他们的执行结果也刚好是他们的索引值。")]),t._v(" "),n("p",[t._v("但实际结果与我们的设想大相径庭，尝试打印result，将会发现控制台输出了10个10。")]),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),n("p",[t._v("此时每个子函数沿作用域向上查找，得到的结果也都是10。")]),t._v(" "),t._m(66),t._v(" "),n("p",[t._v("我们可以通过创建另一个匿名函数强制让闭包的行为符合预期，如下所示。")]),t._v(" "),t._m(67),t._m(68),t._v(" "),t._m(69),t._v(" "),t._m(70),t._v(" "),t._m(71),t._v(" "),t._m(72)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"锲子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锲子"}},[this._v("#")]),this._v(" 锲子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("写这篇文章之前，我对闭包的理解也是模棱两可。只是知道闭包的用法，而关于闭包如何产生的，以及为什么会出现闭包则不大清楚。最近通过看一些博文以及JavaScript高级程序设计，可以说是简单的知道了闭包的原理，所以迫不及待的想要分享一下... ...")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("闭包")]),this._v("，一听就是个令人头大的问题。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("执行环境（函数调用栈）")]),this._v(" "),s("li",[this._v("作用域")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"执行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行环境"}},[this._v("#")]),this._v(" 执行环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("执行环境")]),this._v("是 JavaScript 中最为重要的一个概念：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[this._v("执行环境定义了变量或函数有权访问的数据")])])]),this._v(" "),s("li",[s("p",[s("strong",[this._v("每个执行环境都有一个与之关联的 变量对象（VO） ，环境中定义的所有变量和函数都保存在这个对象中。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("虽然我们编写的代码无法访问这个对象，但解析器在处理数据时会在后台使用它。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("某个执行环境中的所有代码执行完 毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"全局执行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局执行环境"}},[this._v("#")]),this._v(" 全局执行环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先，全局执行环境是最外围的一个执行环境。在 Web 浏览器中，全局执行环境被认为是 "),s("code",[this._v("window")]),this._v(" 对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("全局执行环境直到应用程序退 出——例如关闭网页或浏览器——时才会被销毁")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"函数执行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数执行环境"}},[this._v("#")]),this._v(" 函数执行环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("环境栈也有人称做它为"),s("strong",[this._v("函数调用栈")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"变量对象与活动对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量对象与活动对象"}},[this._v("#")]),this._v(" 变量对象与活动对象")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("每个执行环境都有一个表示变量的对象"),n("strong",[t._v("变量对象（VO）")]),t._v("，这个对象里储存着在当前环境中所有的"),n("code",[t._v("变量")]),t._v(" "),n("code",[t._v("函数")]),t._v(" "),n("code",[t._v("参数")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("全局环境的"),s("strong",[this._v("变量对象")]),this._v("始终存在，而函数的局部环境的"),s("strong",[this._v("变量对象")]),this._v("，则只在函数执行的过程中存在。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在函数开始执行时，变量对象转变为"),s("strong",[this._v("活动对象（AO）")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("活动对象实际就是变量对象在真正执行时的另一种形式。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("活动对象在最开始时只包含一个变量，即 "),s("code",[this._v("arguments")]),this._v(" 对象(这个对象在全局环境中是不存在的)。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-jsx harmony extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[t._v("在 foo 函数的环境中，有三个"),n("strong",[t._v("变量对象")]),t._v("，首先是"),n("code",[t._v("arguments ['a']")]),t._v("，然后是变量"),n("code",[t._v("a")]),t._v("和"),n("code",[t._v("b")]),t._v("。")])]),t._v(" "),n("li",[n("p",[t._v("在执行阶段，他们都属于foo的"),n("strong",[t._v("活动对象")]),t._v("。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[this._v("#")]),this._v(" 作用域")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在 JavaScript 中，我们可以将"),s("strong",[this._v("作用域")]),this._v("定义为一套"),s("strong",[this._v("规则")]),this._v(",这套规则用来管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称进行变量查找。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("这里的标识符，指的是变量名或者函数名")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("JavaScript中只有全局作用域与函数作用域(因为eval我们平时开发中几乎不会用到它，这里不讨论)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[s("strong",[this._v("作用域")]),this._v("与"),s("strong",[this._v("执行上下文")]),this._v("是完全不同的两个概念。很多人会混淆他们，但是一定要仔细区分。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("JavaScript代码的整个执行过程，分为两个阶段，"),n("strong",[t._v("代码编译")]),t._v("阶段与"),n("strong",[t._v("代码执行")]),t._v("阶段。\n"),n("ul",[n("li",[t._v("编译阶段由编译器完成，将代码翻译成可执行代码，这个阶段"),n("strong",[t._v("作用域规则会确定")]),t._v("。")]),t._v(" "),n("li",[t._v("执行阶段由引擎完成，主要任务是执行可执行代码，"),n("strong",[t._v("执行上下文在这个阶段创建")]),t._v("。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[this._v("#")]),this._v(" 作用域链")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[n("strong",[t._v("当代码在一个环境中执行时，会创建变量对象的一个作用域链，这个作用域链被保存在内部的"),n("code",[t._v("[[Scope]]")]),t._v("属性中")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("作用域链的用途，是保证对执行环境有权访问的所有变量和函数的有序访问。")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("作用域链的前端，始终都是当前执行的代码所在环境的变量对象。")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("下一个变量对象来自外部环境，而再下一个变量对象则来自下一个包含环境。")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("最末端始终都是全局变量对象。")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-jsx harmony extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" anotherColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapColors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tempColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anotherColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            anotherColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            color "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tempColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以访问color、anotherColor和tempColor ")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以访问color和anotherColor，但不能访问tempColor")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapColors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里只能访问color ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以上代码共涉及 3 个执行环境:"),s("code",[this._v("全局环境")]),this._v("，"),s("code",[this._v("changeColor局部环境")]),this._v("，"),s("code",[this._v("swapColors局部环境")]),this._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[t._v("全局环境中有一个变量 "),n("code",[t._v("color")]),t._v(" 和一个函数 "),n("code",[t._v("changeColor")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("changeColor")]),t._v("的局部环境中有 一个名为 "),n("code",[t._v("anotherColor")]),t._v(" 的变量和一个名为 "),n("code",[t._v("swapColors")]),t._v("的函数")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("swapColors")]),t._v("的局部环境中有一个变量 "),n("code",[t._v("tempColor")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们设定它们的变量对象分别为"),s("code",[this._v("VO（global）")]),this._v("，"),s("code",[this._v("VO（changeColor）")]),this._v("，"),s("code",[this._v("VO（swapColors）")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-jsx harmony extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[t._v("changeColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//变量对象")]),t._v("\n  scopeChain"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("changeColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nswapColors "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//变量对象")]),t._v("\n  scopeChain"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("swapColors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("changeColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以直接用一个数组来表示作用域链，数组的第一项"),s("code",[this._v("scopeChain[0]")]),this._v("为作用域链的最前端，而数组的最后一项，为作用域链的最末端，所有的最末端都为全局变量对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("到这里我们应该知道：")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[n("strong",[t._v("内部环境")]),t._v("可以通过作用域链访问所有的"),n("strong",[t._v("外部环境")]),t._v("，"),n("strong",[t._v("外部环境")]),t._v("不能访问"),n("strong",[t._v("内部环境")]),t._v("中的任何变量和函数")])]),t._v(" "),n("li",[n("p",[t._v("每个环境都可以"),n("strong",[t._v("向上")]),t._v("搜索作用域链，以查询变量和函数名，但不能"),n("strong",[t._v("向下")]),t._v("搜索进入另一个执行环境")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[this._v("#")]),this._v(" 闭包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("对于那些有一些 JavaScript 使用经验但从未真正理解闭包概念的人来说，理解闭包可以看作是某种意义上的重生，突破闭包的瓶颈可以功力大增。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[this._v("#")]),this._v(" 概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("闭包是指有权访问另一个函数作用域中的变量的函数。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"产生过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产生过程"}},[this._v("#")]),this._v(" 产生过程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("闭包是一种"),s("strong",[this._v("特殊的对象")]),this._v("，闭包的产生过程如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("存在"),n("strong",[t._v("执行上下文")]),n("code",[t._v("A")])]),t._v(" "),n("li",[t._v("在"),n("code",[t._v("A")]),t._v("中创建函数（执行上下文）"),n("code",[t._v("B")]),t._v("，用返回"),n("code",[t._v("B")]),t._v("的方式让"),n("code",[t._v("B")]),t._v("在"),n("code",[t._v("A")]),t._v("的"),n("strong",[t._v("环境外")]),t._v("得以执行")]),t._v(" "),n("li",[n("code",[t._v("A")]),t._v("出栈后，它的"),n("strong",[t._v("作用域链")]),t._v("被销毁。但由于"),n("code",[t._v("VO(A)")]),t._v("仍在"),n("code",[t._v("B")]),t._v("的"),n("strong",[t._v("作用域链")]),t._v("中被引用，所以"),n("code",[t._v("VO(A)")]),t._v("会在内存中一直存在")]),t._v(" "),n("li",[t._v("这时"),n("code",[t._v("VO（A）")]),t._v("就形成了闭包")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("propertyName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("propertyName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//123")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这行代码在"),s("code",[this._v("getProperty")]),this._v("出栈后仍访问了其"),s("strong",[this._v("变量对象")]),this._v(" "),s("code",[this._v("object")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[this._v("#")]),this._v(" 分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("之所以还能够访问这个变量，就像刚才说的，是匿名函数的作用域链中包含 "),s("code",[this._v("getProperty")]),this._v("的变量对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("要彻底搞清楚其中的细节，必须从理解函数被调用的时候都会发生什么入手")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"getproperty："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getproperty："}},[this._v("#")]),this._v(" getProperty：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-jsx harmony extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[t._v("getProperty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      arguments "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      propertyName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  scopeChain"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getProperty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"anonymous-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-function"}},[this._v("#")]),this._v(" Anonymous Function")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在一个函数内部定义的函数会将即外部函数的活动对象添加到它的作用域链中")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-jsx harmony extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[t._v("Anonymous "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      arguments "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      object"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  scopeChain"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getProperty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("更为重要的是，getProperty 函数在执行完毕后，"),s("code",[this._v("VO(getProperty)")]),this._v("也不会被销毁，"),s("strong",[this._v("因为匿名函数的作用域链仍然在引用这个活动对象")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("它的"),s("strong",[this._v("活动对象")]),this._v("仍然会留在内存中，直到匿名函数被销毁。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[this._v("#")]),this._v(" 注意")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("作用域链的这种配置机制引出了一个值得注意的"),s("strong",[this._v("副作用")]),this._v("，")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在一个函数中创建的所有函数，它的作用域链中的"),s("strong",[this._v("父变量对象")]),this._v("都是相同的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("换句话说，闭包所保存的是整个"),s("strong",[this._v("变量对象")]),this._v("，这个变量对象是"),s("strong",[this._v("引用类型")]),this._v("，而不是某个特殊的"),s("strong",[this._v("基本类型")]),this._v("变量。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("他们保存的仅仅是一个"),s("strong",[this._v("指针")]),this._v("，这些指针都指向存储在堆中的"),s("strong",[this._v("同一区域")]),this._v("。任何对这个变量的修改，在其他地方都会得到体现。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-jsx harmony extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFunctions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"问题分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[this._v("#")]),this._v(" 问题分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("问题的关键就在于，每个子函数的作用与链中保存的都是"),s("code",[this._v("VO(createFunctions)")]),this._v("，这是一个引用类型的对象，他们在内存中的地址是一样的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("createFunctions 返回后，"),s("code",[this._v("VO（createFunctions）")]),this._v("中的"),s("code",[this._v("i")]),this._v("变成了10。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[this._v("#")]),this._v(" 解决方案")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-jsx harmony extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFunctions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在这个版本中，我们并没有直接把 "),s("code",[this._v("VO（createFunctions）")]),this._v("中的"),s("code",[this._v("i")]),this._v("赋值给数组，而是定义了一个立即执行匿名函数，并将"),s("code",[this._v("i")]),this._v("作为匿名函数的参数赋值给数组。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("在每个立即执行函数被调用时，我们传入了不同的变量"),n("code",[t._v("i")]),t._v(",每个立即执行匿名函数 "),n("strong",[t._v("马上")]),t._v(" 生成自己 "),n("strong",[t._v("活动对象")]),t._v("，这里的所有 "),n("strong",[t._v("活动对象")]),t._v(" 都是完全独立的，其中的"),n("code",[t._v("num")]),t._v("也都是刚刚被传入的"),n("code",[t._v("i")]),t._v("的值。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这时"),s("code",[this._v("num")]),this._v("形成了一个新的"),s("strong",[this._v("闭包")]),this._v(",")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所以最终的数组函数被调用时，它在作用域链中依次向上查找变量"),s("code",[this._v("num")]),this._v("，\n首先查找到的是我们定义的立即执行匿名函数的"),s("code",[this._v("活动对象")]),this._v("中的"),s("code",[this._v("num")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("他们每一个"),s("code",[this._v("活动对象")]),this._v("都是独立的，因此该方法能够正确的返回1至10。")])}],!1,null,null,null);s.default=e.exports}}]);