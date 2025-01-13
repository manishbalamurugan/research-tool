export const routes = {
  home: "/",
  recent: "/recent",
  readingList: "/reading-list",
  discover: "/discover",
  category: {
    index: "/category",
    view: (slug: string) => `/category/${slug}`,
    new: "/category/new",
  },
  paper: {
    view: (id: string) => `/paper/${id}`,
  },
  canvas: {
    view: (id: string) => `/canvas/${id}`,
    new: (categoryId: string) => `/category/${categoryId}/canvas/new`,
  },
} as const;

export type AppRoutes = typeof routes; 