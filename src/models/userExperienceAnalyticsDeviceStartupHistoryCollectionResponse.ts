import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsDeviceStartupHistory} from './userExperienceAnalyticsDeviceStartupHistory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDeviceStartupHistory[] | undefined;
}
