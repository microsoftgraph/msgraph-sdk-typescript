import {UserExperienceAnalyticsCloudManagementDevicesSummary} from './userExperienceAnalyticsCloudManagementDevicesSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsCloudManagementDevicesSummary(userExperienceAnalyticsCloudManagementDevicesSummary: UserExperienceAnalyticsCloudManagementDevicesSummary | undefined = {} as UserExperienceAnalyticsCloudManagementDevicesSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "coManagedDeviceCount": n => { userExperienceAnalyticsCloudManagementDevicesSummary.coManagedDeviceCount = n.getNumberValue(); },
        "intuneDeviceCount": n => { userExperienceAnalyticsCloudManagementDevicesSummary.intuneDeviceCount = n.getNumberValue(); },
        "@odata.type": n => { userExperienceAnalyticsCloudManagementDevicesSummary.odataType = n.getStringValue(); },
        "tenantAttachDeviceCount": n => { userExperienceAnalyticsCloudManagementDevicesSummary.tenantAttachDeviceCount = n.getNumberValue(); },
    }
}
