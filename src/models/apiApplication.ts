import {PermissionScope} from './permissionScope';
import {PreAuthorizedApplication} from './preAuthorizedApplication';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface ApiApplication extends AdditionalDataHolder, Parsable {
    /**
     * When true, allows an application to use claims mapping without specifying a custom signing key.
     */
    acceptMappedClaims?: boolean | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. If you set the appID of the client app to this value, the user only consents once to the client app. Azure AD knows that consenting to the client means implicitly consenting to the web API and automatically provisions service principals for both APIs at the same time. Both the client and the web API app must be registered in the same tenant.
     */
    knownClientApplications?: Guid[] | undefined;
    /**
     * The definition of the delegated permissions exposed by the web API represented by this application registration. These delegated permissions may be requested by a client application, and may be granted by users or administrators during consent. Delegated permissions are sometimes referred to as OAuth 2.0 scopes.
     */
    oauth2PermissionScopes?: PermissionScope[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Lists the client applications that are pre-authorized with the specified delegated permissions to access this application's APIs. Users are not required to consent to any pre-authorized application (for the permissions specified). However, any additional permissions not listed in preAuthorizedApplications (requested through incremental consent for example) will require user consent.
     */
    preAuthorizedApplications?: PreAuthorizedApplication[] | undefined;
    /**
     * Specifies the access token version expected by this resource. This changes the version and format of the JWT produced independent of the endpoint or client used to request the access token.  The endpoint used, v1.0 or v2.0, is chosen by the client and only impacts the version of id_tokens. Resources need to explicitly configure requestedAccessTokenVersion to indicate the supported access token format.  Possible values for requestedAccessTokenVersion are 1, 2, or null. If the value is null, this defaults to 1, which corresponds to the v1.0 endpoint.  If signInAudience on the application is configured as AzureADandPersonalMicrosoftAccount or PersonalMicrosoftAccount, the value for this property must be 2.
     */
    requestedAccessTokenVersion?: number | undefined;
}
