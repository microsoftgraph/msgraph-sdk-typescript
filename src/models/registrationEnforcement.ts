import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';

export interface RegistrationEnforcement{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Run campaigns to remind users to setup targeted authentication methods. */
    authenticationMethodsRegistrationCampaign?:AuthenticationMethodsRegistrationCampaign | undefined;
}
