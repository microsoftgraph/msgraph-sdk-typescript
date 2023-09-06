import { type SubscribeToTonePostRequestBody } from './subscribeToTonePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubscribeToTonePostRequestBody(writer: SerializationWriter, subscribeToTonePostRequestBody: SubscribeToTonePostRequestBody | undefined = {} as SubscribeToTonePostRequestBody) : void {
        writer.writeStringValue("clientContext", subscribeToTonePostRequestBody.clientContext);
        writer.writeAdditionalData(subscribeToTonePostRequestBody.additionalData);
}
