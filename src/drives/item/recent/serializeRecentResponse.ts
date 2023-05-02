import {DriveItem} from '../../../models/driveItem';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItem} from '../../../models/serializeDriveItem';
import {RecentResponse} from './recentResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecentResponse(writer: SerializationWriter, recentResponse: RecentResponse | undefined = {} as RecentResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, recentResponse)
        writer.writeCollectionOfObjectValues<DriveItem>("value", recentResponse.value, serializeDriveItem);
}
