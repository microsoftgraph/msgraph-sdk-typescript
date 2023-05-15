import {createDriveItemFromDiscriminatorValue} from '../../../models/createDriveItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {DriveItem} from '../../../models/driveItem';
import {serializeDriveItem} from '../../../models/serializeDriveItem';
import {RecentResponse} from './recentResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecentResponse(recentResponse: RecentResponse | undefined = {} as RecentResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(recentResponse),
        "value": n => { recentResponse.value = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
