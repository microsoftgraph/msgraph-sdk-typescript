import {createDriveItemFromDiscriminatorValue} from '../../../models/createDriveItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {DriveItem} from '../../../models/driveItem';
import {serializeDriveItem} from '../../../models/serializeDriveItem';
import {SharedWithMeResponse} from './sharedWithMeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedWithMeResponse(sharedWithMeResponse: SharedWithMeResponse | undefined = {} as SharedWithMeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedWithMeResponse),
        "value": n => { sharedWithMeResponse.value = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
