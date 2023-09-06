import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsAppHealthDevicePerformance } from './userExperienceAnalyticsAppHealthDevicePerformance';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthDevicePerformance[] | undefined;
}
