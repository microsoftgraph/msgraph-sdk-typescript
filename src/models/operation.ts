import {Entity} from './entity';
import {OperationStatus} from './operationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Operation extends Entity, Parsable {
    /**
     * The start time of the operation.
     */
    createdDateTime?: Date | undefined;
    /**
     * The time of the last action of the operation.
     */
    lastActionDateTime?: Date | undefined;
    /**
     * The current status of the operation: notStarted, running, completed, failed
     */
    status?: OperationStatus | undefined;
}
