import {AccessAction} from './accessAction';
import {createAccessActionFromDiscriminatorValue} from './createAccessActionFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {ItemActivity} from './itemActivity';
import {serializeAccessAction} from './serializeAccessAction';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivity(itemActivity: ItemActivity | undefined = {} as ItemActivity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(itemActivity),
        "access": n => { itemActivity.access = n.getObjectValue<AccessAction>(createAccessActionFromDiscriminatorValue); },
        "activityDateTime": n => { itemActivity.activityDateTime = n.getDateValue(); },
        "actor": n => { itemActivity.actor = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "driveItem": n => { itemActivity.driveItem = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
