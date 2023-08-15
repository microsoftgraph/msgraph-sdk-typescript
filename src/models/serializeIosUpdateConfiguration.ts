import {DayOfWeek} from './dayOfWeek';
import type {IosUpdateConfiguration} from './iosUpdateConfiguration';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {TimeOnly} from '@microsoft/kiota-abstractions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosUpdateConfiguration(writer: SerializationWriter, iosUpdateConfiguration: IosUpdateConfiguration | undefined = {} as IosUpdateConfiguration) : void {
        serializeDeviceConfiguration(writer, iosUpdateConfiguration)
        writer.writeTimeOnlyValue("activeHoursEnd", iosUpdateConfiguration.activeHoursEnd);
        writer.writeTimeOnlyValue("activeHoursStart", iosUpdateConfiguration.activeHoursStart);
        if(iosUpdateConfiguration.scheduledInstallDays)
        writer.writeEnumValue<DayOfWeek>("scheduledInstallDays", ...iosUpdateConfiguration.scheduledInstallDays);
        writer.writeNumberValue("utcTimeOffsetInMinutes", iosUpdateConfiguration.utcTimeOffsetInMinutes);
}
