import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsWorkFromAnywhereDevice } from './userExperienceAnalyticsWorkFromAnywhereDevice';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsWorkFromAnywhereDevice[] | undefined;
}
