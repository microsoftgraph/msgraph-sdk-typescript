import {createDriveItemFromDiscriminatorValue} from '../../../models/createDriveItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {DriveItem} from '../../../models/driveItem';
import {serializeDriveItem} from '../../../models/serializeDriveItem';
import {SearchWithQResponse} from './searchWithQResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchWithQResponse(searchWithQResponse: SearchWithQResponse | undefined = {} as SearchWithQResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(searchWithQResponse),
        "value": n => { searchWithQResponse.value = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
