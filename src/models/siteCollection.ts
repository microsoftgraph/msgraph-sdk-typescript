import {Root} from './root';

export interface SiteCollection{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The geographic region code for where this site collection resides. Read-only. */
    dataLocationCode?:string | undefined;
    /** The hostname for the site collection. Read-only. */
    hostname?:string | undefined;
    /** If present, indicates that this is a root site collection in SharePoint. Read-only. */
    root?:Root | undefined;
}
