import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharedDriveItem} from './serializeSharedDriveItem';
import {SharedDriveItem} from './sharedDriveItem';
import {SharedDriveItemCollectionResponse} from './sharedDriveItemCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedDriveItemCollectionResponse(writer: SerializationWriter, sharedDriveItemCollectionResponse: SharedDriveItemCollectionResponse | undefined = {} as SharedDriveItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedDriveItemCollectionResponse)
        writer.writeCollectionOfObjectValues<SharedDriveItem>("value", sharedDriveItemCollectionResponse.value, serializeSharedDriveItem);
}
