import { createExternalLinkFromDiscriminatorValue } from './createExternalLinkFromDiscriminatorValue';
import { type ExternalLink } from './externalLink';
import { type SectionLinks } from './sectionLinks';
import { serializeExternalLink } from './serializeExternalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSectionLinks(sectionLinks: SectionLinks | undefined = {} as SectionLinks) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { sectionLinks.odataType = n.getStringValue(); },
        "oneNoteClientUrl": n => { sectionLinks.oneNoteClientUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
        "oneNoteWebUrl": n => { sectionLinks.oneNoteWebUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
    }
}
