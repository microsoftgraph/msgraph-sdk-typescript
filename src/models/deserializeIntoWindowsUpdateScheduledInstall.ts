import {deserializeIntoWindowsUpdateInstallScheduleType} from './deserializeIntoWindowsUpdateInstallScheduleType';
import {WeeklySchedule} from './weeklySchedule';
import {WindowsUpdateScheduledInstall} from './windowsUpdateScheduledInstall';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateScheduledInstall(windowsUpdateScheduledInstall: WindowsUpdateScheduledInstall | undefined = {} as WindowsUpdateScheduledInstall) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateScheduledInstall),
        "scheduledInstallDay": n => { windowsUpdateScheduledInstall.scheduledInstallDay = n.getEnumValue<WeeklySchedule>(WeeklySchedule); },
        "scheduledInstallTime": n => { windowsUpdateScheduledInstall.scheduledInstallTime = n.getTimeOnlyValue(); },
    }
}
