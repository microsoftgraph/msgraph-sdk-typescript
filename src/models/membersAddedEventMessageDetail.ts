import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MembersAddedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * List of members added.
     */
    members?: TeamworkUserIdentity[] | undefined;
    /**
     * The timestamp that denotes how far back a conversation's history is shared with the conversation members.
     */
    visibleHistoryStartDateTime?: Date | undefined;
}
