import {AddLargeGalleryViewPostRequestBody} from './addLargeGalleryViewPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddLargeGalleryViewPostRequestBody(addLargeGalleryViewPostRequestBody: AddLargeGalleryViewPostRequestBody | undefined = {} as AddLargeGalleryViewPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { addLargeGalleryViewPostRequestBody.clientContext = n.getStringValue(); },
    }
}
