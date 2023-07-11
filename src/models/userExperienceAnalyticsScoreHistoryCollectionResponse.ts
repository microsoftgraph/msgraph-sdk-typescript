import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsScoreHistory} from './userExperienceAnalyticsScoreHistory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsScoreHistoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsScoreHistory[] | undefined;
}
