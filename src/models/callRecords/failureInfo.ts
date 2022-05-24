import {FailureStage} from './failureStage';

export interface FailureInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Classification of why a call or portion of a call failed. */
    reason?:string | undefined;
    /** The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue. */
    stage?:FailureStage | undefined;
}
