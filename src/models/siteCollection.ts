import {Root} from './root';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SiteCollection extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The geographic region code for where this site collection resides. Read-only. */
    dataLocationCode?: string | undefined;
    /** The hostname for the site collection. Read-only. */
    hostname?: string | undefined;
    /** If present, indicates that this is a root site collection in SharePoint. Read-only. */
    root?: Root | undefined;
}
