export interface AnimalEntry {
  meta: {
    name: string;
    slug: string;
    tags: never[];
    type: string;
    uuid: string;
    space: string;
    author: object;
    locale: string;
    excerpt: string;
    private: boolean;
    targets: never[];
    category: null;
    created_at: string;
    updated_at: string;
    published_at: string;
    unpublish_at: null;
    version_type: string;
    category_name: null;
    category_slug: null;
    available_locales: string[];
  };
  fields: {
    image: {
      url: string;
      tags: never[];
      uuid: string;
      title: string;
      alt_text: null;
      description: null;
      content_type: string;
    };
  };
}

export interface AnimalsResponse {
  entries: AnimalEntry[];
  meta: {
    total_entries: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
}
