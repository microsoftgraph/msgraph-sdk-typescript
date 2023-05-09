import {deserializeIntoChatRenamedEventMessageDetail} from './deserializeIntoChatRenamedEventMessageDetail';
import {ChatRenamedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatRenamedEventMessageDetail;
}
