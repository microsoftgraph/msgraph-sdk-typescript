import { createDriveItemFromDiscriminatorValue } from '../../../../../models/createDriveItemFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type DriveItem } from '../../../../../models/driveItem';
import { serializeDriveItem } from '../../../../../models/serializeDriveItem';
import { type SearchWithQResponse } from './searchWithQResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchWithQResponse(searchWithQResponse: SearchWithQResponse | undefined = {} as SearchWithQResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(searchWithQResponse),
        "value": n => { searchWithQResponse.value = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
