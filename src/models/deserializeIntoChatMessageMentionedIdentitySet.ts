import type {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {createTeamworkConversationIdentityFromDiscriminatorValue} from './createTeamworkConversationIdentityFromDiscriminatorValue';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {serializeTeamworkConversationIdentity} from './serializeTeamworkConversationIdentity';
import type {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageMentionedIdentitySet(chatMessageMentionedIdentitySet: ChatMessageMentionedIdentitySet | undefined = {} as ChatMessageMentionedIdentitySet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageMentionedIdentitySet),
        "conversation": n => { chatMessageMentionedIdentitySet.conversation = n.getObjectValue<TeamworkConversationIdentity>(createTeamworkConversationIdentityFromDiscriminatorValue); },
    }
}
