import type {Entity} from './entity';
import type {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsOverview extends Entity, Parsable {
    /**
     * The user experience analytics insights. Read-only.
     */
    insights?: UserExperienceAnalyticsInsight[] | undefined;
}
