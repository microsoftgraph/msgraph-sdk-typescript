import {Thumbnail} from './thumbnail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnail(thumbnail: Thumbnail | undefined = {} as Thumbnail) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { thumbnail.content = n.getStringValue(); },
        "height": n => { thumbnail.height = n.getNumberValue(); },
        "@odata.type": n => { thumbnail.odataType = n.getStringValue(); },
        "sourceItemId": n => { thumbnail.sourceItemId = n.getStringValue(); },
        "url": n => { thumbnail.url = n.getStringValue(); },
        "width": n => { thumbnail.width = n.getNumberValue(); },
    }
}
