import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintUsage} from './printUsage';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsage(printUsage: PrintUsage | undefined = {} as PrintUsage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printUsage),
        "blackAndWhitePageCount": n => { printUsage.blackAndWhitePageCount = n.getNumberValue(); },
        "colorPageCount": n => { printUsage.colorPageCount = n.getNumberValue(); },
        "completedBlackAndWhiteJobCount": n => { printUsage.completedBlackAndWhiteJobCount = n.getNumberValue(); },
        "completedColorJobCount": n => { printUsage.completedColorJobCount = n.getNumberValue(); },
        "completedJobCount": n => { printUsage.completedJobCount = n.getNumberValue(); },
        "doubleSidedSheetCount": n => { printUsage.doubleSidedSheetCount = n.getNumberValue(); },
        "incompleteJobCount": n => { printUsage.incompleteJobCount = n.getNumberValue(); },
        "mediaSheetCount": n => { printUsage.mediaSheetCount = n.getNumberValue(); },
        "pageCount": n => { printUsage.pageCount = n.getNumberValue(); },
        "singleSidedSheetCount": n => { printUsage.singleSidedSheetCount = n.getNumberValue(); },
        "usageDate": n => { printUsage.usageDate = n.getDateOnlyValue(); },
    }
}
