import {Drive} from './drive';
import {DriveCollectionResponse} from './driveCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDrive} from './serializeDrive';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveCollectionResponse(writer: SerializationWriter, driveCollectionResponse: DriveCollectionResponse | undefined = {} as DriveCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, driveCollectionResponse)
        writer.writeCollectionOfObjectValues<Drive>("value", driveCollectionResponse.value, serializeDrive);
}
