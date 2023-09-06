import { deserializeIntoClearPresencePostRequestBody } from './deserializeIntoClearPresencePostRequestBody';
import { type ClearPresencePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createClearPresencePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClearPresencePostRequestBody;
}
