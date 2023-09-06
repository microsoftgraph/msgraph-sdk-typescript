import { deserializeIntoPrintUsage } from './deserializeIntoPrintUsage';
import { type PrintUsageByPrinter } from './printUsageByPrinter';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByPrinter(printUsageByPrinter: PrintUsageByPrinter | undefined = {} as PrintUsageByPrinter) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintUsage(printUsageByPrinter),
        "printerId": n => { printUsageByPrinter.printerId = n.getStringValue(); },
        "printerName": n => { printUsageByPrinter.printerName = n.getStringValue(); },
    }
}
