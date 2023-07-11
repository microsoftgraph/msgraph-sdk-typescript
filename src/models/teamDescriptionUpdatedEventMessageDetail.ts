import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamDescriptionUpdatedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * The updated description for the team.
     */
    teamDescription?: string | undefined;
    /**
     * Unique identifier of the team.
     */
    teamId?: string | undefined;
}
