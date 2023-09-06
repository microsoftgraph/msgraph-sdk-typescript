import { DayOfWeek } from './dayOfWeek';
import { type IosUpdateConfiguration } from './iosUpdateConfiguration';
import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { TimeOnly, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosUpdateConfiguration(writer: SerializationWriter, iosUpdateConfiguration: IosUpdateConfiguration | undefined = {} as IosUpdateConfiguration) : void {
        serializeDeviceConfiguration(writer, iosUpdateConfiguration)
        writer.writeTimeOnlyValue("activeHoursEnd", iosUpdateConfiguration.activeHoursEnd);
        writer.writeTimeOnlyValue("activeHoursStart", iosUpdateConfiguration.activeHoursStart);
        if(iosUpdateConfiguration.scheduledInstallDays)
        writer.writeEnumValue<DayOfWeek>("scheduledInstallDays", ...iosUpdateConfiguration.scheduledInstallDays);
        writer.writeNumberValue("utcTimeOffsetInMinutes", iosUpdateConfiguration.utcTimeOffsetInMinutes);
}
