import {TimeSlot} from '../../../../../../../../../../../models/timeSlot';

export interface TentativelyAcceptPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The Comment property */
    comment?:string | undefined;
    /** The ProposedNewTime property */
    proposedNewTime?:TimeSlot | undefined;
    /** The SendResponse property */
    sendResponse?:boolean | undefined;
}
