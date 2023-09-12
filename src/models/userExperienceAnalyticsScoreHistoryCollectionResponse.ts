import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserExperienceAnalyticsScoreHistory } from './userExperienceAnalyticsScoreHistory';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsScoreHistoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsScoreHistory[] | undefined;
}
