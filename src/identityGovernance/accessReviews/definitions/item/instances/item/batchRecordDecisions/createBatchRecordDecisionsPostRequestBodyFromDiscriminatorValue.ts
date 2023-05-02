import {deserializeIntoBatchRecordDecisionsPostRequestBody} from './deserializeIntoBatchRecordDecisionsPostRequestBody';
import {BatchRecordDecisionsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBatchRecordDecisionsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBatchRecordDecisionsPostRequestBody;
}
