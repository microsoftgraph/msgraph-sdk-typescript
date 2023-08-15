import {DayOfWeek} from './dayOfWeek';
import type {TimeZoneBase} from './timeZoneBase';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {TimeOnly} from '@microsoft/kiota-abstractions';

export interface WorkingHours extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The days of the week on which the user works.
     */
    daysOfWeek?: DayOfWeek[] | undefined;
    /**
     * The time of the day that the user stops working.
     */
    endTime?: TimeOnly | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The time of the day that the user starts working.
     */
    startTime?: TimeOnly | undefined;
    /**
     * The time zone to which the working hours apply.
     */
    timeZone?: TimeZoneBase | undefined;
}
