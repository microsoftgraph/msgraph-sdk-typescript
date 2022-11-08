import {ChatMessageInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageInfo();
}
