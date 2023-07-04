import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ContainerFilter extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The includedContainers property
     */
    includedContainers?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
