import {WeeklySchedule} from './weeklySchedule';
import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {AdditionalDataHolder, Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface WindowsUpdateScheduledInstall extends Partial<AdditionalDataHolder>, Partial<Parsable>, WindowsUpdateInstallScheduleType {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Scheduled Install Day in week. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan. */
    scheduledInstallDay?: WeeklySchedule | undefined;
    /** Scheduled Install Time during day */
    scheduledInstallTime?: TimeOnly | undefined;
}
