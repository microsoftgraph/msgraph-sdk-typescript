import {Identity} from './identity';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkConversationIdentity extends Identity, Parsable {
    /**
     * Type of conversation. Possible values are: team, channel, chat, and unknownFutureValue.
     */
    conversationIdentityType?: TeamworkConversationIdentityType | undefined;
}
