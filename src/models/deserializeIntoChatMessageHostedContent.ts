import { type ChatMessageHostedContent } from './chatMessageHostedContent';
import { deserializeIntoTeamworkHostedContent } from './deserializeIntoTeamworkHostedContent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageHostedContent(chatMessageHostedContent: ChatMessageHostedContent | undefined = {} as ChatMessageHostedContent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkHostedContent(chatMessageHostedContent),
    }
}
