import {PrintOperation} from './printOperation';
import {PrintOperationStatus} from './printOperationStatus';
import {serializeEntity} from './serializeEntity';
import {serializePrintOperationStatus} from './serializePrintOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintOperation(writer: SerializationWriter, printOperation: PrintOperation | undefined = {} as PrintOperation) : void {
        serializeEntity(writer, printOperation)
        writer.writeDateValue("createdDateTime", printOperation.createdDateTime);
        writer.writeObjectValue<PrintOperationStatus>("status", printOperation.status, serializePrintOperationStatus);
}
