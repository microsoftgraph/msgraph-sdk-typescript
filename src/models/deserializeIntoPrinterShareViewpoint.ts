import {PrinterShareViewpoint} from './printerShareViewpoint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterShareViewpoint(printerShareViewpoint: PrinterShareViewpoint | undefined = {} as PrinterShareViewpoint) : Record<string, (node: ParseNode) => void> {
    return {
        "lastUsedDateTime": n => { printerShareViewpoint.lastUsedDateTime = n.getDateValue(); },
        "@odata.type": n => { printerShareViewpoint.odataType = n.getStringValue(); },
    }
}
