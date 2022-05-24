import {DateTimeTimeZone} from './dateTimeTimeZone';

export interface TimeSlot{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The end property */
    end?:DateTimeTimeZone | undefined;
    /** The start property */
    start?:DateTimeTimeZone | undefined;
}
