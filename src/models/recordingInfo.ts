import {IdentitySet} from './identitySet';
import {RecordingStatus} from './recordingStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecordingInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The identities of the recording initiator.
     */
    initiator?: IdentitySet | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The recordingStatus property
     */
    recordingStatus?: RecordingStatus | undefined;
}
