import {ClearPresencePostRequestBody} from './clearPresencePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClearPresencePostRequestBody(clearPresencePostRequestBody: ClearPresencePostRequestBody | undefined = {} as ClearPresencePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("sessionId", clearPresencePostRequestBody.sessionId);
        writer.writeAdditionalData(clearPresencePostRequestBody.additionalData);
}
