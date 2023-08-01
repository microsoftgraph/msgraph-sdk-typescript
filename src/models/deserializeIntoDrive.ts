import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createQuotaFromDiscriminatorValue} from './createQuotaFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSystemFacetFromDiscriminatorValue} from './createSystemFacetFromDiscriminatorValue';
import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import type {Drive} from './drive';
import type {DriveItem} from './driveItem';
import type {IdentitySet} from './identitySet';
import type {List} from './list';
import type {Quota} from './quota';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeList} from './serializeList';
import {serializeQuota} from './serializeQuota';
import {serializeSharepointIds} from './serializeSharepointIds';
import {serializeSystemFacet} from './serializeSystemFacet';
import type {SharepointIds} from './sharepointIds';
import type {SystemFacet} from './systemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDrive(drive: Drive | undefined = {} as Drive) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(drive),
        "bundles": n => { drive.bundles = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "driveType": n => { drive.driveType = n.getStringValue(); },
        "following": n => { drive.following = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "items": n => { drive.items = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "list": n => { drive.list = n.getObjectValue<List>(createListFromDiscriminatorValue); },
        "owner": n => { drive.owner = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "quota": n => { drive.quota = n.getObjectValue<Quota>(createQuotaFromDiscriminatorValue); },
        "root": n => { drive.root = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "sharePointIds": n => { drive.sharePointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
        "special": n => { drive.special = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "system": n => { drive.system = n.getObjectValue<SystemFacet>(createSystemFacetFromDiscriminatorValue); },
    }
}
