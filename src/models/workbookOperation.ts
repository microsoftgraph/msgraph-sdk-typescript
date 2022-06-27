import {Entity} from './entity';
import {WorkbookOperationError} from './workbookOperationError';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The error returned by the operation. */
    error_escaped?: WorkbookOperationError | undefined;
    /** The resource URI for the result. */
    resourceLocation?: string | undefined;
    /** The current status of the operation. Possible values are: notStarted, running, succeeded, failed. */
    status?: WorkbookOperationStatus | undefined;
}
