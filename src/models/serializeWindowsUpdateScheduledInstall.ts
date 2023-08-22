import {serializeWindowsUpdateInstallScheduleType} from './serializeWindowsUpdateInstallScheduleType';
import {WeeklySchedule} from './weeklySchedule';
import type {WindowsUpdateScheduledInstall} from './windowsUpdateScheduledInstall';
import {TimeOnly} from '@microsoft/kiota-abstractions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateScheduledInstall(writer: SerializationWriter, windowsUpdateScheduledInstall: WindowsUpdateScheduledInstall | undefined = {} as WindowsUpdateScheduledInstall) : void {
        serializeWindowsUpdateInstallScheduleType(writer, windowsUpdateScheduledInstall)
        writer.writeEnumValue<WeeklySchedule>("scheduledInstallDay", windowsUpdateScheduledInstall.scheduledInstallDay);
        writer.writeTimeOnlyValue("scheduledInstallTime", windowsUpdateScheduledInstall.scheduledInstallTime);
}
