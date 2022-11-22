import {MarkChatUnreadForUserPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkChatUnreadForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkChatUnreadForUserPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkChatUnreadForUserPostRequestBody();
}
