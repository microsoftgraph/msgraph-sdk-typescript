import {BatchRecordDecisionsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBatchRecordDecisionsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BatchRecordDecisionsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BatchRecordDecisionsPostRequestBodyImpl();
}
