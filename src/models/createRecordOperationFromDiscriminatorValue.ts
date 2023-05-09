import {deserializeIntoRecordOperation} from './deserializeIntoRecordOperation';
import {RecordOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecordOperation;
}
