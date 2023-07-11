import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsMetricHistory extends Entity, Parsable {
    /**
     * The Intune device id of the device.
     */
    deviceId?: string | undefined;
    /**
     * The metric date time. The value cannot be modified and is automatically populated when the metric is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Returned by default.
     */
    metricDateTime?: Date | undefined;
    /**
     * The user experience analytics metric type.
     */
    metricType?: string | undefined;
}
