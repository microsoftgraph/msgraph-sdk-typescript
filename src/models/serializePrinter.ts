import type {PrintConnector} from './printConnector';
import type {Printer} from './printer';
import type {PrinterShare} from './printerShare';
import type {PrintTaskTrigger} from './printTaskTrigger';
import {serializePrintConnector} from './serializePrintConnector';
import {serializePrinterBase} from './serializePrinterBase';
import {serializePrinterShare} from './serializePrinterShare';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
