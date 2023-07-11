import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessSessionControl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Specifies whether the session control is enabled.
     */
    isEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
