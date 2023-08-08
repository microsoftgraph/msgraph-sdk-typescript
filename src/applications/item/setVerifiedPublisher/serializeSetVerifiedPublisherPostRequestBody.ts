import type {SetVerifiedPublisherPostRequestBody} from './setVerifiedPublisherPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetVerifiedPublisherPostRequestBody(writer: SerializationWriter, setVerifiedPublisherPostRequestBody: SetVerifiedPublisherPostRequestBody | undefined = {} as SetVerifiedPublisherPostRequestBody) : void {
        writer.writeStringValue("verifiedPublisherId", setVerifiedPublisherPostRequestBody.verifiedPublisherId);
        writer.writeAdditionalData(setVerifiedPublisherPostRequestBody.additionalData);
}
