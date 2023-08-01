import type {EventMessageDetail} from './eventMessageDetail';
import type {IdentitySet} from './identitySet';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
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
