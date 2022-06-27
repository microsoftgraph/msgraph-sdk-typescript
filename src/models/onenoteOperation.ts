import {OnenoteOperationError} from './onenoteOperationError';
import {Operation} from './operation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteOperation extends Partial<AdditionalDataHolder>, Operation, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The error returned by the operation. */
    error_escaped?: OnenoteOperationError | undefined;
    /** The operation percent complete if the operation is still in running status. */
    percentComplete?: string | undefined;
    /** The resource id. */
    resourceId?: string | undefined;
    /** The resource URI for the object. For example, the resource URI for a copied page or section. */
    resourceLocation?: string | undefined;
}
