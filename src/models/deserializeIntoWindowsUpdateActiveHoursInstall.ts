import {deserializeIntoWindowsUpdateInstallScheduleType} from './deserializeIntoWindowsUpdateInstallScheduleType';
import type {WindowsUpdateActiveHoursInstall} from './windowsUpdateActiveHoursInstall';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateActiveHoursInstall(windowsUpdateActiveHoursInstall: WindowsUpdateActiveHoursInstall | undefined = {} as WindowsUpdateActiveHoursInstall) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateActiveHoursInstall),
        "activeHoursEnd": n => { windowsUpdateActiveHoursInstall.activeHoursEnd = n.getTimeOnlyValue(); },
        "activeHoursStart": n => { windowsUpdateActiveHoursInstall.activeHoursStart = n.getTimeOnlyValue(); },
    }
}
