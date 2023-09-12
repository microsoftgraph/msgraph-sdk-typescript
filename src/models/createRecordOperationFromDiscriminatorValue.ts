import { deserializeIntoRecordOperation } from './deserializeIntoRecordOperation';
import { type RecordOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRecordOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecordOperation;
}
