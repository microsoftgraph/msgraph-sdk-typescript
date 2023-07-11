import {Entity} from '../entity';
import {Endpoint} from './endpoint';
import {FailureInfo} from './failureInfo';
import {Modality} from './modality';
import {Segment} from './segment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Session extends Entity, Parsable {
    /**
     * Endpoint that answered the session.
     */
    callee?: Endpoint | undefined;
    /**
     * Endpoint that initiated the session.
     */
    caller?: Endpoint | undefined;
    /**
     * UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    endDateTime?: Date | undefined;
    /**
     * Failure information associated with the session if the session failed.
     */
    failureInfo?: FailureInfo | undefined;
    /**
     * Specifies whether the session is a test.
     */
    isTest?: boolean | undefined;
    /**
     * List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     */
    modalities?: Modality[] | undefined;
    /**
     * The list of segments involved in the session. Read-only. Nullable.
     */
    segments?: Segment[] | undefined;
    /**
     * UTC time when the first user joined the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    startDateTime?: Date | undefined;
}
