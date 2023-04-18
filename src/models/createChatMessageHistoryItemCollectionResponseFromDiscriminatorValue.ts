import {ChatMessageHistoryItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageHistoryItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageHistoryItemCollectionResponse();
}
