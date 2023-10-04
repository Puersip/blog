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

// mock/api/user/getUserInfo.js
var getUserInfo_exports = {};
__export(getUserInfo_exports, {
  default: () => getUserInfo_default
});
module.exports = __toCommonJS(getUserInfo_exports);
var getUserInfo_default = [
  {
    url: "/api/getUserInfo",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          username: "lumi",
          age: 18
        }
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9hcGkvdXNlci9nZXRVc2VySW5mby5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvdG9uZ3NoZW5nY2hlbi9EZXNrdG9wL2Jsb2cvbW9jay9hcGkvdXNlci9nZXRVc2VySW5mby5qc1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvdG9uZ3NoZW5nY2hlbi9EZXNrdG9wL2Jsb2cvbW9jay9hcGkvdXNlclwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvdG9uZ3NoZW5nY2hlbi9EZXNrdG9wL2Jsb2cvbW9jay9hcGkvdXNlci9nZXRVc2VySW5mby5qc1wiO2V4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogJy9hcGkvZ2V0VXNlckluZm8nLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgbWVzc2FnZTogJ29rJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJuYW1lOiAnbHVtaScsXG4gICAgICAgICAgYWdlOiAxOCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyUixJQUFPLHNCQUFRO0FBQUEsRUFDeFM7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxVQUNKLFVBQVU7QUFBQSxVQUNWLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
