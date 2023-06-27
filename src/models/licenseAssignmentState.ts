import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseAssignmentState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The assignedByGroup property
     */
    assignedByGroup?: string | undefined;
    /**
     * The disabledPlans property
     */
    disabledPlans?: string[] | undefined;
    /**
     * The error property
     */
    errorEscaped?: string | undefined;
    /**
     * The lastUpdatedDateTime property
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The skuId property
     */
    skuId?: string | undefined;
    /**
     * The state property
     */
    state?: string | undefined;
}
