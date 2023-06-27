import {Entity} from './entity';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LongRunningOperation extends Entity, Parsable {
    /**
     * The start time of the operation. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * The time of the last action in the operation. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastActionDateTime?: Date | undefined;
    /**
     * URI of the resource that the operation is performed on.
     */
    resourceLocation?: string | undefined;
    /**
     * The status of the operation. The possible values are: notStarted, running, succeeded, failed, unknownFutureValue.
     */
    status?: LongRunningOperationStatus | undefined;
    /**
     * Details about the status of the operation.
     */
    statusDetail?: string | undefined;
}
