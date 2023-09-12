import { deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance } from './deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance';
import { type UserExperienceAnalyticsAppHealthDeviceModelPerformance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance;
}
