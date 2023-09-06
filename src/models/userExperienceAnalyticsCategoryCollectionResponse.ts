import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsCategory } from './userExperienceAnalyticsCategory';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsCategory[] | undefined;
}
