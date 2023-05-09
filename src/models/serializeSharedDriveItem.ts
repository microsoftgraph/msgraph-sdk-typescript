import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {List} from './list';
import {ListItem} from './listItem';
import {Permission} from './permission';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeList} from './serializeList';
import {serializeListItem} from './serializeListItem';
import {serializePermission} from './serializePermission';
import {serializeSite} from './serializeSite';
import {SharedDriveItem} from './sharedDriveItem';
import {Site} from './site';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedDriveItem(writer: SerializationWriter, sharedDriveItem: SharedDriveItem | undefined = {} as SharedDriveItem) : void {
        serializeBaseItem(writer, sharedDriveItem)
        writer.writeObjectValue<DriveItem>("driveItem", sharedDriveItem.driveItem, serializeDriveItem);
        writer.writeCollectionOfObjectValues<DriveItem>("items", sharedDriveItem.items, serializeDriveItem);
        writer.writeObjectValue<List>("list", sharedDriveItem.list, serializeList);
        writer.writeObjectValue<ListItem>("listItem", sharedDriveItem.listItem, serializeListItem);
        writer.writeObjectValue<IdentitySet>("owner", sharedDriveItem.owner, serializeIdentitySet);
        writer.writeObjectValue<Permission>("permission", sharedDriveItem.permission, serializePermission);
        writer.writeObjectValue<DriveItem>("root", sharedDriveItem.root, serializeDriveItem);
        writer.writeObjectValue<Site>("site", sharedDriveItem.site, serializeSite);
}
