import {TimeOnly} from '@microsoft/kiota-abstractions';

export interface TimeRange{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** End time for the time range. */
    endTime?:TimeOnly | undefined;
    /** Start time for the time range. */
    startTime?:TimeOnly | undefined;
}
