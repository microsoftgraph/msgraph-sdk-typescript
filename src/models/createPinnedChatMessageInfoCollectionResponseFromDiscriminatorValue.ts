import {deserializeIntoPinnedChatMessageInfoCollectionResponse} from './deserializeIntoPinnedChatMessageInfoCollectionResponse';
import {PinnedChatMessageInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPinnedChatMessageInfoCollectionResponse;
}
