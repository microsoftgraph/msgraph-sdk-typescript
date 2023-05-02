import {AddLargeGalleryViewOperation} from './addLargeGalleryViewOperation';
import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddLargeGalleryViewOperation(addLargeGalleryViewOperation: AddLargeGalleryViewOperation | undefined = {} as AddLargeGalleryViewOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(addLargeGalleryViewOperation),
    }
}
