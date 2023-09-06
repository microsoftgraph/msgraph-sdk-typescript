import { type DriveItem } from '../../../models/driveItem';
import { serializeBaseCollectionPaginationCountResponse } from '../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeDriveItem } from '../../../models/serializeDriveItem';
import { type SharedWithMeResponse } from './sharedWithMeResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharedWithMeResponse(writer: SerializationWriter, sharedWithMeResponse: SharedWithMeResponse | undefined = {} as SharedWithMeResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedWithMeResponse)
        writer.writeCollectionOfObjectValues<DriveItem>("value", sharedWithMeResponse.value, serializeDriveItem);
}
