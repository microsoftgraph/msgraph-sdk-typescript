import {CallRecordCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallRecordCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallRecordCollectionResponseImpl();
}
