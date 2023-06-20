import {ChatMessageMention} from './chatMessageMention';
import {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {serializeChatMessageMentionedIdentitySet} from './serializeChatMessageMentionedIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageMention(chatMessageMention: ChatMessageMention | undefined = {} as ChatMessageMention, writer: SerializationWriter) : void {
        writer.writeNumberValue("id", chatMessageMention.id);
        writer.writeObjectValue<ChatMessageMentionedIdentitySet>("mentioned", chatMessageMention.mentioned, serializeChatMessageMentionedIdentitySet);
        writer.writeStringValue("mentionText", chatMessageMention.mentionText);
        writer.writeStringValue("@odata.type", chatMessageMention.odataType);
        writer.writeAdditionalData(chatMessageMention.additionalData);
}
