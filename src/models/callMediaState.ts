import {MediaState} from './mediaState';

export interface CallMediaState{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The audio media state. Possible values are: active, inactive, unknownFutureValue. */
    audio?:MediaState | undefined;
}
