import type {PrintOperation} from './printOperation';
import type {PrintOperationStatus} from './printOperationStatus';
import {serializeEntity} from './serializeEntity';
import {serializePrintOperationStatus} from './serializePrintOperationStatus';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintOperation(writer: SerializationWriter, printOperation: PrintOperation | undefined = {} as PrintOperation) : void {
        serializeEntity(writer, printOperation)
        writer.writeDateValue("createdDateTime", printOperation.createdDateTime);
        writer.writeObjectValue<PrintOperationStatus>("status", printOperation.status, serializePrintOperationStatus);
}
