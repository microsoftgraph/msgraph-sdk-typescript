import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RegistrationEnforcement extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Run campaigns to remind users to setup targeted authentication methods. */
    authenticationMethodsRegistrationCampaign?: AuthenticationMethodsRegistrationCampaign | undefined;
}
