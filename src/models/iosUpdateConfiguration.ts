import { DayOfWeek } from './dayOfWeek';
import { type DeviceConfiguration } from './deviceConfiguration';
import { TimeOnly, type Parsable } from '@microsoft/kiota-abstractions';

export interface IosUpdateConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Active Hours End (active hours mean the time window when updates install should not happen)
     */
    activeHoursEnd?: TimeOnly | undefined;
    /**
     * Active Hours Start (active hours mean the time window when updates install should not happen)
     */
    activeHoursStart?: TimeOnly | undefined;
    /**
     * Days in week for which active hours are configured. This collection can contain a maximum of 7 elements.
     */
    scheduledInstallDays?: DayOfWeek[] | undefined;
    /**
     * UTC Time Offset indicated in minutes
     */
    utcTimeOffsetInMinutes?: number | undefined;
}
