import type {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {TimeOnly} from '@microsoft/kiota-abstractions';
import type {Parsable} from '@microsoft/kiota-abstractions';

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
