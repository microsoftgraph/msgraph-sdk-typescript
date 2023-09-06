import { type UserExperienceAnalyticsInsightValue } from './userExperienceAnalyticsInsightValue';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface InsightValueDouble extends Parsable, UserExperienceAnalyticsInsightValue {
    /**
     * The double value of the user experience analytics insight.
     */
    value?: number | undefined;
}
