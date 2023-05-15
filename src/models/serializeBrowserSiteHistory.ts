import {BrowserSiteCompatibilityMode} from './browserSiteCompatibilityMode';
import {BrowserSiteHistory} from './browserSiteHistory';
import {BrowserSiteMergeType} from './browserSiteMergeType';
import {BrowserSiteTargetEnvironment} from './browserSiteTargetEnvironment';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
