import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './externalLink';
import {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePagePreviewLinks(onenotePagePreviewLinks: OnenotePagePreviewLinks | undefined = {} as OnenotePagePreviewLinks) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { onenotePagePreviewLinks.odataType = n.getStringValue(); },
        "previewImageUrl": n => { onenotePagePreviewLinks.previewImageUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
    }
}
