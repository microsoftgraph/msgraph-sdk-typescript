import type {AddLargeGalleryViewOperation} from './addLargeGalleryViewOperation';
import {serializeCommsOperation} from './serializeCommsOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewOperation(writer: SerializationWriter, addLargeGalleryViewOperation: AddLargeGalleryViewOperation | undefined = {} as AddLargeGalleryViewOperation) : void {
        serializeCommsOperation(writer, addLargeGalleryViewOperation)
}
