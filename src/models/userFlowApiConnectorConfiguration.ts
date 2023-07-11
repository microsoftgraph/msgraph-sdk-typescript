import {IdentityApiConnector} from './identityApiConnector';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowApiConnectorConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The postAttributeCollection property
     */
    postAttributeCollection?: IdentityApiConnector | undefined;
    /**
     * The postFederationSignup property
     */
    postFederationSignup?: IdentityApiConnector | undefined;
}
