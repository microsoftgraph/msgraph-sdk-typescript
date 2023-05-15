import {Operation} from './operation';
import {OperationStatus} from './operationStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOperation(writer: SerializationWriter, operation: Operation | undefined = {} as Operation) : void {
        serializeEntity(writer, operation)
        writer.writeDateValue("createdDateTime", operation.createdDateTime);
        writer.writeDateValue("lastActionDateTime", operation.lastActionDateTime);
        writer.writeEnumValue<OperationStatus>("status", operation.status);
}
