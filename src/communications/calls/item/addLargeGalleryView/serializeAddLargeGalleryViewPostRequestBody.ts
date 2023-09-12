import { type AddLargeGalleryViewPostRequestBody } from './addLargeGalleryViewPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewPostRequestBody(writer: SerializationWriter, addLargeGalleryViewPostRequestBody: AddLargeGalleryViewPostRequestBody | undefined = {} as AddLargeGalleryViewPostRequestBody) : void {
        writer.writeStringValue("clientContext", addLargeGalleryViewPostRequestBody.clientContext);
        writer.writeAdditionalData(addLargeGalleryViewPostRequestBody.additionalData);
}
