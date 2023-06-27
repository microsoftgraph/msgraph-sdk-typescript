import {Entity} from './entity';
import {WorkbookOperationError} from './workbookOperationError';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperation extends Entity, Parsable {
    /**
     * The error returned by the operation.
     */
    errorEscaped?: WorkbookOperationError | undefined;
    /**
     * The resource URI for the result.
     */
    resourceLocation?: string | undefined;
    /**
     * The status property
     */
    status?: WorkbookOperationStatus | undefined;
}
