import {Endpoint} from './callRecords/endpoint';
import {FailureInfo} from './callRecords/failureInfo';
import {Media} from './callRecords/media';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Segment extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Endpoint that answered this segment. */
    callee?: Endpoint | undefined;
    /** Endpoint that initiated this segment. */
    caller?: Endpoint | undefined;
    /** UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    endDateTime?: Date | undefined;
    /** Failure information associated with the segment if it failed. */
    failureInfo?: FailureInfo | undefined;
    /** Media associated with this segment. */
    media?: Media[] | undefined;
    /** UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    startDateTime?: Date | undefined;
}
