export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  taglist: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
  };
};

export type ArticlesResponse = {
  articles: Article[];
};
