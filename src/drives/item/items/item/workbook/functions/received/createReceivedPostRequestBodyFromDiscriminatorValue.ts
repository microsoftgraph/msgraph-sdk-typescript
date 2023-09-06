import { deserializeIntoReceivedPostRequestBody } from './deserializeIntoReceivedPostRequestBody';
import { type ReceivedPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReceivedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReceivedPostRequestBody;
}
