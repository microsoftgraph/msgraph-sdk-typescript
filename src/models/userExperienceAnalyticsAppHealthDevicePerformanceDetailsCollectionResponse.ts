import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserExperienceAnalyticsAppHealthDevicePerformanceDetails} from './userExperienceAnalyticsAppHealthDevicePerformanceDetails';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsAppHealthDevicePerformanceDetails[] | undefined;
}
