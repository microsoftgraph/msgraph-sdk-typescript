import {deserializeIntoUnifiedApprovalStage} from './deserializeIntoUnifiedApprovalStage';
import {UnifiedApprovalStage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedApprovalStage;
}
