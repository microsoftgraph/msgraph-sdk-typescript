import {SubscribeToTonePostRequestBody} from './subscribeToTonePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscribeToTonePostRequestBody(writer: SerializationWriter, subscribeToTonePostRequestBody: SubscribeToTonePostRequestBody | undefined = {} as SubscribeToTonePostRequestBody) : void {
        writer.writeStringValue("clientContext", subscribeToTonePostRequestBody.clientContext);
        writer.writeAdditionalData(subscribeToTonePostRequestBody.additionalData);
}
