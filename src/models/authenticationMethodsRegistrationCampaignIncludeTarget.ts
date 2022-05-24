import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';

export interface AuthenticationMethodsRegistrationCampaignIncludeTarget{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The object identifier of an Azure AD user or group. */
    id?:string | undefined;
    /** The authentication method that the user is prompted to register. The value must be microsoftAuthenticator. */
    targetedAuthenticationMethod?:string | undefined;
    /** The type of the authentication method target. Possible values are: user, group, unknownFutureValue. */
    targetType?:AuthenticationMethodTargetType | undefined;
}
