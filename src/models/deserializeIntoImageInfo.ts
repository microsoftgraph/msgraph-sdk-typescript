import {ImageInfo} from './imageInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImageInfo(imageInfo: ImageInfo | undefined = {} as ImageInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "addImageQuery": n => { imageInfo.addImageQuery = n.getBooleanValue(); },
        "alternateText": n => { imageInfo.alternateText = n.getStringValue(); },
        "alternativeText": n => { imageInfo.alternativeText = n.getStringValue(); },
        "iconUrl": n => { imageInfo.iconUrl = n.getStringValue(); },
        "@odata.type": n => { imageInfo.odataType = n.getStringValue(); },
    }
}
