import { deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance } from './deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance';
import { type UserExperienceAnalyticsAppHealthApplicationPerformance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance;
}
