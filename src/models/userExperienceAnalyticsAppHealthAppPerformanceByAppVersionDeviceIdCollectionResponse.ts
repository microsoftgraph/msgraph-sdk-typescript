import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId[] | undefined;
}
