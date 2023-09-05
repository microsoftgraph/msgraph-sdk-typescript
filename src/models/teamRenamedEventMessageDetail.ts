import { type EventMessageDetail } from './eventMessageDetail';
import { type IdentitySet } from './identitySet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamRenamedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * The updated name of the team.
     */
    teamDisplayName?: string | undefined;
    /**
     * Unique identifier of the team.
     */
    teamId?: string | undefined;
}
