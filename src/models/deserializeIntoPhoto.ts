import {Photo} from './photo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhoto(photo: Photo | undefined = {} as Photo) : Record<string, (node: ParseNode) => void> {
    return {
        "cameraMake": n => { photo.cameraMake = n.getStringValue(); },
        "cameraModel": n => { photo.cameraModel = n.getStringValue(); },
        "exposureDenominator": n => { photo.exposureDenominator = n.getNumberValue(); },
        "exposureNumerator": n => { photo.exposureNumerator = n.getNumberValue(); },
        "fNumber": n => { photo.fNumber = n.getNumberValue(); },
        "focalLength": n => { photo.focalLength = n.getNumberValue(); },
        "iso": n => { photo.iso = n.getNumberValue(); },
        "@odata.type": n => { photo.odataType = n.getStringValue(); },
        "orientation": n => { photo.orientation = n.getNumberValue(); },
        "takenDateTime": n => { photo.takenDateTime = n.getDateValue(); },
    }
}
