import {Identity} from './identity';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkConversationIdentity extends Identity, Partial<Parsable> {
    /** Type of conversation. Possible values are: team, channel, and chat. */
    conversationIdentityType?: TeamworkConversationIdentityType | undefined;
}
