import { deserializeIntoArticleCollectionResponse } from './deserializeIntoArticleCollectionResponse';
import { type ArticleCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createArticleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArticleCollectionResponse;
}
