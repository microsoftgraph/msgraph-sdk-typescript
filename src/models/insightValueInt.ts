import {UserExperienceAnalyticsInsightValue} from './userExperienceAnalyticsInsightValue';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InsightValueInt extends Parsable, UserExperienceAnalyticsInsightValue {
    /**
     * The int value of the user experience analytics insight.
     */
    value?: number | undefined;
}
