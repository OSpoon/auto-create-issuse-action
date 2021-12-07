# AutoCreateIssuseAction

这个Action可以辅助创建每日计划的一个issuse。

## Inputs

### `token`
**Required** Personal access tokens

### `owner`
**Required** 项目作者

### `repo`
**Required** 仓库名称


## Example usage

```yaml
uses: OSpoon/auto-create-issuse-action@master
with:
  token: ${{secrets.TOKEN}}
  owner: OSpoon
  repo: auto-create-issuse-action
```