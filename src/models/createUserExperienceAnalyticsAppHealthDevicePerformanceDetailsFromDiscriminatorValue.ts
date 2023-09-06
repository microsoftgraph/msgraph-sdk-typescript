import { deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails } from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import { type UserExperienceAnalyticsAppHealthDevicePerformanceDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails;
}
