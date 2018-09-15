module.exports = {
  base: "/language-learning/",
  title: "Language Crack",
  description: "外语学习知识手册",
  themeConfig: {
    nav: [
      { text: "英语", link: "/english/" },
      { text: "日语", link: "/japanese/" },
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
          children: ["", "hearing", "reading", "writing"]
        }
      ],
      "/japanese/": [
        {
          title: "日语",
          collapsable: false,
          children: ["", "listening", "reading"]
        }
      ]
    },
    lastUpdated: "Last Updated",
    sidebarDepth: 2
  }
};
