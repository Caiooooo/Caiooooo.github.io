1. 首页对手机端的适配不是很好 1 导航会有bug:(首页 设计网站等导航栏会以白字出现在屏幕上 本该隐藏直到打开导航栏) 2 导航栏按钮过于小 导致被顶部广告挡住 应该适当下移



2. 升级整个电脑版网站首页(手机版把这个首页移到单独的页面 首页还是保持原来的) 当然地图在老版本我已经实现 可以参考 以下是具体需求 你看情况满足



```
我想做一个具有“可探索的数字办公室 / Interactive World”感觉的个人网站。

请参考我提供的截图的视觉创意和信息架构，但不要直接复制原网站的代码、文字、品牌、人物或图片素材。

核心概念：

这是一个“看起来像一张完整插画/办公室场景，但场景中的物品全部可以交互”的网站。

用户进入首页后，首先看到一个完整的横向场景：

- 一张桌子
- 墙壁
- 墙上挂着多个屏幕/海报
- 一张世界地图
- 人物/头像
- 电脑
- 书籍
- 一些装饰品
- 其他小型物件

这些东西不是纯装饰，而是网站的导航入口。

==================================================
一、核心交互
==================================================

1. 墙上的世界地图

这是整个网站最重要的 Interactive Element。

地图显示一张 stylized 的世界地图。

用户可以：

- 鼠标移动到地图上时产生 hover 效果
- 国家/地区出现高亮
- 点击不同国家/地区
- 点击后打开对应的信息页面或侧边抽屉
- 地图上的重要地点可以有 marker
- marker 可以显示 tooltip
- 点击 marker 可以进入对应项目/经历/旅行记录/文章

例如：

China
Japan
Singapore
United States
Europe
Hong Kong

每个地点都可以对应：

{
  location: "Tokyo",
  title: "Tokyo",
  description: "...",
  projects: [...],
  photos: [...],
  links: [...]
}

地图必须是真正可以交互的 SVG，而不是把一张 PNG 图片作为背景然后假装可以点击。

优先使用：

SVG + React

如果需要地图数据，可以使用 GeoJSON / TopoJSON。

地图应该支持：

- hover
- click
- tooltip
- zoom
- pan（如果不会破坏整体体验）
- selected state

==================================================
二、场景中的其他可交互物体
==================================================

把整个场景设计成一个 Interactive Map。

例如：

墙上的照片
→ 点击 → 打开个人介绍

电脑屏幕
→ 点击 → 打开 Projects

书籍
→ 点击 → 打开 Blog / Notes

咖啡杯
→ 点击 → 打开一些隐藏内容

麦克风
→ 点击 → Podcast / Speaking

邮箱
→ 点击 → Contact

桌上的小物件
→ 可以作为 Easter Egg

人物头像
→ 点击 → About Me

墙上的世界地图
→ 点击 → Interactive Map

每个 Interactive Object 都应该有明显但不过度的 hover feedback。

例如：

- slight scale
- glow
- shadow
- cursor change
- subtle floating animation
- tooltip

不要让页面看起来像传统网页菜单。

用户应该感觉自己是在“探索一个房间”。

==================================================
三、Easter Egg 系统
==================================================

我非常希望加入隐藏彩蛋。

例如：

页面中隐藏 5~10 个 Easter Eggs。

用户点击某些看起来不起眼的东西：

- 小动物
- 杯子
- 某一本书
- 某个按钮
- 墙角的小物件

会触发：

- 特殊动画
- 隐藏文字
- 彩蛋页面
- 小游戏
- 特殊图片
- 一个秘密项目

不要直接告诉用户所有 Easter Egg 在哪里。

可以在页面第一次加载时只显示：

"Explore the room."

或者：

"Some things are not what they seem."

==================================================
四、整体视觉风格
==================================================

视觉风格参考：

Editorial illustration
+
Interactive portfolio
+
Digital museum
+
Personal world map

整体感觉：

温暖
精致
轻微复古
有一点手绘插画感
但交互和动画必须现代。

不要做成传统 SaaS Dashboard。

不要大量使用：

- Card Grid
- 巨大的 Hero Text
- 普通 Navbar
- Bootstrap 风格按钮

首页应该像一个“场景”。

用户看到的是：

一个完整的空间。

而不是：

一个传统网站。

==================================================
五、页面布局
==================================================

Desktop：

整个第一屏占据 100vh。

场景尽量完整展示。

类似一个横向插画：

┌──────────────────────────────────────────────┐
│                                              │
│       [Photo]       [WORLD MAP]    [Screen] │
│                                              │
│              ┌─────────────┐                │
│              │             │                │
│       Books  │    Person   │     Computer   │
│              │             │                │
│              └─────────────┘                │
│                                              │
│       ☕          🐚       🎙       ✉        │
│──────────────────────────────────────────────│
│                  DESK                        │
└──────────────────────────────────────────────┘

但不要真的使用 emoji。

所有视觉元素应该使用：

SVG / CSS / 图片 / 插画素材。

Mobile：

不要简单地把 Desktop 缩小。

需要重新设计布局。

例如：

- 场景可以纵向排列
- 地图变成主要入口
- 物件重新排列
- 保持所有 Interactive Objects 可点击
- 支持 touch interaction

==================================================
六、交互动画
==================================================

使用 Framer Motion。

动画应该非常克制。

页面进入：

整个房间逐渐 fade in。

然后：

地图
→ subtle floating animation

照片
→ slight parallax

电脑
→ screen glow

人物
→ very subtle movement

Interactive Object hover：

scale: 1.03 ~ 1.08

并出现：

soft shadow / glow

点击：

scale down → spring animation

然后打开：

Modal / Drawer / Page

不要使用夸张动画。

整体目标：

“高级、自然、像一个真实存在的数字空间”。

==================================================
七、信息展示方式
==================================================

点击物品后，不要立即跳到一个完全不同的网页。

优先使用：

Side Drawer

或者：

Large Modal

例如点击地图：

右侧出现：

Tokyo

Japan

────────────────

My experience in Tokyo...

[Photos]

[Projects]

[Articles]

[Explore]

点击电脑：

打开：

Projects

然后展示：

Project 01
Project 02
Project 03

但用户始终感觉自己还在这个“房间”里。

==================================================
八、技术栈
==================================================

请使用：

Next.js
React
TypeScript
Tailwind CSS
Framer Motion
SVG

如果需要地图：

GeoJSON / TopoJSON

如果需要图标：

Lucide React

不要引入大量没有必要的依赖。

代码应该：

- component-based
- data-driven
- type-safe
- easy to modify

==================================================
九、代码结构
==================================================

建议：

/app
/components
  /interactive-room
    Room.tsx
    InteractiveObject.tsx
    WorldMap.tsx
    MapMarker.tsx
    ObjectTooltip.tsx
    Scene.tsx
  /panels
    AboutPanel.tsx
    ProjectPanel.tsx
    LocationPanel.tsx
    ContactPanel.tsx
    EasterEggPanel.tsx

/data
  locations.ts
  projects.ts
  easterEggs.ts
  interactiveObjects.ts

/lib

所有内容都尽量通过 data 配置。

例如：

const interactiveObjects = [
  {
    id: "world-map",
    type: "map",
    title: "World",
    position: {...},
    action: "open-map"
  },
  {
    id: "computer",
    type: "project",
    title: "Projects",
    action: "open-projects"
  }
]

这样以后我只修改 data，不需要修改 UI。

==================================================
十、非常重要：地图
==================================================

请重点把 World Map 做好。

不要使用一张普通图片。

必须是真正的：

Interactive SVG World Map。

每个国家/地区都可以拥有：

onMouseEnter
onMouseLeave
onClick

点击后显示：

Country / Region
Description
Projects
Photos
Links

地图需要有：

hover highlight
selected country
tooltip
markers

地图视觉上要与整个房间的插画风格融合。

==================================================
十一、用户体验
==================================================

首页第一次打开时：

显示一个很短的提示：

"Welcome to my world."

然后：

"Explore the room."

2 秒后提示自动消失。

用户可以自由探索。

不要强迫用户按照固定顺序浏览。

整个网站应该有一种：

“我不知道下一个点击哪里，但我想继续探索。”

的感觉。

==================================================
十二、实现要求
==================================================

第一阶段不要追求大量内容。

先做一个完整的 MVP：

1. 一个完整的 Interactive Room
2. 一个真正可以点击的 World Map
3. 5 个 Interactive Objects
4. 3 个 Location
5. 3 个 Projects
6. 3 个 Easter Eggs
7. Modal / Drawer 系统
8. Desktop + Mobile
9. Framer Motion 动画

先确保整个交互逻辑完整。

然后再逐步增加视觉细节。

请先生成完整项目并运行。

如果缺少插画素材：

先使用占位 SVG / CSS illustration。

不要因为缺图片而停下来。

所有 placeholder 都要方便以后替换。

最终目标：

我希望用户打开网站时，不是觉得：

“这是一个个人博客。”

而是觉得：

“这是一个可以探索的数字世界。”
```