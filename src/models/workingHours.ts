import {TimeZoneBase} from './timeZoneBase';
import {TimeOnly} from '@microsoft/kiota-abstractions';

export interface WorkingHours{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The days of the week on which the user works. */
    daysOfWeek?:string[] | undefined;
    /** The time of the day that the user stops working. */
    endTime?:TimeOnly | undefined;
    /** The time of the day that the user starts working. */
    startTime?:TimeOnly | undefined;
    /** The time zone to which the working hours apply. */
    timeZone?:TimeZoneBase | undefined;
}
