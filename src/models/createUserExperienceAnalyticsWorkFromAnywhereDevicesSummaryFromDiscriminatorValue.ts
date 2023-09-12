import { deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevicesSummary } from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevicesSummary';
import { type UserExperienceAnalyticsWorkFromAnywhereDevicesSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereDevicesSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevicesSummary;
}
