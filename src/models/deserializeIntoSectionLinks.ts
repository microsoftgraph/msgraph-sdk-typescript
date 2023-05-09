import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './externalLink';
import {SectionLinks} from './sectionLinks';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSectionLinks(sectionLinks: SectionLinks | undefined = {} as SectionLinks) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { sectionLinks.odataType = n.getStringValue(); },
        "oneNoteClientUrl": n => { sectionLinks.oneNoteClientUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
        "oneNoteWebUrl": n => { sectionLinks.oneNoteWebUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
    }
}
