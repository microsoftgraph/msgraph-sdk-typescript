import type {DriveItem} from '../../../../../models/driveItem';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItem} from '../../../../../models/serializeDriveItem';
import type {SearchWithQResponse} from './searchWithQResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchWithQResponse(writer: SerializationWriter, searchWithQResponse: SearchWithQResponse | undefined = {} as SearchWithQResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, searchWithQResponse)
        writer.writeCollectionOfObjectValues<DriveItem>("value", searchWithQResponse.value, serializeDriveItem);
}
