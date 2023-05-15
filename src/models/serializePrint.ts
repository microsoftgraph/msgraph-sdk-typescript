import {Print} from './print';
import {PrintConnector} from './printConnector';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {PrintOperation} from './printOperation';
import {PrintService} from './printService';
import {PrintSettings} from './printSettings';
import {PrintTaskDefinition} from './printTaskDefinition';
import {serializePrintConnector} from './serializePrintConnector';
import {serializePrinter} from './serializePrinter';
import {serializePrinterShare} from './serializePrinterShare';
import {serializePrintOperation} from './serializePrintOperation';
import {serializePrintService} from './serializePrintService';
import {serializePrintSettings} from './serializePrintSettings';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrint(writer: SerializationWriter, print: Print | undefined = {} as Print) : void {
        writer.writeCollectionOfObjectValues<PrintConnector>("connectors", print.connectors, serializePrintConnector);
        writer.writeStringValue("@odata.type", print.odataType);
        writer.writeCollectionOfObjectValues<PrintOperation>("operations", print.operations, serializePrintOperation);
        writer.writeCollectionOfObjectValues<Printer>("printers", print.printers, serializePrinter);
        writer.writeCollectionOfObjectValues<PrintService>("services", print.services, serializePrintService);
        writer.writeObjectValue<PrintSettings>("settings", print.settings, serializePrintSettings);
        writer.writeCollectionOfObjectValues<PrinterShare>("shares", print.shares, serializePrinterShare);
        writer.writeCollectionOfObjectValues<PrintTaskDefinition>("taskDefinitions", print.taskDefinitions, serializePrintTaskDefinition);
        writer.writeAdditionalData(print.additionalData);
}
