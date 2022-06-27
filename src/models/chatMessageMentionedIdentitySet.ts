import {IdentitySet} from './identitySet';
import {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageMentionedIdentitySet extends Partial<AdditionalDataHolder>, IdentitySet, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If present, represents a conversation (for example, team or channel) @mentioned in a message. */
    conversation?: TeamworkConversationIdentity | undefined;
}
