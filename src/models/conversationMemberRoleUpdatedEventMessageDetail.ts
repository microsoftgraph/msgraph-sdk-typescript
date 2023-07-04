import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
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
