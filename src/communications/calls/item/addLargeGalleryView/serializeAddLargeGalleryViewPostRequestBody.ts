import {AddLargeGalleryViewPostRequestBody} from './addLargeGalleryViewPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewPostRequestBody(addLargeGalleryViewPostRequestBody: AddLargeGalleryViewPostRequestBody | undefined = {} as AddLargeGalleryViewPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("clientContext", addLargeGalleryViewPostRequestBody.clientContext);
        writer.writeAdditionalData(addLargeGalleryViewPostRequestBody.additionalData);
}
