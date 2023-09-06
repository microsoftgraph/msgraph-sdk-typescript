import { PrinterProcessingState } from './printerProcessingState';
import { PrinterProcessingStateDetail } from './printerProcessingStateDetail';
import { type PrinterStatus } from './printerStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrinterStatus(writer: SerializationWriter, printerStatus: PrinterStatus | undefined = {} as PrinterStatus) : void {
        writer.writeStringValue("description", printerStatus.description);
        if(printerStatus.details)
        writer.writeEnumValue<PrinterProcessingStateDetail>("details", ...printerStatus.details);
        writer.writeStringValue("@odata.type", printerStatus.odataType);
        writer.writeEnumValue<PrinterProcessingState>("state", printerStatus.state);
        writer.writeAdditionalData(printerStatus.additionalData);
}
