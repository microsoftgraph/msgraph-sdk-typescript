import { type PrinterShareViewpoint } from './printerShareViewpoint';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterShareViewpoint(printerShareViewpoint: PrinterShareViewpoint | undefined = {} as PrinterShareViewpoint) : Record<string, (node: ParseNode) => void> {
    return {
        "lastUsedDateTime": n => { printerShareViewpoint.lastUsedDateTime = n.getDateValue(); },
        "@odata.type": n => { printerShareViewpoint.odataType = n.getStringValue(); },
    }
}
