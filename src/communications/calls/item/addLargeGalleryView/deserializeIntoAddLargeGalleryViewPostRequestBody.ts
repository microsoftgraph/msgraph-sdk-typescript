import type {AddLargeGalleryViewPostRequestBody} from './addLargeGalleryViewPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddLargeGalleryViewPostRequestBody(addLargeGalleryViewPostRequestBody: AddLargeGalleryViewPostRequestBody | undefined = {} as AddLargeGalleryViewPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { addLargeGalleryViewPostRequestBody.clientContext = n.getStringValue(); },
    }
}
