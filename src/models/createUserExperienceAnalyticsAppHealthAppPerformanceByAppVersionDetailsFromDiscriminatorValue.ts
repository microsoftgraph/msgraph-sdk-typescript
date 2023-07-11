import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails;
}
