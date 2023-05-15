import {deserializeIntoClearPresencePostRequestBody} from './deserializeIntoClearPresencePostRequestBody';
import {ClearPresencePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClearPresencePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClearPresencePostRequestBody;
}
