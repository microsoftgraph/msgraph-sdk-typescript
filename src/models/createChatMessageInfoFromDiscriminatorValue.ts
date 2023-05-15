import {deserializeIntoChatMessageInfo} from './deserializeIntoChatMessageInfo';
import {ChatMessageInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageInfo;
}
