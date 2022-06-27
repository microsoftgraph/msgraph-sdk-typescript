import {Entity} from './entity';
import {WorkbookOperationError} from './workbookOperationError';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperation extends Entity, Partial<Parsable> {
    /** The error returned by the operation. */
    error_escaped?: WorkbookOperationError | undefined;
    /** The resource URI for the result. */
    resourceLocation?: string | undefined;
    /** The current status of the operation. Possible values are: notStarted, running, succeeded, failed. */
    status?: WorkbookOperationStatus | undefined;
}
