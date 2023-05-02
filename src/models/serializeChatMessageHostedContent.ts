import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {serializeTeamworkHostedContent} from './serializeTeamworkHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageHostedContent(writer: SerializationWriter, chatMessageHostedContent: ChatMessageHostedContent | undefined = {} as ChatMessageHostedContent) : void {
        serializeTeamworkHostedContent(writer, chatMessageHostedContent)
}
