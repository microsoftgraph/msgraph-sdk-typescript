import {ChatMessageReactionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageReactionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageReactionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageReactionCollectionResponse();
}
