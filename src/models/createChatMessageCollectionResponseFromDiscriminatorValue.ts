import { deserializeIntoChatMessageCollectionResponse } from './deserializeIntoChatMessageCollectionResponse';
import { type ChatMessageCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageCollectionResponse;
}
