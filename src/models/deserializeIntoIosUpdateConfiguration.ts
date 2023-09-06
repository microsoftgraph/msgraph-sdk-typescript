import { DayOfWeek } from './dayOfWeek';
import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type IosUpdateConfiguration } from './iosUpdateConfiguration';
import { TimeOnly, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosUpdateConfiguration(iosUpdateConfiguration: IosUpdateConfiguration | undefined = {} as IosUpdateConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(iosUpdateConfiguration),
        "activeHoursEnd": n => { iosUpdateConfiguration.activeHoursEnd = n.getTimeOnlyValue(); },
        "activeHoursStart": n => { iosUpdateConfiguration.activeHoursStart = n.getTimeOnlyValue(); },
        "scheduledInstallDays": n => { iosUpdateConfiguration.scheduledInstallDays = n.getCollectionOfEnumValues<DayOfWeek>(DayOfWeek); },
        "utcTimeOffsetInMinutes": n => { iosUpdateConfiguration.utcTimeOffsetInMinutes = n.getNumberValue(); },
    }
}
