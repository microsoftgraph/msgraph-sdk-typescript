import {deserializeIntoReceivedPostRequestBody} from './deserializeIntoReceivedPostRequestBody';
import {ReceivedPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReceivedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReceivedPostRequestBody;
}
