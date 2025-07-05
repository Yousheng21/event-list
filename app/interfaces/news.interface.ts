export interface INews {
  id: string;
  title: string;
  number: number;
  date: string;
  city: string;
  company: string;
  additional?: {
    title: string;
    keyWord: string;
  } 
}

export interface INewsDetail extends INews {
  author: string;
  description: string;
}