import {Entity} from './entity';
import {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsCategory extends Entity, Parsable {
    /**
     * The insights for the category. Read-only.
     */
    insights?: UserExperienceAnalyticsInsight[] | undefined;
    /**
     * The metric values for the user experience analytics category. Read-only.
     */
    metricValues?: UserExperienceAnalyticsMetric[] | undefined;
}
