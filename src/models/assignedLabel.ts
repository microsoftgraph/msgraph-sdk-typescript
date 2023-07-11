import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignedLabel extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The display name of the label. Read-only.
     */
    displayName?: string | undefined;
    /**
     * The unique identifier of the label.
     */
    labelId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
