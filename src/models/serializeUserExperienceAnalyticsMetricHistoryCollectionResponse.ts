import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsMetricHistory} from './serializeUserExperienceAnalyticsMetricHistory';
import type {UserExperienceAnalyticsMetricHistory} from './userExperienceAnalyticsMetricHistory';
import type {UserExperienceAnalyticsMetricHistoryCollectionResponse} from './userExperienceAnalyticsMetricHistoryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsMetricHistoryCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsMetricHistoryCollectionResponse: UserExperienceAnalyticsMetricHistoryCollectionResponse | undefined = {} as UserExperienceAnalyticsMetricHistoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsMetricHistoryCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsMetricHistory>("value", userExperienceAnalyticsMetricHistoryCollectionResponse.value, serializeUserExperienceAnalyticsMetricHistory);
}
