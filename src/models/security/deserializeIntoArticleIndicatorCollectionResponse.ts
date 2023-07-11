import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {ArticleIndicator} from './articleIndicator';
import {ArticleIndicatorCollectionResponse} from './articleIndicatorCollectionResponse';
import {createArticleIndicatorFromDiscriminatorValue} from './createArticleIndicatorFromDiscriminatorValue';
import {serializeArticleIndicator} from './serializeArticleIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArticleIndicatorCollectionResponse(articleIndicatorCollectionResponse: ArticleIndicatorCollectionResponse | undefined = {} as ArticleIndicatorCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(articleIndicatorCollectionResponse),
        "value": n => { articleIndicatorCollectionResponse.value = n.getCollectionOfObjectValues<ArticleIndicator>(createArticleIndicatorFromDiscriminatorValue); },
    }
}
