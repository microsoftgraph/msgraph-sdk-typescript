import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {deserializeIntoPrinterBase} from './deserializeIntoPrinterBase';
import {PrintConnector} from './printConnector';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {PrintTaskTrigger} from './printTaskTrigger';
import {serializePrintConnector} from './serializePrintConnector';
import {serializePrinterShare} from './serializePrinterShare';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
