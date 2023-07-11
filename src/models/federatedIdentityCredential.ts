import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FederatedIdentityCredential extends Entity, Parsable {
    /**
     * The audience that can appear in the external token. This field is mandatory and should be set to api://AzureADTokenExchange for Azure AD. It says what Microsoft identity platform should accept in the aud claim in the incoming token. This value represents Azure AD in your external identity provider and has no fixed value across identity providers - you may need to create a new application registration in your identity provider to serve as the audience of this token. This field can only accept a single value and has a limit of 600 characters. Required.
     */
    audiences?: string[] | undefined;
    /**
     * The un-validated, user-provided description of the federated identity credential. It has a limit of 600 characters. Optional.
     */
    description?: string | undefined;
    /**
     * The URL of the external identity provider and must match the issuer claim of the external token being exchanged. The combination of the values of issuer and subject must be unique on the app. It has a limit of 600 characters. Required.
     */
    issuer?: string | undefined;
    /**
     * is the unique identifier for the federated identity credential, which has a limit of 120 characters and must be URL friendly. It is immutable once created. Required. Not nullable. Supports $filter (eq).
     */
    name?: string | undefined;
    /**
     * Required. The identifier of the external software workload within the external identity provider. Like the audience value, it has no fixed format, as each identity provider uses their own - sometimes a GUID, sometimes a colon delimited identifier, sometimes arbitrary strings. The value here must match the sub claim within the token presented to Azure AD. The combination of issuer and subject must be unique on the app. It has a limit of 600 characters. Supports $filter (eq).
     */
    subject?: string | undefined;
}
