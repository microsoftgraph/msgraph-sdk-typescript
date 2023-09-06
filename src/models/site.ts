import { type BaseItem } from './baseItem';
import { type ColumnDefinition } from './columnDefinition';
import { type ContentType } from './contentType';
import { type Drive } from './drive';
import { type ItemAnalytics } from './itemAnalytics';
import { type List } from './list';
import { type Onenote } from './onenote';
import { type Permission } from './permission';
import { type PublicError } from './publicError';
import { type RichLongRunningOperation } from './richLongRunningOperation';
import { type Root } from './root';
import { type SharepointIds } from './sharepointIds';
import { type SiteCollection } from './siteCollection';
import { type Store } from './termStore/store';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Site extends BaseItem, Parsable {
    /**
     * Analytics about the view activities that took place in this site.
     */
    analytics?: ItemAnalytics | undefined;
    /**
     * The collection of column definitions reusable across lists under this site.
     */
    columns?: ColumnDefinition[] | undefined;
    /**
     * The collection of content types defined for this site.
     */
    contentTypes?: ContentType[] | undefined;
    /**
     * The full title for the site. Read-only.
     */
    displayName?: string | undefined;
    /**
     * The default drive (document library) for this site.
     */
    drive?: Drive | undefined;
    /**
     * The collection of drives (document libraries) under this site.
     */
    drives?: Drive[] | undefined;
    /**
     * The error property
     */
    errorEscaped?: PublicError | undefined;
    /**
     * The externalColumns property
     */
    externalColumns?: ColumnDefinition[] | undefined;
    /**
     * Used to address any item contained in this site. This collection can't be enumerated.
     */
    items?: BaseItem[] | undefined;
    /**
     * The collection of lists under this site.
     */
    lists?: List[] | undefined;
    /**
     * Calls the OneNote service for notebook related operations.
     */
    onenote?: Onenote | undefined;
    /**
     * The collection of long-running operations on the site.
     */
    operations?: RichLongRunningOperation[] | undefined;
    /**
     * The permissions associated with the site. Nullable.
     */
    permissions?: Permission[] | undefined;
    /**
     * If present, indicates that this is the root site in the site collection. Read-only.
     */
    root?: Root | undefined;
    /**
     * Returns identifiers useful for SharePoint REST compatibility. Read-only.
     */
    sharepointIds?: SharepointIds | undefined;
    /**
     * Provides details about the site's site collection. Available only on the root site. Read-only.
     */
    siteCollection?: SiteCollection | undefined;
    /**
     * The collection of the sub-sites under this site.
     */
    sites?: Site[] | undefined;
    /**
     * The default termStore under this site.
     */
    termStore?: Store | undefined;
    /**
     * The collection of termStores under this site.
     */
    termStores?: Store[] | undefined;
}
