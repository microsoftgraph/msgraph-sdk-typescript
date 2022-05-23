import {ChatMessageMentionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageMentionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageMentionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageMentionImpl();
}
