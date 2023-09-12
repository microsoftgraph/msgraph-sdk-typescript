import { deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse } from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse';
import { type UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse;
}
