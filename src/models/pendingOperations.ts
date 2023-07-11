import {PendingContentUpdate} from './pendingContentUpdate';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PendingOperations extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A property that indicates that an operation that might update the binary content of a file is pending completion.
     */
    pendingContentUpdate?: PendingContentUpdate | undefined;
}
