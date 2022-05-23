import {Entity} from './entity';
import {WorkbookOperationError} from './workbookOperationError';
import {WorkbookOperationStatus} from './workbookOperationStatus';

export interface WorkbookOperation extends Entity{
    /** The error returned by the operation. */
    error_escaped?:WorkbookOperationError | undefined;
    /** The resource URI for the result. */
    resourceLocation?:string | undefined;
    /** The current status of the operation. Possible values are: notStarted, running, succeeded, failed. */
    status?:WorkbookOperationStatus | undefined;
}
