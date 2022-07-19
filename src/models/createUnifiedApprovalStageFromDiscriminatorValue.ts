import {UnifiedApprovalStage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedApprovalStage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedApprovalStage();
}
