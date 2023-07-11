import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance} from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance';
import {UserExperienceAnalyticsAppHealthDevicePerformance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance;
}
