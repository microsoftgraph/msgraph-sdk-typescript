import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {PrintUsageByPrinterCollectionResponse} from './printUsageByPrinterCollectionResponse';
import {serializePrintUsageByPrinter} from './serializePrintUsageByPrinter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByPrinterCollectionResponse(printUsageByPrinterCollectionResponse: PrintUsageByPrinterCollectionResponse | undefined = {} as PrintUsageByPrinterCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printUsageByPrinterCollectionResponse),
        "value": n => { printUsageByPrinterCollectionResponse.value = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
    }
}
