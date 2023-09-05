import { createEdiscoveryIndexOperationFromDiscriminatorValue } from './createEdiscoveryIndexOperationFromDiscriminatorValue';
import { createSiteSourceFromDiscriminatorValue } from './createSiteSourceFromDiscriminatorValue';
import { createUnifiedGroupSourceFromDiscriminatorValue } from './createUnifiedGroupSourceFromDiscriminatorValue';
import { createUserSourceFromDiscriminatorValue } from './createUserSourceFromDiscriminatorValue';
import { deserializeIntoDataSourceContainer } from './deserializeIntoDataSourceContainer';
import { type EdiscoveryCustodian } from './ediscoveryCustodian';
import { type EdiscoveryIndexOperation } from './ediscoveryIndexOperation';
import { serializeEdiscoveryIndexOperation } from './serializeEdiscoveryIndexOperation';
import { serializeSiteSource } from './serializeSiteSource';
import { serializeUnifiedGroupSource } from './serializeUnifiedGroupSource';
import { serializeUserSource } from './serializeUserSource';
import { type SiteSource } from './siteSource';
import { type UnifiedGroupSource } from './unifiedGroupSource';
import { type UserSource } from './userSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCustodian(ediscoveryCustodian: EdiscoveryCustodian | undefined = {} as EdiscoveryCustodian) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSourceContainer(ediscoveryCustodian),
        "acknowledgedDateTime": n => { ediscoveryCustodian.acknowledgedDateTime = n.getDateValue(); },
        "email": n => { ediscoveryCustodian.email = n.getStringValue(); },
        "lastIndexOperation": n => { ediscoveryCustodian.lastIndexOperation = n.getObjectValue<EdiscoveryIndexOperation>(createEdiscoveryIndexOperationFromDiscriminatorValue); },
        "siteSources": n => { ediscoveryCustodian.siteSources = n.getCollectionOfObjectValues<SiteSource>(createSiteSourceFromDiscriminatorValue); },
        "unifiedGroupSources": n => { ediscoveryCustodian.unifiedGroupSources = n.getCollectionOfObjectValues<UnifiedGroupSource>(createUnifiedGroupSourceFromDiscriminatorValue); },
        "userSources": n => { ediscoveryCustodian.userSources = n.getCollectionOfObjectValues<UserSource>(createUserSourceFromDiscriminatorValue); },
    }
}
