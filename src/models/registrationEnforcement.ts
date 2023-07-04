import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RegistrationEnforcement extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Run campaigns to remind users to set up targeted authentication methods.
     */
    authenticationMethodsRegistrationCampaign?: AuthenticationMethodsRegistrationCampaign | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
