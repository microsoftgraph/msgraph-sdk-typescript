import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import type {Article} from './article';
import type {ArticleCollectionResponse} from './articleCollectionResponse';
import {createArticleFromDiscriminatorValue} from './createArticleFromDiscriminatorValue';
import {serializeArticle} from './serializeArticle';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArticleCollectionResponse(articleCollectionResponse: ArticleCollectionResponse | undefined = {} as ArticleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(articleCollectionResponse),
        "value": n => { articleCollectionResponse.value = n.getCollectionOfObjectValues<Article>(createArticleFromDiscriminatorValue); },
    }
}
