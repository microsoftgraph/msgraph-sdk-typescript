import {createUserExperienceAnalyticsMetricFromDiscriminatorValue} from './createUserExperienceAnalyticsMetricFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsMetric} from './serializeUserExperienceAnalyticsMetric';
import type {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import type {UserExperienceAnalyticsMetricCollectionResponse} from './userExperienceAnalyticsMetricCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsMetricCollectionResponse(userExperienceAnalyticsMetricCollectionResponse: UserExperienceAnalyticsMetricCollectionResponse | undefined = {} as UserExperienceAnalyticsMetricCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsMetricCollectionResponse),
        "value": n => { userExperienceAnalyticsMetricCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsMetric>(createUserExperienceAnalyticsMetricFromDiscriminatorValue); },
    }
}
