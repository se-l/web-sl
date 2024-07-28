export class Article {
  route: string;
  title: string;
  description: string;
  id: string;
  category: string;
  tags: string[];
  date: string;

  constructor(route: string, title: string, description: string, id: string, category: string, tags: string[], date: string) {
    this.route = route
    this.title = title;
    this.description = description;
    this.id = id;
    this.category = category;
    this.tags = tags;
    this.date = date;
  }
}