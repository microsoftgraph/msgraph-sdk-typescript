import { deserializeIntoChat } from './deserializeIntoChat';
import { type Chat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChat;
}
