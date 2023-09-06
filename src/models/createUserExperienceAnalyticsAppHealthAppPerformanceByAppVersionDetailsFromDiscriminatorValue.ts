import { deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails } from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import { type UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails;
}
