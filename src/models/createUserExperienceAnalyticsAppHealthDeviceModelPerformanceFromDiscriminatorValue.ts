import {deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance} from './deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance;
}
