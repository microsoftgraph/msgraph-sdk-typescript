import {createOnenotePagePreviewLinksFromDiscriminatorValue} from './createOnenotePagePreviewLinksFromDiscriminatorValue';
import {OnenotePagePreview} from './onenotePagePreview';
import {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';
import {serializeOnenotePagePreviewLinks} from './serializeOnenotePagePreviewLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePagePreview(onenotePagePreview: OnenotePagePreview | undefined = {} as OnenotePagePreview) : Record<string, (node: ParseNode) => void> {
    return {
        "links": n => { onenotePagePreview.links = n.getObjectValue<OnenotePagePreviewLinks>(createOnenotePagePreviewLinksFromDiscriminatorValue); },
        "@odata.type": n => { onenotePagePreview.odataType = n.getStringValue(); },
        "previewText": n => { onenotePagePreview.previewText = n.getStringValue(); },
    }
}
