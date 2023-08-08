import {serializeWindowsUpdateInstallScheduleType} from './serializeWindowsUpdateInstallScheduleType';
import type {WindowsUpdateActiveHoursInstall} from './windowsUpdateActiveHoursInstall';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateActiveHoursInstall(writer: SerializationWriter, windowsUpdateActiveHoursInstall: WindowsUpdateActiveHoursInstall | undefined = {} as WindowsUpdateActiveHoursInstall) : void {
        serializeWindowsUpdateInstallScheduleType(writer, windowsUpdateActiveHoursInstall)
        writer.writeTimeOnlyValue("activeHoursEnd", windowsUpdateActiveHoursInstall.activeHoursEnd);
        writer.writeTimeOnlyValue("activeHoursStart", windowsUpdateActiveHoursInstall.activeHoursStart);
}
