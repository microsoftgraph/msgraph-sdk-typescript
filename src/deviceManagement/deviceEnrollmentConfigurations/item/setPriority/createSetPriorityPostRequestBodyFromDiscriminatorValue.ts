import {deserializeIntoSetPriorityPostRequestBody} from './deserializeIntoSetPriorityPostRequestBody';
import {SetPriorityPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPriorityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetPriorityPostRequestBody;
}
