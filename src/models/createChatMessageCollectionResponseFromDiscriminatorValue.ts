import {ChatMessageCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageCollectionResponseImpl();
}
