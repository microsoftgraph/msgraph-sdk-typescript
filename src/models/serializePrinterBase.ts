import type {PrintJob} from './printJob';
import type {PrinterBase} from './printerBase';
import type {PrinterCapabilities} from './printerCapabilities';
import type {PrinterDefaults} from './printerDefaults';
import type {PrinterLocation} from './printerLocation';
import type {PrinterStatus} from './printerStatus';
import {serializeEntity} from './serializeEntity';
import {serializePrintJob} from './serializePrintJob';
import {serializePrinterCapabilities} from './serializePrinterCapabilities';
import {serializePrinterDefaults} from './serializePrinterDefaults';
import {serializePrinterLocation} from './serializePrinterLocation';
import {serializePrinterStatus} from './serializePrinterStatus';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
