import { type Entity } from './entity';
import { type WorkbookOperationError } from './workbookOperationError';
import { WorkbookOperationStatus } from './workbookOperationStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
