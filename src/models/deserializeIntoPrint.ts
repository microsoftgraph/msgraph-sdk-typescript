import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {createPrintOperationFromDiscriminatorValue} from './createPrintOperationFromDiscriminatorValue';
import {createPrintServiceFromDiscriminatorValue} from './createPrintServiceFromDiscriminatorValue';
import {createPrintSettingsFromDiscriminatorValue} from './createPrintSettingsFromDiscriminatorValue';
import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
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

export function deserializeIntoPrint(print: Print | undefined = {} as Print) : Record<string, (node: ParseNode) => void> {
    return {
        "connectors": n => { print.connectors = n.getCollectionOfObjectValues<PrintConnector>(createPrintConnectorFromDiscriminatorValue); },
        "@odata.type": n => { print.odataType = n.getStringValue(); },
        "operations": n => { print.operations = n.getCollectionOfObjectValues<PrintOperation>(createPrintOperationFromDiscriminatorValue); },
        "printers": n => { print.printers = n.getCollectionOfObjectValues<Printer>(createPrinterFromDiscriminatorValue); },
        "services": n => { print.services = n.getCollectionOfObjectValues<PrintService>(createPrintServiceFromDiscriminatorValue); },
        "settings": n => { print.settings = n.getObjectValue<PrintSettings>(createPrintSettingsFromDiscriminatorValue); },
        "shares": n => { print.shares = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
        "taskDefinitions": n => { print.taskDefinitions = n.getCollectionOfObjectValues<PrintTaskDefinition>(createPrintTaskDefinitionFromDiscriminatorValue); },
    }
}
