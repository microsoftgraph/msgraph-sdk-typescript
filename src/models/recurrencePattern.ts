import {DayOfWeek} from './dayOfWeek';
import {RecurrencePatternType} from './recurrencePatternType';
import {WeekIndex} from './weekIndex';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecurrencePattern extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The day of the month on which the event occurs. Required if type is absoluteMonthly or absoluteYearly.
     */
    dayOfMonth?: number | undefined;
    /**
     * A collection of the days of the week on which the event occurs. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. If type is relativeMonthly or relativeYearly, and daysOfWeek specifies more than one day, the event falls on the first day that satisfies the pattern.  Required if type is weekly, relativeMonthly, or relativeYearly.
     */
    daysOfWeek?: DayOfWeek[] | undefined;
    /**
     * The first day of the week. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. Default is sunday. Required if type is weekly.
     */
    firstDayOfWeek?: DayOfWeek | undefined;
    /**
     * Specifies on which instance of the allowed days specified in daysOfWeek the event occurs, counted from the first instance in the month. The possible values are: first, second, third, fourth, last. Default is first. Optional and used if type is relativeMonthly or relativeYearly.
     */
    index?: WeekIndex | undefined;
    /**
     * The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type. Required.
     */
    interval?: number | undefined;
    /**
     * The month in which the event occurs.  This is a number from 1 to 12.
     */
    month?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The recurrence pattern type: daily, weekly, absoluteMonthly, relativeMonthly, absoluteYearly, relativeYearly. Required. For more information, see values of type property.
     */
    type?: RecurrencePatternType | undefined;
}
