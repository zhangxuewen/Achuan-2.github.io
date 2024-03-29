---
title: GitHub 提交代码时 emoji 表情的使用
author: 风渡巛
top: false
cover: https://b3logfile.com/siyuan/1610205759005/assets/image-20211004232022-yqx105q.png
toc: true
categories: 折腾致死
abbrlink: b8c8
swiper_index: 1
date: 2021-08-11 22:01:46
description: 执行 `git commit` 时使用 emoji 为本次提交打上一个 “标签”， 使得此次 commit 的主要工作得到凸现，提高阅读体验，同时也能够当作标签功能使得其在整个提交历史中易于区分与查找。
tags: Github
---

> 🌏Reference
>
> * [gitmoji | An emoji guide for your commit messages](https://gitmoji.dev/?utm_source=ld246.com)
> * [🔨 [git]: Write better commits with Gitmoji - DEV Community](https://dev.to/javidjms/git-write-better-commits-with-gitmoji-3193)
> * [用 emoji 表情提交代码指南 · Issue #71 · Kimi-Gao/Program-Blog (github.com)](https://github.com/Kimi-Gao/Program-Blog/issues/71)
>

![](https://b3logfile.com/siyuan/1610205759005/assets/image-20210921211205-remwfyi.png)

一条标准的 git commit 应该为

```bash
<type> [scope]: "Message"
```

**type** must be one of the following mentioned below :

* <build>: Build related changes (eg: npm related/ adding external dependencies)
* <chore>: A code change that external user won't see (eg: change to .gitignore)
* <docs>: Documentation related changes
* <feat>: Introduction of a new feature
* <fix>: Resolve an issue directly linked to development (bugfixes)
* <hotfix>: Resolve an issue directly linked to production (patches)
* <test>: Add/Update test cases
* <performance>: Add code that improves performance
* <refactor>: Update for code for maintainability (clean code)

**scope** is optional and must be a noun that represents the section of the codebase

**Message** should be imperative and should describe the commit with a clear message/keywords.

such as

```markdown
feat(home, components): Add login button
feat(home, components): Add login modal
fix(home, components): Resolve issue with modal collapses
chore(home): Move icons folder
feat(newsletter): Add Newsletter component
feat(navbar): Add navbar container
```

Now we can replace the <type/> with an emoji :

🎨 Improve structure / format of the code.

⚡️ Improve performance.

🔥 Remove code or files.

🐛 Fix a bug.

✨ Introduce new features.

📝 Add or update documentation.

🚀 Deploy stuff.

💚 Fix CI Build.

👷 Add or update CI build system.

🔧 Add or update configuration files.

🔨 Add or update development scripts.

⚰️ Remove dead code.

Example of commits :

```markdown
✨ (home, components): Add login button
✨ (home, components): Add login modal
🐛 (home, components): Resolve issue with modal collapses
🚚 (home): Move icons folder
✨ (newsletter): Add Newsletter component
✨ (navbar): Add navbar container
🔥 (navbar): Remove old navbar file
✅ (home): Add login test case
🎨 (home, component): Improve login modal
📦️ (npm): Add react-table
🔨 Update script start-server.js
```

比较专业的 github repo 都会使用 gitmoji 进行管理 commit：执行 `git commit` 时使用 emoji 为本次提交打上一个 “标签”， 使得此次 commit 的主要工作得到凸现，提高阅读体验，同时也能够当作标签功能使得其在整个提交历史中易于区分与查找。

| emoji | emoji 代码                    | commit 说明                                                   |
| :---- | :---------------------------- | :------------------------------------------------------------ |
| 🔖    | `:bookmark:`                  | **Release / Version tags.**                                   |
| 📝    | `:memo:`                      | **Add or update documentation.**                              |
| ✏️  | `:pencil2:`                   | Fix typos.                                                    |
| 📄    | `:page_facing_up:`            | Add or update license                                         |
| ✨    | `:sparkles:`                  | Introduce new features.                                       |
| 🎉    | `:tada:`                      | Begin a project.                                              |
| 💥    | `:boom:`                      | Introduce breaking changes.                                   |
| 🎨    | `:art:`                       | **Improve structure / format of the code.**                   |
| ⚡️  | `:zap:`                       | Improve performance.                                          |
| 🐛    | `:bug:`                       | **Fix a bug.**                                                |
| 🚑    | `:ambulance:`                 | Critical hotfix.                                              |
| 💡    | `:bulb:`                      | Add or update comments in source code                         |
| 🔥    | `:fire:`                      | **Remove code or files.**                                     |
| 🗑️  | `:wastebasket:`               | Deprecate code that needs to be cleaned up.。                 |
| 🚚    | `:truck:`                     | Move or rename resources (e.g.: files, paths, routes).        |
| 💩    | `:poop:`                      | Write bad code that needs to be improved.                     |
| ⚰️  | `:coffin:`<br />                    | Remove dead code.                                             |
| 📸    | `:camera_flash:`<br />              | Add or update snapshots.                                      |
| 💄    | `:lipstick:`                  | Add or update the UI and style files.                         |
| 💫    | `:dizzy:`                     | Add or update animations and transitions.                     |
| 🍱    | `:bento:`                     | Add or update assets.                                         |
| 🙈    | `:see_no_evil:`               | Add or update a .gitignore file.                              |
| ⏪️  | `:rewind:`                    | Revert changes                                                |
| 🔀    | `:twisted_rightwards_arrows:` | Merge branches.                                               |
| 🔧    | `:wrench:`                    | **Add or update configuration files.**                        |
| 🚀    | `:rocket:`                    | Deploy stuff.                                                 |
| 🚨    | `:rotating_light:`            | Fix compiler / linter warnings.                               |
| 🚧    | `:construction:`              | Work in progress.                                             |
| ✅    | `:white_check_mark:`          | Add, update, or pass tests.                                   |
| 💬    | `:speech_balloon:`            | Add or update text and literals.                              |
| 🍻    | `:beers:`                     | Write code drunkenly.                                         |
| 👽️  | `:alien:`                     | Update code due to external API changes.                      |
| 🔨    | `:hammer:`                    | Add or update development scripts.                            |
| 🔒    | `:lock:`                      | Fix security issues.                                          |
| 🏁    | `:checked_flag:`              | 修复 Windows 下的问题                                         |
| 🍎    | `:apple:`                     | 修复 macOS 下的问题                                           |
| 🐧    | `:penguin:`                   | 修复 Linux 下的问题                                           |
| 🐳    | `:whale:`                     | Docker 相关工作                                               |
| ♻️  | `:recycle:`                   | Refactor code                                                 |
| 👷    | `:construction_worker:`       | Add or update CI build system.                                |
| 💚    | `:green_heart:`               | fix CI Build.                                                 |
| 📈    | `:chart_with_upwards_trend:`  | Add or update analytics or track code                         |
| ⬆️  | `:arrow_up:`                  | 升级依赖                                                      |
| ⬇️  | `:arrow_down:`                | 降级依赖                                                      |
| ➕    | `:heavy_plug_sign:`           | Add a dependency.                                             |
| ➖    | `:heavy_minus_sign:`          | Remove a dependency.                                          |
| 📌    | `:pushpin:`                   | Pin dependencies to specific versions                         |
| 🌐    | `:globe_with_meridians:`      | Internationalization and localization.                        |
| 🧪    | `:test_tube:`                 | Add a failing test.                                           |
| 👔    | `:necktie:`<br />                   | Add or update business logic                                  |
| 🧐    | `:monocle_face:`<br />              | Data exploration/inspection.                                  |
| 🩹    | `:adhesive_bandage:`          | Simple fix for a non-critical issue.                          |
| 🛂    | `:passport_control:`          | Work on code related to authorization, roles and permissions. |
| 🥅    | `:goal_net:`                  | Catch errors.                                                 |
| 🚩    | `:triangular_flag_on_post:`   | Add, update, or remove feature flags.                         |
| 🌱    | `:seedling:`                  | Add or update seed files.                                     |
| 🏷️  | `:label:`                     | Add or update types.                                          |
| 🔍️  | `:mag:`                       | Improve SEO.                                                  |
| ⚗️  | `:alembic:`                   | Perform experiments.                                          |
| 🥚    | `:egg:`                       | Add or update an easter egg.                                  |
| 🤡    | `:clown_face:`                | Mock things.                                                  |
| 📱    | `:iphone:`                    | Work on responsive design                                     |
| 🏗️  | `:building_construction:`     | Make architectural changes.                                   |
| 🚸    | `:children_crossing:`         | Improve user experience / usability.                          |
| 👥    | `:busts_in_silhouette:`       | Add or update contributor(s).                                 |
| 🔇    | `:mute:`                      | Remove logs.                                                  |
| 🔊    | `:loud_sound:`                | Add or update logs.                                           |
| 🗃️  | `:card_file_box:`             | Perform database related changes.                             |
| ♿️  | `:wheelchair:`                | Improve accessibility.                                        |
| 📦️  | `:package:`                   | Add or update compiled files or packages.                     |

一些工具

* vscode 插件: [vtrois/gitmoji-vscode: 😜 An emoji tool with your git commit messages for VS Code (github.com)](https://github.com/vtrois/gitmoji-vscode)，可以在 vscode 提交 commit 时插入 gitmoji
  ![](https://b3logfile.com/siyuan/1610205759005/assets/image-20210921203150-c6tv640.png)
* utools 插件 GitEmoji，目前暂时并不好用，是直接复制冒号语法到剪贴板不会直接粘贴，而且搜索竟然不能直接搜英文……
  ![](https://b3logfile.com/siyuan/1610205759005/assets/image-20210921202948-16o5g5o.png)

> 番外：
>
> 所以如果做了一个练习代码的仓库，每次提交新建一个文件，好多博客都没提到这个，应该用什么 emoji 呢
>
> 决定了用 🌑`:new_moon:`
>