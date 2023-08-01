import type {PreviewPostRequestBody} from './previewPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPreviewPostRequestBody(previewPostRequestBody: PreviewPostRequestBody | undefined = {} as PreviewPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "page": n => { previewPostRequestBody.page = n.getStringValue(); },
        "zoom": n => { previewPostRequestBody.zoom = n.getNumberValue(); },
    }
}
