import {SetUserPreferredPresencePostRequestBody} from './setUserPreferredPresencePostRequestBody';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetUserPreferredPresencePostRequestBody(writer: SerializationWriter, setUserPreferredPresencePostRequestBody: SetUserPreferredPresencePostRequestBody | undefined = {} as SetUserPreferredPresencePostRequestBody) : void {
        writer.writeStringValue("activity", setUserPreferredPresencePostRequestBody.activity);
        writer.writeStringValue("availability", setUserPreferredPresencePostRequestBody.availability);
        writer.writeDurationValue("expirationDuration", setUserPreferredPresencePostRequestBody.expirationDuration);
        writer.writeAdditionalData(setUserPreferredPresencePostRequestBody.additionalData);
}
