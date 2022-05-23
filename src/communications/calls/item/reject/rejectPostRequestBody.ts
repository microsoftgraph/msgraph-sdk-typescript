import {RejectReason} from '../../../../models/rejectReason';

export interface RejectPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The callbackUri property */
    callbackUri?:string | undefined;
    /** The reason property */
    reason?:RejectReason | undefined;
}
