import { serializeWindowsUpdateInstallScheduleType } from './serializeWindowsUpdateInstallScheduleType';
import { type WindowsUpdateActiveHoursInstall } from './windowsUpdateActiveHoursInstall';
import { TimeOnly, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateActiveHoursInstall(writer: SerializationWriter, windowsUpdateActiveHoursInstall: WindowsUpdateActiveHoursInstall | undefined = {} as WindowsUpdateActiveHoursInstall) : void {
        serializeWindowsUpdateInstallScheduleType(writer, windowsUpdateActiveHoursInstall)
        writer.writeTimeOnlyValue("activeHoursEnd", windowsUpdateActiveHoursInstall.activeHoursEnd);
        writer.writeTimeOnlyValue("activeHoursStart", windowsUpdateActiveHoursInstall.activeHoursStart);
}
