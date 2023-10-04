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

// mock/api/links/getLinks.js
var getLinks_exports = {};
__export(getLinks_exports, {
  default: () => getLinks_default
});
module.exports = __toCommonJS(getLinks_exports);
var getLinks_default = [
  {
    url: "/api/getLinks",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: [
          {
            id: 1,
            name: "Friend 1",
            avatar: "https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg",
            url: "https://www.baidu.com"
          },
          {
            id: 2,
            name: "Friend 2",
            avatar: "https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg",
            url: "https://www.baidu.com"
          },
          {
            id: 3,
            name: "Friend 3",
            avatar: "https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg",
            url: "https://www.baidu.com"
          },
          {
            id: 4,
            name: "Friend 4",
            avatar: "https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg",
            url: "https://www.baidu.com"
          },
          {
            id: 5,
            name: "Friend 5",
            avatar: "https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg",
            url: "https://www.baidu.com"
          },
          {
            id: 6,
            name: "Friend 6",
            avatar: "https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg",
            url: "https://www.baidu.com"
          },
          {
            id: 7,
            name: "Friend 7",
            avatar: "https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg",
            url: "https://www.baidu.com"
          }
          // ... 可以添加更多的友链数据
        ]
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9hcGkvbGlua3MvZ2V0TGlua3MuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL3RvbmdzaGVuZ2NoZW4vRGVza3RvcC9ibG9nL21vY2svYXBpL2xpbmtzL2dldExpbmtzLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy90b25nc2hlbmdjaGVuL0Rlc2t0b3AvYmxvZy9tb2NrL2FwaS9saW5rc1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvdG9uZ3NoZW5nY2hlbi9EZXNrdG9wL2Jsb2cvbW9jay9hcGkvbGlua3MvZ2V0TGlua3MuanNcIjtleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB1cmw6ICcvYXBpL2dldExpbmtzJyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIG1lc3NhZ2U6ICdvaycsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdGcmllbmQgMScsXG4gICAgICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgICAgICdodHRwczovL2toaWdobmVzcy1ibG9nLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vYXZhdGFyL0toaWdobmVzcy5qcGcnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYmFpZHUuY29tJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZTogJ0ZyaWVuZCAyJyxcbiAgICAgICAgICAgIGF2YXRhcjpcbiAgICAgICAgICAgICAgJ2h0dHBzOi8va2hpZ2huZXNzLWJsb2cub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9hdmF0YXIvS2hpZ2huZXNzLmpwZycsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5iYWlkdS5jb20nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBuYW1lOiAnRnJpZW5kIDMnLFxuICAgICAgICAgICAgYXZhdGFyOlxuICAgICAgICAgICAgICAnaHR0cHM6Ly9raGlnaG5lc3MtYmxvZy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2F2YXRhci9LaGlnaG5lc3MuanBnJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmJhaWR1LmNvbScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIG5hbWU6ICdGcmllbmQgNCcsXG4gICAgICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgICAgICdodHRwczovL2toaWdobmVzcy1ibG9nLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vYXZhdGFyL0toaWdobmVzcy5qcGcnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYmFpZHUuY29tJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgbmFtZTogJ0ZyaWVuZCA1JyxcbiAgICAgICAgICAgIGF2YXRhcjpcbiAgICAgICAgICAgICAgJ2h0dHBzOi8va2hpZ2huZXNzLWJsb2cub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9hdmF0YXIvS2hpZ2huZXNzLmpwZycsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5iYWlkdS5jb20nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBuYW1lOiAnRnJpZW5kIDYnLFxuICAgICAgICAgICAgYXZhdGFyOlxuICAgICAgICAgICAgICAnaHR0cHM6Ly9raGlnaG5lc3MtYmxvZy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2F2YXRhci9LaGlnaG5lc3MuanBnJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmJhaWR1LmNvbScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgIG5hbWU6ICdGcmllbmQgNycsXG4gICAgICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgICAgICdodHRwczovL2toaWdobmVzcy1ibG9nLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vYXZhdGFyL0toaWdobmVzcy5qcGcnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYmFpZHUuY29tJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIC4uLiBcdTUzRUZcdTRFRTVcdTZERkJcdTUyQTBcdTY2RjRcdTU5MUFcdTc2ODRcdTUzQ0JcdTk0RkVcdTY1NzBcdTYzNkVcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3UixJQUFPLG1CQUFRO0FBQUEsRUFDclM7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxVQUNKO0FBQUEsWUFDRSxJQUFJO0FBQUEsWUFDSixNQUFNO0FBQUEsWUFDTixRQUNFO0FBQUEsWUFDRixLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNFLElBQUk7QUFBQSxZQUNKLE1BQU07QUFBQSxZQUNOLFFBQ0U7QUFBQSxZQUNGLEtBQUs7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0UsSUFBSTtBQUFBLFlBQ0osTUFBTTtBQUFBLFlBQ04sUUFDRTtBQUFBLFlBQ0YsS0FBSztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDRSxJQUFJO0FBQUEsWUFDSixNQUFNO0FBQUEsWUFDTixRQUNFO0FBQUEsWUFDRixLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNFLElBQUk7QUFBQSxZQUNKLE1BQU07QUFBQSxZQUNOLFFBQ0U7QUFBQSxZQUNGLEtBQUs7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0UsSUFBSTtBQUFBLFlBQ0osTUFBTTtBQUFBLFlBQ04sUUFDRTtBQUFBLFlBQ0YsS0FBSztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDRSxJQUFJO0FBQUEsWUFDSixNQUFNO0FBQUEsWUFDTixRQUNFO0FBQUEsWUFDRixLQUFLO0FBQUEsVUFDUDtBQUFBO0FBQUEsUUFFRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
