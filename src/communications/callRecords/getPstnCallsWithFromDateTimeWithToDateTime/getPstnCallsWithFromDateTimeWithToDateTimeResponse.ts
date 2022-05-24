import {PstnCallLogRow} from '../../../models/callRecords/pstnCallLogRow';

export interface GetPstnCallsWithFromDateTimeWithToDateTimeResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The value property */
    value?:PstnCallLogRow[] | undefined;
}
