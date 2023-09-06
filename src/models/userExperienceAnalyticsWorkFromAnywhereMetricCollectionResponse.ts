import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsWorkFromAnywhereMetric } from './userExperienceAnalyticsWorkFromAnywhereMetric';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsWorkFromAnywhereMetric[] | undefined;
}
