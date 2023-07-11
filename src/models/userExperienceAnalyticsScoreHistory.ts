import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsScoreHistory extends Entity, Parsable {
    /**
     * The device startup date time. The value cannot be modified and is automatically populated. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Returned by default.
     */
    startupDateTime?: Date | undefined;
}
