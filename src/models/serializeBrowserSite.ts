import {BrowserSite} from './browserSite';
import {BrowserSiteCompatibilityMode} from './browserSiteCompatibilityMode';
import {BrowserSiteHistory} from './browserSiteHistory';
import {BrowserSiteMergeType} from './browserSiteMergeType';
import {BrowserSiteStatus} from './browserSiteStatus';
import {BrowserSiteTargetEnvironment} from './browserSiteTargetEnvironment';
import {IdentitySet} from './identitySet';
import {serializeBrowserSiteHistory} from './serializeBrowserSiteHistory';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSite(writer: SerializationWriter, browserSite: BrowserSite | undefined = {} as BrowserSite) : void {
        serializeEntity(writer, browserSite)
        writer.writeBooleanValue("allowRedirect", browserSite.allowRedirect);
        writer.writeStringValue("comment", browserSite.comment);
        writer.writeEnumValue<BrowserSiteCompatibilityMode>("compatibilityMode", browserSite.compatibilityMode);
        writer.writeDateValue("createdDateTime", browserSite.createdDateTime);
        writer.writeDateValue("deletedDateTime", browserSite.deletedDateTime);
        writer.writeCollectionOfObjectValues<BrowserSiteHistory>("history", browserSite.history, serializeBrowserSiteHistory);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", browserSite.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", browserSite.lastModifiedDateTime);
        writer.writeEnumValue<BrowserSiteMergeType>("mergeType", browserSite.mergeType);
        writer.writeEnumValue<BrowserSiteStatus>("status", browserSite.status);
        writer.writeEnumValue<BrowserSiteTargetEnvironment>("targetEnvironment", browserSite.targetEnvironment);
        writer.writeStringValue("webUrl", browserSite.webUrl);
}
