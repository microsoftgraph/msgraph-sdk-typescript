import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsDevicePerformance} from './userExperienceAnalyticsDevicePerformance';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDevicePerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDevicePerformance[] | undefined;
}
