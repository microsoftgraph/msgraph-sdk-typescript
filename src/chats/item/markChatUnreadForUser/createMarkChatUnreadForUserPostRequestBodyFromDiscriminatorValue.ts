import {deserializeIntoMarkChatUnreadForUserPostRequestBody} from './deserializeIntoMarkChatUnreadForUserPostRequestBody';
import {MarkChatUnreadForUserPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkChatUnreadForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkChatUnreadForUserPostRequestBody;
}
