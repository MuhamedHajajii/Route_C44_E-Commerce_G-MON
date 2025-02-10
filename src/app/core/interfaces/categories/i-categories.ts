export interface ICategories {
  results: number;
  metadata: Metadata;
  data: ICategoriesArr[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}

export interface ICategoriesArr {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
