import {Entity} from './entity';
import {OperationStatus} from './operationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Operation extends Entity, Partial<Parsable> {
    /** The start time of the operation. */
    createdDateTime?: Date | undefined;
    /** The time of the last action of the operation. */
    lastActionDateTime?: Date | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only. */
    status?: OperationStatus | undefined;
}
