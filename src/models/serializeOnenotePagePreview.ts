import {OnenotePagePreview} from './onenotePagePreview';
import {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';
import {serializeOnenotePagePreviewLinks} from './serializeOnenotePagePreviewLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePagePreview(writer: SerializationWriter, onenotePagePreview: OnenotePagePreview | undefined = {} as OnenotePagePreview) : void {
        writer.writeObjectValue<OnenotePagePreviewLinks>("links", onenotePagePreview.links, serializeOnenotePagePreviewLinks);
        writer.writeStringValue("@odata.type", onenotePagePreview.odataType);
        writer.writeStringValue("previewText", onenotePagePreview.previewText);
        writer.writeAdditionalData(onenotePagePreview.additionalData);
}
