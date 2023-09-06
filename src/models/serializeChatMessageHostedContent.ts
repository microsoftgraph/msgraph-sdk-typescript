import { type ChatMessageHostedContent } from './chatMessageHostedContent';
import { serializeTeamworkHostedContent } from './serializeTeamworkHostedContent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessageHostedContent(writer: SerializationWriter, chatMessageHostedContent: ChatMessageHostedContent | undefined = {} as ChatMessageHostedContent) : void {
        serializeTeamworkHostedContent(writer, chatMessageHostedContent)
}
