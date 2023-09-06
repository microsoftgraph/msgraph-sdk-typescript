import { deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse } from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse';
import { type UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse;
}
