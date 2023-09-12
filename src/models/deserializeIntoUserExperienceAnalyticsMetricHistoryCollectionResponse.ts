import { createUserExperienceAnalyticsMetricHistoryFromDiscriminatorValue } from './createUserExperienceAnalyticsMetricHistoryFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsMetricHistory } from './serializeUserExperienceAnalyticsMetricHistory';
import { type UserExperienceAnalyticsMetricHistory } from './userExperienceAnalyticsMetricHistory';
import { type UserExperienceAnalyticsMetricHistoryCollectionResponse } from './userExperienceAnalyticsMetricHistoryCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsMetricHistoryCollectionResponse(userExperienceAnalyticsMetricHistoryCollectionResponse: UserExperienceAnalyticsMetricHistoryCollectionResponse | undefined = {} as UserExperienceAnalyticsMetricHistoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsMetricHistoryCollectionResponse),
        "value": n => { userExperienceAnalyticsMetricHistoryCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsMetricHistory>(createUserExperienceAnalyticsMetricHistoryFromDiscriminatorValue); },
    }
}
