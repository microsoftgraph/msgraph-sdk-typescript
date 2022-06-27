import {IdentityProviderBase} from './identityProviderBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SocialIdentityProvider extends Partial<AdditionalDataHolder>, IdentityProviderBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The client identifier for the application obtained when registering the application with the identity provider. Required. */
    clientId?: string | undefined;
    /** The client secret for the application that is obtained when the application is registered with the identity provider. This is write-only. A read operation returns ****. Required. */
    clientSecret?: string | undefined;
    /** For a B2B scenario, possible values: Google, Facebook. For a B2C scenario, possible values: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat. Required. */
    identityProviderType?: string | undefined;
}
