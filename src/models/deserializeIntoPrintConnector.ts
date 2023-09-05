import { createPrinterLocationFromDiscriminatorValue } from './createPrinterLocationFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PrintConnector } from './printConnector';
import { type PrinterLocation } from './printerLocation';
import { serializePrinterLocation } from './serializePrinterLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
