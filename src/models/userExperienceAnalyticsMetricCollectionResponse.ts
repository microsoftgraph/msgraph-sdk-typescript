import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsMetric } from './userExperienceAnalyticsMetric';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsMetricCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsMetric[] | undefined;
}
