import { type WindowsUpdateInstallScheduleType } from './windowsUpdateInstallScheduleType';
import { TimeOnly, type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsUpdateActiveHoursInstall extends Parsable, WindowsUpdateInstallScheduleType {
    /**
     * Active Hours End
     */
    activeHoursEnd?: TimeOnly | undefined;
    /**
     * Active Hours Start
     */
    activeHoursStart?: TimeOnly | undefined;
}
