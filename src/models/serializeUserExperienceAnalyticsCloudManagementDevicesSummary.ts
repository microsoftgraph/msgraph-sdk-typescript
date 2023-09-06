import { type UserExperienceAnalyticsCloudManagementDevicesSummary } from './userExperienceAnalyticsCloudManagementDevicesSummary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsCloudManagementDevicesSummary(writer: SerializationWriter, userExperienceAnalyticsCloudManagementDevicesSummary: UserExperienceAnalyticsCloudManagementDevicesSummary | undefined = {} as UserExperienceAnalyticsCloudManagementDevicesSummary) : void {
        writer.writeNumberValue("coManagedDeviceCount", userExperienceAnalyticsCloudManagementDevicesSummary.coManagedDeviceCount);
        writer.writeNumberValue("intuneDeviceCount", userExperienceAnalyticsCloudManagementDevicesSummary.intuneDeviceCount);
        writer.writeStringValue("@odata.type", userExperienceAnalyticsCloudManagementDevicesSummary.odataType);
        writer.writeNumberValue("tenantAttachDeviceCount", userExperienceAnalyticsCloudManagementDevicesSummary.tenantAttachDeviceCount);
        writer.writeAdditionalData(userExperienceAnalyticsCloudManagementDevicesSummary.additionalData);
}
