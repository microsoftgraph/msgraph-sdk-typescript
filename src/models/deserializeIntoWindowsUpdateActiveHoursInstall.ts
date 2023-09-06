import { deserializeIntoWindowsUpdateInstallScheduleType } from './deserializeIntoWindowsUpdateInstallScheduleType';
import { type WindowsUpdateActiveHoursInstall } from './windowsUpdateActiveHoursInstall';
import { TimeOnly, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateActiveHoursInstall(windowsUpdateActiveHoursInstall: WindowsUpdateActiveHoursInstall | undefined = {} as WindowsUpdateActiveHoursInstall) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateActiveHoursInstall),
        "activeHoursEnd": n => { windowsUpdateActiveHoursInstall.activeHoursEnd = n.getTimeOnlyValue(); },
        "activeHoursStart": n => { windowsUpdateActiveHoursInstall.activeHoursStart = n.getTimeOnlyValue(); },
    }
}
