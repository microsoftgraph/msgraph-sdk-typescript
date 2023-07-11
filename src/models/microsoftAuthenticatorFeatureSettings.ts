import {AuthenticationMethodFeatureConfiguration} from './authenticationMethodFeatureConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorFeatureSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Determines whether the user's Authenticator app will show them the client app they are signing into.
     */
    displayAppInformationRequiredState?: AuthenticationMethodFeatureConfiguration | undefined;
    /**
     * Determines whether the user's Authenticator app will show them the geographic location of where the authentication request originated from.
     */
    displayLocationInformationRequiredState?: AuthenticationMethodFeatureConfiguration | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
