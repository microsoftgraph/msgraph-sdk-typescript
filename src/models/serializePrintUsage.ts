import {PrintUsage} from './printUsage';
import {serializeEntity} from './serializeEntity';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsage(writer: SerializationWriter, printUsage: PrintUsage | undefined = {} as PrintUsage) : void {
        serializeEntity(writer, printUsage)
        writer.writeNumberValue("blackAndWhitePageCount", printUsage.blackAndWhitePageCount);
        writer.writeNumberValue("colorPageCount", printUsage.colorPageCount);
        writer.writeNumberValue("completedBlackAndWhiteJobCount", printUsage.completedBlackAndWhiteJobCount);
        writer.writeNumberValue("completedColorJobCount", printUsage.completedColorJobCount);
        writer.writeNumberValue("completedJobCount", printUsage.completedJobCount);
        writer.writeNumberValue("doubleSidedSheetCount", printUsage.doubleSidedSheetCount);
        writer.writeNumberValue("incompleteJobCount", printUsage.incompleteJobCount);
        writer.writeNumberValue("mediaSheetCount", printUsage.mediaSheetCount);
        writer.writeNumberValue("pageCount", printUsage.pageCount);
        writer.writeNumberValue("singleSidedSheetCount", printUsage.singleSidedSheetCount);
        writer.writeDateOnlyValue("usageDate", printUsage.usageDate);
}
