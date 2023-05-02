import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {deserializeIntoTeamworkHostedContent} from './deserializeIntoTeamworkHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageHostedContent(chatMessageHostedContent: ChatMessageHostedContent | undefined = {} as ChatMessageHostedContent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkHostedContent(chatMessageHostedContent),
    }
}
