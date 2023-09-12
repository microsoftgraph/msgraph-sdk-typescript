import { deserializeIntoUserExperienceAnalyticsDevicePerformance } from './deserializeIntoUserExperienceAnalyticsDevicePerformance';
import { type UserExperienceAnalyticsDevicePerformance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDevicePerformance;
}
