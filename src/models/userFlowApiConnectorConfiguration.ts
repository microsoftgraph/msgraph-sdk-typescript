import {IdentityApiConnector} from './identityApiConnector';

export interface UserFlowApiConnectorConfiguration{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The postAttributeCollection property */
    postAttributeCollection?:IdentityApiConnector | undefined;
    /** The postFederationSignup property */
    postFederationSignup?:IdentityApiConnector | undefined;
}
