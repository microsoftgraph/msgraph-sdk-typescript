import { type MutePostRequestBody } from './mutePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMutePostRequestBody(writer: SerializationWriter, mutePostRequestBody: MutePostRequestBody | undefined = {} as MutePostRequestBody) : void {
        writer.writeStringValue("clientContext", mutePostRequestBody.clientContext);
        writer.writeAdditionalData(mutePostRequestBody.additionalData);
}
