import {PinnedChatMessageInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PinnedChatMessageInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PinnedChatMessageInfoCollectionResponse();
}
