import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserExperienceAnalyticsAppHealthOSVersionPerformance} from './userExperienceAnalyticsAppHealthOSVersionPerformance';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthOSVersionPerformance[] | undefined;
}
