import {PendingContentUpdate} from './pendingContentUpdate';

export interface PendingOperations{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A property that indicates that an operation that might update the binary content of a file is pending completion. */
    pendingContentUpdate?:PendingContentUpdate | undefined;
}
