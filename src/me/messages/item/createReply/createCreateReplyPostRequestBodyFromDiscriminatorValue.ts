import {deserializeIntoCreateReplyPostRequestBody} from './deserializeIntoCreateReplyPostRequestBody';
import {CreateReplyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateReplyPostRequestBody;
}
