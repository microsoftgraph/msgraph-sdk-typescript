import {deserializeIntoUserExperienceAnalyticsCloudManagementDevicesSummary} from './deserializeIntoUserExperienceAnalyticsCloudManagementDevicesSummary';
import {UserExperienceAnalyticsCloudManagementDevicesSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsCloudManagementDevicesSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsCloudManagementDevicesSummary;
}
