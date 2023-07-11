import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails[] | undefined;
}
