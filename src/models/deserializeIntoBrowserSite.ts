import {BrowserSite} from './browserSite';
import {BrowserSiteCompatibilityMode} from './browserSiteCompatibilityMode';
import {BrowserSiteHistory} from './browserSiteHistory';
import {BrowserSiteMergeType} from './browserSiteMergeType';
import {BrowserSiteStatus} from './browserSiteStatus';
import {BrowserSiteTargetEnvironment} from './browserSiteTargetEnvironment';
import {createBrowserSiteHistoryFromDiscriminatorValue} from './createBrowserSiteHistoryFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {serializeBrowserSiteHistory} from './serializeBrowserSiteHistory';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSite(browserSite: BrowserSite | undefined = {} as BrowserSite) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(browserSite),
        "allowRedirect": n => { browserSite.allowRedirect = n.getBooleanValue(); },
        "comment": n => { browserSite.comment = n.getStringValue(); },
        "compatibilityMode": n => { browserSite.compatibilityMode = n.getEnumValue<BrowserSiteCompatibilityMode>(BrowserSiteCompatibilityMode); },
        "createdDateTime": n => { browserSite.createdDateTime = n.getDateValue(); },
        "deletedDateTime": n => { browserSite.deletedDateTime = n.getDateValue(); },
        "history": n => { browserSite.history = n.getCollectionOfObjectValues<BrowserSiteHistory>(createBrowserSiteHistoryFromDiscriminatorValue); },
        "lastModifiedBy": n => { browserSite.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { browserSite.lastModifiedDateTime = n.getDateValue(); },
        "mergeType": n => { browserSite.mergeType = n.getEnumValue<BrowserSiteMergeType>(BrowserSiteMergeType); },
        "status": n => { browserSite.status = n.getEnumValue<BrowserSiteStatus>(BrowserSiteStatus); },
        "targetEnvironment": n => { browserSite.targetEnvironment = n.getEnumValue<BrowserSiteTargetEnvironment>(BrowserSiteTargetEnvironment); },
        "webUrl": n => { browserSite.webUrl = n.getStringValue(); },
    }
}
