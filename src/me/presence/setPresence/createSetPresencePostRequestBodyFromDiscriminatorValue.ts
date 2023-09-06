import { deserializeIntoSetPresencePostRequestBody } from './deserializeIntoSetPresencePostRequestBody';
import { type SetPresencePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetPresencePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetPresencePostRequestBody;
}
