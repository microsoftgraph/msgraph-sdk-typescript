import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserExperienceAnalyticsModelScores} from './userExperienceAnalyticsModelScores';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsModelScoresCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsModelScores[] | undefined;
}
