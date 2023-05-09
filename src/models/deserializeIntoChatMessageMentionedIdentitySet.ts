import {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {createTeamworkConversationIdentityFromDiscriminatorValue} from './createTeamworkConversationIdentityFromDiscriminatorValue';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {serializeTeamworkConversationIdentity} from './serializeTeamworkConversationIdentity';
import {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageMentionedIdentitySet(chatMessageMentionedIdentitySet: ChatMessageMentionedIdentitySet | undefined = {} as ChatMessageMentionedIdentitySet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageMentionedIdentitySet),
        "conversation": n => { chatMessageMentionedIdentitySet.conversation = n.getObjectValue<TeamworkConversationIdentity>(createTeamworkConversationIdentityFromDiscriminatorValue); },
    }
}
