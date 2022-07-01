import {IdentitySet} from './identitySet';
import {RecordingStatus} from './recordingStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecordingInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The identities of recording initiator. */
    initiator?: IdentitySet | undefined;
    /** Possible values are: unknown, notRecording, recording, or failed. */
    recordingStatus?: RecordingStatus | undefined;
}
