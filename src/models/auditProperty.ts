import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditProperty extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Display name.
     */
    displayName?: string | undefined;
    /**
     * New value.
     */
    newValue?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Old value.
     */
    oldValue?: string | undefined;
}
