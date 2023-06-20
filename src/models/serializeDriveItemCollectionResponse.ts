import {DriveItem} from './driveItem';
import {DriveItemCollectionResponse} from './driveItemCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItem} from './serializeDriveItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemCollectionResponse(driveItemCollectionResponse: DriveItemCollectionResponse | undefined = {} as DriveItemCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, driveItemCollectionResponse)
        writer.writeCollectionOfObjectValues<DriveItem>("value", driveItemCollectionResponse.value, serializeDriveItem);
}
