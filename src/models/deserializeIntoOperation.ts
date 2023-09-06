import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Operation } from './operation';
import { OperationStatus } from './operationStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOperation(operation: Operation | undefined = {} as Operation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(operation),
        "createdDateTime": n => { operation.createdDateTime = n.getDateValue(); },
        "lastActionDateTime": n => { operation.lastActionDateTime = n.getDateValue(); },
        "status": n => { operation.status = n.getEnumValue<OperationStatus>(OperationStatus); },
    }
}
