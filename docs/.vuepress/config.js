module.exports = {
  base: "/language-learning/",
  title: "Language Crack",
  description: "外语学习知识手册",
  themeConfig: {
    head: [
      [
        "link",
        {
          rel: "icon",
          href: "./favicon.ico"
        }
      ]
    ],
    nav: [
      { text: "英语", link: "/english/" },
      { text: "日语", link: "/japanese/" },
      { text: "中文", link: "/chinese/" },
      { text: "翻译练习", link: "/practicalTranslation/" },
      {
        text: "GitHub",
        link: "https://github/Jecyu/language-learning"
      },
      {
        text: "English-level-up-tips-for-Chinese",
        link:
          "https://byoungd.gitbooks.io/english-level-up-tips-for-chinese/content/"
      }
    ],
    // sidebar: "auto",
    sidebar: {
      "/english/": [
        {
          title: "英语",
          collapsable: false,
          children: ["reading", "translate", "", "listening",  "writing" ]
        }
      ],
      "/japanese/": [
        {
          title: "日语",
          collapsable: false,
          children: ["", "listening", "reading"]
        }
      ],
      "/chinese/": [
        {
          title: "中文",
          collapsable: false,
          children: [""]
        }
      ],
      "/practicalTranslation/": [
        {
          title: "翻译练习",
          collapsable: false,
          children: [""]
        }
      ]
    },
    lastUpdated: "Last Updated",
    sidebarDepth: 2
  }
};
