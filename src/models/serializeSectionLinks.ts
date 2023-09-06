import { type ExternalLink } from './externalLink';
import { type SectionLinks } from './sectionLinks';
import { serializeExternalLink } from './serializeExternalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSectionLinks(writer: SerializationWriter, sectionLinks: SectionLinks | undefined = {} as SectionLinks) : void {
        writer.writeStringValue("@odata.type", sectionLinks.odataType);
        writer.writeObjectValue<ExternalLink>("oneNoteClientUrl", sectionLinks.oneNoteClientUrl, serializeExternalLink);
        writer.writeObjectValue<ExternalLink>("oneNoteWebUrl", sectionLinks.oneNoteWebUrl, serializeExternalLink);
        writer.writeAdditionalData(sectionLinks.additionalData);
}
