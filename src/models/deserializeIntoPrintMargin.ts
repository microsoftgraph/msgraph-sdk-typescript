import {PrintMargin} from './printMargin';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintMargin(printMargin: PrintMargin | undefined = {} as PrintMargin) : Record<string, (node: ParseNode) => void> {
    return {
        "bottom": n => { printMargin.bottom = n.getNumberValue(); },
        "left": n => { printMargin.left = n.getNumberValue(); },
        "@odata.type": n => { printMargin.odataType = n.getStringValue(); },
        "right": n => { printMargin.right = n.getNumberValue(); },
        "top": n => { printMargin.top = n.getNumberValue(); },
    }
}
