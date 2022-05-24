import {DateTimeTimeZone} from '../../../../../../../../../../../models/dateTimeTimeZone';

export interface SnoozeReminderPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The NewReminderTime property */
    newReminderTime?:DateTimeTimeZone | undefined;
}
