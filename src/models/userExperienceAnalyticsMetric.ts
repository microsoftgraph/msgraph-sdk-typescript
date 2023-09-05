import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsMetric extends Entity, Parsable {
    /**
     * The unit of the user experience analytics metric. Examples: none, percentage, count, seconds, score.
     */
    unit?: string | undefined;
    /**
     * The value of the user experience analytics metric.
     */
    value?: number | undefined;
}
