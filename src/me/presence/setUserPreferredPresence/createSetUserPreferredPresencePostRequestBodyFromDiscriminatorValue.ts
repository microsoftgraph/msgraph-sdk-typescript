import { deserializeIntoSetUserPreferredPresencePostRequestBody } from './deserializeIntoSetUserPreferredPresencePostRequestBody';
import { type SetUserPreferredPresencePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetUserPreferredPresencePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetUserPreferredPresencePostRequestBody;
}
