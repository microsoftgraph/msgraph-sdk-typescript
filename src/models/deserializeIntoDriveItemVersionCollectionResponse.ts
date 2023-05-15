import {createDriveItemVersionFromDiscriminatorValue} from './createDriveItemVersionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DriveItemVersion} from './driveItemVersion';
import {DriveItemVersionCollectionResponse} from './driveItemVersionCollectionResponse';
import {serializeDriveItemVersion} from './serializeDriveItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemVersionCollectionResponse(driveItemVersionCollectionResponse: DriveItemVersionCollectionResponse | undefined = {} as DriveItemVersionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(driveItemVersionCollectionResponse),
        "value": n => { driveItemVersionCollectionResponse.value = n.getCollectionOfObjectValues<DriveItemVersion>(createDriveItemVersionFromDiscriminatorValue); },
    }
}
