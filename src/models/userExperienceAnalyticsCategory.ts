import type {Entity} from './entity';
import type {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import type {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import type {Parsable} from '@microsoft/kiota-abstractions';

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
