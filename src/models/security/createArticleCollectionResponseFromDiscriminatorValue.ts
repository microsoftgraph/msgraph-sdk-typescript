import {deserializeIntoArticleCollectionResponse} from './deserializeIntoArticleCollectionResponse';
import {ArticleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArticleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArticleCollectionResponse;
}
