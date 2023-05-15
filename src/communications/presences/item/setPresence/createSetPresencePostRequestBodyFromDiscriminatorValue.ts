import {deserializeIntoSetPresencePostRequestBody} from './deserializeIntoSetPresencePostRequestBody';
import {SetPresencePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPresencePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetPresencePostRequestBody;
}
