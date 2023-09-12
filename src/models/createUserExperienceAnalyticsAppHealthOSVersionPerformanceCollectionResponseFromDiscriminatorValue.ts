import { deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse } from './deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse';
import { type UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse;
}
