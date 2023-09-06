import { deserializeIntoUserExperienceAnalyticsMetricCollectionResponse } from './deserializeIntoUserExperienceAnalyticsMetricCollectionResponse';
import { type UserExperienceAnalyticsMetricCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsMetricCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsMetricCollectionResponse;
}
