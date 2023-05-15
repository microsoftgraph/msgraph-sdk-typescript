import {deserializeIntoWindowsUpdateInstallScheduleType} from './deserializeIntoWindowsUpdateInstallScheduleType';
import {WindowsUpdateActiveHoursInstall} from './windowsUpdateActiveHoursInstall';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateActiveHoursInstall(windowsUpdateActiveHoursInstall: WindowsUpdateActiveHoursInstall | undefined = {} as WindowsUpdateActiveHoursInstall) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateActiveHoursInstall),
        "activeHoursEnd": n => { windowsUpdateActiveHoursInstall.activeHoursEnd = n.getTimeOnlyValue(); },
        "activeHoursStart": n => { windowsUpdateActiveHoursInstall.activeHoursStart = n.getTimeOnlyValue(); },
    }
}
