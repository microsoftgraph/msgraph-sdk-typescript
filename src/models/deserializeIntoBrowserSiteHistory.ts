import {BrowserSiteCompatibilityMode} from './browserSiteCompatibilityMode';
import {BrowserSiteHistory} from './browserSiteHistory';
import {BrowserSiteMergeType} from './browserSiteMergeType';
import {BrowserSiteTargetEnvironment} from './browserSiteTargetEnvironment';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSiteHistory(browserSiteHistory: BrowserSiteHistory | undefined = {} as BrowserSiteHistory) : Record<string, (node: ParseNode) => void> {
    return {
        "allowRedirect": n => { browserSiteHistory.allowRedirect = n.getBooleanValue(); },
        "comment": n => { browserSiteHistory.comment = n.getStringValue(); },
        "compatibilityMode": n => { browserSiteHistory.compatibilityMode = n.getEnumValue<BrowserSiteCompatibilityMode>(BrowserSiteCompatibilityMode); },
        "lastModifiedBy": n => { browserSiteHistory.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "mergeType": n => { browserSiteHistory.mergeType = n.getEnumValue<BrowserSiteMergeType>(BrowserSiteMergeType); },
        "@odata.type": n => { browserSiteHistory.odataType = n.getStringValue(); },
        "publishedDateTime": n => { browserSiteHistory.publishedDateTime = n.getDateValue(); },
        "targetEnvironment": n => { browserSiteHistory.targetEnvironment = n.getEnumValue<BrowserSiteTargetEnvironment>(BrowserSiteTargetEnvironment); },
    }
}
