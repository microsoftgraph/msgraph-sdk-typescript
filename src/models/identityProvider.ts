import {Entity} from './entity';

export interface IdentityProvider extends Entity{
    /** The client ID for the application obtained when registering the application with the identity provider. This is a required field.  Required. Not nullable. */
    clientId?:string | undefined;
    /** The client secret for the application obtained when registering the application with the identity provider. This is write-only. A read operation will return ****. This is a required field. Required. Not nullable. */
    clientSecret?:string | undefined;
    /** The display name of the identity provider. Not nullable. */
    name?:string | undefined;
    /** The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo,QQ, WeChat, OpenIDConnect. Not nullable. */
    type?:string | undefined;
}
