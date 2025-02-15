/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SignUpIndexImport } from './routes/sign-up/index'
import { Route as SignInIndexImport } from './routes/sign-in/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SignUpIndexRoute = SignUpIndexImport.update({
  id: '/sign-up/',
  path: '/sign-up/',
  getParentRoute: () => rootRoute,
} as any)

const SignInIndexRoute = SignInIndexImport.update({
  id: '/sign-in/',
  path: '/sign-in/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/sign-in/': {
      id: '/sign-in/'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof SignInIndexImport
      parentRoute: typeof rootRoute
    }
    '/sign-up/': {
      id: '/sign-up/'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof SignUpIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/sign-in': typeof SignInIndexRoute
  '/sign-up': typeof SignUpIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/sign-in': typeof SignInIndexRoute
  '/sign-up': typeof SignUpIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/sign-in/': typeof SignInIndexRoute
  '/sign-up/': typeof SignUpIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dashboard' | '/sign-in' | '/sign-up'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dashboard' | '/sign-in' | '/sign-up'
  id: '__root__' | '/' | '/dashboard/' | '/sign-in/' | '/sign-up/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  SignInIndexRoute: typeof SignInIndexRoute
  SignUpIndexRoute: typeof SignUpIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  SignInIndexRoute: SignInIndexRoute,
  SignUpIndexRoute: SignUpIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard/",
        "/sign-in/",
        "/sign-up/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/sign-in/": {
      "filePath": "sign-in/index.tsx"
    },
    "/sign-up/": {
      "filePath": "sign-up/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
