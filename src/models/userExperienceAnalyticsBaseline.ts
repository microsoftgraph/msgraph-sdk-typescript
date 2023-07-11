import {Entity} from './entity';
import {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsBaseline extends Entity, Parsable {
    /**
     * The scores and insights for the application health metrics.
     */
    appHealthMetrics?: UserExperienceAnalyticsCategory | undefined;
    /**
     * The scores and insights for the battery health metrics.
     */
    batteryHealthMetrics?: UserExperienceAnalyticsCategory | undefined;
    /**
     * The scores and insights for the best practices metrics.
     */
    bestPracticesMetrics?: UserExperienceAnalyticsCategory | undefined;
    /**
     * The date the custom baseline was created. The value cannot be modified and is automatically populated when the baseline is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Returned by default.
     */
    createdDateTime?: Date | undefined;
    /**
     * The scores and insights for the device boot performance metrics.
     */
    deviceBootPerformanceMetrics?: UserExperienceAnalyticsCategory | undefined;
    /**
     * The name of the baseline.
     */
    displayName?: string | undefined;
    /**
     * When TRUE, indicates the current baseline is the commercial median baseline. When FALSE, indicates it is a custom baseline. FALSE by default.
     */
    isBuiltIn?: boolean | undefined;
    /**
     * The scores and insights for the reboot analytics metrics.
     */
    rebootAnalyticsMetrics?: UserExperienceAnalyticsCategory | undefined;
    /**
     * The scores and insights for the resource performance metrics.
     */
    resourcePerformanceMetrics?: UserExperienceAnalyticsCategory | undefined;
    /**
     * The scores and insights for the work from anywhere metrics.
     */
    workFromAnywhereMetrics?: UserExperienceAnalyticsCategory | undefined;
}
