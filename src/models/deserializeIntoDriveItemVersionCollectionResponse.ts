import { createDriveItemVersionFromDiscriminatorValue } from './createDriveItemVersionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DriveItemVersion } from './driveItemVersion';
import { type DriveItemVersionCollectionResponse } from './driveItemVersionCollectionResponse';
import { serializeDriveItemVersion } from './serializeDriveItemVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemVersionCollectionResponse(driveItemVersionCollectionResponse: DriveItemVersionCollectionResponse | undefined = {} as DriveItemVersionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(driveItemVersionCollectionResponse),
        "value": n => { driveItemVersionCollectionResponse.value = n.getCollectionOfObjectValues<DriveItemVersion>(createDriveItemVersionFromDiscriminatorValue); },
    }
}
