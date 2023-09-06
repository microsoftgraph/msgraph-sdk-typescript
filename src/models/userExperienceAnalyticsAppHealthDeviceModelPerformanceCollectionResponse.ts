import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsAppHealthDeviceModelPerformance } from './userExperienceAnalyticsAppHealthDeviceModelPerformance';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthDeviceModelPerformance[] | undefined;
}
