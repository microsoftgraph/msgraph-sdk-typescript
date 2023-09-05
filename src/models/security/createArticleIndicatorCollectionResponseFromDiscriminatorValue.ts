import { deserializeIntoArticleIndicatorCollectionResponse } from './deserializeIntoArticleIndicatorCollectionResponse';
import { type ArticleIndicatorCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createArticleIndicatorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArticleIndicatorCollectionResponse;
}
