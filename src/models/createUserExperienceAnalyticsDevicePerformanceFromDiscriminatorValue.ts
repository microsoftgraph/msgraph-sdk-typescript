import {deserializeIntoUserExperienceAnalyticsDevicePerformance} from './deserializeIntoUserExperienceAnalyticsDevicePerformance';
import {UserExperienceAnalyticsDevicePerformance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDevicePerformance;
}
