import {deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance} from './deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance';
import {UserExperienceAnalyticsAppHealthApplicationPerformance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance;
}
