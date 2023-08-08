import type {PrintConnector} from './printConnector';
import type {PrinterLocation} from './printerLocation';
import {serializeEntity} from './serializeEntity';
import {serializePrinterLocation} from './serializePrinterLocation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintConnector(writer: SerializationWriter, printConnector: PrintConnector | undefined = {} as PrintConnector) : void {
        serializeEntity(writer, printConnector)
        writer.writeStringValue("appVersion", printConnector.appVersion);
        writer.writeStringValue("displayName", printConnector.displayName);
        writer.writeStringValue("fullyQualifiedDomainName", printConnector.fullyQualifiedDomainName);
        writer.writeObjectValue<PrinterLocation>("location", printConnector.location, serializePrinterLocation);
        writer.writeStringValue("operatingSystem", printConnector.operatingSystem);
        writer.writeDateValue("registeredDateTime", printConnector.registeredDateTime);
}
