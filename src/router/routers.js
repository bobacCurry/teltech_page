import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {      
      title: '管理员',
      icon: 'md-ionitron',
      access: ['admin'],
    },
    component: Main,
    children: [
      {
        path: 'add-user',
        name: 'admin_add_user',
        meta: {
          title: '新增用户'
        },
        component: () => import('@/view/admin/add-user')
      },
      {
        path: 'chat',
        name: 'admin_chat',
        meta: {
          title: '群组审核'
        },
        component: () => import('@/view/admin/chat')
      },
      {
        path: 'order',
        name: 'admin_order',
        meta: {
          title: '订单审核'
        },
        component: () => import('@/view/admin/order')
      },
      {
        path: 'proxy',
        name: 'admin_proxy',
        meta: {
          title: '代理管理'
        },
        component: () => import('@/view/admin/proxy')
      }
    ]
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInBread: true,
      notCache: true,      
      title: '基础配置',
      icon: 'md-home'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/view/index/home')
      },
      {
        path: 'client',
        name: 'client',
        meta: {
          title: '绑定TG账号'
        },
        component: () => import('@/view/index/client.vue')
      },
      {
        path: '/add_chat',
        name: 'add_chat',
        meta: {
          title: '自动加群 (vip专属)'
        },
        component: () => import('@/view/index/add-chat.vue')
      },
      {
        path: '/user_setting',
        name: 'user_setting',
        meta: {
          hideInMenu: true,
          title: '用户设置'
        },
        component: () => import('@/view/index/user-setting.vue')
      }
    ]
  },
  {
    path: '/service_system',
    name: 'service_system',
    meta: {
      icon: 'logo-buffer',
      title: '服务项目'
    },
    component: Main,
    children: [
      {
        path: 'group',
        name: 'service_group',
        meta: {
          title: '广告定时群发'
        },
        component: () => import('@/view/service/group.vue')
      },
      {
        path: 'personal',
        name: 'service_person',
        meta: {
          title: '广告批量私发'
        },
        component: () => import('@/view/service/person.vue')
      },
      {
        path: 'chat',
        name: 'service_chat',
        meta: {
          title: '群组创建管理'
        },
        component: () => import('@/view/service/chat.vue')
      }
    ]
  },
  {
    path: '/share',
    name: 'share',
    meta: {
      title: '资源共享',
      icon: 'ios-book'
    },
    component: Main,
    children: [
      {
        path: 'chat',
        name: 'share_chat',
        meta: {
          title: '群资源共享'
        },
        component: () => import('@/view/share/chat.vue')
      },
      {
        path: 'bot',
        name: 'share_bot',
        meta: {
          title: '机器人资源共享'
        },
        component: () => import('@/view/share/bot.vue')
      }
    ]
  },
  {
    path: '/deal',
    name: 'deal',
    meta: {
      title: '订单|服务',
      icon: 'ios-book'
    },
    component: Main,
    children: [
      {
        path: 'service',
        name: 'deal_service',
        meta: {
          title: '服务列表'
        },
        component: () => import('@/view/deal/service.vue')
      },
      {
        path: 'service-detail/:_id',
        name: 'deal_service-detail',
        meta: { title: '服务详情',hideInMenu: true },
        component: () => import('@/view/deal/group-detail.vue')
      },
      {
        path: 'order',
        name: 'deal_order',
        meta: {
          title: '订单列表'
        },
        component: () => import('@/view/deal/order.vue')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/index/message/index.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
  // {
  //   path: '/components',
  //   name: 'components',
  //   meta: {
  //     icon: 'logo-buffer',
  //     title: '组件'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'tree_select_page',
  //       name: 'tree_select_page',
  //       meta: {
  //         icon: 'md-arrow-dropdown-circle',
  //         title: '树状下拉选择器'
  //       },
  //       component: () => import('@/view/components/tree-select/index.vue')
  //     },
  //     {
  //       path: 'count_to_page',
  //       name: 'count_to_page',
  //       meta: {
  //         icon: 'md-trending-up',
  //         title: '数字渐变'
  //       },
  //       component: () => import('@/view/components/count-to/count-to.vue')
  //     },
  //     {
  //       path: 'drag_list_page',
  //       name: 'drag_list_page',
  //       meta: {
  //         icon: 'ios-infinite',
  //         title: '拖拽列表'
  //       },
  //       component: () => import('@/view/components/drag-list/drag-list.vue')
  //     },
  //     {
  //       path: 'drag_drawer_page',
  //       name: 'drag_drawer_page',
  //       meta: {
  //         icon: 'md-list',
  //         title: '可拖拽抽屉'
  //       },
  //       component: () => import('@/view/components/drag-drawer')
  //     },
  //     {
  //       path: 'org_tree_page',
  //       name: 'org_tree_page',
  //       meta: {
  //         icon: 'ios-people',
  //         title: '组织结构树'
  //       },
  //       component: () => import('@/view/components/org-tree')
  //     },
  //     {
  //       path: 'tree_table_page',
  //       name: 'tree_table_page',
  //       meta: {
  //         icon: 'md-git-branch',
  //         title: '树状表格'
  //       },
  //       component: () => import('@/view/components/tree-table/index.vue')
  //     },
  //     {
  //       path: 'cropper_page',
  //       name: 'cropper_page',
  //       meta: {
  //         icon: 'md-crop',
  //         title: '图片裁剪'
  //       },
  //       component: () => import('@/view/components/cropper/cropper.vue')
  //     },
  //     {
  //       path: 'tables_page',
  //       name: 'tables_page',
  //       meta: {
  //         icon: 'md-grid',
  //         title: '多功能表格'
  //       },
  //       component: () => import('@/view/components/tables/tables.vue')
  //     },
  //     {
  //       path: 'split_pane_page',
  //       name: 'split_pane_page',
  //       meta: {
  //         icon: 'md-pause',
  //         title: '分割窗口'
  //       },
  //       component: () => import('@/view/components/split-pane/split-pane.vue')
  //     },
  //     {
  //       path: 'markdown_page',
  //       name: 'markdown_page',
  //       meta: {
  //         icon: 'logo-markdown',
  //         title: 'Markdown编辑器'
  //       },
  //       component: () => import('@/view/components/markdown/markdown.vue')
  //     },
  //     {
  //       path: 'editor_page',
  //       name: 'editor_page',
  //       meta: {
  //         icon: 'ios-create',
  //         title: '富文本编辑器'
  //       },
  //       component: () => import('@/view/components/editor/editor.vue')
  //     },
  //     {
  //       path: 'icons_page',
  //       name: 'icons_page',
  //       meta: {
  //         icon: '_bear',
  //         title: '自定义图标'
  //       },
  //       component: () => import('@/view/components/icons/icons.vue')
  //     }
  //   ]
  // }
]
