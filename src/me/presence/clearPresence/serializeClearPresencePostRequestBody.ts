import type {ClearPresencePostRequestBody} from './clearPresencePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClearPresencePostRequestBody(writer: SerializationWriter, clearPresencePostRequestBody: ClearPresencePostRequestBody | undefined = {} as ClearPresencePostRequestBody) : void {
        writer.writeStringValue("sessionId", clearPresencePostRequestBody.sessionId);
        writer.writeAdditionalData(clearPresencePostRequestBody.additionalData);
}
