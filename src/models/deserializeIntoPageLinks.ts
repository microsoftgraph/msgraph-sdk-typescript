import { createExternalLinkFromDiscriminatorValue } from './createExternalLinkFromDiscriminatorValue';
import { type ExternalLink } from './externalLink';
import { type PageLinks } from './pageLinks';
import { serializeExternalLink } from './serializeExternalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPageLinks(pageLinks: PageLinks | undefined = {} as PageLinks) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { pageLinks.odataType = n.getStringValue(); },
        "oneNoteClientUrl": n => { pageLinks.oneNoteClientUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
        "oneNoteWebUrl": n => { pageLinks.oneNoteWebUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
    }
}
