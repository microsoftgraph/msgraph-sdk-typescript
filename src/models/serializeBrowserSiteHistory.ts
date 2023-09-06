import { BrowserSiteCompatibilityMode } from './browserSiteCompatibilityMode';
import { type BrowserSiteHistory } from './browserSiteHistory';
import { BrowserSiteMergeType } from './browserSiteMergeType';
import { BrowserSiteTargetEnvironment } from './browserSiteTargetEnvironment';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBrowserSiteHistory(writer: SerializationWriter, browserSiteHistory: BrowserSiteHistory | undefined = {} as BrowserSiteHistory) : void {
        writer.writeBooleanValue("allowRedirect", browserSiteHistory.allowRedirect);
        writer.writeStringValue("comment", browserSiteHistory.comment);
        writer.writeEnumValue<BrowserSiteCompatibilityMode>("compatibilityMode", browserSiteHistory.compatibilityMode);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", browserSiteHistory.lastModifiedBy, serializeIdentitySet);
        writer.writeEnumValue<BrowserSiteMergeType>("mergeType", browserSiteHistory.mergeType);
        writer.writeStringValue("@odata.type", browserSiteHistory.odataType);
        writer.writeDateValue("publishedDateTime", browserSiteHistory.publishedDateTime);
        writer.writeEnumValue<BrowserSiteTargetEnvironment>("targetEnvironment", browserSiteHistory.targetEnvironment);
        writer.writeAdditionalData(browserSiteHistory.additionalData);
}
