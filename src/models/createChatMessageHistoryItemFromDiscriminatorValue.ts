import {ChatMessageHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageHistoryItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageHistoryItem();
}
