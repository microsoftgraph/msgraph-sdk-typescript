import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsAppHealthApplicationPerformance} from './userExperienceAnalyticsAppHealthApplicationPerformance';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthApplicationPerformance[] | undefined;
}
