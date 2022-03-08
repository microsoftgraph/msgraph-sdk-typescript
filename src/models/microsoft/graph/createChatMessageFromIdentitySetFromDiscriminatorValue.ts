import {ChatMessageFromIdentitySet} from './chatMessageFromIdentitySet';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageFromIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageFromIdentitySet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageFromIdentitySet();
}
