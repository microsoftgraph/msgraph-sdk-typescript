import { WeeklySchedule } from './weeklySchedule';
import { type WindowsUpdateInstallScheduleType } from './windowsUpdateInstallScheduleType';
import { TimeOnly, type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsUpdateScheduledInstall extends Parsable, WindowsUpdateInstallScheduleType {
    /**
     * Possible values for a weekly schedule.
     */
    scheduledInstallDay?: WeeklySchedule | undefined;
    /**
     * Scheduled Install Time during day
     */
    scheduledInstallTime?: TimeOnly | undefined;
}
