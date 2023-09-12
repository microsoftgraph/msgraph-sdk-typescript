import { type OnenotePagePreview } from './onenotePagePreview';
import { type OnenotePagePreviewLinks } from './onenotePagePreviewLinks';
import { serializeOnenotePagePreviewLinks } from './serializeOnenotePagePreviewLinks';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOnenotePagePreview(writer: SerializationWriter, onenotePagePreview: OnenotePagePreview | undefined = {} as OnenotePagePreview) : void {
        writer.writeObjectValue<OnenotePagePreviewLinks>("links", onenotePagePreview.links, serializeOnenotePagePreviewLinks);
        writer.writeStringValue("@odata.type", onenotePagePreview.odataType);
        writer.writeStringValue("previewText", onenotePagePreview.previewText);
        writer.writeAdditionalData(onenotePagePreview.additionalData);
}
