import {DriveItemVersion} from './driveItemVersion';
import {DriveItemVersionCollectionResponse} from './driveItemVersionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItemVersion} from './serializeDriveItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemVersionCollectionResponse(writer: SerializationWriter, driveItemVersionCollectionResponse: DriveItemVersionCollectionResponse | undefined = {} as DriveItemVersionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, driveItemVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<DriveItemVersion>("value", driveItemVersionCollectionResponse.value, serializeDriveItemVersion);
}
