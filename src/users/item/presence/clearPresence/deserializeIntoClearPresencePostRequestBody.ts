import { type ClearPresencePostRequestBody } from './clearPresencePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoClearPresencePostRequestBody(clearPresencePostRequestBody: ClearPresencePostRequestBody | undefined = {} as ClearPresencePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "sessionId": n => { clearPresencePostRequestBody.sessionId = n.getStringValue(); },
    }
}
