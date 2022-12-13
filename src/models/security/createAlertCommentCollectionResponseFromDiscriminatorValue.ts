import {AlertCommentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertCommentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertCommentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertCommentCollectionResponse();
}
