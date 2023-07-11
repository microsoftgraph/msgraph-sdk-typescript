import {BrowserSharedCookieHistory} from './browserSharedCookieHistory';
import {BrowserSharedCookieSourceEnvironment} from './browserSharedCookieSourceEnvironment';
import {BrowserSharedCookieStatus} from './browserSharedCookieStatus';
import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSharedCookie extends Entity, Parsable {
    /**
     * The comment for the shared cookie.
     */
    comment?: string | undefined;
    /**
     * The date and time when the shared cookie was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The date and time when the shared cookie was deleted.
     */
    deletedDateTime?: Date | undefined;
    /**
     * The name of the cookie.
     */
    displayName?: string | undefined;
    /**
     * The history of modifications applied to the cookie.
     */
    history?: BrowserSharedCookieHistory[] | undefined;
    /**
     * Controls whether a cookie is a host-only or domain cookie.
     */
    hostOnly?: boolean | undefined;
    /**
     * The URL of the cookie.
     */
    hostOrDomain?: string | undefined;
    /**
     * The user who last modified the cookie.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The date and time when the cookie was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The path of the cookie.
     */
    path?: string | undefined;
    /**
     * The sourceEnvironment property
     */
    sourceEnvironment?: BrowserSharedCookieSourceEnvironment | undefined;
    /**
     * The status property
     */
    status?: BrowserSharedCookieStatus | undefined;
}
