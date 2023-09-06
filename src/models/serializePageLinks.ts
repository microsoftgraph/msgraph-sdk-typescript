import { type ExternalLink } from './externalLink';
import { type PageLinks } from './pageLinks';
import { serializeExternalLink } from './serializeExternalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePageLinks(writer: SerializationWriter, pageLinks: PageLinks | undefined = {} as PageLinks) : void {
        writer.writeStringValue("@odata.type", pageLinks.odataType);
        writer.writeObjectValue<ExternalLink>("oneNoteClientUrl", pageLinks.oneNoteClientUrl, serializeExternalLink);
        writer.writeObjectValue<ExternalLink>("oneNoteWebUrl", pageLinks.oneNoteWebUrl, serializeExternalLink);
        writer.writeAdditionalData(pageLinks.additionalData);
}
