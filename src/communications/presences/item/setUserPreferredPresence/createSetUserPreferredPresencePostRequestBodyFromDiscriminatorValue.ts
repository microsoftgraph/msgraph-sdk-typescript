import {deserializeIntoSetUserPreferredPresencePostRequestBody} from './deserializeIntoSetUserPreferredPresencePostRequestBody';
import {SetUserPreferredPresencePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetUserPreferredPresencePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetUserPreferredPresencePostRequestBody;
}
