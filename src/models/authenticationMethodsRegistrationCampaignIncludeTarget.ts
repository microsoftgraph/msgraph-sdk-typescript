import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsRegistrationCampaignIncludeTarget extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The object identifier of an Azure Active Directory user or group.
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The authentication method that the user is prompted to register. The value must be microsoftAuthenticator.
     */
    targetedAuthenticationMethod?: string | undefined;
    /**
     * The targetType property
     */
    targetType?: AuthenticationMethodTargetType | undefined;
}
