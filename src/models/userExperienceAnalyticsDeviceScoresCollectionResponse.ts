import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserExperienceAnalyticsDeviceScores} from './userExperienceAnalyticsDeviceScores';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceScoresCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDeviceScores[] | undefined;
}
