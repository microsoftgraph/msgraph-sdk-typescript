import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ArticleIndicator} from './articleIndicator';
import {ArticleIndicatorCollectionResponse} from './articleIndicatorCollectionResponse';
import {serializeArticleIndicator} from './serializeArticleIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArticleIndicatorCollectionResponse(writer: SerializationWriter, articleIndicatorCollectionResponse: ArticleIndicatorCollectionResponse | undefined = {} as ArticleIndicatorCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, articleIndicatorCollectionResponse)
        writer.writeCollectionOfObjectValues<ArticleIndicator>("value", articleIndicatorCollectionResponse.value, serializeArticleIndicator);
}
