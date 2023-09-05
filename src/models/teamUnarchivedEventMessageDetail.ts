import { type EventMessageDetail } from './eventMessageDetail';
import { type IdentitySet } from './identitySet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamUnarchivedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * Unique identifier of the team.
     */
    teamId?: string | undefined;
}
