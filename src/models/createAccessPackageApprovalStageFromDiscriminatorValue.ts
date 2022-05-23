import {AccessPackageApprovalStageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageApprovalStageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageApprovalStageImpl();
}
