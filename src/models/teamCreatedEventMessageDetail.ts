import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamCreatedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * Description for the team.
     */
    teamDescription?: string | undefined;
    /**
     * Display name of the team.
     */
    teamDisplayName?: string | undefined;
    /**
     * Unique identifier of the team.
     */
    teamId?: string | undefined;
}
