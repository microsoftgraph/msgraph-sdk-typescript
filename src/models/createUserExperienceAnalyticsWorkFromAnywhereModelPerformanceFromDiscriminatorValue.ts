import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance;
}
