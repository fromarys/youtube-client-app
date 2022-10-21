export interface IThumbnailsItem {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnails {
  default: IThumbnailsItem;
  medium: IThumbnailsItem;
  high: IThumbnailsItem;
  standard: IThumbnailsItem;
  maxres: IThumbnailsItem;
}

export interface ILocalized {
  title: string;
  description: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
  defaultLanguage: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IId {
  kind: string,
  videoId: string,
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: IStatistics;
}
