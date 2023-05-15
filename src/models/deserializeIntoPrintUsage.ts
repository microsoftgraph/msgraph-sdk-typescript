import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintUsage} from './printUsage';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsage(printUsage: PrintUsage | undefined = {} as PrintUsage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printUsage),
        "completedBlackAndWhiteJobCount": n => { printUsage.completedBlackAndWhiteJobCount = n.getNumberValue(); },
        "completedColorJobCount": n => { printUsage.completedColorJobCount = n.getNumberValue(); },
        "incompleteJobCount": n => { printUsage.incompleteJobCount = n.getNumberValue(); },
        "usageDate": n => { printUsage.usageDate = n.getDateOnlyValue(); },
    }
}
