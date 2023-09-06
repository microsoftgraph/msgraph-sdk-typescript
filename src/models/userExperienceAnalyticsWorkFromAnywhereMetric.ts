import { type Entity } from './entity';
import { type UserExperienceAnalyticsWorkFromAnywhereDevice } from './userExperienceAnalyticsWorkFromAnywhereDevice';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereMetric extends Entity, Parsable {
    /**
     * The work from anywhere metric devices. Read-only.
     */
    metricDevices?: UserExperienceAnalyticsWorkFromAnywhereDevice[] | undefined;
}
