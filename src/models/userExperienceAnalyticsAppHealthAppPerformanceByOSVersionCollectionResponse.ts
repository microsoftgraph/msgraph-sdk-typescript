import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion } from './userExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion[] | undefined;
}
