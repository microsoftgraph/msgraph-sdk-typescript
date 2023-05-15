import {deserializeIntoCreateReplyAllPostRequestBody} from './deserializeIntoCreateReplyAllPostRequestBody';
import {CreateReplyAllPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyAllPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateReplyAllPostRequestBody;
}
