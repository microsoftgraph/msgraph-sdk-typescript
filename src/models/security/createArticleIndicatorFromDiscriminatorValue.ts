import {deserializeIntoArticleIndicator} from './deserializeIntoArticleIndicator';
import {ArticleIndicator} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArticleIndicatorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArticleIndicator;
}
