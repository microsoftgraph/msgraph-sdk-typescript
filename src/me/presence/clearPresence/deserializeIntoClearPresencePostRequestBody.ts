import type {ClearPresencePostRequestBody} from './clearPresencePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClearPresencePostRequestBody(clearPresencePostRequestBody: ClearPresencePostRequestBody | undefined = {} as ClearPresencePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "sessionId": n => { clearPresencePostRequestBody.sessionId = n.getStringValue(); },
    }
}
