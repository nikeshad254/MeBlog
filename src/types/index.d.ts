export type TAppwritePost = {
  $id?: string;
  title: string;
  content: string;
  slug: string;
  featuredImage: string;
  status?: string;
  userId?: string;
};

export type TAppwriteUser = {
  name?: string;
  email: string;
  password: string;
};
