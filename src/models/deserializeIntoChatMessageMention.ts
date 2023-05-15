import {ChatMessageMention} from './chatMessageMention';
import {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {createChatMessageMentionedIdentitySetFromDiscriminatorValue} from './createChatMessageMentionedIdentitySetFromDiscriminatorValue';
import {serializeChatMessageMentionedIdentitySet} from './serializeChatMessageMentionedIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageMention(chatMessageMention: ChatMessageMention | undefined = {} as ChatMessageMention) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { chatMessageMention.id = n.getNumberValue(); },
        "mentioned": n => { chatMessageMention.mentioned = n.getObjectValue<ChatMessageMentionedIdentitySet>(createChatMessageMentionedIdentitySetFromDiscriminatorValue); },
        "mentionText": n => { chatMessageMention.mentionText = n.getStringValue(); },
        "@odata.type": n => { chatMessageMention.odataType = n.getStringValue(); },
    }
}
