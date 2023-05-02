import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Drive} from './drive';
import {DriveCollectionResponse} from './driveCollectionResponse';
import {serializeDrive} from './serializeDrive';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveCollectionResponse(driveCollectionResponse: DriveCollectionResponse | undefined = {} as DriveCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(driveCollectionResponse),
        "value": n => { driveCollectionResponse.value = n.getCollectionOfObjectValues<Drive>(createDriveFromDiscriminatorValue); },
    }
}
