import {Entity} from './entity';
import {OperationStatus} from './operationStatus';

export interface Operation extends Entity{
    /** The start time of the operation. */
    createdDateTime?:Date | undefined;
    /** The time of the last action of the operation. */
    lastActionDateTime?:Date | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only. */
    status?:OperationStatus | undefined;
}
