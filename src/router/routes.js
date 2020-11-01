import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";
import Playground from "../pages/Playground.vue";

import MessageIndex from "../pages/message/Index.vue";
import MessageShow from "../pages/message/Show.vue";

import ArticleIndex from "../pages/article/Index.vue";
import ArticleNew from "../pages/article/New.vue";
import ArticleShow from "../pages/article/Show.vue";
import ArticleEdit from "../pages/article/Edit.vue";

import ProjectIndex from "../pages/project/Index.vue";
import ProjectNew from "../pages/project/New.vue";
import ProjectShow from "../pages/project/Show.vue";
import ProjectEdit from "../pages/project/Edit.vue";

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
    component: Home,
  },
];
