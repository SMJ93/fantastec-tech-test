export interface LiveCommentaryFeedItem {
  id: number;
  minute: number;
  message: string;
}

export interface LiveCommentaryKeyMoment {
  id: number;
  minute: number;
  message: string;
}

export interface LiveCommentaryFeedResponse {
  feed: LiveCommentaryFeedItem[];
  keyMoments: LiveCommentaryKeyMoment[];
}
