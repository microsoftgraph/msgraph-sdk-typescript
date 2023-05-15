import {BrowserSharedCookie} from './browserSharedCookie';
import {BrowserSite} from './browserSite';
import {BrowserSiteList} from './browserSiteList';
import {BrowserSiteListStatus} from './browserSiteListStatus';
import {IdentitySet} from './identitySet';
import {serializeBrowserSharedCookie} from './serializeBrowserSharedCookie';
import {serializeBrowserSite} from './serializeBrowserSite';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSiteList(writer: SerializationWriter, browserSiteList: BrowserSiteList | undefined = {} as BrowserSiteList) : void {
        serializeEntity(writer, browserSiteList)
        writer.writeStringValue("description", browserSiteList.description);
        writer.writeStringValue("displayName", browserSiteList.displayName);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", browserSiteList.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", browserSiteList.lastModifiedDateTime);
        writer.writeObjectValue<IdentitySet>("publishedBy", browserSiteList.publishedBy, serializeIdentitySet);
        writer.writeDateValue("publishedDateTime", browserSiteList.publishedDateTime);
        writer.writeStringValue("revision", browserSiteList.revision);
        writer.writeCollectionOfObjectValues<BrowserSharedCookie>("sharedCookies", browserSiteList.sharedCookies, serializeBrowserSharedCookie);
        writer.writeCollectionOfObjectValues<BrowserSite>("sites", browserSiteList.sites, serializeBrowserSite);
        writer.writeEnumValue<BrowserSiteListStatus>("status", browserSiteList.status);
}
