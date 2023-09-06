import { deserializeIntoSetVerifiedPublisherPostRequestBody } from './deserializeIntoSetVerifiedPublisherPostRequestBody';
import { type SetVerifiedPublisherPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetVerifiedPublisherPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetVerifiedPublisherPostRequestBody;
}
