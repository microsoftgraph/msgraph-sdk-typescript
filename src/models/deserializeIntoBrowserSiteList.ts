import {BrowserSharedCookie} from './browserSharedCookie';
import {BrowserSite} from './browserSite';
import {BrowserSiteList} from './browserSiteList';
import {BrowserSiteListStatus} from './browserSiteListStatus';
import {createBrowserSharedCookieFromDiscriminatorValue} from './createBrowserSharedCookieFromDiscriminatorValue';
import {createBrowserSiteFromDiscriminatorValue} from './createBrowserSiteFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {serializeBrowserSharedCookie} from './serializeBrowserSharedCookie';
import {serializeBrowserSite} from './serializeBrowserSite';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSiteList(browserSiteList: BrowserSiteList | undefined = {} as BrowserSiteList) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(browserSiteList),
        "description": n => { browserSiteList.description = n.getStringValue(); },
        "displayName": n => { browserSiteList.displayName = n.getStringValue(); },
        "lastModifiedBy": n => { browserSiteList.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { browserSiteList.lastModifiedDateTime = n.getDateValue(); },
        "publishedBy": n => { browserSiteList.publishedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "publishedDateTime": n => { browserSiteList.publishedDateTime = n.getDateValue(); },
        "revision": n => { browserSiteList.revision = n.getStringValue(); },
        "sharedCookies": n => { browserSiteList.sharedCookies = n.getCollectionOfObjectValues<BrowserSharedCookie>(createBrowserSharedCookieFromDiscriminatorValue); },
        "sites": n => { browserSiteList.sites = n.getCollectionOfObjectValues<BrowserSite>(createBrowserSiteFromDiscriminatorValue); },
        "status": n => { browserSiteList.status = n.getEnumValue<BrowserSiteListStatus>(BrowserSiteListStatus); },
    }
}
