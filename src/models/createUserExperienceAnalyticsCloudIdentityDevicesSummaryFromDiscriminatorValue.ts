import { deserializeIntoUserExperienceAnalyticsCloudIdentityDevicesSummary } from './deserializeIntoUserExperienceAnalyticsCloudIdentityDevicesSummary';
import { type UserExperienceAnalyticsCloudIdentityDevicesSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsCloudIdentityDevicesSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsCloudIdentityDevicesSummary;
}
