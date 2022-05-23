import {IdentitySet} from './identitySet';
import {TeamworkConversationIdentity} from './teamworkConversationIdentity';

export interface ChatMessageMentionedIdentitySet extends IdentitySet{
    /** If present, represents a conversation (for example, team or channel) @mentioned in a message. */
    conversation?:TeamworkConversationIdentity | undefined;
}
