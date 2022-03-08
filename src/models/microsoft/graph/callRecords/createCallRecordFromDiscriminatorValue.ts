import {CallRecord} from './callRecord';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallRecord();
}
