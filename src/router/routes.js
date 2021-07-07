const Home = () => import("../pages/Home.vue");
const Dashboard = () => import("../pages/Dashboard.vue");
const Playground = () => import("../pages/Playground.vue");
const PageNotFound = () => import("../pages/PageNotFound.vue");

const MessageIndex = () => import("../pages/message/Index.vue");
const MessageShow = () => import("../pages/message/Show.vue");

const ArticleIndex = () => import("../pages/article/Index.vue");
const ArticleNew = () => import("../pages/article/New.vue");
const ArticleShow = () => import("../pages/article/Show.vue");
const ArticleEdit = () => import("../pages/article/Edit.vue");

const ProjectIndex = () => import("../pages/project/Index.vue");
const ProjectNew = () => import("../pages/project/New.vue");
const ProjectShow = () => import("../pages/project/Show.vue");
const ProjectEdit = () => import("../pages/project/Edit.vue");

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requireGuest: true,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/messages",
    name: "Message",
    component: MessageIndex,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/messages/:id",
    name: "MessageShow",
    component: MessageShow,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/articles",
    name: "Article",
    component: ArticleIndex,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/articles/new",
    name: "ArticleNew",
    component: ArticleNew,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/articles/:slug",
    name: "ArticleShow",
    component: ArticleShow,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/articles/edit/:slug",
    name: "ArticleEdit",
    component: ArticleEdit,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/projects",
    name: "Project",
    component: ProjectIndex,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/projects/new",
    name: "ProjectNew",
    component: ProjectNew,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/projects/:slug",
    name: "ProjectShow",
    component: ProjectShow,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/projects/edit/:slug",
    name: "ProjectEdit",
    component: ProjectEdit,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/playground",
    name: "Playground",
    component: Playground,
  },
  {
    path: "*",
    name: "NotFound",
    component: PageNotFound,
  },
];
