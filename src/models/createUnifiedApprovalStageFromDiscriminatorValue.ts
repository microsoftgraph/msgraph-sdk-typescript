import {UnifiedApprovalStageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedApprovalStageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedApprovalStageImpl();
}
