import {BatchRecordDecisionsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBatchRecordDecisionsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BatchRecordDecisionsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BatchRecordDecisionsRequestBodyImpl();
}
