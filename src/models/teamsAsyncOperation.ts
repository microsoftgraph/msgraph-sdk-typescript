import {Entity} from './entity';
import {OperationError} from './operationError';
import {TeamsAsyncOperationStatus} from './teamsAsyncOperationStatus';
import {TeamsAsyncOperationType} from './teamsAsyncOperationType';

export interface TeamsAsyncOperation extends Entity{
    /** Number of times the operation was attempted before being marked successful or failed. */
    attemptsCount?:number | undefined;
    /** Time when the operation was created. */
    createdDateTime?:Date | undefined;
    /** Any error that causes the async operation to fail. */
    error_escaped?:OperationError | undefined;
    /** Time when the async operation was last updated. */
    lastActionDateTime?:Date | undefined;
    /** Denotes the type of operation being described. */
    operationType?:TeamsAsyncOperationType | undefined;
    /** Operation status. */
    status?:TeamsAsyncOperationStatus | undefined;
    /** The ID of the object that's created or modified as result of this async operation, typically a team. */
    targetResourceId?:string | undefined;
    /** The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths. */
    targetResourceLocation?:string | undefined;
}
