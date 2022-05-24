import {Entity} from './entity';
import {PrintOperationStatus} from './printOperationStatus';

export interface PrintOperation extends Entity{
    /** The DateTimeOffset when the operation was created. Read-only. */
    createdDateTime?:Date | undefined;
    /** The status property */
    status?:PrintOperationStatus | undefined;
}
