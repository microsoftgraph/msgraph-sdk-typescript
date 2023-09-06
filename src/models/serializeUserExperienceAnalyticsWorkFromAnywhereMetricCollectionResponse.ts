import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsWorkFromAnywhereMetric } from './serializeUserExperienceAnalyticsWorkFromAnywhereMetric';
import { type UserExperienceAnalyticsWorkFromAnywhereMetric } from './userExperienceAnalyticsWorkFromAnywhereMetric';
import { type UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse } from './userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse: UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereMetric>("value", userExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse.value, serializeUserExperienceAnalyticsWorkFromAnywhereMetric);
}
