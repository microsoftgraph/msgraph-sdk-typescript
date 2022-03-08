import {RecordOperation} from './recordOperation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordOperation();
}
