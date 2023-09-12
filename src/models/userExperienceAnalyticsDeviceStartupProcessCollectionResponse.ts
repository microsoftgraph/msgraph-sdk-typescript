import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsDeviceStartupProcess } from './userExperienceAnalyticsDeviceStartupProcess';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceStartupProcessCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDeviceStartupProcess[] | undefined;
}
