import {deserializeIntoUserExperienceAnalyticsCloudIdentityDevicesSummary} from './deserializeIntoUserExperienceAnalyticsCloudIdentityDevicesSummary';
import {UserExperienceAnalyticsCloudIdentityDevicesSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsCloudIdentityDevicesSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsCloudIdentityDevicesSummary;
}
