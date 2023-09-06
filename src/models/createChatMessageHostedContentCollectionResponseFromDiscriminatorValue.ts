import { deserializeIntoChatMessageHostedContentCollectionResponse } from './deserializeIntoChatMessageHostedContentCollectionResponse';
import { type ChatMessageHostedContentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageHostedContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageHostedContentCollectionResponse;
}
