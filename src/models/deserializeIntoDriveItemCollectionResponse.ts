import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DriveItem} from './driveItem';
import {DriveItemCollectionResponse} from './driveItemCollectionResponse';
import {serializeDriveItem} from './serializeDriveItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemCollectionResponse(driveItemCollectionResponse: DriveItemCollectionResponse | undefined = {} as DriveItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(driveItemCollectionResponse),
        "value": n => { driveItemCollectionResponse.value = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
