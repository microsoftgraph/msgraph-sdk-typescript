import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsWorkFromAnywhereMetric} from './userExperienceAnalyticsWorkFromAnywhereMetric';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsWorkFromAnywhereMetric[] | undefined;
}
