import { type PrinterShareViewpoint } from './printerShareViewpoint';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrinterShareViewpoint(writer: SerializationWriter, printerShareViewpoint: PrinterShareViewpoint | undefined = {} as PrinterShareViewpoint) : void {
        writer.writeDateValue("lastUsedDateTime", printerShareViewpoint.lastUsedDateTime);
        writer.writeStringValue("@odata.type", printerShareViewpoint.odataType);
        writer.writeAdditionalData(printerShareViewpoint.additionalData);
}
