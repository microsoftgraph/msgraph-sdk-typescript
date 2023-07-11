import {PrintOperationProcessingState} from './printOperationProcessingState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintOperationStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A human-readable description of the printOperation's current processing state. Read-only.
     */
    description?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The state property
     */
    state?: PrintOperationProcessingState | undefined;
}
