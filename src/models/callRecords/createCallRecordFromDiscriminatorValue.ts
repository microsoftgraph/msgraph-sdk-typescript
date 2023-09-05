import { deserializeIntoCallRecord } from './deserializeIntoCallRecord';
import { type CallRecord } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallRecord;
}
