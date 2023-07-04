import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IncomingContext extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of the participant that is under observation. Read-only.
     */
    observedParticipantId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The identity that the call is happening on behalf of.
     */
    onBehalfOf?: IdentitySet | undefined;
    /**
     * The ID of the participant that triggered the incoming call. Read-only.
     */
    sourceParticipantId?: string | undefined;
    /**
     * The identity that transferred the call.
     */
    transferor?: IdentitySet | undefined;
}
