import {serializeWindowsUpdateInstallScheduleType} from './serializeWindowsUpdateInstallScheduleType';
import {WeeklySchedule} from './weeklySchedule';
import {WindowsUpdateScheduledInstall} from './windowsUpdateScheduledInstall';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateScheduledInstall(writer: SerializationWriter, windowsUpdateScheduledInstall: WindowsUpdateScheduledInstall | undefined = {} as WindowsUpdateScheduledInstall) : void {
        serializeWindowsUpdateInstallScheduleType(writer, windowsUpdateScheduledInstall)
        writer.writeEnumValue<WeeklySchedule>("scheduledInstallDay", windowsUpdateScheduledInstall.scheduledInstallDay);
        writer.writeTimeOnlyValue("scheduledInstallTime", windowsUpdateScheduledInstall.scheduledInstallTime);
}
