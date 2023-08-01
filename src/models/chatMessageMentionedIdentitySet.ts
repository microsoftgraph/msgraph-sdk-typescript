import type {IdentitySet} from './identitySet';
import type {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageMentionedIdentitySet extends IdentitySet, Parsable {
    /**
     * If present, represents a conversation (for example, team or channel) @mentioned in a message.
     */
    conversation?: TeamworkConversationIdentity | undefined;
}
