import { type SetPresencePostRequestBody } from './setPresencePostRequestBody';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetPresencePostRequestBody(setPresencePostRequestBody: SetPresencePostRequestBody | undefined = {} as SetPresencePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "activity": n => { setPresencePostRequestBody.activity = n.getStringValue(); },
        "availability": n => { setPresencePostRequestBody.availability = n.getStringValue(); },
        "expirationDuration": n => { setPresencePostRequestBody.expirationDuration = n.getDurationValue(); },
        "sessionId": n => { setPresencePostRequestBody.sessionId = n.getStringValue(); },
    }
}
