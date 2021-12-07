// 导入相关依赖
const github = require("@actions/github");
const core = require("@actions/core");
const dayjs = require("dayjs");

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
  return 
`
### 今日任务：
- [ ] 任务一：
- [ ] 任务二：
- [ ] 任务三：
`;
}

function getDate() {
  return dayjs().add("8", "hour").format("YYYY-MM-DD");
}
