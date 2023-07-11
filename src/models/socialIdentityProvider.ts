import {IdentityProviderBase} from './identityProviderBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SocialIdentityProvider extends IdentityProviderBase, Parsable {
    /**
     * The identifier for the client application obtained when registering the application with the identity provider. Required.
     */
    clientId?: string | undefined;
    /**
     * The client secret for the application that is obtained when the application is registered with the identity provider. This is write-only. A read operation returns ****. Required.
     */
    clientSecret?: string | undefined;
    /**
     * For a B2B scenario, possible values: Google, Facebook. For a B2C scenario, possible values: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat. Required.
     */
    identityProviderType?: string | undefined;
}
