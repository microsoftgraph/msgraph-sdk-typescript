import {Identity} from './identity';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';

export interface TeamworkConversationIdentity extends Identity{
    /** Type of conversation. Possible values are: team, channel, and chat. */
    conversationIdentityType?:TeamworkConversationIdentityType | undefined;
}
