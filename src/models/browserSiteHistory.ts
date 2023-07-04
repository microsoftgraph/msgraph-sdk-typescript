import {BrowserSiteCompatibilityMode} from './browserSiteCompatibilityMode';
import {BrowserSiteMergeType} from './browserSiteMergeType';
import {BrowserSiteTargetEnvironment} from './browserSiteTargetEnvironment';
import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSiteHistory extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Controls the behavior of redirected sites. If true, indicates that the site will open in Internet Explorer 11 or Microsoft Edge even if the site is navigated to as part of a HTTP or meta refresh redirection chain.
     */
    allowRedirect?: boolean | undefined;
    /**
     * The comment for the site.
     */
    comment?: string | undefined;
    /**
     * Controls what compatibility setting is used for specific sites or domains. The possible values are: default, internetExplorer8Enterprise, internetExplorer7Enterprise, internetExplorer11, internetExplorer10, internetExplorer9, internetExplorer8, internetExplorer7, internetExplorer5, unknownFutureValue.
     */
    compatibilityMode?: BrowserSiteCompatibilityMode | undefined;
    /**
     * The user who last modified the site.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The merge type of the site. The possible values are: noMerge, default, unknownFutureValue.
     */
    mergeType?: BrowserSiteMergeType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The date and time when the site was last published.
     */
    publishedDateTime?: Date | undefined;
    /**
     * The target environment that the site should open in. The possible values are: internetExplorerMode, internetExplorer11, microsoftEdge, configurable, none, unknownFutureValue.Prior to June 15, 2022, the internetExplorer11 option would allow opening a site in the Internet Explorer 11 (IE11) desktop application. Following the retirement of IE11 on June 15, 2022, the internetExplorer11 option will no longer open an IE11 window and will instead behave the same as the internetExplorerMode option.
     */
    targetEnvironment?: BrowserSiteTargetEnvironment | undefined;
}
