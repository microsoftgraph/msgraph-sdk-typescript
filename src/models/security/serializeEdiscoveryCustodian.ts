import type {EdiscoveryCustodian} from './ediscoveryCustodian';
import type {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import {serializeDataSourceContainer} from './serializeDataSourceContainer';
import {serializeEdiscoveryIndexOperation} from './serializeEdiscoveryIndexOperation';
import {serializeSiteSource} from './serializeSiteSource';
import {serializeUnifiedGroupSource} from './serializeUnifiedGroupSource';
import {serializeUserSource} from './serializeUserSource';
import type {SiteSource} from './siteSource';
import type {UnifiedGroupSource} from './unifiedGroupSource';
import type {UserSource} from './userSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCustodian(writer: SerializationWriter, ediscoveryCustodian: EdiscoveryCustodian | undefined = {} as EdiscoveryCustodian) : void {
        serializeDataSourceContainer(writer, ediscoveryCustodian)
        writer.writeDateValue("acknowledgedDateTime", ediscoveryCustodian.acknowledgedDateTime);
        writer.writeStringValue("email", ediscoveryCustodian.email);
        writer.writeObjectValue<EdiscoveryIndexOperation>("lastIndexOperation", ediscoveryCustodian.lastIndexOperation, serializeEdiscoveryIndexOperation);
        writer.writeCollectionOfObjectValues<SiteSource>("siteSources", ediscoveryCustodian.siteSources, serializeSiteSource);
        writer.writeCollectionOfObjectValues<UnifiedGroupSource>("unifiedGroupSources", ediscoveryCustodian.unifiedGroupSources, serializeUnifiedGroupSource);
        writer.writeCollectionOfObjectValues<UserSource>("userSources", ediscoveryCustodian.userSources, serializeUserSource);
}
