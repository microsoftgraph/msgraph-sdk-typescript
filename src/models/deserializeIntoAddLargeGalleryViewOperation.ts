import { type AddLargeGalleryViewOperation } from './addLargeGalleryViewOperation';
import { deserializeIntoCommsOperation } from './deserializeIntoCommsOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAddLargeGalleryViewOperation(addLargeGalleryViewOperation: AddLargeGalleryViewOperation | undefined = {} as AddLargeGalleryViewOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(addLargeGalleryViewOperation),
    }
}
