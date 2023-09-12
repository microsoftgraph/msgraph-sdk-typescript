import { PrintOperationProcessingState } from './printOperationProcessingState';
import { type PrintOperationStatus } from './printOperationStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintOperationStatus(writer: SerializationWriter, printOperationStatus: PrintOperationStatus | undefined = {} as PrintOperationStatus) : void {
        writer.writeStringValue("description", printOperationStatus.description);
        writer.writeStringValue("@odata.type", printOperationStatus.odataType);
        writer.writeEnumValue<PrintOperationProcessingState>("state", printOperationStatus.state);
        writer.writeAdditionalData(printOperationStatus.additionalData);
}
