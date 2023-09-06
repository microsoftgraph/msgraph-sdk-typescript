import { type UserExperienceAnalyticsWindows10DevicesSummary } from './userExperienceAnalyticsWindows10DevicesSummary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsWindows10DevicesSummary(writer: SerializationWriter, userExperienceAnalyticsWindows10DevicesSummary: UserExperienceAnalyticsWindows10DevicesSummary | undefined = {} as UserExperienceAnalyticsWindows10DevicesSummary) : void {
        writer.writeStringValue("@odata.type", userExperienceAnalyticsWindows10DevicesSummary.odataType);
        writer.writeNumberValue("unsupportedOSversionDeviceCount", userExperienceAnalyticsWindows10DevicesSummary.unsupportedOSversionDeviceCount);
        writer.writeAdditionalData(userExperienceAnalyticsWindows10DevicesSummary.additionalData);
}
