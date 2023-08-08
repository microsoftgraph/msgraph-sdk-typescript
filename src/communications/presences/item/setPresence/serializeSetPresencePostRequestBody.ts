import type {SetPresencePostRequestBody} from './setPresencePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function serializeSetPresencePostRequestBody(writer: SerializationWriter, setPresencePostRequestBody: SetPresencePostRequestBody | undefined = {} as SetPresencePostRequestBody) : void {
        writer.writeStringValue("activity", setPresencePostRequestBody.activity);
        writer.writeStringValue("availability", setPresencePostRequestBody.availability);
        writer.writeDurationValue("expirationDuration", setPresencePostRequestBody.expirationDuration);
        writer.writeStringValue("sessionId", setPresencePostRequestBody.sessionId);
        writer.writeAdditionalData(setPresencePostRequestBody.additionalData);
}
