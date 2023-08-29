import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {deserializeIntoPrinterBase} from './deserializeIntoPrinterBase';
import type {PrintConnector} from './printConnector';
import type {PrintTaskTrigger} from './printTaskTrigger';
import type {Printer} from './printer';
import type {PrinterShare} from './printerShare';
import {serializePrintConnector} from './serializePrintConnector';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {serializePrinterShare} from './serializePrinterShare';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinter(printer: Printer | undefined = {} as Printer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrinterBase(printer),
        "connectors": n => { printer.connectors = n.getCollectionOfObjectValues<PrintConnector>(createPrintConnectorFromDiscriminatorValue); },
        "hasPhysicalDevice": n => { printer.hasPhysicalDevice = n.getBooleanValue(); },
        "isShared": n => { printer.isShared = n.getBooleanValue(); },
        "lastSeenDateTime": n => { printer.lastSeenDateTime = n.getDateValue(); },
        "registeredDateTime": n => { printer.registeredDateTime = n.getDateValue(); },
        "shares": n => { printer.shares = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
        "taskTriggers": n => { printer.taskTriggers = n.getCollectionOfObjectValues<PrintTaskTrigger>(createPrintTaskTriggerFromDiscriminatorValue); },
    }
}
