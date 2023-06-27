import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Configuration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A collection of application IDs for registered Azure Active Directory apps that are allowed to manage the externalConnection and to index content in the externalConnection.
     */
    authorizedAppIds?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
