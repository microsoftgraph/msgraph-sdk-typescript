import {ChatMessageHostedContentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageHostedContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageHostedContentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageHostedContentCollectionResponseImpl();
}
