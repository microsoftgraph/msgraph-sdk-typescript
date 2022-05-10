import {CallRecordImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallRecordImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallRecordImpl();
}
