import {WebsiteType} from './websiteType';

export interface Website{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The URL of the website. */
    address?:string | undefined;
    /** The display name of the web site. */
    displayName?:string | undefined;
    /** Possible values are: other, home, work, blog, profile. */
    type?:WebsiteType | undefined;
}
