import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformance } from './userExperienceAnalyticsDeviceStartupProcessPerformance';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDeviceStartupProcessPerformance[] | undefined;
}
