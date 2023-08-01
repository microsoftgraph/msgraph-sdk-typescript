import type {EventMessageDetail} from './eventMessageDetail';
import type {IdentitySet} from './identitySet';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MembersJoinedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * List of members who joined the chat.
     */
    members?: TeamworkUserIdentity[] | undefined;
}
