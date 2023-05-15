import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {PrinterStatus} from './printerStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterStatus(writer: SerializationWriter, printerStatus: PrinterStatus | undefined = {} as PrinterStatus) : void {
        writer.writeStringValue("description", printerStatus.description);
        if(printerStatus.details)
        writer.writeEnumValue<PrinterProcessingStateDetail>("details", ...printerStatus.details);
        writer.writeStringValue("@odata.type", printerStatus.odataType);
        writer.writeEnumValue<PrinterProcessingState>("state", printerStatus.state);
        writer.writeAdditionalData(printerStatus.additionalData);
}
