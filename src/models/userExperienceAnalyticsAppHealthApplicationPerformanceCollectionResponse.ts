import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserExperienceAnalyticsAppHealthApplicationPerformance} from './userExperienceAnalyticsAppHealthApplicationPerformance';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthApplicationPerformance[] | undefined;
}
