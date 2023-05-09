import {createPrinterLocationFromDiscriminatorValue} from './createPrinterLocationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintConnector} from './printConnector';
import {PrinterLocation} from './printerLocation';
import {serializePrinterLocation} from './serializePrinterLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintConnector(printConnector: PrintConnector | undefined = {} as PrintConnector) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printConnector),
        "appVersion": n => { printConnector.appVersion = n.getStringValue(); },
        "displayName": n => { printConnector.displayName = n.getStringValue(); },
        "fullyQualifiedDomainName": n => { printConnector.fullyQualifiedDomainName = n.getStringValue(); },
        "location": n => { printConnector.location = n.getObjectValue<PrinterLocation>(createPrinterLocationFromDiscriminatorValue); },
        "operatingSystem": n => { printConnector.operatingSystem = n.getStringValue(); },
        "registeredDateTime": n => { printConnector.registeredDateTime = n.getDateValue(); },
    }
}
