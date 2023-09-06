import { deserializeIntoChatRenamedEventMessageDetail } from './deserializeIntoChatRenamedEventMessageDetail';
import { type ChatRenamedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatRenamedEventMessageDetail;
}
