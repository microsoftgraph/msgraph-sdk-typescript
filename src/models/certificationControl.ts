import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CertificationControl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Certification control name
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * URL for the Microsoft Service Trust Portal
     */
    url?: string | undefined;
}
