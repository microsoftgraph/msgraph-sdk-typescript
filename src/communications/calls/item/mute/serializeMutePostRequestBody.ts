import type {MutePostRequestBody} from './mutePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMutePostRequestBody(writer: SerializationWriter, mutePostRequestBody: MutePostRequestBody | undefined = {} as MutePostRequestBody) : void {
        writer.writeStringValue("clientContext", mutePostRequestBody.clientContext);
        writer.writeAdditionalData(mutePostRequestBody.additionalData);
}
