import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsMetricHistory} from './userExperienceAnalyticsMetricHistory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsMetricHistoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsMetricHistory[] | undefined;
}
