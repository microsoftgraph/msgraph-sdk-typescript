import {ImplicitGrantSettings} from './implicitGrantSettings';
import {RedirectUriSettings} from './redirectUriSettings';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WebApplication extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Home page or landing page of the application.
     */
    homePageUrl?: string | undefined;
    /**
     * Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow.
     */
    implicitGrantSettings?: ImplicitGrantSettings | undefined;
    /**
     * Specifies the URL that will be used by Microsoft's authorization service to logout an user using front-channel, back-channel or SAML logout protocols.
     */
    logoutUrl?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.
     */
    redirectUris?: string[] | undefined;
    /**
     * The redirectUriSettings property
     */
    redirectUriSettings?: RedirectUriSettings[] | undefined;
}
