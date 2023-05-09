import {deserializeIntoChatMessageFromIdentitySet} from './deserializeIntoChatMessageFromIdentitySet';
import {ChatMessageFromIdentitySet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageFromIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageFromIdentitySet;
}
