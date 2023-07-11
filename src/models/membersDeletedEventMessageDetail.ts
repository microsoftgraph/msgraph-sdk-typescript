import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MembersDeletedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * List of members deleted.
     */
    members?: TeamworkUserIdentity[] | undefined;
}
