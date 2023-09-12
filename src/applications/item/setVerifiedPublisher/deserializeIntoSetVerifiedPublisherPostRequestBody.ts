import { type SetVerifiedPublisherPostRequestBody } from './setVerifiedPublisherPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetVerifiedPublisherPostRequestBody(setVerifiedPublisherPostRequestBody: SetVerifiedPublisherPostRequestBody | undefined = {} as SetVerifiedPublisherPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "verifiedPublisherId": n => { setVerifiedPublisherPostRequestBody.verifiedPublisherId = n.getStringValue(); },
    }
}
