import { deserializeIntoUserExperienceAnalyticsMetricHistoryCollectionResponse } from './deserializeIntoUserExperienceAnalyticsMetricHistoryCollectionResponse';
import { type UserExperienceAnalyticsMetricHistoryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsMetricHistoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsMetricHistoryCollectionResponse;
}
