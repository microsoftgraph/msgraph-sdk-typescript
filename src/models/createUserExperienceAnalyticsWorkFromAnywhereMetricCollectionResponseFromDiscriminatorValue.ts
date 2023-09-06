import { deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse } from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse';
import { type UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse;
}
