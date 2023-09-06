import { deserializeIntoArticle } from './deserializeIntoArticle';
import { type Article } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createArticleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArticle;
}
