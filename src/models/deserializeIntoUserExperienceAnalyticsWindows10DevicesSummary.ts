import type {UserExperienceAnalyticsWindows10DevicesSummary} from './userExperienceAnalyticsWindows10DevicesSummary';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWindows10DevicesSummary(userExperienceAnalyticsWindows10DevicesSummary: UserExperienceAnalyticsWindows10DevicesSummary | undefined = {} as UserExperienceAnalyticsWindows10DevicesSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userExperienceAnalyticsWindows10DevicesSummary.odataType = n.getStringValue(); },
        "unsupportedOSversionDeviceCount": n => { userExperienceAnalyticsWindows10DevicesSummary.unsupportedOSversionDeviceCount = n.getNumberValue(); },
    }
}
