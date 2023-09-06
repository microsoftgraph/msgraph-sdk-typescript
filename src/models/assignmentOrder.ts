import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AssignmentOrder extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A list of identityUserFlowAttribute object identifiers that determine the order in which attributes should be collected within a user flow.
     */
    order?: string[] | undefined;
}
