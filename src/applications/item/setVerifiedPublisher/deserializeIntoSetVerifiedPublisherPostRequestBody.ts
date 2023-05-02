import {SetVerifiedPublisherPostRequestBody} from './setVerifiedPublisherPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetVerifiedPublisherPostRequestBody(setVerifiedPublisherPostRequestBody: SetVerifiedPublisherPostRequestBody | undefined = {} as SetVerifiedPublisherPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "verifiedPublisherId": n => { setVerifiedPublisherPostRequestBody.verifiedPublisherId = n.getStringValue(); },
    }
}
