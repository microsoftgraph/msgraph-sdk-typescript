import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserExperienceAnalyticsMetricHistory} from './userExperienceAnalyticsMetricHistory';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsMetricHistoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsMetricHistory[] | undefined;
}
