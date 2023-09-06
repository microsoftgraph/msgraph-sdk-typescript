import { deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse } from './deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse';
import { type UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse;
}
