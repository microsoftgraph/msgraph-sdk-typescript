import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PrintUsageByPrinter} from './printUsageByPrinter';
import type {PrintUsageByPrinterCollectionResponse} from './printUsageByPrinterCollectionResponse';
import {serializePrintUsageByPrinter} from './serializePrintUsageByPrinter';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByPrinterCollectionResponse(printUsageByPrinterCollectionResponse: PrintUsageByPrinterCollectionResponse | undefined = {} as PrintUsageByPrinterCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printUsageByPrinterCollectionResponse),
        "value": n => { printUsageByPrinterCollectionResponse.value = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
    }
}
