var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// mock/api/category/getCategory.js
var getCategory_exports = {};
__export(getCategory_exports, {
  default: () => getCategory_default
});
module.exports = __toCommonJS(getCategory_exports);
var getCategory_default = [
  {
    url: "/api/getCategory",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: [
          { key: "java", value: 10 },
          { key: "javascript", value: 2 },
          { key: "vue", value: 3 }
        ]
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9hcGkvY2F0ZWdvcnkvZ2V0Q2F0ZWdvcnkuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL3RvbmdzaGVuZ2NoZW4vRGVza3RvcC9ibG9nL21vY2svYXBpL2NhdGVnb3J5L2dldENhdGVnb3J5LmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy90b25nc2hlbmdjaGVuL0Rlc2t0b3AvYmxvZy9tb2NrL2FwaS9jYXRlZ29yeVwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvdG9uZ3NoZW5nY2hlbi9EZXNrdG9wL2Jsb2cvbW9jay9hcGkvY2F0ZWdvcnkvZ2V0Q2F0ZWdvcnkuanNcIjtleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB1cmw6ICcvYXBpL2dldENhdGVnb3J5JyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIG1lc3NhZ2U6ICdvaycsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7IGtleTogJ2phdmEnLCB2YWx1ZTogMTAgfSxcbiAgICAgICAgICB7IGtleTogJ2phdmFzY3JpcHQnLCB2YWx1ZTogMiB9LFxuICAgICAgICAgIHsga2V5OiAndnVlJywgdmFsdWU6IDMgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1UyxJQUFPLHNCQUFRO0FBQUEsRUFDcFQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxVQUNKLEVBQUUsS0FBSyxRQUFRLE9BQU8sR0FBRztBQUFBLFVBQ3pCLEVBQUUsS0FBSyxjQUFjLE9BQU8sRUFBRTtBQUFBLFVBQzlCLEVBQUUsS0FBSyxPQUFPLE9BQU8sRUFBRTtBQUFBLFFBQ3pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
