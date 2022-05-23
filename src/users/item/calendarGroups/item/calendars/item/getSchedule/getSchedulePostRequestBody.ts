import {DateTimeTimeZone} from '../../../../../../../models/dateTimeTimeZone';

export interface GetSchedulePostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The AvailabilityViewInterval property */
    availabilityViewInterval?:number | undefined;
    /** The EndTime property */
    endTime?:DateTimeTimeZone | undefined;
    /** The Schedules property */
    schedules?:string[] | undefined;
    /** The StartTime property */
    startTime?:DateTimeTimeZone | undefined;
}
