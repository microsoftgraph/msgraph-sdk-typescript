import {RgbColor} from './rgbColor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRgbColor(rgbColor: RgbColor | undefined = {} as RgbColor) : Record<string, (node: ParseNode) => void> {
    return {
        "b": n => { rgbColor.b = n.getNumberValue(); },
        "g": n => { rgbColor.g = n.getNumberValue(); },
        "@odata.type": n => { rgbColor.odataType = n.getStringValue(); },
        "r": n => { rgbColor.r = n.getNumberValue(); },
    }
}
