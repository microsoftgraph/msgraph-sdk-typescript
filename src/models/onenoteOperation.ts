import {OnenoteOperationError} from './onenoteOperationError';
import {Operation} from './operation';

export interface OnenoteOperation extends Operation{
    /** The error returned by the operation. */
    error_escaped?:OnenoteOperationError | undefined;
    /** The operation percent complete if the operation is still in running status. */
    percentComplete?:string | undefined;
    /** The resource id. */
    resourceId?:string | undefined;
    /** The resource URI for the object. For example, the resource URI for a copied page or section. */
    resourceLocation?:string | undefined;
}
