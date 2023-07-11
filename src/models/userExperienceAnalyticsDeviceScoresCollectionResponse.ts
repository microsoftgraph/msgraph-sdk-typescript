import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserExperienceAnalyticsDeviceScores} from './userExperienceAnalyticsDeviceScores';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceScoresCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsDeviceScores[] | undefined;
}
