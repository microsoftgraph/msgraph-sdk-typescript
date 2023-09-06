import { type Entity } from '../entity';
import { type Endpoint } from './endpoint';
import { type FailureInfo } from './failureInfo';
import { type Media } from './media';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Segment extends Entity, Parsable {
    /**
     * Endpoint that answered this segment.
     */
    callee?: Endpoint | undefined;
    /**
     * Endpoint that initiated this segment.
     */
    caller?: Endpoint | undefined;
    /**
     * UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    endDateTime?: Date | undefined;
    /**
     * Failure information associated with the segment if it failed.
     */
    failureInfo?: FailureInfo | undefined;
    /**
     * Media associated with this segment.
     */
    media?: Media[] | undefined;
    /**
     * UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    startDateTime?: Date | undefined;
}
