import {serializeWindowsUpdateInstallScheduleType} from './serializeWindowsUpdateInstallScheduleType';
import {WindowsUpdateActiveHoursInstall} from './windowsUpdateActiveHoursInstall';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateActiveHoursInstall(writer: SerializationWriter, windowsUpdateActiveHoursInstall: WindowsUpdateActiveHoursInstall | undefined = {} as WindowsUpdateActiveHoursInstall) : void {
        serializeWindowsUpdateInstallScheduleType(writer, windowsUpdateActiveHoursInstall)
        writer.writeTimeOnlyValue("activeHoursEnd", windowsUpdateActiveHoursInstall.activeHoursEnd);
        writer.writeTimeOnlyValue("activeHoursStart", windowsUpdateActiveHoursInstall.activeHoursStart);
}
