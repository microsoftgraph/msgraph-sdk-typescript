import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse;
}
