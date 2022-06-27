import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstalledEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Initiator of the event. */
    initiator?: IdentitySet | undefined;
    /** Display name of the teamsApp. */
    teamsAppDisplayName?: string | undefined;
    /** Unique identifier of the teamsApp. */
    teamsAppId?: string | undefined;
}
