import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SamlSingleSignOnSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The relative URI the service provider would redirect to after completion of the single sign-on flow.
     */
    relayState?: string | undefined;
}
