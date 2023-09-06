import { deserializeIntoUserExperienceAnalyticsWindows10DevicesSummary } from './deserializeIntoUserExperienceAnalyticsWindows10DevicesSummary';
import { type UserExperienceAnalyticsWindows10DevicesSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWindows10DevicesSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWindows10DevicesSummary;
}
