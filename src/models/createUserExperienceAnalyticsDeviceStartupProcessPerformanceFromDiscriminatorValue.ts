import { deserializeIntoUserExperienceAnalyticsDeviceStartupProcessPerformance } from './deserializeIntoUserExperienceAnalyticsDeviceStartupProcessPerformance';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceStartupProcessPerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceStartupProcessPerformance;
}
