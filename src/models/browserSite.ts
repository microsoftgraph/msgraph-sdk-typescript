import {BrowserSiteCompatibilityMode} from './browserSiteCompatibilityMode';
import {BrowserSiteHistory} from './browserSiteHistory';
import {BrowserSiteMergeType} from './browserSiteMergeType';
import {BrowserSiteStatus} from './browserSiteStatus';
import {BrowserSiteTargetEnvironment} from './browserSiteTargetEnvironment';
import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSite extends Entity, Parsable {
    /**
     * Controls the behavior of redirected sites. If true, indicates that the site will open in Internet Explorer 11 or Microsoft Edge even if the site is navigated to as part of a HTTP or meta refresh redirection chain.
     */
    allowRedirect?: boolean | undefined;
    /**
     * The comment for the site.
     */
    comment?: string | undefined;
    /**
     * The compatibilityMode property
     */
    compatibilityMode?: BrowserSiteCompatibilityMode | undefined;
    /**
     * The date and time when the site was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The date and time when the site was deleted.
     */
    deletedDateTime?: Date | undefined;
    /**
     * The history of modifications applied to the site.
     */
    history?: BrowserSiteHistory[] | undefined;
    /**
     * The user who last modified the site.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The date and time when the site was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The mergeType property
     */
    mergeType?: BrowserSiteMergeType | undefined;
    /**
     * The status property
     */
    status?: BrowserSiteStatus | undefined;
    /**
     * The targetEnvironment property
     */
    targetEnvironment?: BrowserSiteTargetEnvironment | undefined;
    /**
     * The URL of the site.
     */
    webUrl?: string | undefined;
}
