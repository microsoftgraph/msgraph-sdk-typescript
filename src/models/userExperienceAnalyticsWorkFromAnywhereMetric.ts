import {Entity} from './entity';
import {UserExperienceAnalyticsWorkFromAnywhereDevice} from './userExperienceAnalyticsWorkFromAnywhereDevice';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereMetric extends Entity, Parsable {
    /**
     * The work from anywhere metric devices. Read-only.
     */
    metricDevices?: UserExperienceAnalyticsWorkFromAnywhereDevice[] | undefined;
}
