import { createOnenotePagePreviewLinksFromDiscriminatorValue } from './createOnenotePagePreviewLinksFromDiscriminatorValue';
import { type OnenotePagePreview } from './onenotePagePreview';
import { type OnenotePagePreviewLinks } from './onenotePagePreviewLinks';
import { serializeOnenotePagePreviewLinks } from './serializeOnenotePagePreviewLinks';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePagePreview(onenotePagePreview: OnenotePagePreview | undefined = {} as OnenotePagePreview) : Record<string, (node: ParseNode) => void> {
    return {
        "links": n => { onenotePagePreview.links = n.getObjectValue<OnenotePagePreviewLinks>(createOnenotePagePreviewLinksFromDiscriminatorValue); },
        "@odata.type": n => { onenotePagePreview.odataType = n.getStringValue(); },
        "previewText": n => { onenotePagePreview.previewText = n.getStringValue(); },
    }
}
