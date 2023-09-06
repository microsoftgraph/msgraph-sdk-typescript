import { type PreviewPostRequestBody } from './previewPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePreviewPostRequestBody(writer: SerializationWriter, previewPostRequestBody: PreviewPostRequestBody | undefined = {} as PreviewPostRequestBody) : void {
        writer.writeStringValue("page", previewPostRequestBody.page);
        writer.writeNumberValue("zoom", previewPostRequestBody.zoom);
        writer.writeAdditionalData(previewPostRequestBody.additionalData);
}
