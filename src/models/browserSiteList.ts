import {BrowserSharedCookie} from './browserSharedCookie';
import {BrowserSite} from './browserSite';
import {BrowserSiteListStatus} from './browserSiteListStatus';
import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSiteList extends Entity, Parsable {
    /**
     * The description of the site list.
     */
    description?: string | undefined;
    /**
     * The name of the site list.
     */
    displayName?: string | undefined;
    /**
     * The user who last modified the site list.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The date and time when the site list was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The user who published the site list.
     */
    publishedBy?: IdentitySet | undefined;
    /**
     * The date and time when the site list was published.
     */
    publishedDateTime?: Date | undefined;
    /**
     * The current revision of the site list.
     */
    revision?: string | undefined;
    /**
     * A collection of shared cookies defined for the site list.
     */
    sharedCookies?: BrowserSharedCookie[] | undefined;
    /**
     * A collection of sites defined for the site list.
     */
    sites?: BrowserSite[] | undefined;
    /**
     * The status property
     */
    status?: BrowserSiteListStatus | undefined;
}
