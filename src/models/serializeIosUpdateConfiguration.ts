import { DayOfWeek } from './dayOfWeek';
import { type IosUpdateConfiguration } from './iosUpdateConfiguration';
import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { TimeOnly, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosUpdateConfiguration(writer: SerializationWriter, iosUpdateConfiguration: IosUpdateConfiguration | undefined = {} as IosUpdateConfiguration) : void {
        serializeDeviceConfiguration(writer, iosUpdateConfiguration)
        writer.writeTimeOnlyValue("activeHoursEnd", iosUpdateConfiguration.activeHoursEnd);
        writer.writeTimeOnlyValue("activeHoursStart", iosUpdateConfiguration.activeHoursStart);
        writer.writeCollectionOfObjectValues<DayOfWeek>("scheduledInstallDays", iosUpdateConfiguration.scheduledInstallDays, object);
        writer.writeNumberValue("utcTimeOffsetInMinutes", iosUpdateConfiguration.utcTimeOffsetInMinutes);
}
