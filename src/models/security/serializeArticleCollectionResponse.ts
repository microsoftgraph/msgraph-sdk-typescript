import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Article} from './article';
import {ArticleCollectionResponse} from './articleCollectionResponse';
import {serializeArticle} from './serializeArticle';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArticleCollectionResponse(writer: SerializationWriter, articleCollectionResponse: ArticleCollectionResponse | undefined = {} as ArticleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, articleCollectionResponse)
        writer.writeCollectionOfObjectValues<Article>("value", articleCollectionResponse.value, serializeArticle);
}
