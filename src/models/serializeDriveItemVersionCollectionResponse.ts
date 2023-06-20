import {DriveItemVersion} from './driveItemVersion';
import {DriveItemVersionCollectionResponse} from './driveItemVersionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItemVersion} from './serializeDriveItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemVersionCollectionResponse(driveItemVersionCollectionResponse: DriveItemVersionCollectionResponse | undefined = {} as DriveItemVersionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, driveItemVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<DriveItemVersion>("value", driveItemVersionCollectionResponse.value, serializeDriveItemVersion);
}
