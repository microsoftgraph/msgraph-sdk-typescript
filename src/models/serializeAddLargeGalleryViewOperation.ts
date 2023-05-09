import {AddLargeGalleryViewOperation} from './addLargeGalleryViewOperation';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewOperation(writer: SerializationWriter, addLargeGalleryViewOperation: AddLargeGalleryViewOperation | undefined = {} as AddLargeGalleryViewOperation) : void {
        serializeCommsOperation(writer, addLargeGalleryViewOperation)
}
