import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsDeviceStartupHistory } from './userExperienceAnalyticsDeviceStartupHistory';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDeviceStartupHistory[] | undefined;
}
