import type {ArchivedPrintJob} from './archivedPrintJob';
import {PrintJobProcessingState} from './printJobProcessingState';
import {serializeUserIdentity} from './serializeUserIdentity';
import type {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchivedPrintJob(writer: SerializationWriter, archivedPrintJob: ArchivedPrintJob | undefined = {} as ArchivedPrintJob) : void {
        writer.writeBooleanValue("acquiredByPrinter", archivedPrintJob.acquiredByPrinter);
        writer.writeDateValue("acquiredDateTime", archivedPrintJob.acquiredDateTime);
        writer.writeDateValue("completionDateTime", archivedPrintJob.completionDateTime);
        writer.writeNumberValue("copiesPrinted", archivedPrintJob.copiesPrinted);
        writer.writeObjectValue<UserIdentity>("createdBy", archivedPrintJob.createdBy, serializeUserIdentity);
        writer.writeDateValue("createdDateTime", archivedPrintJob.createdDateTime);
        writer.writeStringValue("id", archivedPrintJob.id);
        writer.writeStringValue("@odata.type", archivedPrintJob.odataType);
        writer.writeStringValue("printerId", archivedPrintJob.printerId);
        writer.writeStringValue("printerName", archivedPrintJob.printerName);
        writer.writeEnumValue<PrintJobProcessingState>("processingState", archivedPrintJob.processingState);
        writer.writeAdditionalData(archivedPrintJob.additionalData);
}
