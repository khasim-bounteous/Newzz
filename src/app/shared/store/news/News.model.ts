export interface SourceHeadlineModel {
    id: string
    name: string 
}

export interface HeadlineModel {
    id:string
    source: SourceHeadlineModel;
    author: string 
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}


export interface HeadLines {
    country: string,
    category: string,
    status: string,
    totalResults: number,
    articles: HeadlineModel[],
    pageSize: number,
    pageIndex: number
}

export interface SourceHeadlines {
    status: string,
    totalResults: number,
    articles: HeadlineModel[]
}

//*****************SOURCE****************/ 
export interface SourceModel {
    id: string 
    name: string 
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Sources{
    status: string
    sources: SourceModel[]
    language: string
    selectedSources: string[],
    pageSize: 20,
    pageIndex: 0
}

export interface ArticleModel {
    id:string
    source: SourceHeadlineModel;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

export interface Articles{
    status: string,
    totalResults: number,
    articles: ArticleModel[],
    query: string,
    sortBy: string,
    language: string,
    pageSize: number,
    pageIndex: number
}

export interface SaveNews{
    articles: ArticleModel[],
    headlines: HeadlineModel[],
}

