import type {PrintConnector} from './printConnector';
import type {PrintTaskTrigger} from './printTaskTrigger';
import type {Printer} from './printer';
import type {PrinterShare} from './printerShare';
import {serializePrintConnector} from './serializePrintConnector';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {serializePrinterBase} from './serializePrinterBase';
import {serializePrinterShare} from './serializePrinterShare';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinter(writer: SerializationWriter, printer: Printer | undefined = {} as Printer) : void {
        serializePrinterBase(writer, printer)
        writer.writeCollectionOfObjectValues<PrintConnector>("connectors", printer.connectors, serializePrintConnector);
        writer.writeBooleanValue("hasPhysicalDevice", printer.hasPhysicalDevice);
        writer.writeBooleanValue("isShared", printer.isShared);
        writer.writeDateValue("lastSeenDateTime", printer.lastSeenDateTime);
        writer.writeDateValue("registeredDateTime", printer.registeredDateTime);
        writer.writeCollectionOfObjectValues<PrinterShare>("shares", printer.shares, serializePrinterShare);
        writer.writeCollectionOfObjectValues<PrintTaskTrigger>("taskTriggers", printer.taskTriggers, serializePrintTaskTrigger);
}
