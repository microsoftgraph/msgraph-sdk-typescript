import {CallTranscriptionState} from './callTranscriptionState';

export interface CallTranscriptionInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The state modified time in UTC. */
    lastModifiedDateTime?:Date | undefined;
    /** Possible values are: notStarted, active, inactive. */
    state?:CallTranscriptionState | undefined;
}
