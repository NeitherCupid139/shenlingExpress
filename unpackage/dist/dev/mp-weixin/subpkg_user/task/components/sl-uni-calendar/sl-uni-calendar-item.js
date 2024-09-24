"use strict";
const common_vendor = require("../../../../common/vendor.js");
const subpkg_user_task_components_slUniCalendar_i18n_index = require("./i18n/index.js");
const { t } = common_vendor.initVueI18n(subpkg_user_task_components_slUniCalendar_i18n_index.messages);
const _sfc_main = {
  emits: ["change"],
  props: {
    weeks: {
      type: Object,
      default() {
        return {};
      }
    },
    calendar: {
      type: Object,
      default: () => {
        return {};
      }
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    todayText() {
      return t("uni-calender.today");
    }
  },
  methods: {
    choiceDate(weeks) {
      this.$emit("change", weeks);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.lunar && !$props.weeks.extraInfo
  }, $props.lunar && !$props.weeks.extraInfo ? {
    b: common_vendor.t($props.weeks.isDay ? $options.todayText : $props.weeks.lunar.IDayCn === "初一" ? $props.weeks.lunar.IMonthCn : $props.weeks.lunar.IDayCn),
    c: $props.weeks.isDay ? 1 : "",
    d: $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay ? 1 : "",
    e: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    f: $props.weeks.beforeMultiple ? 1 : "",
    g: $props.weeks.multiple ? 1 : "",
    h: $props.weeks.afterMultiple ? 1 : "",
    i: $props.weeks.disable ? 1 : ""
  } : {}, {
    j: $props.weeks.extraInfo && $props.weeks.extraInfo.info
  }, $props.weeks.extraInfo && $props.weeks.extraInfo.info ? {
    k: common_vendor.t($props.weeks.extraInfo.info),
    l: $props.weeks.extraInfo.info ? 1 : "",
    m: $props.weeks.isDay ? 1 : "",
    n: $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay ? 1 : "",
    o: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    p: $props.weeks.beforeMultiple ? 1 : "",
    q: $props.weeks.multiple ? 1 : "",
    r: $props.weeks.afterMultiple ? 1 : "",
    s: $props.weeks.disable ? 1 : ""
  } : {}, {
    t: common_vendor.t($props.weeks.date),
    v: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    w: $props.weeks.beforeMultiple ? 1 : "",
    x: $props.weeks.multiple ? 1 : "",
    y: $props.weeks.afterMultiple ? 1 : "",
    z: $props.weeks.disable ? 1 : "",
    A: $props.weeks.disable ? 1 : "",
    B: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    C: $props.weeks.beforeMultiple ? 1 : "",
    D: $props.weeks.multiple ? 1 : "",
    E: $props.weeks.afterMultiple ? 1 : "",
    F: common_vendor.o(($event) => $options.choiceDate($props.weeks))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a9395358"]]);
wx.createComponent(Component);
