import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion;
}
