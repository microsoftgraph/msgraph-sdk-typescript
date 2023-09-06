import { deserializeIntoChatMessageHostedContent } from './deserializeIntoChatMessageHostedContent';
import { type ChatMessageHostedContent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageHostedContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageHostedContent;
}
