import { deserializeIntoArticleIndicator } from './deserializeIntoArticleIndicator';
import { type ArticleIndicator } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createArticleIndicatorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArticleIndicator;
}
