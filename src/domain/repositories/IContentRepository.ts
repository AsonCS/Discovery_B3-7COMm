import type { PageContent } from "../entities/Content"

export interface IContentRepository {
  getPageContent(pageId: string): Promise<PageContent>
}
