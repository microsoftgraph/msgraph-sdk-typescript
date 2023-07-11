import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSetting extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Description.
     */
    description?: string | undefined;
    /**
     * Display Name.
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * OMA.
     */
    omaUri?: string | undefined;
}
