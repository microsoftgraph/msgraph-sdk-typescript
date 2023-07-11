import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsCategory[] | undefined;
}
