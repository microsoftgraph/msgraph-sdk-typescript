import {PrinterBase} from './printerBase';
import {PrinterCapabilities} from './printerCapabilities';
import {PrinterDefaults} from './printerDefaults';
import {PrinterLocation} from './printerLocation';
import {PrinterStatus} from './printerStatus';
import {PrintJob} from './printJob';
import {serializeEntity} from './serializeEntity';
import {serializePrinterCapabilities} from './serializePrinterCapabilities';
import {serializePrinterDefaults} from './serializePrinterDefaults';
import {serializePrinterLocation} from './serializePrinterLocation';
import {serializePrinterStatus} from './serializePrinterStatus';
import {serializePrintJob} from './serializePrintJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterBase(writer: SerializationWriter, printerBase: PrinterBase | undefined = {} as PrinterBase) : void {
        serializeEntity(writer, printerBase)
        writer.writeObjectValue<PrinterCapabilities>("capabilities", printerBase.capabilities, serializePrinterCapabilities);
        writer.writeObjectValue<PrinterDefaults>("defaults", printerBase.defaults, serializePrinterDefaults);
        writer.writeStringValue("displayName", printerBase.displayName);
        writer.writeBooleanValue("isAcceptingJobs", printerBase.isAcceptingJobs);
        writer.writeCollectionOfObjectValues<PrintJob>("jobs", printerBase.jobs, serializePrintJob);
        writer.writeObjectValue<PrinterLocation>("location", printerBase.location, serializePrinterLocation);
        writer.writeStringValue("manufacturer", printerBase.manufacturer);
        writer.writeStringValue("model", printerBase.model);
        writer.writeObjectValue<PrinterStatus>("status", printerBase.status, serializePrinterStatus);
}
