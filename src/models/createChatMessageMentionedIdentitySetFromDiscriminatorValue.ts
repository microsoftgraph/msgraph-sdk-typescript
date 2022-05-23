import {ChatMessageMentionedIdentitySetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageMentionedIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageMentionedIdentitySetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageMentionedIdentitySetImpl();
}
