import type {SetUserPreferredPresencePostRequestBody} from './setUserPreferredPresencePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetUserPreferredPresencePostRequestBody(setUserPreferredPresencePostRequestBody: SetUserPreferredPresencePostRequestBody | undefined = {} as SetUserPreferredPresencePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "activity": n => { setUserPreferredPresencePostRequestBody.activity = n.getStringValue(); },
        "availability": n => { setUserPreferredPresencePostRequestBody.availability = n.getStringValue(); },
        "expirationDuration": n => { setUserPreferredPresencePostRequestBody.expirationDuration = n.getDurationValue(); },
    }
}
