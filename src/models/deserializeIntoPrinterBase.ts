import {createPrintJobFromDiscriminatorValue} from './createPrintJobFromDiscriminatorValue';
import {createPrinterCapabilitiesFromDiscriminatorValue} from './createPrinterCapabilitiesFromDiscriminatorValue';
import {createPrinterDefaultsFromDiscriminatorValue} from './createPrinterDefaultsFromDiscriminatorValue';
import {createPrinterLocationFromDiscriminatorValue} from './createPrinterLocationFromDiscriminatorValue';
import {createPrinterStatusFromDiscriminatorValue} from './createPrinterStatusFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {PrintJob} from './printJob';
import type {PrinterBase} from './printerBase';
import type {PrinterCapabilities} from './printerCapabilities';
import type {PrinterDefaults} from './printerDefaults';
import type {PrinterLocation} from './printerLocation';
import type {PrinterStatus} from './printerStatus';
import {serializePrintJob} from './serializePrintJob';
import {serializePrinterCapabilities} from './serializePrinterCapabilities';
import {serializePrinterDefaults} from './serializePrinterDefaults';
import {serializePrinterLocation} from './serializePrinterLocation';
import {serializePrinterStatus} from './serializePrinterStatus';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterBase(printerBase: PrinterBase | undefined = {} as PrinterBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printerBase),
        "capabilities": n => { printerBase.capabilities = n.getObjectValue<PrinterCapabilities>(createPrinterCapabilitiesFromDiscriminatorValue); },
        "defaults": n => { printerBase.defaults = n.getObjectValue<PrinterDefaults>(createPrinterDefaultsFromDiscriminatorValue); },
        "displayName": n => { printerBase.displayName = n.getStringValue(); },
        "isAcceptingJobs": n => { printerBase.isAcceptingJobs = n.getBooleanValue(); },
        "jobs": n => { printerBase.jobs = n.getCollectionOfObjectValues<PrintJob>(createPrintJobFromDiscriminatorValue); },
        "location": n => { printerBase.location = n.getObjectValue<PrinterLocation>(createPrinterLocationFromDiscriminatorValue); },
        "manufacturer": n => { printerBase.manufacturer = n.getStringValue(); },
        "model": n => { printerBase.model = n.getStringValue(); },
        "status": n => { printerBase.status = n.getObjectValue<PrinterStatus>(createPrinterStatusFromDiscriminatorValue); },
    }
}
