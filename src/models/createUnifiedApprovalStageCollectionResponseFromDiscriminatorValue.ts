import {UnifiedApprovalStageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedApprovalStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedApprovalStageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedApprovalStageCollectionResponse();
}
