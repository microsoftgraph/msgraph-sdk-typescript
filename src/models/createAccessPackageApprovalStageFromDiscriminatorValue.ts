import {deserializeIntoAccessPackageApprovalStage} from './deserializeIntoAccessPackageApprovalStage';
import {AccessPackageApprovalStage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageApprovalStage;
}
