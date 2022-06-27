import {Identity} from './identity';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkConversationIdentity extends Partial<AdditionalDataHolder>, Identity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Type of conversation. Possible values are: team, channel, and chat. */
    conversationIdentityType?: TeamworkConversationIdentityType | undefined;
}
