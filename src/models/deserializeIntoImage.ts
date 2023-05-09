import {Image} from './image';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImage(image: Image | undefined = {} as Image) : Record<string, (node: ParseNode) => void> {
    return {
        "height": n => { image.height = n.getNumberValue(); },
        "@odata.type": n => { image.odataType = n.getStringValue(); },
        "width": n => { image.width = n.getNumberValue(); },
    }
}
