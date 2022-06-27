import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationMemberRoleUpdatedEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Roles for the coversation member user. */
    conversationMemberRoles?: string[] | undefined;
    /** Identity of the conversation member user. */
    conversationMemberUser?: TeamworkUserIdentity | undefined;
    /** Initiator of the event. */
    initiator?: IdentitySet | undefined;
}
