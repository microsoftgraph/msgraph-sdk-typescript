import { deserializeIntoPinnedChatMessageInfoCollectionResponse } from './deserializeIntoPinnedChatMessageInfoCollectionResponse';
import { type PinnedChatMessageInfoCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPinnedChatMessageInfoCollectionResponse;
}
