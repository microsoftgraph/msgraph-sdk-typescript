import {PrinterShareViewpoint} from './printerShareViewpoint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterShareViewpoint(writer: SerializationWriter, printerShareViewpoint: PrinterShareViewpoint | undefined = {} as PrinterShareViewpoint) : void {
        writer.writeDateValue("lastUsedDateTime", printerShareViewpoint.lastUsedDateTime);
        writer.writeStringValue("@odata.type", printerShareViewpoint.odataType);
        writer.writeAdditionalData(printerShareViewpoint.additionalData);
}
