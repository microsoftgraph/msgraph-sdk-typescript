import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsBaseline} from './userExperienceAnalyticsBaseline';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsBaselineCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsBaseline[] | undefined;
}
