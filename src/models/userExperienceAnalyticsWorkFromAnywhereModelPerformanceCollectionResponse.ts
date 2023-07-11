import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './userExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsWorkFromAnywhereModelPerformance[] | undefined;
}
