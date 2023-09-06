import { type ChatMessageMention } from './chatMessageMention';
import { type ChatMessageMentionedIdentitySet } from './chatMessageMentionedIdentitySet';
import { serializeChatMessageMentionedIdentitySet } from './serializeChatMessageMentionedIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessageMention(writer: SerializationWriter, chatMessageMention: ChatMessageMention | undefined = {} as ChatMessageMention) : void {
        writer.writeNumberValue("id", chatMessageMention.id);
        writer.writeObjectValue<ChatMessageMentionedIdentitySet>("mentioned", chatMessageMention.mentioned, serializeChatMessageMentionedIdentitySet);
        writer.writeStringValue("mentionText", chatMessageMention.mentionText);
        writer.writeStringValue("@odata.type", chatMessageMention.odataType);
        writer.writeAdditionalData(chatMessageMention.additionalData);
}
