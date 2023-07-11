import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProvider extends Entity, Parsable {
    /**
     * The client ID for the application. This is the client ID obtained when registering the application with the identity provider. Required. Not nullable.
     */
    clientId?: string | undefined;
    /**
     * The client secret for the application. This is the client secret obtained when registering the application with the identity provider. This is write-only. A read operation will return ****.  Required. Not nullable.
     */
    clientSecret?: string | undefined;
    /**
     * The display name of the identity provider. Not nullable.
     */
    name?: string | undefined;
    /**
     * The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat, OpenIDConnect. Not nullable.
     */
    type?: string | undefined;
}
