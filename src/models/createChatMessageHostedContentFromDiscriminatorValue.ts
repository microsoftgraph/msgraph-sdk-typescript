import {ChatMessageHostedContentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageHostedContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageHostedContentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageHostedContentImpl();
}
