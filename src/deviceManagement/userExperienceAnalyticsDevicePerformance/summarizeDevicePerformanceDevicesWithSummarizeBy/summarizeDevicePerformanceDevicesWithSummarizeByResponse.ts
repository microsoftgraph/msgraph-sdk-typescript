import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsDevicePerformance} from '../../../models/userExperienceAnalyticsDevicePerformance';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SummarizeDevicePerformanceDevicesWithSummarizeByResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDevicePerformance[] | undefined;
}
