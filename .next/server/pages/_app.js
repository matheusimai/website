"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/components/Header.js




const Header = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "sticky text-xl top-0 py-10 items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container max-w-4xl mx-auto pb-2",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-stone-200 underline decoration-stone-300/0 hover:decoration-stone-200/100 transition hover:delay-75",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "MATHEUS IMAI."
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-evenly items-center gap-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-stone-200 underline decoration-stone-300/0 hover:decoration-stone-200/100 transition hover:delay-75",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Projects"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "https://github.com/matheusimai/website",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "text-stone-200 justify-between flex items-center gap-1 underline decoration-stone-200/0 hover:decoration-stone-200/100 transition hover:delay-75",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Source"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Footer.js




const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "container max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mb-8 border-t border-stone-500",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between items-center text-lg pt-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-stone-300",
                            children: "Built with Next.js and Tailwind."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            className: "flex gap-1 space-x-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://github.com/matheusimai",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "text-stone-300 justify-between flex items-center gap-1 underline decoration-stone-300/0 hover:decoration-stone-300/100 transition hover:delay-75",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "GitHub"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.linkedin.com/in/matheus-imai",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "text-stone-300 justify-between flex items-center gap-1 underline decoration-stone-300/0 hover:decoration-stone-300/100 transition hover:delay-75",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaLinkedin, {
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "LinkedIn"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex text-sm text-stone-400 justify-center pt-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " Matheus Imai. All rights Reserved."
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Layout.js




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




const MyApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(440)));
module.exports = __webpack_exports__;

})();