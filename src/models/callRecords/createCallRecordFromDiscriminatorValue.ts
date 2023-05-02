import {deserializeIntoCallRecord} from './deserializeIntoCallRecord';
import {CallRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallRecord;
}
