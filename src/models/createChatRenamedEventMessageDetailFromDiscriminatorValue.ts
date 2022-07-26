import {ChatRenamedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatRenamedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatRenamedEventMessageDetail();
}
