import { deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance } from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance';
import { type UserExperienceAnalyticsAppHealthDevicePerformance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance;
}
