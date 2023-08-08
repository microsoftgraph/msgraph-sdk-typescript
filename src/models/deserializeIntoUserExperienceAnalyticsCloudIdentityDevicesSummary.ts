import type {UserExperienceAnalyticsCloudIdentityDevicesSummary} from './userExperienceAnalyticsCloudIdentityDevicesSummary';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsCloudIdentityDevicesSummary(userExperienceAnalyticsCloudIdentityDevicesSummary: UserExperienceAnalyticsCloudIdentityDevicesSummary | undefined = {} as UserExperienceAnalyticsCloudIdentityDevicesSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceWithoutCloudIdentityCount": n => { userExperienceAnalyticsCloudIdentityDevicesSummary.deviceWithoutCloudIdentityCount = n.getNumberValue(); },
        "@odata.type": n => { userExperienceAnalyticsCloudIdentityDevicesSummary.odataType = n.getStringValue(); },
    }
}
