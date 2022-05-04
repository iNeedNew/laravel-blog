"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_SignUp_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/SignUp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/SignUp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      nickname: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    signUp: function signUp() {
      axios.post('/api/auth/register', {
        nickname: this.nickname,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function (res) {
        console.log(res);
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'post.index'
        });
      })["catch"](function (res) {
        console.log(res);
      });
    }
  },
  computed: {
    isDisabled: function isDisabled() {
      return this.nickname && this.email && this.password && this.password_confirmation;
    }
  },
  name: "SignUp"
});

/***/ }),

/***/ "./resources/js/components/Auth/SignUp.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Auth/SignUp.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignUp_vue_vue_type_template_id_472f79f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=472f79f8&scoped=true& */ "./resources/js/components/Auth/SignUp.vue?vue&type=template&id=472f79f8&scoped=true&");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/SignUp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_472f79f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SignUp_vue_vue_type_template_id_472f79f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "472f79f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/SignUp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/SignUp.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Auth/SignUp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/SignUp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/SignUp.vue?vue&type=template&id=472f79f8&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Auth/SignUp.vue?vue&type=template&id=472f79f8&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_472f79f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_472f79f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_472f79f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=template&id=472f79f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/SignUp.vue?vue&type=template&id=472f79f8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/SignUp.vue?vue&type=template&id=472f79f8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/SignUp.vue?vue&type=template&id=472f79f8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", [
    _c("div", { staticClass: "mb-3" }, [
      _c("label", { staticClass: "form-label", attrs: { for: "nickname" } }, [
        _vm._v("Nickname"),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.nickname,
            expression: "nickname",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "email", id: "nickname" },
        domProps: { value: _vm.nickname },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.nickname = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-3" }, [
      _c("label", { staticClass: "form-label", attrs: { for: "email" } }, [
        _vm._v("Email address"),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "email", id: "email" },
        domProps: { value: _vm.email },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-3" }, [
      _c("label", { staticClass: "form-label", attrs: { for: "password" } }, [
        _vm._v("Password"),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.password,
            expression: "password",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "password", id: "password" },
        domProps: { value: _vm.password },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.password = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-3" }, [
      _c(
        "label",
        { staticClass: "form-label", attrs: { for: "password-confirmation" } },
        [_vm._v("Password confirm")]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.password_confirmation,
            expression: "password_confirmation",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "password", id: "password-confirmation" },
        domProps: { value: _vm.password_confirmation },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.password_confirmation = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-primary",
        attrs: { disabled: !_vm.isDisabled, type: "submit" },
        on: {
          click: function ($event) {
            $event.preventDefault()
            return _vm.signUp.apply(null, arguments)
          },
        },
      },
      [_vm._v("Submit")]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);