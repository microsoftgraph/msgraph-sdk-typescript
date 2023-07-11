import {createUserExperienceAnalyticsMetricFromDiscriminatorValue} from './createUserExperienceAnalyticsMetricFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsMetric} from './serializeUserExperienceAnalyticsMetric';
import {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import {UserExperienceAnalyticsMetricCollectionResponse} from './userExperienceAnalyticsMetricCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsMetricCollectionResponse(userExperienceAnalyticsMetricCollectionResponse: UserExperienceAnalyticsMetricCollectionResponse | undefined = {} as UserExperienceAnalyticsMetricCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsMetricCollectionResponse),
        "value": n => { userExperienceAnalyticsMetricCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsMetric>(createUserExperienceAnalyticsMetricFromDiscriminatorValue); },
    }
}
