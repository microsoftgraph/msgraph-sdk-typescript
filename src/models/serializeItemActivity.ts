import {AccessAction} from './accessAction';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {ItemActivity} from './itemActivity';
import {serializeAccessAction} from './serializeAccessAction';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivity(writer: SerializationWriter, itemActivity: ItemActivity | undefined = {} as ItemActivity) : void {
        serializeEntity(writer, itemActivity)
        writer.writeObjectValue<AccessAction>("access", itemActivity.access, serializeAccessAction);
        writer.writeDateValue("activityDateTime", itemActivity.activityDateTime);
        writer.writeObjectValue<IdentitySet>("actor", itemActivity.actor, serializeIdentitySet);
        writer.writeObjectValue<DriveItem>("driveItem", itemActivity.driveItem, serializeDriveItem);
}
