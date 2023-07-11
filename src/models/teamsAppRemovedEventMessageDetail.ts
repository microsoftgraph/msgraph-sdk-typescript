import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppRemovedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * Display name of the teamsApp.
     */
    teamsAppDisplayName?: string | undefined;
    /**
     * Unique identifier of the teamsApp.
     */
    teamsAppId?: string | undefined;
}
