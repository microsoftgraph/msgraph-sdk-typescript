import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsWorkFromAnywhereDevice} from './userExperienceAnalyticsWorkFromAnywhereDevice';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsWorkFromAnywhereDevice[] | undefined;
}
