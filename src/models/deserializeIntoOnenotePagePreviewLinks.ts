import { createExternalLinkFromDiscriminatorValue } from './createExternalLinkFromDiscriminatorValue';
import { type ExternalLink } from './externalLink';
import { type OnenotePagePreviewLinks } from './onenotePagePreviewLinks';
import { serializeExternalLink } from './serializeExternalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePagePreviewLinks(onenotePagePreviewLinks: OnenotePagePreviewLinks | undefined = {} as OnenotePagePreviewLinks) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { onenotePagePreviewLinks.odataType = n.getStringValue(); },
        "previewImageUrl": n => { onenotePagePreviewLinks.previewImageUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
    }
}
