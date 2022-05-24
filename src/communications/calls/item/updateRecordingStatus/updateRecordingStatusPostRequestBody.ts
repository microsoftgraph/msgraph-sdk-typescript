import {RecordingStatus} from '../../../../models/recordingStatus';

export interface UpdateRecordingStatusPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The clientContext property */
    clientContext?:string | undefined;
    /** The status property */
    status?:RecordingStatus | undefined;
}
