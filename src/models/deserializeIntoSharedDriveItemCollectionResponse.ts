import { createSharedDriveItemFromDiscriminatorValue } from './createSharedDriveItemFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSharedDriveItem } from './serializeSharedDriveItem';
import { type SharedDriveItem } from './sharedDriveItem';
import { type SharedDriveItemCollectionResponse } from './sharedDriveItemCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedDriveItemCollectionResponse(sharedDriveItemCollectionResponse: SharedDriveItemCollectionResponse | undefined = {} as SharedDriveItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedDriveItemCollectionResponse),
        "value": n => { sharedDriveItemCollectionResponse.value = n.getCollectionOfObjectValues<SharedDriveItem>(createSharedDriveItemFromDiscriminatorValue); },
    }
}
