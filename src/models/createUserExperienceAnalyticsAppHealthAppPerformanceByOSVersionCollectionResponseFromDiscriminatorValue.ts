import { deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse } from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse';
import { type UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse;
}
