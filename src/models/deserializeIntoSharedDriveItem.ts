import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {List} from './list';
import {ListItem} from './listItem';
import {Permission} from './permission';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeList} from './serializeList';
import {serializeListItem} from './serializeListItem';
import {serializePermission} from './serializePermission';
import {serializeSite} from './serializeSite';
import {SharedDriveItem} from './sharedDriveItem';
import {Site} from './site';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedDriveItem(sharedDriveItem: SharedDriveItem | undefined = {} as SharedDriveItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(sharedDriveItem),
        "driveItem": n => { sharedDriveItem.driveItem = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "items": n => { sharedDriveItem.items = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "list": n => { sharedDriveItem.list = n.getObjectValue<List>(createListFromDiscriminatorValue); },
        "listItem": n => { sharedDriveItem.listItem = n.getObjectValue<ListItem>(createListItemFromDiscriminatorValue); },
        "owner": n => { sharedDriveItem.owner = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "permission": n => { sharedDriveItem.permission = n.getObjectValue<Permission>(createPermissionFromDiscriminatorValue); },
        "root": n => { sharedDriveItem.root = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "site": n => { sharedDriveItem.site = n.getObjectValue<Site>(createSiteFromDiscriminatorValue); },
    }
}
