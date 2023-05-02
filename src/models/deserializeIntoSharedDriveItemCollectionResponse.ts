import {createSharedDriveItemFromDiscriminatorValue} from './createSharedDriveItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSharedDriveItem} from './serializeSharedDriveItem';
import {SharedDriveItem} from './sharedDriveItem';
import {SharedDriveItemCollectionResponse} from './sharedDriveItemCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedDriveItemCollectionResponse(sharedDriveItemCollectionResponse: SharedDriveItemCollectionResponse | undefined = {} as SharedDriveItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedDriveItemCollectionResponse),
        "value": n => { sharedDriveItemCollectionResponse.value = n.getCollectionOfObjectValues<SharedDriveItem>(createSharedDriveItemFromDiscriminatorValue); },
    }
}
