import { deserializeIntoApprovalStageCollectionResponse } from './deserializeIntoApprovalStageCollectionResponse';
import { type ApprovalStageCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApprovalStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApprovalStageCollectionResponse;
}
