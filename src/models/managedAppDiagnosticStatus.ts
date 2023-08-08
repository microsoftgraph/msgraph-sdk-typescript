import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppDiagnosticStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Instruction on how to mitigate a failed validation
     */
    mitigationInstruction?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The state of the operation
     */
    state?: string | undefined;
    /**
     * The validation friendly name
     */
    validationName?: string | undefined;
}
