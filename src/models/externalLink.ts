import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalLink extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The URL of the link.
     */
    href?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
