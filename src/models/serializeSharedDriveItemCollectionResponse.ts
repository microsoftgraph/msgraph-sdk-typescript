import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSharedDriveItem } from './serializeSharedDriveItem';
import { type SharedDriveItem } from './sharedDriveItem';
import { type SharedDriveItemCollectionResponse } from './sharedDriveItemCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharedDriveItemCollectionResponse(writer: SerializationWriter, sharedDriveItemCollectionResponse: SharedDriveItemCollectionResponse | undefined = {} as SharedDriveItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedDriveItemCollectionResponse)
        writer.writeCollectionOfObjectValues<SharedDriveItem>("value", sharedDriveItemCollectionResponse.value, serializeSharedDriveItem);
}
