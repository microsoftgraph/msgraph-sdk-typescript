import {createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue} from './createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsWorkFromAnywhereMetric} from './serializeUserExperienceAnalyticsWorkFromAnywhereMetric';
import {UserExperienceAnalyticsWorkFromAnywhereMetric} from './userExperienceAnalyticsWorkFromAnywhereMetric';
import {UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse} from './userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse(userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse: UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse),
        "value": n => { userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereMetric>(createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue); },
    }
}
