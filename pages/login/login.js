"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_modules_user = require("../../store/modules/user.js");
const api_user_index = require("../../api/user/index.js");
require("../../utils/storage.js");
require("../../config/constant.js");
require("../../http/index.js");
require("../../http/type.js");
if (!Array) {
  const _easycom_loading_button2 = common_vendor.resolveComponent("loading-button");
  const _easycom_tm_button2 = common_vendor.resolveComponent("tm-button");
  const _easycom_tm_text2 = common_vendor.resolveComponent("tm-text");
  const _easycom_tm_modal2 = common_vendor.resolveComponent("tm-modal");
  const _easycom_tm_app2 = common_vendor.resolveComponent("tm-app");
  (_easycom_loading_button2 + _easycom_tm_button2 + _easycom_tm_text2 + _easycom_tm_modal2 + _easycom_tm_app2)();
}
const _easycom_loading_button = () => "../../components/loading-button/loading-button.js";
const _easycom_tm_button = () => "../../tmui/components/tm-button/tm-button.js";
const _easycom_tm_text = () => "../../tmui/components/tm-text/tm-text.js";
const _easycom_tm_modal = () => "../../tmui/components/tm-modal/tm-modal.js";
const _easycom_tm_app = () => "../../tmui/components/tm-app/tm-app.js";
if (!Math) {
  (_easycom_loading_button + _easycom_tm_button + _easycom_tm_text + _easycom_tm_modal + _easycom_tm_app)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const userStore = store_modules_user.useUserStore();
    const showModal = common_vendor.ref(false);
    function openModalHandle() {
      showModal.value = true;
    }
    function modalConformHandle(e) {
      return __async(this, null, function* () {
        const res = yield api_user_index.updateUserPhoneByWx({ code: e.detail.code });
        if (res.data) {
          showModal.value = false;
          userStore.goHome();
          yield userStore.getUserInfo();
        }
      });
    }
    function modalCancelHandle(e) {
      userStore.clearAllOfUser();
      showModal.value = false;
    }
    function loginHandle() {
      userStore.loginWithWechat(openModalHandle);
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          type: "success",
          ["click-fun"]: loginHandle,
          shadow: 0,
          size: "large",
          label: "Login"
        }),
        c: common_vendor.o(modalCancelHandle),
        d: common_vendor.p({
          width: 300,
          margin: [0, 0],
          padding: [0, 0],
          color: "grey-1",
          label: "Cancel"
        }),
        e: common_vendor.o(modalConformHandle),
        f: common_vendor.p({
          ["open-type"]: "getPhoneNumber",
          width: 300,
          margin: [0, 0],
          padding: [0, 0],
          label: "Confirm"
        }),
        g: common_vendor.p({
          label: "Dear user, we are pleased to provide you with our designated driving service. To ensure the protection of both parties' rights, we need to obtain your phone number for identity verification and emergency contact purposes. However, we assure you that your privacy will be strictly protected. We hope you understand our considerations and thank you for your trust and support. Your privacy and security are of utmost importance to us. Please feel confident in using our services!"
        }),
        h: common_vendor.o(modalConformHandle),
        i: common_vendor.o(modalCancelHandle),
        j: common_vendor.o(($event) => common_vendor.isRef(showModal) ? showModal.value = $event : null),
        k: common_vendor.p({
          title: "Hints",
          overlayClick: false,
          show: common_vendor.unref(showModal)
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cdfe2409"], ["__file", "D:/work/daijia_work/web/mp-weixin-driver/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
