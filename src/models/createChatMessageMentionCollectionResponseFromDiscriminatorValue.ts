import {ChatMessageMentionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageMentionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageMentionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageMentionCollectionResponse();
}
