import {deserializeIntoPrintUsage} from './deserializeIntoPrintUsage';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByPrinter(printUsageByPrinter: PrintUsageByPrinter | undefined = {} as PrintUsageByPrinter) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintUsage(printUsageByPrinter),
        "printerId": n => { printUsageByPrinter.printerId = n.getStringValue(); },
    }
}
