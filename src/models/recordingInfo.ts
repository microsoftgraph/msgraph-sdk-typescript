import {IdentitySet} from './identitySet';
import {RecordingStatus} from './recordingStatus';

export interface RecordingInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The identities of recording initiator. */
    initiator?:IdentitySet | undefined;
    /** Possible values are: unknown, notRecording, recording, or failed. */
    recordingStatus?:RecordingStatus | undefined;
}
