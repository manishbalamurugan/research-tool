export interface Category {
  id: string;
  name: string;
  description?: string;
  color?: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface Paper {
  id: string;
  title: string;
  abstract?: string;
  authors: string[];
  year: number;
  citations?: number;
  impact?: 'high' | 'low';
  url?: string;
  topics?: string[];
  category_id?: string;
  category?: {
    id: string;
    name: string;
    color?: string;
  };
  user_id?: string;
  created_at?: string;
  updated_at?: string;
  scheduled_date?: string;
  estimated_time?: number;
  repeat?: 'daily' | 'weekly' | 'monthly' | 'none';
}

export interface Annotation {
  id: string;
  content: string;
  paper_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  highlight_text?: string;
  highlight_position?: {
    boundingRect: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      width: number;
      height: number;
      pageNumber: number;
    };
    rects: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      width: number;
      height: number;
      pageNumber: number;
    }>;
    pageNumber: number;
  };
  chat_history?: Array<{
    role: "user" | "assistant" | "system";
    content: string;
    timestamp: string;
    annotationId?: string;
    highlightText?: string;
    isStreaming?: boolean;
  }>;
}

export interface Board {
  id: string;
  title: string;
  description?: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface BoardItem {
  id: string;
  board_id: string;
  paper_id: string;
  position?: any;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface ReadingListItem {
  id: string;
  paper_id: string;
  user_id: string;
  added_at: string;
  scheduled_date?: string;
  estimated_time?: number;
  status?: 'unread' | 'in_progress' | 'completed';
  repeat?: 'daily' | 'weekly' | 'monthly' | 'none';
  updated_at?: string;
}

export interface DbResult<T> {
  data: T | null;
  error: Error | null;
}

export interface DbArrayResult<T> {
  data: T[] | null;
  error: Error | null;
}

export interface DiscoveredPaper {
  id: string;
  title: string;
  authors: string[];
  abstract?: string;
  url: string;
  year: number;
  citations?: number;
  impact?: 'high' | 'low';
  topics?: string[];
  source: 'recommendations' | 'trending_search';
  user_id: string;
  discovered_at: string;
} 