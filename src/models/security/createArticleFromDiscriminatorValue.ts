import {deserializeIntoArticle} from './deserializeIntoArticle';
import {Article} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArticleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArticle;
}
