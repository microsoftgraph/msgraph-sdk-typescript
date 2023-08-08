import type {EventMessageDetail} from './eventMessageDetail';
import type {IdentitySet} from './identitySet';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MembersLeftEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * List of members who left the chat.
     */
    members?: TeamworkUserIdentity[] | undefined;
}
