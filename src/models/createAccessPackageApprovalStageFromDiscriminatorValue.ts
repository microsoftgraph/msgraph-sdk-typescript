import { deserializeIntoAccessPackageApprovalStage } from './deserializeIntoAccessPackageApprovalStage';
import { type AccessPackageApprovalStage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageApprovalStage;
}
