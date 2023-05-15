import {deserializeIntoSetVerifiedPublisherPostRequestBody} from './deserializeIntoSetVerifiedPublisherPostRequestBody';
import {SetVerifiedPublisherPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetVerifiedPublisherPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetVerifiedPublisherPostRequestBody;
}
