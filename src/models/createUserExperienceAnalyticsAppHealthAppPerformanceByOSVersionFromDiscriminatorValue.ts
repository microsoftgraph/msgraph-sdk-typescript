import { deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion } from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import { type UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion;
}
