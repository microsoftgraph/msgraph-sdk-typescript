import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsMetric} from './serializeUserExperienceAnalyticsMetric';
import type {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import type {UserExperienceAnalyticsMetricCollectionResponse} from './userExperienceAnalyticsMetricCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsMetricCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsMetricCollectionResponse: UserExperienceAnalyticsMetricCollectionResponse | undefined = {} as UserExperienceAnalyticsMetricCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsMetricCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsMetric>("value", userExperienceAnalyticsMetricCollectionResponse.value, serializeUserExperienceAnalyticsMetric);
}
