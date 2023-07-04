import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsMetric} from './serializeUserExperienceAnalyticsMetric';
import {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import {UserExperienceAnalyticsMetricCollectionResponse} from './userExperienceAnalyticsMetricCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsMetricCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsMetricCollectionResponse: UserExperienceAnalyticsMetricCollectionResponse | undefined = {} as UserExperienceAnalyticsMetricCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsMetricCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsMetric>("value", userExperienceAnalyticsMetricCollectionResponse.value, serializeUserExperienceAnalyticsMetric);
}
