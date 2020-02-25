export interface LiveCommentaryFeedItem {
  id: number;
  minute: number;
  message: string;
}

export type LiveCommentaryFeed = LiveCommentaryFeedItem[];
