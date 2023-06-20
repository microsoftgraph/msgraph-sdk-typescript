import {AddLargeGalleryViewOperation} from './addLargeGalleryViewOperation';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewOperation(addLargeGalleryViewOperation: AddLargeGalleryViewOperation | undefined = {} as AddLargeGalleryViewOperation, writer: SerializationWriter) : void {
        serializeCommsOperation(writer, addLargeGalleryViewOperation)
}
