import { createDriveItemFromDiscriminatorValue } from './createDriveItemFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DriveItem } from './driveItem';
import { type DriveItemCollectionResponse } from './driveItemCollectionResponse';
import { serializeDriveItem } from './serializeDriveItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemCollectionResponse(driveItemCollectionResponse: DriveItemCollectionResponse | undefined = {} as DriveItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(driveItemCollectionResponse),
        "value": n => { driveItemCollectionResponse.value = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
