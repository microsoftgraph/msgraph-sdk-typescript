import type {EventMessageDetail} from './eventMessageDetail';
import type {IdentitySet} from './identitySet';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationMemberRoleUpdatedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Roles for the coversation member user.
     */
    conversationMemberRoles?: string[] | undefined;
    /**
     * Identity of the conversation member user.
     */
    conversationMemberUser?: TeamworkUserIdentity | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
