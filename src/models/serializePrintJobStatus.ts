import { PrintJobProcessingState } from './printJobProcessingState';
import { PrintJobStateDetail } from './printJobStateDetail';
import { type PrintJobStatus } from './printJobStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintJobStatus(writer: SerializationWriter, printJobStatus: PrintJobStatus | undefined = {} as PrintJobStatus) : void {
        writer.writeStringValue("description", printJobStatus.description);
        if(printJobStatus.details)
        writer.writeEnumValue<PrintJobStateDetail>("details", ...printJobStatus.details);
        writer.writeBooleanValue("isAcquiredByPrinter", printJobStatus.isAcquiredByPrinter);
        writer.writeStringValue("@odata.type", printJobStatus.odataType);
        writer.writeEnumValue<PrintJobProcessingState>("state", printJobStatus.state);
        writer.writeAdditionalData(printJobStatus.additionalData);
}
