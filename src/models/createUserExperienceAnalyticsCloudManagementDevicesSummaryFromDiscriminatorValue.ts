import { deserializeIntoUserExperienceAnalyticsCloudManagementDevicesSummary } from './deserializeIntoUserExperienceAnalyticsCloudManagementDevicesSummary';
import { type UserExperienceAnalyticsCloudManagementDevicesSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsCloudManagementDevicesSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsCloudManagementDevicesSummary;
}
