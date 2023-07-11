import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from './userExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion[] | undefined;
}
