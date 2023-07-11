import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlternativeSecurityId extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * For internal use only.
     */
    identityProvider?: string | undefined;
    /**
     * For internal use only.
     */
    key?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * For internal use only.
     */
    type?: number | undefined;
}
