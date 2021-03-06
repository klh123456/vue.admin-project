//全部菜单
export const menu = [
  {
    icon: "el-icon-news",
    index: "home",
    title: "首页"
  },
  {
    icon: "el-icon-edit",
    index: "icon",
    title: "图表",
    subs: [
      {
        index: "element",
        title: "element"
      },
      {
        index: "iconfont",
        title: "iconfont"
      }
    ]
  },
  {
    icon: "el-icon-setting",
    index: "component",
    title: "组件",
    subs: [
      {
        index: "editor",
        title: "富文本编译器"
      },
      {
        index: "countTo",
        title: "数字滚动"
      },
      {
        index: "trees",
        title: "树形控件",
        icon: "el-icon-share",
        subs: [
          {
            index: "customTree",
            title: "自定义树"
          },
          {
            index: "treeSelect",
            title: "下拉树"
          }
        ]
      }
    ]
  },
  {
    icon: "el-icon-rank",
    index: "draggable",
    title: "拖拽",
    subs: [
      {
        index: "draglist",
        title: "拖拽列表"
      },
      {
        index: "dragtable",
        title: "拖拽表格"
      }
    ]
  },
  {
    icon: "el-icon-document",
    index: "charts",
    title: "图表",
    subs: [
      {
        index: "cricle",
        title: "饼图"
      }
    ]
  },
  {
    icon: "el-icon-folder",
    index: "formDesign",
    title: "表单生成器"
  },
  {
    icon: "el-icon-question",
    index: "permission",
    title: "权限",
    subs: [
      {
        index: "permissionMenu",
        title: "菜单测试",
        meta: {
          roles: ["admin"]
        }
      },
      {
        index: "permissionBtn",
        title: "按钮测试"
      }
    ]
  },
  {
    icon: "el-icon-warning",
    index: "error",
    title: "错误页面",
    subs: [
      {
        index: "404",
        title: "404"
      }
    ]
  },
  {
    icon: "el-icon-mobile-phone",
    index: "https://github.com/zhuyihe/vue-admin-project",
    title: "外部链接"
  }
];
