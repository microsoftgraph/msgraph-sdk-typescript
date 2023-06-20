import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {serializeTeamworkHostedContent} from './serializeTeamworkHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageHostedContent(chatMessageHostedContent: ChatMessageHostedContent | undefined = {} as ChatMessageHostedContent, writer: SerializationWriter) : void {
        serializeTeamworkHostedContent(writer, chatMessageHostedContent)
}
