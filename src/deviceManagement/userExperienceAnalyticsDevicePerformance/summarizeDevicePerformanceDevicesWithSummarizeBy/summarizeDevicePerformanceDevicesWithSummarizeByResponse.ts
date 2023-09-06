import { type BaseCollectionPaginationCountResponse } from '../../../models/baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsDevicePerformance } from '../../../models/userExperienceAnalyticsDevicePerformance';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SummarizeDevicePerformanceDevicesWithSummarizeByResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDevicePerformance[] | undefined;
}
