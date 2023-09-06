import { deserializeIntoApprovalStage } from './deserializeIntoApprovalStage';
import { type ApprovalStage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApprovalStage;
}
