import { type UserExperienceAnalyticsCloudIdentityDevicesSummary } from './userExperienceAnalyticsCloudIdentityDevicesSummary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsCloudIdentityDevicesSummary(writer: SerializationWriter, userExperienceAnalyticsCloudIdentityDevicesSummary: UserExperienceAnalyticsCloudIdentityDevicesSummary | undefined = {} as UserExperienceAnalyticsCloudIdentityDevicesSummary) : void {
        writer.writeNumberValue("deviceWithoutCloudIdentityCount", userExperienceAnalyticsCloudIdentityDevicesSummary.deviceWithoutCloudIdentityCount);
        writer.writeStringValue("@odata.type", userExperienceAnalyticsCloudIdentityDevicesSummary.odataType);
        writer.writeAdditionalData(userExperienceAnalyticsCloudIdentityDevicesSummary.additionalData);
}
