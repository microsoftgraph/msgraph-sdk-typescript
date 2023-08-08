import type {Drive} from './drive';
import type {DriveItem} from './driveItem';
import type {IdentitySet} from './identitySet';
import type {List} from './list';
import type {Quota} from './quota';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeList} from './serializeList';
import {serializeQuota} from './serializeQuota';
import {serializeSharepointIds} from './serializeSharepointIds';
import {serializeSystemFacet} from './serializeSystemFacet';
import type {SharepointIds} from './sharepointIds';
import type {SystemFacet} from './systemFacet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDrive(writer: SerializationWriter, drive: Drive | undefined = {} as Drive) : void {
        serializeBaseItem(writer, drive)
        writer.writeCollectionOfObjectValues<DriveItem>("bundles", drive.bundles, serializeDriveItem);
        writer.writeStringValue("driveType", drive.driveType);
        writer.writeCollectionOfObjectValues<DriveItem>("following", drive.following, serializeDriveItem);
        writer.writeCollectionOfObjectValues<DriveItem>("items", drive.items, serializeDriveItem);
        writer.writeObjectValue<List>("list", drive.list, serializeList);
        writer.writeObjectValue<IdentitySet>("owner", drive.owner, serializeIdentitySet);
        writer.writeObjectValue<Quota>("quota", drive.quota, serializeQuota);
        writer.writeObjectValue<DriveItem>("root", drive.root, serializeDriveItem);
        writer.writeObjectValue<SharepointIds>("sharePointIds", drive.sharePointIds, serializeSharepointIds);
        writer.writeCollectionOfObjectValues<DriveItem>("special", drive.special, serializeDriveItem);
        writer.writeObjectValue<SystemFacet>("system", drive.system, serializeSystemFacet);
}
