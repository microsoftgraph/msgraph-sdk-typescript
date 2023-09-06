import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type Article } from './article';
import { type ArticleCollectionResponse } from './articleCollectionResponse';
import { serializeArticle } from './serializeArticle';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeArticleCollectionResponse(writer: SerializationWriter, articleCollectionResponse: ArticleCollectionResponse | undefined = {} as ArticleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, articleCollectionResponse)
        writer.writeCollectionOfObjectValues<Article>("value", articleCollectionResponse.value, serializeArticle);
}
