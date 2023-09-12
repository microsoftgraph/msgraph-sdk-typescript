import { type AddLargeGalleryViewOperation } from './addLargeGalleryViewOperation';
import { serializeCommsOperation } from './serializeCommsOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewOperation(writer: SerializationWriter, addLargeGalleryViewOperation: AddLargeGalleryViewOperation | undefined = {} as AddLargeGalleryViewOperation) : void {
        serializeCommsOperation(writer, addLargeGalleryViewOperation)
}
