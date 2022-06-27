import {ChatRenamedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatRenamedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatRenamedEventMessageDetailImpl();
}
