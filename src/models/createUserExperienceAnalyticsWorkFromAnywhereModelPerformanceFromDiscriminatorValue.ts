import { deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance } from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import { type UserExperienceAnalyticsWorkFromAnywhereModelPerformance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance;
}
