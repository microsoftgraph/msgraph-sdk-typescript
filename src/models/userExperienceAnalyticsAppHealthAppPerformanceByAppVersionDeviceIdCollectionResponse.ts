import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId[] | undefined;
}
