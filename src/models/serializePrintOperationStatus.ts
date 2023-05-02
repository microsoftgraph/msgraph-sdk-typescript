import {PrintOperationProcessingState} from './printOperationProcessingState';
import {PrintOperationStatus} from './printOperationStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintOperationStatus(writer: SerializationWriter, printOperationStatus: PrintOperationStatus | undefined = {} as PrintOperationStatus) : void {
        writer.writeStringValue("description", printOperationStatus.description);
        writer.writeStringValue("@odata.type", printOperationStatus.odataType);
        writer.writeEnumValue<PrintOperationProcessingState>("state", printOperationStatus.state);
        writer.writeAdditionalData(printOperationStatus.additionalData);
}
