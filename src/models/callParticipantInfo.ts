import { type IdentitySet } from './identitySet';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface CallParticipantInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Identity of the call participant.
     */
    participant?: IdentitySet | undefined;
}
