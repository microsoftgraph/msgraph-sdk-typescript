import type {ExternalLink} from './externalLink';
import type {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePagePreviewLinks(writer: SerializationWriter, onenotePagePreviewLinks: OnenotePagePreviewLinks | undefined = {} as OnenotePagePreviewLinks) : void {
        writer.writeStringValue("@odata.type", onenotePagePreviewLinks.odataType);
        writer.writeObjectValue<ExternalLink>("previewImageUrl", onenotePagePreviewLinks.previewImageUrl, serializeExternalLink);
        writer.writeAdditionalData(onenotePagePreviewLinks.additionalData);
}
