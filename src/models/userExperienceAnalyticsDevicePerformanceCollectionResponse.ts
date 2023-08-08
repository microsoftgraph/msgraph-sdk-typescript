import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserExperienceAnalyticsDevicePerformance} from './userExperienceAnalyticsDevicePerformance';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDevicePerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDevicePerformance[] | undefined;
}
