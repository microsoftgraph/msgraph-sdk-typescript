import {deserializeIntoChatMessageHostedContent} from './deserializeIntoChatMessageHostedContent';
import {ChatMessageHostedContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageHostedContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageHostedContent;
}
