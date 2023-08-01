import type {PrintUsageByPrinter} from './printUsageByPrinter';
import type {PrintUsageByPrinterCollectionResponse} from './printUsageByPrinterCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintUsageByPrinter} from './serializePrintUsageByPrinter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsageByPrinterCollectionResponse(writer: SerializationWriter, printUsageByPrinterCollectionResponse: PrintUsageByPrinterCollectionResponse | undefined = {} as PrintUsageByPrinterCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printUsageByPrinterCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("value", printUsageByPrinterCollectionResponse.value, serializePrintUsageByPrinter);
}
