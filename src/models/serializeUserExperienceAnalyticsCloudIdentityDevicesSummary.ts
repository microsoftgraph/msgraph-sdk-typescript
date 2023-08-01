import type {UserExperienceAnalyticsCloudIdentityDevicesSummary} from './userExperienceAnalyticsCloudIdentityDevicesSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsCloudIdentityDevicesSummary(writer: SerializationWriter, userExperienceAnalyticsCloudIdentityDevicesSummary: UserExperienceAnalyticsCloudIdentityDevicesSummary | undefined = {} as UserExperienceAnalyticsCloudIdentityDevicesSummary) : void {
        writer.writeNumberValue("deviceWithoutCloudIdentityCount", userExperienceAnalyticsCloudIdentityDevicesSummary.deviceWithoutCloudIdentityCount);
        writer.writeStringValue("@odata.type", userExperienceAnalyticsCloudIdentityDevicesSummary.odataType);
        writer.writeAdditionalData(userExperienceAnalyticsCloudIdentityDevicesSummary.additionalData);
}
