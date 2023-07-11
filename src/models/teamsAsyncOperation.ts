import {Entity} from './entity';
import {OperationError} from './operationError';
import {TeamsAsyncOperationStatus} from './teamsAsyncOperationStatus';
import {TeamsAsyncOperationType} from './teamsAsyncOperationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAsyncOperation extends Entity, Parsable {
    /**
     * Number of times the operation was attempted before being marked successful or failed.
     */
    attemptsCount?: number | undefined;
    /**
     * Time when the operation was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Any error that causes the async operation to fail.
     */
    errorEscaped?: OperationError | undefined;
    /**
     * Time when the async operation was last updated.
     */
    lastActionDateTime?: Date | undefined;
    /**
     * The operationType property
     */
    operationType?: TeamsAsyncOperationType | undefined;
    /**
     * The status property
     */
    status?: TeamsAsyncOperationStatus | undefined;
    /**
     * The ID of the object that's created or modified as result of this async operation, typically a team.
     */
    targetResourceId?: string | undefined;
    /**
     * The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths.
     */
    targetResourceLocation?: string | undefined;
}
