import {createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue} from './createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsWorkFromAnywhereMetric} from './serializeUserExperienceAnalyticsWorkFromAnywhereMetric';
import type {UserExperienceAnalyticsWorkFromAnywhereMetric} from './userExperienceAnalyticsWorkFromAnywhereMetric';
import type {UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse} from './userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse(userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse: UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse),
        "value": n => { userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereMetric>(createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue); },
    }
}
