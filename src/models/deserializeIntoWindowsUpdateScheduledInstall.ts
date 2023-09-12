import { deserializeIntoWindowsUpdateInstallScheduleType } from './deserializeIntoWindowsUpdateInstallScheduleType';
import { WeeklySchedule } from './weeklySchedule';
import { type WindowsUpdateScheduledInstall } from './windowsUpdateScheduledInstall';
import { TimeOnly, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateScheduledInstall(windowsUpdateScheduledInstall: WindowsUpdateScheduledInstall | undefined = {} as WindowsUpdateScheduledInstall) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateScheduledInstall),
        "scheduledInstallDay": n => { windowsUpdateScheduledInstall.scheduledInstallDay = n.getEnumValue<WeeklySchedule>(WeeklySchedule); },
        "scheduledInstallTime": n => { windowsUpdateScheduledInstall.scheduledInstallTime = n.getTimeOnlyValue(); },
    }
}
