/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 396:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 112:
/***/ ((module) => {

module.exports = eval("require")("dayjs");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// 导入相关依赖
const github = __nccwpck_require__(716);
const core = __nccwpck_require__(396);
const dayjs = __nccwpck_require__(112);

// 接收输入参数
const token = core.getInput("token");
const owner = core.getInput("owner");
const repo = core.getInput("repo");
// 获取octokit对象进行后续操作
const octokit = github.getOctokit(token);

// 执行函数
(async () => {
  try {
    await octokit.rest.issues.create({
      owner: owner,
      repo: repo,
      title: getTitle(),
      body: getBody(),
    });
  } catch (error) {
    console.log("[ error ] >", error);
  }
})();

function getTitle() {
  return `【每日计划】 ${getDate()}`;
}

function getBody() {
  return `
    ### 今日任务：
    - [ ] 任务一：
    - [ ] 任务二：
    - [ ] 任务三：
  `;
}

function getDate() {
  return dayjs().add("8", "hour").format("YYYY-MM-DD");
}

})();

module.exports = __webpack_exports__;
/******/ })()
;