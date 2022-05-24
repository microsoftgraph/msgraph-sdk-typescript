import {ScheduleEntityTheme} from './scheduleEntityTheme';

export interface ScheduleEntity{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The endDateTime property */
    endDateTime?:Date | undefined;
    /** The startDateTime property */
    startDateTime?:Date | undefined;
    /** The theme property */
    theme?:ScheduleEntityTheme | undefined;
}
